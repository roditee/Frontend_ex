/**
 * chatbot.js
 */

$(document).ready(function() {
	// 챗봇에게 질문하고 응답받기
	// message 입력하고 전송 버튼 눌렀을 때
	$('#chatForm').on('submit', function(){
		event.preventDefault();
		// message 입력하고 [전송] 버튼 누르면 (엔터쳐도 됨)
		// chatBox에 보낸 메시지 추가
		if($('#message').val() != ""){
			$('#chatBox').append('<div class="msgBox send"><span>' + 
								$('#message').val() + '</span></div><br><br>');
		}
		
		$('#message').val('');
		
		// 응답 받는 함수 호출
		getResponse();
	});
	
	function getResponse() {
		// 서버로부터 받은 메시지 (가정)
		var result = "저는 챗봇입니다. 긴 응답은 어떻게 출력되는지 확인해보도록 하겠습니다.";
		
		$('#chatBox').append('<div class="msgBox receive"><br>챗봇<br><span>' + 
							result + '</span></div><br><br>');
							
		// 스크롤해서 올리기
		$('#chatBox').scrollTop($('#chatBox').prop("scrollHeight"));
	}
});   // ready 종료