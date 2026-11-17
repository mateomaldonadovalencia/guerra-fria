// =====================================================
// PARTE 1: DATOS DE LA RED DE RELACIONES
// =====================================================
// "nodos" es una lista (array). Cada nodo es un objeto con:
//   id: nombre único del nodo (no se repite)
//   nombre: texto que se ve en el botón
//   tipo: causa, evento, actor o consecuencia (decide en qué columna va y de qué color es)
//   texto: explicación que sale en el recuadro
//   conexiones: lista de nodos en los que este influye, con el porqué de esa relación

let nodos = [
  // ---------- CAUSAS ----------
  {
    id: "causa1",
    nombre: "Contención (Doctrina Truman)",
    tipo: "causa",
    texto: "Desde 1947, Estados Unidos adoptó la política de contención: apoyar a los países que quisieran resistir al comunismo para que no se expandiera. Fue la idea base de su política exterior en la Guerra Fría.",
    conexiones: [
      { id: "evento1", porque: "Con esta idea, EE.UU. vio la invasión de Corea del Sur como una prueba de si el comunismo podía avanzar por la fuerza, y decidió responder." },
      { id: "evento3", porque: "La contención justificó ayudar a un gobierno anticomunista en el sur de Vietnam." }
    ]
  },
  {
    id: "causa2",
    nombre: "Teoría del dominó",
    tipo: "causa",
    texto: "En 1954 el presidente Eisenhower explicó que si un país caía en el comunismo, sus vecinos podían caer uno tras otro, como fichas de dominó. Esta idea se aplicó mucho al Sudeste Asiático.",
    conexiones: [
      { id: "evento3", porque: "Por miedo al efecto dominó, EE.UU. apoyó al sur de Vietnam para que no cayera ante el norte." },
      { id: "evento5", porque: "Se usó como argumento para enviar tropas: perder Vietnam del Sur significaría perder toda la región." }
    ]
  },
  {
    id: "causa3",
    nombre: "División de Corea (1945)",
    tipo: "causa",
    texto: "Cuando Japón se rindió en 1945, Corea quedó dividida en el paralelo 38: la URSS ocupó el norte y EE.UU. el sur. En 1948 cada zona formó su propio gobierno.",
    conexiones: [
      { id: "evento1", porque: "Con dos gobiernos rivales que querían unificar el país, el conflicto estalló en 1950." }
    ]
  },
  {
    id: "causa4",
    nombre: "Fin del dominio francés en Indochina",
    tipo: "causa",
    texto: "Francia peleó contra el Viet Minh de Ho Chi Minh entre 1946 y 1954 y fue derrotada en Dien Bien Phu. EE.UU. ya había ayudado a pagar esa guerra.",
    conexiones: [
      { id: "evento2", porque: "La derrota francesa llevó a la conferencia de Ginebra, donde se acordó el fin de la guerra." }
    ]
  },

  // ---------- ACONTECIMIENTOS ----------
  {
    id: "evento1",
    nombre: "Guerra de Corea (1950-1953)",
    tipo: "evento",
    texto: "El 25 de junio de 1950 Corea del Norte invadió Corea del Sur. EE.UU. lideró una fuerza bajo la bandera de la ONU. China entró a apoyar al norte a fines de 1950. La guerra terminó con un armisticio el 27 de julio de 1953, no con un tratado de paz.",
    conexiones: [
      { id: "consecuencia1", porque: "El armisticio dejó la frontera cerca del paralelo 38 y una zona desmilitarizada entre las dos Coreas." }
    ]
  },
  {
    id: "evento2",
    nombre: "Acuerdos de Ginebra (1954)",
    tipo: "evento",
    texto: "Dividieron Vietnam de forma provisional en el paralelo 17: norte comunista y sur con otro gobierno. Se pensaba hacer elecciones para unificar el país en 1956, pero no se hicieron.",
    conexiones: [
      { id: "evento3", porque: "El gobierno del sur, con apoyo de EE.UU., no hizo las elecciones y EE.UU. reforzó su ayuda a Vietnam del Sur." }
    ]
  },
  {
    id: "evento3",
    nombre: "EE.UU. apoya a Vietnam del Sur (1954-1964)",
    tipo: "evento",
    texto: "EE.UU. envió dinero, armas y asesores militares al gobierno de Vietnam del Sur. En el sur apareció el Frente de Liberación Nacional (Viet Cong), una guerrilla apoyada por el norte.",
    conexiones: [
      { id: "evento4", porque: "La ayuda no frenó a la guerrilla, y la situación llevó a una respuesta mucho mayor en 1964." }
    ]
  },
  {
    id: "evento4",
    nombre: "Incidente del golfo de Tonkín (1964)",
    tipo: "evento",
    texto: "En agosto de 1964 el gobierno de EE.UU. informó ataques de lanchas norvietnamitas contra sus destructores. El Congreso aprobó una resolución que dio al presidente Johnson amplios poderes militares. Años después se discutió si el segundo ataque ocurrió realmente.",
    conexiones: [
      { id: "evento5", porque: "La resolución sirvió de base legal para aumentar la guerra sin una declaración formal de guerra." }
    ]
  },
  {
    id: "evento5",
    nombre: "Guerra de Vietnam con tropas de EE.UU. (1965-1973)",
    tipo: "evento",
    texto: "En 1965 empezaron los bombardeos sostenidos contra el norte y llegaron las primeras tropas de combate. En 1968 la Ofensiva del Tet mostró que el enemigo seguía fuerte. En 1973 los Acuerdos de París permitieron la retirada de EE.UU.",
    conexiones: [
      { id: "consecuencia2", porque: "Una guerra larga y con muchas bajas generó protestas y desconfianza hacia el gobierno en EE.UU." },
      { id: "consecuencia3", porque: "Tras la retirada de EE.UU., el norte tomó Saigón en 1975." }
    ]
  },

  // ---------- ACTORES ----------
  {
    id: "actor1",
    nombre: "Estados Unidos",
    tipo: "actor",
    texto: "Líder del bloque capitalista. Intervino militarmente en Corea y en Vietnam para frenar al comunismo.",
    conexiones: [
      { id: "evento1", porque: "Lideró la respuesta militar bajo la bandera de la ONU." },
      { id: "evento5", porque: "Envió tropas de combate y bombardeó el norte." }
    ]
  },
  {
    id: "actor2",
    nombre: "URSS y China",
    tipo: "actor",
    texto: "Potencias comunistas. Dieron armas, asesores y apoyo a Corea del Norte y a Vietnam del Norte. China además envió tropas a Corea.",
    conexiones: [
      { id: "evento1", porque: "China envió tropas a fines de 1950 y la URSS dio armas y apoyo aéreo." },
      { id: "evento5", porque: "Apoyaron al norte con armas y equipo, lo que le permitió resistir." }
    ]
  },
  {
    id: "actor3",
    nombre: "Ho Chi Minh y Vietnam del Norte",
    tipo: "actor",
    texto: "Ho Chi Minh era un líder comunista y nacionalista que proclamó la independencia de Vietnam en 1945 y encabezó la lucha primero contra Francia y luego contra el sur y EE.UU.",
    conexiones: [
      { id: "evento2", porque: "Su gobierno quedó a cargo del norte después de Ginebra." },
      { id: "evento5", porque: "Su gobierno y su ejército mantuvieron la guerra hasta reunificar el país." }
    ]
  },
  {
    id: "actor4",
    nombre: "Gobiernos de Corea del Norte y del Sur",
    tipo: "actor",
    texto: "Dos gobiernos creados en 1948: el del norte con Kim Il-sung y el del sur con Syngman Rhee. Los dos decían representar a toda Corea.",
    conexiones: [
      { id: "evento1", porque: "La rivalidad entre ambos y el intento del norte de unificar el país por la fuerza dieron inicio a la guerra." }
    ]
  },

  // ---------- CONSECUENCIAS ----------
  {
    id: "consecuencia1",
    nombre: "Corea sigue dividida",
    tipo: "consecuencia",
    texto: "Hoy existen dos Estados y hay una zona desmilitarizada entre ellos. Solo hay armisticio, no un tratado de paz. EE.UU. mantiene tropas en Corea del Sur.",
    conexiones: []
  },
  {
    id: "consecuencia2",
    nombre: "Protestas y desconfianza en EE.UU.",
    tipo: "consecuencia",
    texto: "Hubo un fuerte movimiento contra la guerra y mucha gente empezó a dudar de lo que decía el gobierno.",
    conexiones: [
      { id: "consecuencia4", porque: "Influyó en el debate sobre cuándo y cómo debe intervenir EE.UU. en otros países." }
    ]
  },
  {
    id: "consecuencia3",
    nombre: "Vietnam reunificado (1975-1976)",
    tipo: "consecuencia",
    texto: "Saigón cayó el 30 de abril de 1975. En 1976 el país quedó unificado bajo el gobierno comunista.",
    conexiones: [
      { id: "consecuencia4", porque: "El resultado se vio como una derrota de EE.UU. y alimentó el debate sobre las intervenciones." }
    ]
  },
  {
    id: "consecuencia4",
    nombre: "Debate sobre las intervenciones de EE.UU.",
    tipo: "consecuencia",
    texto: "Después de Vietnam, en EE.UU. se discutió mucho cuándo conviene intervenir en otros países. El tema volvió a discutirse con las guerras de Afganistán (2001) e Irak (2003).",
    conexiones: []
  }
];
// NOTA: las conexiones de arriba son nuestra interpretación. Cada una debe poder justificarse con las fuentes.

// Este objeto sirve para escribir el nombre bonito de cada tipo (por ejemplo "evento" -> "Acontecimiento")
let nombresTipo = {
  causa: "Causa",
  evento: "Acontecimiento",
  actor: "Actor",
  consecuencia: "Consecuencia"
};


// =====================================================
// PARTE 2: FUNCIONES DE LA RED
// =====================================================

// Esta función crea un botón por cada nodo y lo mete en su columna
function crearRed() {
  // El for recorre toda la lista de nodos, uno por uno. i es la posición
  for (let i = 0; i < nodos.length; i++) {
    let nodo = nodos[i];

    // Crear un botón nuevo
    let boton = document.createElement("button");
    boton.textContent = nodo.nombre;              // el texto del botón
    boton.id = nodo.id;                           // el id del botón es el mismo del nodo
    boton.className = "nodo " + nodo.tipo;        // clases para el diseño (ej: "nodo causa")

    // Cuando hagan clic, se llama a la función mostrarNodo con el id de este nodo
    boton.setAttribute("onclick", "mostrarNodo('" + nodo.id + "')");

    // Buscar la columna que le toca (columna-causa, columna-evento, etc.) y meter el botón
    let columna = document.getElementById("columna-" + nodo.tipo);
    columna.appendChild(boton);
  }
}

// Esta función busca un nodo por su id y lo devuelve
function buscarNodo(id) {
  for (let i = 0; i < nodos.length; i++) {
    if (nodos[i].id === id) {
      return nodos[i];
    }
  }
}

// Esta función quita los bordes de todos los nodos (deja la red "limpia")
function limpiarRed() {
  for (let i = 0; i < nodos.length; i++) {
    let boton = document.getElementById(nodos[i].id);
    boton.classList.remove("seleccionado");
    boton.classList.remove("conectado");
  }
}

// Esta función devuelve el nombre de un nodo escrito como enlace en el que se puede hacer clic.
// Se usa dentro del panel para poder saltar de un nodo a otro.
function crearEnlace(id) {
  let nodo = buscarNodo(id);
  // Las comillas dobles con \ (\") sirven para escribir comillas dentro del texto
  return "<span class=\"enlace-nodo\" onclick=\"mostrarNodo('" + id + "')\">" + nodo.nombre + "</span>";
}

// Esta función se ejecuta cuando el usuario hace clic en un nodo
function mostrarNodo(id) {
  limpiarRed();

  let nodo = buscarNodo(id);

  // Marcar el nodo elegido
  document.getElementById(id).classList.add("seleccionado");

  // Empezamos a armar el texto (HTML) que irá en el recuadro
  let html = "<span class='etiqueta " + nodo.tipo + "'>" + nombresTipo[nodo.tipo] + "</span>";
  html = html + "<h3>" + nodo.nombre + "</h3>";
  html = html + "<p>" + nodo.texto + "</p>";

  // ----- Conexiones de salida: hacia dónde va este nodo -----
  html = html + "<h4>Influye en:</h4>";
  if (nodo.conexiones.length === 0) {
    html = html + "<p>Este nodo no tiene conexiones de salida.</p>";
  } else {
    html = html + "<ul>";
    for (let i = 0; i < nodo.conexiones.length; i++) {
      let conexion = nodo.conexiones[i];
      document.getElementById(conexion.id).classList.add("conectado"); // borde dorado
      html = html + "<li>" + crearEnlace(conexion.id) + ": " + conexion.porque + "</li>";
    }
    html = html + "</ul>";
  }

  // ----- Conexiones de entrada: qué nodos influyen en este -----
  // Hay que revisar los nodos uno por uno (i) y las conexiones de cada uno (j)
  html = html + "<h4>Recibe influencia de:</h4>";
  let hayEntrada = false;
  let lista = "<ul>";
  for (let i = 0; i < nodos.length; i++) {
    for (let j = 0; j < nodos[i].conexiones.length; j++) {
      if (nodos[i].conexiones[j].id === id) {
        hayEntrada = true;
        document.getElementById(nodos[i].id).classList.add("conectado");
        lista = lista + "<li>" + crearEnlace(nodos[i].id) + ": " + nodos[i].conexiones[j].porque + "</li>";
      }
    }
  }
  lista = lista + "</ul>";
  if (hayEntrada) {
    html = html + lista;
  } else {
    html = html + "<p>Ningún nodo influye en este.</p>";
  }

  // Poner todo el texto armado dentro del recuadro
  document.getElementById("panel-info").innerHTML = html;
}


// =====================================================
// PARTE 3: COMPARADOR DE COREA Y VIETNAM
// =====================================================
// "comparaciones" es una lista. Cada elemento tiene un tema (aspecto)
// y el texto que se muestra para Corea y para Vietnam.

let comparaciones = [
  {
    aspecto: "División del país",
    corea: "Se dividió en 1945 en el paralelo 38: la URSS ocupó el norte y EE.UU. el sur. En 1948 cada zona formó su propio gobierno.",
    vietnam: "Se dividió de forma provisional en 1954 en el paralelo 17, con los Acuerdos de Ginebra, después de que Francia perdiera la guerra de Indochina."
  },
  {
    aspecto: "Bando comunista",
    corea: "Corea del Norte, con apoyo de la URSS y de China.",
    vietnam: "Vietnam del Norte, de Ho Chi Minh, que apoyaba a la guerrilla del Viet Cong en el sur. Tenía apoyo de la URSS y de China."
  },
  {
    aspecto: "Bando apoyado por EE.UU.",
    corea: "Corea del Sur.",
    vietnam: "Vietnam del Sur."
  },
  {
    aspecto: "Cómo intervino EE.UU.",
    corea: "Desde junio de 1950 lideró una fuerza bajo la bandera de la ONU.",
    vietnam: "Primero con dinero, armas y asesores desde los años 50. Tropas de combate desde 1965."
  },
  {
    aspecto: "Cómo terminó",
    corea: "Armisticio el 27 de julio de 1953. No hubo tratado de paz.",
    vietnam: "Acuerdos de París en 1973, retirada de EE.UU. y caída de Saigón el 30 de abril de 1975."
  },
  {
    aspecto: "Resultado",
    corea: "El país sigue dividido en dos Estados.",
    vietnam: "El país se reunificó en 1976 bajo el gobierno comunista."
  },
  {
    aspecto: "Razón de EE.UU.",
    corea: "Contención: responder a la invasión del sur como prueba de si el comunismo podía avanzar por la fuerza.",
    vietnam: "Contención y teoría del dominó: evitar que el sur cayera y arrastrara a toda la región."
  }
];

// Esta función crea un botón por cada tema de la lista
function crearComparador() {
  let contenedor = document.getElementById("botones-comparador");
  for (let i = 0; i < comparaciones.length; i++) {
    let boton = document.createElement("button");
    boton.textContent = comparaciones[i].aspecto;
    boton.id = "aspecto-" + i;
    boton.className = "boton-aspecto";
    // Al hacer clic se llama a mostrarComparacion con la posición del tema
    boton.setAttribute("onclick", "mostrarComparacion(" + i + ")");
    contenedor.appendChild(boton);
  }
}

// Esta función muestra el tema elegido. "numero" es la posición en la lista (0, 1, 2...)
function mostrarComparacion(numero) {
  let datos = comparaciones[numero];

  // Escribir los textos de Corea y de Vietnam
  document.getElementById("texto-corea").textContent = datos.corea;
  document.getElementById("texto-vietnam").textContent = datos.vietnam;

  // Quitar la marca "activo" de todos los botones...
  let botones = document.getElementsByClassName("boton-aspecto");
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove("activo");
  }
  // ...y ponérsela solo al botón elegido
  document.getElementById("aspecto-" + numero).classList.add("activo");
}


// =====================================================
// PARTE 4: DATOS DE LA LÍNEA DE TIEMPO
// =====================================================
// "eventos" es otra lista de objetos. Cada uno tiene:
//   anio: año del hecho
//   titulo: nombre corto
//   texto: explicación breve
//   categoria: corea, vietnam u otras (sirve para el filtro)

let eventos = [
  { anio: 1945, titulo: "División de Corea", texto: "Al rendirse Japón, la URSS ocupa el norte y EE.UU. el sur, con el paralelo 38 como límite.", categoria: "corea" },
  { anio: 1947, titulo: "Doctrina Truman", texto: "EE.UU. anuncia que apoyará a los países que resistan al comunismo. Es el inicio de la contención.", categoria: "otras" },
  { anio: 1950, titulo: "Corea del Norte invade el sur", texto: "El 25 de junio empieza la Guerra de Corea. EE.UU. responde bajo la bandera de la ONU.", categoria: "corea" },
  { anio: 1950, titulo: "Entrada de China a la guerra", texto: "A fines de 1950, tropas chinas entran a Corea y empujan hacia el sur a las fuerzas de la ONU.", categoria: "corea" },
  { anio: 1953, titulo: "Armisticio en Corea", texto: "El 27 de julio se firma el armisticio. La guerra se detiene, pero no hay tratado de paz.", categoria: "corea" },
  { anio: 1953, titulo: "Golpe de Estado en Irán", texto: "Con apoyo de la CIA y del Reino Unido, cae el primer ministro iraní Mosaddeq.", categoria: "otras" },
  { anio: 1954, titulo: "Dien Bien Phu y Acuerdos de Ginebra", texto: "Francia pierde en Dien Bien Phu y Vietnam queda dividido en el paralelo 17.", categoria: "vietnam" },
  { anio: 1954, titulo: "Golpe de Estado en Guatemala", texto: "Con apoyo de la CIA, cae el presidente Jacobo Árbenz.", categoria: "otras" },
  { anio: 1961, titulo: "Bahía de Cochinos (Cuba)", texto: "Exiliados cubanos entrenados por la CIA invaden Cuba y fracasan.", categoria: "otras" },
  { anio: 1964, titulo: "Incidente del golfo de Tonkín", texto: "El Congreso da al presidente Johnson amplios poderes para actuar en Vietnam.", categoria: "vietnam" },
  { anio: 1965, titulo: "Llegan tropas de combate a Vietnam", texto: "Empiezan los bombardeos sostenidos al norte y llegan los primeros marines de combate.", categoria: "vietnam" },
  { anio: 1965, titulo: "Intervención en República Dominicana", texto: "EE.UU. envía tropas durante una crisis política en el país.", categoria: "otras" },
  { anio: 1968, titulo: "Ofensiva del Tet", texto: "El norte y el Viet Cong atacan muchas ciudades del sur. Militarmente no ganan, pero la opinión pública en EE.UU. cambia.", categoria: "vietnam" },
  { anio: 1973, titulo: "Acuerdos de París", texto: "Se firma un acuerdo que permite la retirada de las tropas de EE.UU. de Vietnam.", categoria: "vietnam" },
  { anio: 1975, titulo: "Caída de Saigón", texto: "El 30 de abril el norte toma la capital del sur. Vietnam se reunifica en 1976.", categoria: "vietnam" },
  { anio: 1983, titulo: "Invasión de Granada", texto: "EE.UU. invade esta isla del Caribe en octubre.", categoria: "otras" },
  { anio: 1989, titulo: "Invasión de Panamá", texto: "EE.UU. invade Panamá en diciembre y derroca a Manuel Noriega.", categoria: "otras" },
  { anio: 1991, titulo: "Guerra del Golfo", texto: "Una coalición liderada por EE.UU. expulsa a Irak de Kuwait.", categoria: "otras" },
  { anio: 2001, titulo: "Guerra de Afganistán", texto: "Después de los atentados del 11 de septiembre, EE.UU. ataca Afganistán en octubre.", categoria: "otras" },
  { anio: 2003, titulo: "Invasión de Irak", texto: "EE.UU. y sus aliados invaden Irak en marzo.", categoria: "otras" }
];


// =====================================================
// PARTE 5: FUNCIÓN DE LA LÍNEA DE TIEMPO
// =====================================================

// Esta función se ejecuta al hacer clic en un botón de filtro.
// "categoria" puede ser: todos, corea, vietnam u otras
function mostrarLinea(categoria) {
  let contenedor = document.getElementById("lista-eventos");
  contenedor.innerHTML = "";   // borra lo que había antes
  let contador = 0;            // cuenta cuántos hechos se muestran

  // Recorrer todos los hechos
  for (let i = 0; i < eventos.length; i++) {
    let hecho = eventos[i];

    // Solo se muestra si el filtro es "todos" O si la categoría del hecho coincide
    if (categoria === "todos" || hecho.categoria === categoria) {
      let div = document.createElement("div");
      div.className = "hecho " + hecho.categoria;
      div.innerHTML = "<span class='anio'>" + hecho.anio + "</span>" +
                      "<h4>" + hecho.titulo + "</h4>" +
                      "<p>" + hecho.texto + "</p>";
      contenedor.appendChild(div);
      contador = contador + 1;
    }
  }

  // Escribir cuántos hechos se muestran
  document.getElementById("contador").textContent = "Mostrando " + contador + " hechos";

  // Marcar cuál botón de filtro está activo
  let botones = document.getElementsByClassName("filtro");
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove("activo");
  }
  document.getElementById("filtro-" + categoria).classList.add("activo");
}


// =====================================================
// PARTE 6: INICIO
// =====================================================
// Estas líneas se ejecutan apenas se abre la página
crearRed();                // crea los botones de la red
crearComparador();         // crea los botones del comparador
mostrarComparacion(0);     // muestra el primer tema del comparador
mostrarLinea("todos");     // muestra todos los hechos de la línea de tiempo
