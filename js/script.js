$(document).ready(function(){
    $(".content").mouseover(function(){
        $("#content-details").show();
    });

    $(".content").mouseout(function(){
        $("#content-details").hide();
    });

    $(".influencer").mouseover(function(){
        $("#influencer-details").show();
    });

    $(".influencer").mouseout(function(){
        $("#influencer-details").hide();
    });

    $(".brand").mouseover(function(){
        $("#brand-details").show();
    });

    $(".brand").mouseout(function(){
        $("#brand-details").hide();
    });
});

