/**
 * parallax.js
 */

$(function() {
	var $section = $('.parallax > div'),
		$sectionInfo = [];
		
		$section.each(function() {
			$sectionInfo.push($(this).offset().top);
		});
		
		console.log($sectionInfo);
		
		/*$section.css({position:'fixed'});*/
		
		$(window).scroll(function() {
			var scrollCnt = $(this).scrollTop();
			
			$section.each(function(idx) {
				var $newTop = $sectionInfo[idx]-scrollCnt;
				
				if(scrollCnt > $sectionInfo[idx]) { $newTop *= 0.5; }
				
				/*$(this).css({top:$newTop});*/
				$(this).css({'transform':'translate(0px,'-scrollCnt+'%'});
			});
		}); // window scroll 종료
});