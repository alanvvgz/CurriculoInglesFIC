document.addEventListener('DOMContentLoaded', function() {
    const typedText = document.getElementById('name');
    
    if (typedText) {
        const text = "Lucas Rodrigo Silva";
        let index = 0;

        typedText.innerHTML = "";

        function typeWriter() {
            if (index < text.length) {
                typedText.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }

        typeWriter();
    } else {
        console.error('Elemento com o ID "name" não foi encontrado');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cursos = document.querySelectorAll('.cursos');

    cursos.forEach((curso, index) => {
        
        setTimeout(() => {
            curso.style.opacity = '1'; 
            curso.style.transform = 'translateY(0)'; 
        }, index * 300); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
            const projectCards = document.querySelectorAll('.project-card');

            projectCards.forEach((card, index) => {
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'rotateY(0)';
                }, index * 150);
            });
        });

    const careerCards = document.querySelectorAll('.career-card');

    window.addEventListener('DOMContentLoaded', () => {
        careerCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        setTimeout(() => {
            careerCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, 100);
    });

    careerCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease-in-out';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
