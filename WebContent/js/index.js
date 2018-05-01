var $messages = $('.messages-content'), d, h, m, i = 0;

$(window).load(function() {
	$messages.mCustomScrollbar();
	setTimeout(function() {
		fakeMessage();
	}, 100);
});

function updateScrollbar() {
	$messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom',
			{
				scrollInertia : 10,
				timeout : 0
			});
}

function setDate() {
	d = new Date()
	if (m != d.getMinutes()) {
		m = d.getMinutes();
		$('<div class="timestamp">' + d.getHours() + ':' + m + '</div>')
				.appendTo($('.message:last'));
	}
}

function insertMessage() {
	console.log('enter pressed');

	msg = $('.message-input').val();
	if ($.trim(msg) == '') {
		return false;
	}
	$('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
	setDate();
	$('.message-input').val(null);
	updateScrollbar();
	setTimeout(function() {
		fakeMessage(msg);
	}, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
	insertMessage();
});

$(window).on('keydown', function(e) {
	if (e.which == 13) {
		insertMessage();
		return false;
	}
})

var Fake = [ 'Hi there, I\'m Mayur and you?', 'Nice to meet you',
		'How are you?', 'Not too bad, thanks', 'What do you do?',
		'That\'s awesome', 'Codepen is a nice place to stay',
		'I think you\'re a nice person', 'Why do you think that?',
		'Can you explain?', 'Anyway I\'ve gotta go now',
		'It was a pleasure chat with you', 'Time to make a new codepen', 'Bye',
		':)' ]


function fakeMessage(input) {
	if ($('.message-input').val() != '') {
		return false;
	}
	$(
			'<div class="message loading new"><figure class="avatar"><img src="https://preview.ibb.co/c3t93n/FB_IMG_1517230888009.jpg" alt="FB_IMG_1517230888009" border="0"></figure><span></span></div>')
			.appendTo($('.mCSB_container'));
	updateScrollbar();
	
	var response = getWatsonResponse(input,'');

	setTimeout(
			function() {
				$('.message.loading').remove();
				$(
						'<div class="message new"><figure class="avatar"><img src="https://preview.ibb.co/c3t93n/FB_IMG_1517230888009.jpg" alt="FB_IMG_1517230888009" border="0"></figure>'
								+ response + '</div>').appendTo(
						$('.mCSB_container')).addClass('new');
				setDate();
				updateScrollbar();
				i++;
			}, 500 + (Math.random() * 20) * 100);

}


function getWatsonResponse(input, username)
{
	if(input == null || input == '' || input == 'undefined'){
		return 'Hi there, I\'m Mayur , How can i assist you?';
	}
	
	var finalUrl = "getWatsonResponse/"+input;
	var d = '';
	$.ajax({
		url : finalUrl,
		type : "GET",
		async: false,
		success : function(result) {		
			var data =  $.parseJSON(result);		
			d = data;
		}
	});
	return d;
}
