$(document).ready(function(){

// ------------hover left sidebar--------------
    $(".content").mouseover(function(){
        $("#content-details").show();
        $("#brand-details").hide();
        $("#influencer-details").hide();
    });

   
    $(".influencer").mouseover(function(){
        $("#influencer-details").show();
        $("#brand-details").hide();
        $("#content-details").hide();
    });


    $(".brand").mouseover(function(){
        $("#brand-details").show();
        $("#content-details").hide();
        $("#influencer-details").hide();
    });

    $(".corporate").hover(function(){
        $(".corporate-defn").show();
        $(".sme-defn").hide();
    });

    $(".sme").hover(function(){
        $(".sme-defn").show();
        $(".corporate-defn").hide();
    });


    // hover clientale
    $(".client1").mouseover(function(){
        $(".infomation1").show();
    });

    $(".client1").mouseout(function(){
        $(".infomation1").hide();
    });

    $(".client2").mouseover(function(){
        $(".infomation2").show();
    });

    $(".client2").mouseout(function(){
        $(".infomation2").hide();
    });


    $(".client3").mouseover(function(){
        $(".infomation3").show();
    });

    $(".client3").mouseout(function(){
        $(".infomation3").hide();
    });


    $(".client4").mouseover(function(){
        $(".infomation4").show();
    });

    $(".client4").mouseout(function(){
        $(".infomation4").hide();
    });

});

