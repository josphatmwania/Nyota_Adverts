$(document).ready(function () {

    // Phone number input masking
    $("#telephone-field").keyup(function () {
        $(this).val($(this).val().replace(/^(\d{3})(\d{3})(\d)+$/, "$1-$2-$3"));
    });

    // Floating form labels
    let formFields = $('.form-group');

    formFields.each(function () {
        let field = $(this);
        let input = field.find('input');
        let label = field.find('label');

        function checkInput() {
            let valueLength = input.val().length;

            if (valueLength > 0) {
                label.addClass('freeze')
            } else {
                label.removeClass('freeze')
            }
        }

        input.change(function () {
            checkInput();
        })
    });

    // Hiding the form after submission and showing the thank you message
    $("form").submit(function (event) {
        event.preventDefault();
        $(this).addClass("d-none");
        $('#spinner').removeClass("d-none");
        setTimeout(function () {
            $('#spinner').addClass("d-none");
            $('#thanks-message').removeClass("d-none");
        }, 2000);
    });
});