/**
 * checkForm.js
 */
/* id가 joinForm인 폼의 submit 버튼이 눌렸을 때 수행되는 이벤트 처리 */
window.onload = function() {
	document.getElementById('joinForm').onsubmit = function() {
		
		// 성명을 입력하지 않은 경우 경고장 출력
		// id로 찾아와서
		var name = document.getElementById('name');
		
		// 값이 비었는지 확인하고, 비었으면 경고장 출력, 입력란에 포커스 주고 서버로 전송되지 않게 함 (다음 페이지로 이동 못하게)
		if (name.value == ""){
			alert("성명을 입력하세요.");
			name.focus();
			return false; // 서버로 전송되지 않게 함 (다음 페이지로 )
		}
		
		// 아이디를 입력하지 않은 경우
		// "아이디를 입력하세요" 출력, 아이디 입력란에 포커스
		var id = document.getElementById('id');
		
		if (id.value == ""){
			alert("아이디를 입력하세요.");
			id.focus();
			return false; // 서버로 전송되지 않게 함 (다음 페이지로 )
		}
		
		// 아이디를 6~10자가 안되게 입력하였을 경우
		// '아이디는 6~10자로 입력하세요' 경고창 출력
		// 아이디 입력란에 입력한 내용 삭제하고
		// 아이디 입력란에 포커스
		if (id.value.length<6 || id.value.length>10){
			alert("아이디는 6~10자로 입력하세요.");
			id.value=""; // null도 가능
			id.focus();
			return false; // 서버로 전송되지 않게 함 (다음 페이지로 )
		}
		
		// 비밀번호와 비밀번호 확인 값이 일치하지 않을 경우
		// "비밀번호 확인이 일치하지 않습니다" 출력
		// '비밀번호 확인' 입력란 값 지우고 포커스
		var pw = document.getElementById('password');
		var pwCheck = document.getElementById('passwordCheck');
		if (pw.value != pwCheck.value) {
			alert("비밀번호 확인이 일치하지 않습니다.");
			pwCheck.value="";
			pwCheck.focus();
			return false;
		}
		
		// 직업을 선택하지 않은 경우
		// (1) 첫 번째 <option> 태그에 빈 값 설정 후
		// 선택된 값이 첫 번째 값이면
		// "직업을 선택하세요" 경고장 출력
		var job = document.getElementById('job');
		if (job.selectedIndex == 0) {
			alert("직업을 선택하세요.");
			return false;
		}
		// 또는
		// (2) 첫 번째 <option> 태그에 빈 값 설정 후
		// 선택된 값이 빈 값이면 경고장 출력
		/*if (job.value == "") {
			alert("직업을 선택하세요.");
			return false;
		}*/
		// (3) <option> 태그 하나를 미리 선택해놓으면 유효성 확인 필요 없음
		// <option value="프로그래머" selected>프로그래머
		
		// '이메일 수신 여부' 라디오 버튼을 클릭하지 않은 경우
		// 라디오 버튼의 경우 id 속성을 사용하지 않고 그룹 이름인 name 속성 사용
		// 동일 그룹에 속한 여러 라디오 버튼(객체)은 동일 name : 배열로 처리
		// 배열의 각 원소를 하나씩 확인 -> checked 속성이 true면 체크된 상태 / false면 체크되지 않은 상태
		// for문 사용 / if문 사용
		var chk=false;
		for (var i=0; i<joinForm.emailRcv.length; i++) {
			if (joinForm.emailRcv[i].checked == true) chk = true; // 하나라도 체크된 값이 있다면 true 값 저장
		}
		// 하나도 체크되지 않았을 경우 초기값 false 유지
		if (chk==false) {
			alert("이메일 수신 여부를 선택하세요.");
			return false;
		}
		
		// '동의'체크박스를 하나도 선택하지 않은 경우
		// "동의 여부를 체크하지 않았습니다." 경고장 출력
		var agreement1 = document.getElementById('agreement1');
		var agreement2 = document.getElementById('agreement2');
		if (agreement1==false || agreement2==false) {
			alert("동의 여부를 체크하지 않았습니다.");
			return false;
		}
	}; // onsubmit 끝
}; // window.onload 끝