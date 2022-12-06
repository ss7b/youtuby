$(function(){
    $("#myBtn").click(function(){
        read()
    })
    $(".reply").click(function(){
        $(this).parents("div.row").next(".card-inner").toggle()
    })
    $(".like").click(function(){
        $(this).toggleClass("liked")
    })
})



function read(){
    let dots = document.querySelector("#dots");
    let more = document.querySelector("#more")
    let btn = document.querySelector("#myBtn")
    if(dots.style.display ==="none"){
        dots.style.display= "inline"
        btn.innerHTML ='عرض المزيد'
        more.style.display ="none"
    }else{
        dots.style.display= "none"
        btn.innerHTML ='عرض عتاصر اقل '
        more.style.display ="inline"
    }
}