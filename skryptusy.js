var span =$("span");
	span.each(function(index, element) {
	});

span.each(function(index, element) {
	if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});

$("span:odd").css('color', 'green');

var paragrafy = $('p');
paragrafy.each(function(index, element) {
	var guzik = '<button class="btn" data-tmp="' +index + '">Wciśnij</button>';
	$(element).append(guzik);
});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
	console.log($(this));
});