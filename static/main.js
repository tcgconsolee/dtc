$("#to-proj").click(function(){
    $(".home").slideUp(1000)
    $(".projects").show("slide", { direction: "down" }, 1000)
})
$(".evt-ctgory").each(function(i){
    $(this).click(function() {
        $(".evt-selected").css("left", (0.5 + (9.7*i)) + "em")
    })
})