 // === 1. BASE DE CONOCIMIENTO Y RESPUESTAS PREDEFINIDAS ===
        const knowledgeBase = {
            "usodeinventorycheck": {
                "¿Cómo se ingresa un producto nuevo en el inventario?": "Debes navegar a la sección de 'Añadir Producto' o 'Maestro de Artículos', e ingresar los datos clave como: código SKU, nombre, descripción, categoría, stock inicial y ubicación.",
                "¿Cómo se actualiza el stock después de una venta o una recepción de mercancía?": "La actualización se realiza mediante los módulos de 'Entradas' (recepción de mercancía) o 'Salidas' (ventas). Es fundamental registrar la cantidad y la fecha para mantener la precisión en tiempo real.",
                "¿Cómo puedo ver el stock disponible de un producto específico?": "Utiliza la función de 'Búsqueda' en el panel principal o en el módulo de 'Inventario', ingresando el nombre o el SKU del producto para ver instantáneamente su cantidad en existencia y su ubicación actual.",
                "¿Qué es un 'Punto de Reposición' y cómo se configura?": "Es el nivel de existencias (stock mínimo) que, al alcanzarse, dispara una alerta para indicar que es momento de realizar un nuevo pedido. Se configura editando el detalle del producto y asignando la cantidad límite.",
                "¿Cómo se gestiona el inventario si tengo múltiples almacenes o ubicaciones?": "El sistema permite crear múltiples ubicaciones. Al registrar una entrada o salida, debes especificar a qué almacén corresponde el movimiento para tener visibilidad del stock por cada sitio.",
                "¿Para qué sirve el informe de 'Rotación de Inventario'?": "Sirve para medir la eficiencia con la que se vende o utiliza el inventario. Ayuda a identificar productos de alta rotación (más vendidos) y los de baja rotación (que requieren promoción o están obsoletos).",
                "¿Se pueden utilizar códigos de barras para el control de inventario?": "Sí, la mayoría de los sistemas online permiten el escaneo de códigos de barras para agilizar las tareas de conteo físico, recepción y preparación de pedidos, minimizando errores manuales.",
                "¿Cómo se realiza un conteo físico o inventario cíclico con el sistema?": "Se utiliza la función de 'Ajuste de Inventario' o 'Conteo Físico'. Los usuarios cuentan y luego ingresan la cantidad; el sistema compara esto con el stock teórico y registra el ajuste (diferencia).",
                "¿Cómo se obtiene un historial de movimientos de un producto?": "Dentro de la ficha del producto, busca la sección de 'Historial de Transacciones' o 'Trazabilidad', que muestra cronológicamente todas las entradas, salidas y ajustes que ha tenido el artículo."
            },
            "conceptos_fundamentales_inventario": {
                "¿Qué es un Inventario?": "Es un registro detallado y organizado de todos los bienes, productos o activos que tiene una empresa o entidad. Es la base de datos central que controla las existencias.",
                "¿Qué es el Stock o Existencias?": "Es la cantidad física de productos disponibles y listos para la venta, el uso o la distribución. En programación, este valor se guarda como una variable numérica en la base de datos.",
                "¿Qué es un SKU (Stock Keeping Unit)?": "Es un código único, alfanumérico, asignado a cada tipo de producto para su identificación y seguimiento dentro del sistema de inventario. Es la 'clave' o 'ID' principal del producto.",
                "¿Qué son las Transacciones de Inventario?": "Son los eventos o movimientos registrados en el sistema que alteran la cantidad de stock. Las dos principales son 'Entrada' (aumento de stock por compra) y 'Salida' (disminución de stock por venta o uso).",
                "¿Qué es la Trazabilidad?": "Es la capacidad de rastrear el historial, la ubicación y la ruta de un producto o lote a lo largo de toda la cadena de suministro, desde que ingresa al inventario hasta que sale.",
                "¿Qué es el Nivel de Servicio?": "Es una métrica que mide la capacidad del inventario para satisfacer la demanda de los clientes. Un Nivel de Servicio alto indica pocas rupturas o quiebres de stock.",
                "¿Qué es un Quiebre de Stock (Out-of-Stock)?": "Ocurre cuando la demanda de un producto no puede ser satisfecha porque el inventario disponible ha llegado a cero. Es un error crítico que el sistema busca evitar.",
                "¿Qué es el Inventario Cíclico?": "Es una técnica de auditoría donde se cuenta una pequeña parte del inventario de forma continua (diaria o semanal), en lugar de contar todo el inventario una o dos veces al año, para mejorar la precisión de los datos.",
                "¿Qué es la 'Rotación de Inventario'?": "Es un indicador que mide cuántas veces el inventario completo se ha vendido o usado y ha sido reemplazado durante un período específico. Una rotación alta es generalmente buena.",
                "¿Qué significa el 'Punto de Reorden' (Reorder Point - ROP)?": "Es el nivel de stock predeterminado que, al ser alcanzado por un producto, indica que se debe emitir una nueva orden de compra para reabastecer ese artículo antes de que se agote.",
                "¿Qué es la 'Ubicación' o 'Bin Location' de un producto?": "Es el identificador físico exacto (código de pasillo, estante y nivel) donde se almacena el producto en el almacén. Su registro en la base de datos agiliza la búsqueda y el 'picking'.",
                "¿Qué es el Inventario de Seguridad (Safety Stock)?": "Es una cantidad extra de stock que se mantiene como colchón para protegerse contra fluctuaciones inesperadas en la demanda o retrasos en la entrega de los proveedores (tiempo de entrega o 'lead time').",
                "¿Qué es el 'Tiempo de Entrega' (Lead Time)?": "Es el tiempo total (medido en días u horas) que transcurre desde que se emite una orden de compra a un proveedor hasta que el producto solicitado llega físicamente al almacén y está disponible para la venta.",
                "¿Qué es la 'Depreciación' de Inventario?": "Es la pérdida de valor o la obsolescencia de los productos debido al paso del tiempo, daño, cambios tecnológicos o vencimiento (si son perecederos)."
            },
            // El bot mantendrá esta info si no encuentra otra respuesta
            "historia": {
                "¿Cuándo comenzó la Primera Guerra Mundial?": "La Primera Guerra Mundial comenzó en 1914 y terminó en 1918.",
                "¿Quién fue Simón Bolívar?": "Simón Bolívar fue un líder militar y político venezolano conocido como 'El Libertador'.",
                "¿Qué fue la Revolución Industrial?": "Fue un periodo de grandes cambios económicos y sociales (siglos XVIII-XIX) con la invención de máquinas.",
                "¿Cuándo llegó Colón a América?": "Cristóbal Colón llegó a América el 12 de octubre de 1492.",
                "¿Qué fueron las cruzadas?": "Fueron guerras religiosas en la Edad Media entre cristianos y musulmanes por Tierra Santa."
            },
            "literatura": {
                "¿Quién escribió Don Quijote?": "Miguel de Cervantes escribió 'Don Quijote de la Mancha'.",
                "¿Qué es una metáfora?": "Una metáfora es una figura retórica que consiste en identificar un término real con uno imaginario.",
                "¿Quién fue Shakespeare?": "William Shakespeare fue un dramaturgo y poeta inglés, autor de 'Romeo y Julieta' y 'Hamlet'.",
                "¿Qué es el modernismo?": "El modernismo fue un movimiento literario y artístico de finales del siglo XIX.",
                "¿Qué son los géneros literarios?": "Son formas de clasificar las obras: épico, lírico y dramático."
            }
        };

        const respuestasSaludo = [
            "¡Hola! 😊 Soy tu chatbot de inventory check. ¿En qué  te puedo ayudar?",
            "¡Buenos días! 🌟 Puedo responder sobre conceptos acerca de inventario y usos de inventory check.",
            "¡Hola! 👋 ¿Qué te saber hoy?"
        ];

        const respuestasDespedida = [
            "¡Hasta pronto! 👋.",
            "¡Nos vemos! 😊",
            "¡Adiós! 🌟 Que tengas un gran día."
        ];

        const respuestasFallo = [
            "🤔 No estoy seguro, ¿puedes reformular la pregunta? Estoy enfocado en temas de Inventario.",
            "🔍 Intenta preguntarme sobre el uso de Inventory Check o conceptos fundamentales de inventario.",
            "❓ Hmm, no tengo esa información. Prueba con otra pregunta relacionada con inventario."
        ];

        // === 2. FUNCIONES DE PROCESAMIENTO Y SIMILITUD (Simulación de NLTK/sklearn) ===

        /**
         * Limpia el texto (minúsculas y elimina caracteres especiales, mantiene acentos, ¿, ?).
         * @param {string} text - El texto de entrada.
         * @returns {string} El texto limpio.
         */
        function cleanText(text) {
            text = text.toLowerCase();
            // Permite letras (incluidas áéíóúñ), números, espacios, ¿ y ?
            text = text.replace(/[^a-z0-9\sáéíóúñ¿?]/g, ' ');
            // Elimina múltiples espacios en blanco
            return text.trim().replace(/\s+/g, ' ');
        }

        /**
         * Tokeniza el texto limpio.
         * @param {string} text - El texto limpio.
         * @returns {string[]} Un array de tokens (palabras).
         */
        function tokenize(text) {
            return cleanText(text).split(' ').filter(token => token.length > 0);
        }

        /**
         * Crea un mapa de frecuencia de términos (Count Vectorizer).
         * @param {string[]} tokens - Array de tokens.
         * @returns {Object<string, number>} Mapa de frecuencia.
         */
        function createVector(tokens) {
            const vector = {};
            for (const token of tokens) {
                vector[token] = (vector[token] || 0) + 1;
            }
            return vector;
        }

        /**
         * Calcula la similitud de coseno entre dos vectores de frecuencia.
         * Se basa en el producto punto normalizado por la magnitud de los vectores.
         * @param {Object<string, number>} vec1 - Vector de la pregunta del usuario.
         * @param {Object<string, number>} vec2 - Vector de la pregunta de la base.
         * @returns {number} Puntuación de similitud (0 a 1).
         */
        function cosineSimilarity(vec1, vec2) {
            // 1. Obtener el vocabulario único
            const intersection = new Set(Object.keys(vec1).concat(Object.keys(vec2)));
            
            let dotProduct = 0;
            let magnitude1 = 0;
            let magnitude2 = 0;

            // 2. Calcular el producto punto y las magnitudes
            for (const key of intersection) {
                const val1 = vec1[key] || 0;
                const val2 = vec2[key] || 0;

                dotProduct += val1 * val2;
                magnitude1 += val1 * val1;
                magnitude2 += val2 * val2;
            }

            // 3. Normalizar
            magnitude1 = Math.sqrt(magnitude1);
            magnitude2 = Math.sqrt(magnitude2);

            if (magnitude1 === 0 || magnitude2 === 0) {
                return 0; // Evita división por cero
            }

            return dotProduct / (magnitude1 * magnitude2);
        }

        /**
         * Detecta si la pregunta es un saludo.
         * @param {string} query - Pregunta del usuario.
         * @returns {boolean}
         */
        function detectGreeting(query) {
            const greetings = ['hola', 'buenos días', 'buenas tardes', 'buenas noches', 'saludos', 'que tal', 'hey', 'holi'];
            return greetings.some(greeting => cleanText(query).includes(greeting));
        }

        /**
         * Detecta si la pregunta es una despedida.
         * @param {string} query - Pregunta del usuario.
         * @returns {boolean}
         */
        function detectFarewell(query) {
            const farewells = ['adiós', 'hasta luego', 'nos vemos', 'chau', 'bye', 'salir', 'terminar'];
            return farewells.some(farewell => cleanText(query).includes(farewell));
        }

        /**
         * Encuentra la mejor respuesta en la base de conocimiento.
         * @param {string} query - Pregunta del usuario.
         * @returns {{response: string, isFarewell: boolean}} Respuesta y bandera de despedida.
         */
        function findBestResponse(query) {
            const cleanedQuery = cleanText(query);

            if (detectFarewell(cleanedQuery)) {
                return { response: randomChoice(respuestasDespedida), isFarewell: true };
            }
            if (detectGreeting(cleanedQuery)) {
                return { response: randomChoice(respuestasSaludo), isFarewell: false };
            }

            const queryTokens = tokenize(cleanedQuery);
            const queryVector = createVector(queryTokens);

            let bestResponse = randomChoice(respuestasFallo);
            let bestScore = 0.2; // Umbral mínimo para considerar una respuesta
            let categoryFound = "";

            for (const category in knowledgeBase) {
                for (const question in knowledgeBase[category]) {
                    const cleanedQuestion = cleanText(question);
                    const questionTokens = tokenize(cleanedQuestion);
                    const questionVector = createVector(questionTokens);

                    const score = cosineSimilarity(queryVector, questionVector);

                    if (score > bestScore) {
                        bestScore = score;
                        bestResponse = knowledgeBase[category][question];
                        categoryFound = category;
                    }
                }
            }

            if (bestScore > 0.2) {
                const categoryTitle = categoryFound.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                return { response: `📚 [${categoryTitle}] ${bestResponse}`, isFarewell: false };
            } else {
                return { response: bestResponse, isFarewell: false };
            }
        }

        /**
         * Elige un elemento aleatorio de un array.
         * @param {Array} arr - El array de opciones.
         * @returns {*} El elemento elegido.
         */
        function randomChoice(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }


        // === 3. MANEJO DEL DOM Y EVENTOS ===

        const chatbotContainer = document.getElementById('chatbotContainer');
        const openChatBtn = document.getElementById('openChatBtn');
        const closeChatBtn = document.getElementById('closeChatBtn');
        const messagesContainer = document.getElementById('messagesContainer');
        const chatForm = document.getElementById('chatForm');
        const userInput = document.getElementById('userInput');

        /**
         * Muestra u oculta el chatbot con una animación.
         * @param {boolean} show - Si es true, muestra el chat; si es false, lo oculta.
         */
        function toggleChatbot(show) {
            if (show) {
                chatbotContainer.style.display = 'flex';
                // Pequeño timeout para permitir que el display se aplique antes de la transición
                setTimeout(() => {
                    chatbotContainer.classList.remove('scale-0', 'opacity-0');
                    chatbotContainer.classList.add('scale-100', 'opacity-100');
                    openChatBtn.classList.add('hidden');
                }, 10);
            } else {
                chatbotContainer.classList.remove('scale-100', 'opacity-100');
                chatbotContainer.classList.add('scale-0', 'opacity-0');
                setTimeout(() => {
                    chatbotContainer.style.display = 'none';
                    openChatBtn.classList.remove('hidden');
                }, 300); // Coincide con la duración de la transición CSS
            }
        }

        /**
         * Agrega un mensaje a la interfaz del chat.
         * @param {string} text - El contenido del mensaje.
         * @param {'user' | 'bot'} sender - El remitente del mensaje.
         */
        function addMessage(text, sender) {
            const messageWrapper = document.createElement('div');
            messageWrapper.classList.add('flex');
            
            const messageBubble = document.createElement('div');
            messageBubble.classList.add('p-3', 'rounded-lg', 'shadow-md', 'max-w-xs', 'sm:max-w-md', 'text-sm');

            if (sender === 'user') {
                messageWrapper.classList.add('justify-end');
                messageBubble.classList.add('bg-indigo-500', 'text-white', 'rounded-br-none');
            } else {
                messageWrapper.classList.add('justify-start');
                messageBubble.classList.add('bg-white', 'text-gray-800', 'rounded-tl-none', 'border', 'border-gray-200');
            }

            messageBubble.innerHTML = `<p>${text.replace(/\n/g, '<br>')}</p>`; // Permite saltos de línea
            messageWrapper.appendChild(messageBubble);
            messagesContainer.appendChild(messageWrapper);
            
            // Auto-scroll al final
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        /**
         * Maneja el envío del formulario.
         * @param {Event} e - Evento de envío del formulario.
         */
        async function handleFormSubmit(e) {
            e.preventDefault();
            const query = userInput.value.trim();
            if (!query) return;

            // 1. Mostrar mensaje del usuario
            addMessage(query, 'user');
            userInput.value = '';

            // 2. Obtener respuesta del bot
            const { response, isFarewell } = findBestResponse(query);

            // Simulación de "escribiendo..."
            setTimeout(() => {
                addMessage(response, 'bot');
                if (isFarewell) {
                    setTimeout(() => toggleChatbot(false), 1500);
                }
            }, 500);
        }

        // === 4. INICIALIZACIÓN Y LISTENERS ===

        document.addEventListener('DOMContentLoaded', () => {
            // Esconder el botón de abrir chat en el preview para forzar el foco en el chat.
            // Si el contenedor está visible, el botón de abrir debe estar oculto.
            if (chatbotContainer.style.display === 'none') {
                openChatBtn.classList.remove('hidden');
            } else {
                openChatBtn.classList.add('hidden');
            }

            // Event listeners para los botones de abrir/cerrar
            openChatBtn.addEventListener('click', () => toggleChatbot(true));
            closeChatBtn.addEventListener('click', () => toggleChatbot(false));

            // Event listener para el formulario
            chatForm.addEventListener('submit', handleFormSubmit);

            // Mostrar el chatbot por defecto en la vista del canvas
            toggleChatbot(true);
        });