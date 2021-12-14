/**
 * formCheck.js
 */

$(document).ready(function() {
				
	// 시작 시 ID 입력란에 포커스 주기 : 객체.메소드()  / 
	$('#id').focus();
	
	
	// input type=텍스트 입력란과 input type=비밀번호 입력란에 포커스 있을 때 색상 변경
	$('input[type="text"], input[type="password"]')
		.on('focus', function(){
			$(this).css('background', 'rgb(232, 232, 158)');
		});
	
	// 포커스 잃을 때 색상
	// blur 또는 focusout
	$(':text, :password')
		.on('blur', function(){
			$(this).css('background', '');
		});
	
	
	
	// 키보드 이벤트 처리
	// 첫 번째 전화번호 (hp1) 입력란에 입력 값이 3개가 되면 다음 입력 (hp2)로 포커스 이동
	// keyup 이벤트
	$('#hp1').on('keyup', (function() {
		if($(this).val().length==3) $('#hp2').focus();
	}));
	// 두 번째 전화번호 (hp2) 입력란에 입력 값이 4개가 되면 다음 입력 (hp3)으로 포커스 이동
	// keyup 이벤트
	$('#hp2').on('keyup', (function() {
		if($(this).val().length==4) $('#hp3').focus();
	}));
	
	
	// 엔터키 눌렀을 때 무조건 submit 안 되도록 문서 전체에 이벤트 처리
	// [Enter] 키의 아스키 코드 값 : 13
	// 발생한 이벤트에서 키코드 값을 가져와 13인지 확인
	$(document).on('keydown', function(e){
		if(e.keyCode == 13) return false; // 발생한 이벤트의 키코드 값이 13이라면 submit 안 되도록
	});
	
	// id 입력한 후에 엔터키 눌렀을 때 비밀번호로 포커스 이동
	$('#id').on('keydown', function(e) {
		// 값 입력 여부에 상관없이 무조건 이동
		// if(e.keyCode==13) $('#pwd').focus();
		
		// 값을 입력했을 경우에만 이동
		if($('#id').val() == "" && e.keyCode==13){
			$('#pwd').focus();
		}
	});
	

	
	
	
	// [완료] 버튼 클릭하면 입력 유효성 확인
	$('#newMemberForm').submit(function(){
	
	// ID를 입력하지 않은 경우
	// "아이디를 입력하세요" 경고창 출력되고, 
	// ID 입력란에 포커스
	// 다음 페이지로 전송되지 않도록 처리
	if($('#id').val() == ""){
			alert("아이디를 입력하세요");
			$('#id').focus();   // $(this)도 가능
			return false;
		}
	
	// 비밀번호 입력하지 않은 경우
	// "비밀번호를 입력하세요" 경고창 출력
	// 포커스
	// 다음 페이지로 전송되지 않도록 처리
	if($('#pwd').val() == "") {
			alert("비밀번호를 입력하세요.");
			$('#pwd').focus();  // $(this)도 가능
			return false;
	}

	
	// 라디오 버튼 선택하지 않은 경우
	// "학년을 선택하세요." 출력
	// 다음 페이지로 전송되지 않도록 처리
	//if(!$('input[type="radio"]').is(':checked')){
	//if(!$(':radio').is(':checked')){     // 라디오 버튼 그룹이 하나만 있는 경우 name 없어도 구분됨
	if(!$(':radio[name="year"]').is(':checked')){
		alert("학년을 입력하세요");
			return false;
	}	
	
	// 길이로 확인
	/*if($('input:radio[name="year"]:checked').length == 0){
			alert("학년을 입력하세요");
			return false;
	}*/
	
	
	// 체크박스를 선택하지 않은 경우
	// "관심분야는 1개 이상 선택하세요" 출력
   // 다음 페이지로 전송되지 않도록 처리
	if(!$(':checkbox').is(':checked')){
			alert("관심분야는 1개 이상 선택하세요");
			return false;
	}
	
	
	// 학과 선택하지 않은 경우
	// "학과를 선택하세요" 출력 
	// 다음 페이지로 전송되지 않도록 처리
	if($('#department').val() == "") {  // 기본적으로 <select> 태그로 선택
			alert("학과를 선택해 주세요.");
			return false;
    }

	/*if($('option').val() == ""){
			alert("학과를 선택해주세요2");
			return false;
	}*/
	
	}); // submit 종료			
});   // ready 종료