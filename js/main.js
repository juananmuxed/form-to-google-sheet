(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                const scriptURL = 'https://script.google.com/macros/s/IDFROMMACRO/exec' // Link to Google Script IDFROMMACRO
                const form = document.forms['formulario-para-directos']
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    event.preventDefault()
                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                        .then(response => showSuccessMessage(response))
                        .catch(error => showErrorMessage(error))
                }
                form.classList.add('was-validated');
                function showSuccessMessage(response){
                    console.log('¡Enviado!',response)
                    $('form').empty()
                    form.innerHTML = '<p><h2>Gracias por enviar tu mensaje, te atenderemos en cuanto nos sea posible.</h2><p>'
                }
                function showErrorMessage(response){
                    console.log('¡Error!',response)
                    $('form').empty()
                    form.innerHTML = '<p><h2>Ha habido un error en el envío, por favor intentelo más tarde o pongase en contacto con nosotros. Gracias.</h2><p>'
                }
            }, false);
        });
    }, false);
})();