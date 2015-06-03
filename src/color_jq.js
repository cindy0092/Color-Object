$(document).ready(function() {
	var $inputRed, $inputGreen, $inputBlue, $div, result;
	$colorCode = $("#colorCode");
	$color = $("#color");
	$(".rgb").keypress(function(event)
	{
		if(event >= 0 && event <= 255)
		{
			event.preventDefault();		
		}
	});
	$('form input[type="number"]').on('blur', function()
	{
		console.log(this.value);
	});
	$('#color').on('submit', function(e)
	{
		e.preventDefault();
		$inputRed = $('#red').val();
		$inputGreen = $('#green').val();
		$inputBlue = $('#blue').val();
		result = rgb($inputRed, $inputGreen, $inputBlue);
		$colorCode.empty();
		$colorCode.append('<p>'+result+'</p>'+'<p><font color='+result+'>'+'Color'+'</font>'+'</p>');
	});
});