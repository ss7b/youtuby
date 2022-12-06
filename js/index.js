$(function(){
    // active class when the page load
    $(".firsr-list-element").addClass("active")
    // to add class in crrent element
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active")
        $(this).addClass("active")
    })
    // toggler side bar
    $("#toggler").click(function(){
        $("#wrap").toggleClass("toggled")
        let right = $(".sidebar").css("right");
        // console.log(right)
        if(right == "0px"){
            $(".sidebar").css({"right":"-17rem"})
            $(".layer").fadeOut();
        }else{
            $(".sidebar").css({"right": "0rem"})
            $(".layer").fadeIn();
        }
    })
    // click to layer to hide
    $(".layer").click(function(){
        $(".sidebar").css({"right":"-17rem"})
        $(this).fadeOut();
    })
    // serch filde slide 
    $(".search-icon").click(function(){
        $(".search-input").slideToggle("slow")
    })
    
    
    
    
})