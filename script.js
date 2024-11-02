javascript
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulação de envio de formulário
    document.getElementById('responseMessage').innerText = 
        `Obrigado, ${name}! Sua mensagem foi recebida.`;

    // Limpar o formulário
    event.target.reset();
});

