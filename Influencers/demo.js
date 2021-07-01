$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        
        alert("We'll send you a Demo soon! Thank you for reaching out to us");
    });
});
