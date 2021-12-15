/**
 * pose.js
 */

// $(document).ready(function() {}); 축약형
$(function() {
	// [결과 확인] 버튼 클릭하면 서버에서 좌표 받아서 이미지 출력하는 drawCanvas() 함수 호출 : 좌표, 이미지, src 전달
	$('#showBtn').on('click', () => {
		// 서버에서 응답 결과로 좌표 값 받았다고 가정 (JSON)
		var result = {"points": [{"x":0.42, "y":0.20}, {"x":0.49, "y":0.22}, {"x":0.42, "y":0.27}, {"x":0.30, "y":0.33}, 
								{"x":0.32, "y":0.22}, {"x":0.52, "y":0.25}, {"x":0.65, "y":0.31}, {"x":0.72, "y":0.41}, 
								{"x":0.61, "y":0.51}, {"x":0.65, "y":0.69}, {"x":0.81, "y":0.82}, {"x":0.51, "y":0.51}, 
                                {"x":0.29, "y":0.51}, {"x":0.35, "y":0.72}, {"x":0.39, "y":0.18}, {"x":0.49, "y":0.18}]};
		var src = "image/run.jpg";
		drawCanvas(result.points, src);
	});
	
	function drawCanvas(result, src) {
		// 캔버스 생성
		var canvas = document.getElementById('poseCanvas');
		var context = canvas.getContext('2d');
		
		// 이미지 생성
		var poseImage = new Image();
		poseImage.src = src;
		// 캔버스 크기에 맞춰 이미지 크기 조정
		poseImage.width = canvas.width;
		poseImage.height = canvas.height;
		
		poseImage.onload = function() {
			context.drawImage(poseImage, canvas.width/2-poseImage.width/2, canvas.height/2-poseImage.height/2, poseImage.width, poseImage.height);
			// 색상 배열 지정
			var colors = ["red", "blue", "yellow", "yellow",
						  "yellow","green", "green","green", 
						  "skyblue","skyblue","skyblue","white",
						  "white","white","brown","gold"];
			
			// 포지션 배열 지정
			var position = ["코", "목", "오른쪽 어깨", "오른쪽 팔굼치", 
							"오른쪽 손목", "왼쪽 어깨", "왼쪽 팔굼치", "왼쪽 손목", 
							"오른쪽 엉덩이", "오른쪽 무릎", "오른쪽 발목", "왼쪽 엉덩이", 
			                "왼쪽 무릎", "왼쪽 발목", "왼쪽 눈", "왼쪽 귀"];
			
			var values = "";
			
			// 각 좌표를 이미지에 표시
			// $.each(배열, 콜백함수)
			$.each(result, function(i) {
				if(this.x!=0 || this.y!=0) {
					context.strokeStyle = colors[i];
					context.strokeRect(this.x*poseImage.width, this.y*poseImage.height, 2, 2);
					var text = this.x.toFixed(2) + "," + this.y.toFixed(2);
					context.font = '10px';
					context.strokeText(text, this.x*poseImage.width, this.y*poseImage.height);
				}
				
				values += position[i] + " (" + this.x + "," + this.y + ")<br>";
			});
			
			// resultDiv <div>에 포지션(좌표) 출력
			$('#resultDiv').html(values);
		}; // onload 끝
	} // drawCanvas() 끝
});