$(document).ready(function(){
	var $one = $('#one');
	var $two = $('#two');
	var $three = $('#three');
	var $four = $('#four');
	var $five = $('#five');
	var $six = $('#six');
	var $seven = $('#seven');
	var $eight = $('#eight');
	var $nine = $('#nine');
	var $zero = $('#zero');
	var $decimal = $('#decimal');
	var $plus = $('#plus');
	var $minus = $('#minus');
	var $times = $('#times');
	var $divide = $('#divide');
	var $equals = $('#equals');
	var $allClear = $('#allClear');
	var $clearEntry = $('#clearEntry');
	var $answer = $('#answerText');

$allClear.click(function(){
	$answer.html(0);
})

$one.click(function(){
	$answer.append(1);
});

$two.click(function(){
	$answer.append(2);
});


});