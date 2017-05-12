//checa a lista riscando as tarefas
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//X exclui uma tarefa da lista
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(800, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adiciona na lista de tarefas
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//pega a nova tarefa digitada no input
		var todoText = $(this).val();
		$(this).val("");
		//cria uma li dentro da ul
		$("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>")
	}
});

$(".fa-hand-o-left").click(function(){
	$("input[type='text'").fadeToggle()
});