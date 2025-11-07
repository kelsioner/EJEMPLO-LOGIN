// Espera a que todo el contenido HTML se cargue
document.addEventListener("DOMContentLoaded", function() {

    // 1. Seleccionar los elementos del DOM
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    // Función sencilla para validar el formato de un email
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // 2. Añadir un evento "submit" (envío) al formulario
    loginForm.addEventListener("submit", function(event) {
        
        // 3. Prevenir que el formulario se envíe automáticamente
        event.preventDefault();

        // 4. Obtener los valores de los inputs
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 5. LÓGICA DE VALIDACIÓN
        if (email === "" || password === "") {
            // Error si los campos están vacíos
            errorMessage.textContent = "Por favor, completa todos los campos.";
        
        } else if (!isValidEmail(email)) {
            // Error si el email no tiene un formato válido
            errorMessage.textContent = "Por favor, introduce un correo electrónico válido.";
        
        } else {
            // Si todo está correcto
            errorMessage.textContent = ""; // Limpia mensajes de error
            
            alert("¡Inicio de sesión exitoso con el correo: " + email);
            
            loginForm.reset();
        }
    });
});