$(document).ready(function(){
    // console.log("hi");

    //Start Header 
    //Start Banner Section
   
    //End Banner Section
    //End Header 
    
    //Start Info Section
    $(window).scroll(function(){
        let getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);

        if(getscrollpoint >= 220){
            $(".infotexts").addClass("fromlefts");
            $(".infopics").addClass("fromrights");
        }else{
            $(".infotexts").removeClass("fromlefts");
            $(".infopics").removeClass("fromrights");
        }
    })
    //End Info Section

    // Start Adv Selection
    $("#videos").click(function(){
        var getmodal = $(this).data("bs-target");
        var getvideosrc = $(this).data("video");
        var videourlwithauto = getvideosrc + "?autoplay = 1";

        $(getmodal +" iframe").attr("src", videourlwithauto)
        $(getmodal + " button.btn-close").click("hidden bs-modal" ,function(){
            $(getmodal + " iframe").attr("src", getvideosrc)
        })
    })

    // End Adv Selection


    // Start Premises Selection
    $("#lightslider").lightSlider({
        
            item:4,
            loop:true,
            slideMove:1,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            auto:true
    })
    // End Premises Selection

    


    // Start Pricing Selection
    $(window).scroll(function(){
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);


        if(getscroll >= 2450){
            $(".cards1").addClass("movefromlefts")
            $(".cards2").addClass("movefrombottoms")
            $(".cards3").addClass("movefromrights")
        }else{
            $(".cards1").removeClass("movefromlefts")
            $(".cards2").removeClass("movefrombottoms")
            $(".cards3").removeClass("movefromrights")
        }
    })

    // End Pricing Selection



    // Start Joinus Selection
    $("#accordion").accordion()
    // End Joinus Selection


    // Start Footer Selection
    $("#getyear").text(new Date().getUTCFullYear())
    // End Footer Selection


    // Start Progress

    $(window).scroll(function(){
        var getprogress = $("#progress");
        var progressval = $("#progressvalues")
        var getscrolltop = $(this).scrollTop()
        // // console.log(getscrolltop)


// By Jquery

        // var getscrollheight = $(document).height();
        // // console.log(getscrollheight)
        // var getclientheight = $(window).height();
        // // console.log(getclientheight);
        // var getcalcheight = getscrollheight - getclientheight
        // var getfinalheight = Math.round(getscrolltop * 100 / getcalcheight)
        // console.log(getfinalheight)


 // By Javascript
        var getscrollheight = document.documentElement.scrollHeight;
        var getclientheight = document.documentElement.clientHeight;
        var getcalcheight = getscrollheight - getclientheight
        var getfinalheight = Math.round(getscrolltop * 100 / getcalcheight)
        



        progressval.text(`${getfinalheight}%`)
        getprogress.css({
            "background" : `conic-gradient(steelblue ${getfinalheight}%, #eee ${getfinalheight}%)`
        })
    })

    // Endt Progress






});