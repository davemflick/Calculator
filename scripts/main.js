//$(document).ready(function(){
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
	var $image = $('#gif');

//buttons won't remain highlighted after being clicked.
$('.btn').click(function(){this.blur()})

var curNum = [];
var prevNum =[];
var addArr =[];
var minusArr =[];
var strArr = [];
var initialVal= 0;
//var equatArr = [initalVal, addArr];
var curDisplay;
var sum;

$('#operatorBtns').click(function(){
	Number($answer.val(0));
	curNum = [];
})

$allClear.click(function(){
	Number($answer.val(0));
	curNum=[];
	addArr=[];
	minusArr=[];
	equatArr=[];
	strArr = [];
	sum;
})

$clearEntry.click(function(){
	if( $answer.val().length >0){
		curNum.splice(curNum.length-1, 1);
		var displayed = curNum.join('');
		$answer.val(displayed);
	}
})

$one.click(function(){
	curNum.push(1);
	var displayed = curNum.join('');
	$answer.val(displayed);
});

$two.click(function(){
	curNum.push(2);
	var displayed = curNum.join('');
	$answer.val(displayed);
});

$three.click(function(){
	curNum.push(3);
	var displayed = curNum.join('');
	$answer.val(displayed);
});
$four.click(function(){
	curNum.push(4);
	var displayed = curNum.join('');
	$answer.val(displayed);
});

$five.click(function(){
	curNum.push(5);
	var displayed = curNum.join('');
	$answer.val(displayed);
});

$six.click(function(){
	curNum.push(6);
	var displayed = curNum.join('');
	$answer.val(displayed);
});

$seven.click(function(){
	curNum.push(7);
	var displayed = curNum.join('');
	$answer.val(displayed);
});

$eight.click(function(){
	curNum.push(8);
	var displayed = curNum.join('');
	$answer.val(displayed);
});

$nine.click(function(){
	curNum.push(9);
	var displayed = curNum.join('');
	$answer.val(displayed);
});

$zero.click(function(){
	curNum.push(0);
	var displayed = curNum.join('');
	$answer.val(displayed);
});

$decimal.click(function(){
	curNum.push('.');
	var displayed = curNum.join('');
	$answer.val(displayed);
});



// Addition
$plus.click(function(){
 curDisplay = Number($answer.val());
strArr.push(curDisplay);
strArr.push('+');
})


//Subtraction
$minus.click(function(){
 curDisplay = Number($answer.val());
 strArr.push(curDisplay);
 strArr.push('-');
})


//Multiplication
$times.click(function(){
 curDisplay = Number($answer.val());
 strArr.push(curDisplay);
 strArr.push('*');
})

//Division
$divide.click(function(){
 curDisplay = Number($answer.val());
 strArr.push(curDisplay);
 strArr.push('/');
})

//Equal Button
$equals.click(function(){
curDisplay = Number($answer.val());
strArr.push(curDisplay);
var sum = eval(strArr.join(''));
$answer.val(sum)
if(sum === 69){$image.attr('src', 'images/69.gif'), $('#gif-container').css('display', 'block');}
else if (sum>=3.14 && sum<3.15){$image.attr('src', 'images/pi.gif'), $('#gif-container').css('display', 'block');}
else if (sum === 420){$image.attr('src', 'images/420.gif'), $('#gif-container').css('display', 'block');}
strArr = [];
})






//});//End of DocumentReadyFunction












