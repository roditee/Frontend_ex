/**
 * voiceRecord.js
 */
$(document).ready(function(){
	const record = document.getElementById('record');
	const stop = document.getElementById('stop');
	const soundClips = document.getElementById('sound-clips');
	
	if(navigator.mediaDevices){
		var constraints = {
				audio:true
		}
		
		let chucks = [] // 녹음 데이터 저장하기 위한 변수
		
		navigator.mediaDevices.getUserMedia(constraints)
		.then(stream => {
			const mediaRecorder = new MediaRecorder(stream);
			
			// 녹음 버튼 클릭했을 때
			record.onclick = () => {
				mediaRecorder.start(); // 녹음 시작
				record.style.background = 'red';
				record.style.color = 'black';
			};
			
			// 정지 버튼 클릭했을 때
			stop.onclick = () => {
				mediaRecorder.stop(); // 녹음 정지
				stop.style.background = '';
				stop.style.color = '';
			};
			
			mediaRecorder.onstop = e => {
				// 1. <audio> 태그 담을 컨테이너 객체 생성
				const clipcontainer = document.createElement('article');
				
				// 2. audio 객체 생성 및 속성 설정
				const audio = document.createElement('audio');
				audio.setAttribute('controls', '');
				
				// 3. container에 오디오 연결
				clipcontainer.appendChild(audio);
				
				// soundClips <div> 영역에 <audio> 태그 출력
				// 이전에 녹음할 때 추가한 childNode가 존재한다면 제거하고
				if (soundClips.hasChildNodes())
					soundClips.removeChild(soundClips.childNodes[0]);
				// 추가
				soundClips.appendChild(clipcontainer);
				
				// chucks에 저장된 녹음 데이터를 audio 양식으로 설정
				const blob = new Blob(chucks, {
					'type':'audio/mp3 codecs=opus'
				});
				
				// chucks 초기화 (초기화하지 않으면 녹음 내용 누적 저장됨)
				// 정지 버튼 누를 때마다 기존의 내역 초기화되고 새로 저장됨
				chucks = [];
				
				// audio 소스 지정
				const audioURL = URL.createObjectURL(blob);
				audio.src=audioURL;
				
				// 4. 녹음 내용을 파일로 저장
				const clipName = "voiceRecord";
				
				const a = document.createElement('a');
				clipcontainer.appendChild(a);
				a.href=audio.src;
				
				a.download = clipName;
				a.click(); // 자동으로 다운로드 되도록 클릭 이벤트 발생 (다운로드 폴더에 저장)
				};
				
			// 녹음 시작 상태가 되면 chucks에 녹음 데이터 저장
			mediaRecorder.ondataavailable = e => {
				chucks.push(e.data);
			};
		})
		.catch(err => {
			console.log("오류 발생 : " + err);
		});
	}
});