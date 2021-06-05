$(document).ready(function () {

  
    $(".topbutton").click(function(){
        if($(".left").css("left") == "-255px"){
            $(".left").css(
                "left","0px"
            )
        }
        else{
            $(".left").css(
                "left","-255px"
            )
        }
        
    })

    $("#rightblock2").hide()
    $("#rightblock3").hide()
    $("#rightblock4").hide()
    $("#rightblock5").hide()
    $("#rightblock6").hide()


    $("#resumebtn").click(function(){
        $("#rightblock5").show()

        $("#rightblock1").hide()
        $("#rightblock2").hide()
        $("#rightblock3").hide()
        $("#rightblock4").hide()
        $("#rightblock6").hide()

        // alert("Please Reload if Resume is not Visible.")
        setTimeout(resume,500);

        function resume(){
            alert("❗❗❗ Please Reload, if Resume is not Visible ❗❗❗\n\nThankyou 🙂")
        }

    })

    $("#leftmenu1").click(function () {
        $("#rightblock1").show()

        $("#rightblock2").hide()
        $("#rightblock3").hide()
        $("#rightblock4").hide()
        $("#rightblock5").hide()
        $("#rightblock6").hide()

        $(".left").css(
            "left","-255px"
        )
    })

    $("#leftmenu1").click(function () {

        $("#leftmenu2").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu3").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu4").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu5").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu6").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })

        
    })

    // ____________________
    $("#leftmenu2").click(function () {
        $("#rightblock2").show()

        $("#rightblock1").hide()
        $("#rightblock3").hide()
        $("#rightblock4").hide()
        $("#rightblock5").hide()
        $("#rightblock6").hide()
    })

    $("#leftmenu2").click(function () {
        $("#leftmenu2").css({
            "width": "100%",
            "background-color": "white",
            "color": "blue"
        })


        $("#leftmenu3").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu4").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu5").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu6").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })

        $(".left").css(
            "left","-255px"
        )
    })


    // _____________________
    $("#leftmenu3").click(function () {
        $("#rightblock3").show()

        $("#rightblock1").hide()
        $("#rightblock2").hide()
        $("#rightblock4").hide()
        $("#rightblock5").hide()
        $("#rightblock6").hide()
    })

    $("#leftmenu3").click(function () {
        $("#leftmenu3").css({
            "width": "100%",
            "background-color": "white",
            "color": "blue"
        })


        $("#leftmenu2").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu4").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu5").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu6").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })

        $(".left").css(
            "left","-255px"
        )
    })

    // ____________________
    $("#leftmenu4").click(function () {
        $("#rightblock4").show()

        $("#rightblock1").hide()
        $("#rightblock2").hide()
        $("#rightblock3").hide()
        $("#rightblock5").hide()
        $("#rightblock6").hide()
    })

    $("#leftmenu4").click(function () {
        $("#leftmenu4").css({
            "width": "100%",
            "background-color": "white",
            "color": "blue"
        })


        $("#leftmenu2").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu3").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu5").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu6").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })

        $(".left").css(
            "left","-255px"
        )
    })

    // ___________________________
    $("#leftmenu5").click(function () {
        $("#rightblock5").show()

        $("#rightblock1").hide()
        $("#rightblock2").hide()
        $("#rightblock3").hide()
        $("#rightblock4").hide()
        $("#rightblock6").hide()

        // alert("Please Reload if Resume is not Visible.")
        setTimeout(resume,500);

        function resume(){
            alert("❗❗❗ Please Reload, if Resume is not Visible ❗❗❗\n\nThankyou 🙂")
        }
    })

    $("#leftmenu5").click(function () {
        $("#leftmenu5").css({
            "width": "100%",
            "background-color": "white",
            "color": "blue"
        })


        $("#leftmenu2").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu3").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu4").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu6").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })

        $(".left").css(
            "left","-255px"
        )
    })

    // ______________________
    $("#leftmenu6").click(function () {
        $("#rightblock6").show()

        $("#rightblock1").hide()
        $("#rightblock2").hide()
        $("#rightblock3").hide()
        $("#rightblock4").hide()
        $("#rightblock5").hide()
    })

    $("#leftmenu6").click(function () {
        $("#leftmenu6").css({
            "width": "100%",
            "background-color": "white",
            "color": "blue"
        })

        $("#leftmenu2").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu3").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu4").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })
        $("#leftmenu5").css({
            "width": "90%",
            "background-color": "blue",
            "color": "white"
        })

        $(".left").css(
            "left","-255px"
        )
    })


    


    // let resume = document.getElementById("leftmenu5");
    // resume.addEventListener('click', function run() {
    //     alert("Please reload the page if Resume is not Visible.")
    // })



})