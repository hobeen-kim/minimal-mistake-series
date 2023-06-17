$(document).ready(function() {
    $(".collapsible").click(function() {

        var $content = $('.series-ol');
        // check if max-height is 0 (closed)
        if ($content.css('max-height') === '0px'){
            // change max-height to the scrollHeight
            $content.css('max-height', $content.prop('scrollHeight') + 'px');
        } else {
            $content.css('max-height', '0');
        }
        
        var seriesList = document.querySelector('.series-ol');
        $(this).next().toggle(); // 시리즈 목록 표시/숨김
        if ($(this).text() == "목록보기") {
            seriesList.classList.toggle('open');
            $(this).text("숨기기");
        } else {
            seriesList.classList.toggle('open');
            $(this).text("목록보기");
        }
    });
});