$(".yin div").mouseenter(function(){
	$(this).children("p").css("opacity","1");
	$(this).css("cursor","pointer")
})

$(".yin div").mouseleave(function(){
	$(this).children("p").css("opacity","0");
})