$(document).ready(function () {
    /* Funcion para realizar un scroll animado al clickear en cada parte del menu superior */
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    /* Funcion que sirve para cambiar de color mientras se pasa el mouse por sobre la card. */
    $('.card-body').bind("mouseover", function () {
        var color = $(this).css("background-color");

        $(this).css("background", "#80d261");

        $(this).bind("mouseout", function () {
            $(this).css("background", color);
        })
    })

});
