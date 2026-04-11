// Seleciona todos os slides e os botões
        const slides = [];
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');
        let slideAtual = 0;



        function pegar_slides() {
            slides.push(...document.querySelectorAll('.slide'));
        }



        // Função para mostrar um slide específico
        function mostrarSlide(index) {
            // Garante que o índice não saia dos limites (loop infinito)
            if (index < 0) {
                slideAtual = slides.length - 1;
            } else if (index >= slides.length) {
                slideAtual = 0;
            } else {
                slideAtual = index;
            }

            // Remove a classe "atual" de todos os slides
            slides.forEach(slide => {
                slide.classList.remove('atual');
            });

            // Adiciona a classe "atual" ao slide correto
            slides[slideAtual].classList.add('atual');
        }

        // Eventos de clique nos botões
        btnPrev.addEventListener('click', () => {
            mostrarSlide(slideAtual - 1);
        });

        btnNext.addEventListener('click', () => {
            mostrarSlide(slideAtual + 1);
        });

        // Opcional: Permitir navegação também pelas setas do teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                mostrarSlide(slideAtual - 1);
            } else if (e.key === 'ArrowRight') {
                mostrarSlide(slideAtual + 1);
            }
        });