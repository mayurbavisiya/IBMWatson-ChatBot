<%@ page language="java" contentType="text/html; charset=windows-1256"
	pageEncoding="windows-1256"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type"
	content="text/html; charset=windows-1256">
<title>Watson</title>

<link rel="stylesheet" href="css/normalize.css">
<link rel='stylesheet prefetch'
	href='https://fonts.googleapis.com/css?family=Open+Sans'>
<link rel='stylesheet prefetch'
	href='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.min.css'>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

	<div class="chat">
		<div class="chat-title">
			<h1>IBM</h1>
			<h2>Watson</h2>
			<figure class="avatar"> <a href="https://ibb.co/hSybin"
				target="_blank"><img
				src="https://preview.ibb.co/c3t93n/FB_IMG_1517230888009.jpg"
				alt="FB_IMG_1517230888009" border="0"></a> </figure>
		</div>
		<div class="messages">
			<div class="messages-content"></div>
		</div>
		<div class="message-box">
			<textarea type="text" class="message-input"
				placeholder="Type message..."></textarea>
			<button type="submit" class="message-submit" onclick="">Send</button>
		</div>

	</div>
	<div class="bg"></div>
	<script
		src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
	<script
		src='https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.3/jquery.mCustomScrollbar.concat.min.js'></script>
	<script src="js/index.js"></script>

</body>
</html>