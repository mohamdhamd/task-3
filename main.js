$(function(){
    $(".slide").click(function(){
        var sli =Math.ceil(Math.random()*3)
        $(".main").attr("style","background-image:url(./"+sli+".jpg)")
    })

    $(".download-btn").click(function(){
        $(".hidden-dow").fadeIn(500)
    })
    $(".fa-remove").click(function(){
        $(".hidden-dow").fadeOut(500)
    })
})