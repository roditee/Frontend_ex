/**
 * slideShow.js
 */

$(function() {
	// 이동한 이미지의 index 값 저장 (현재 위치)
	var movedIndex = 0;
	
	// 슬라이드 패널을 움직이는 함수
	function moveSlide(index) {
		movedIndex = index;
		
		// 슬라이드 이동
		var moveLeft = -(index * 1280); // 왼쪽으로의 이동 거리
		$('#slidePanel').animate({'left':moveLeft}, 'slow');
	}
	
	// prevBtn 클릭 시 왼쪽으로 (앞으로) 이동
	$('#prevBtn').on('click', function() {
		if (movedIndex!=0) movedIndex-=1;
		
		moveSlide(movedIndex);
	});
	
	// nextBtn 클릭 시 오른쪽으로 (뒤로) 이동
	$('#nextBtn').on('click', function() {
		if (movedIndex!=4) movedIndex+=1;
		
		moveSlide(movedIndex);
	});
	
	// 초기 슬라이더 위치 랜덤하게 지정
	var rNum = Math.floor(Math.random()*5);
	moveSlide(rNum);
	
	// 각 컨트롤 버튼에 대해
	$('.controlButton').each(function(index) {
		$(this).hover(
			function() {
				$(this).attr('src', 'image/controlButton2.png');
			},
			function() {
				$(this).attr('src', 'image/controlButton1.png');
			}
		);
		
		// 컨트롤 버튼 클릭 시, 버튼 인덱스에 해당하는 인덱스의 이미지로 이동
		$(this).on('click', function() {
			moveSlide(index);
		});
		
	}); // each 종료
});