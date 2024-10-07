document.addEventListener('DOMContentLoaded', function() {
    const typedText = document.getElementById('name');
    
    if (typedText) {
        const text = "Lucas Rodrigo Silva";
        let index = 0;

        // Limpa o conteúdo do elemento antes de começar a escrever
        typedText.innerHTML = "";

        function typeWriter() {
            if (index < text.length) {
                typedText.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Velocidade da digitação
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
