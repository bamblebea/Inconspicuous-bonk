$(".btn").on("click", () => {
    $(".bonkimg").toggleClass("bonkbig");
    //alert("bonk");
    $("audio#bonksound")[0].play();
})


