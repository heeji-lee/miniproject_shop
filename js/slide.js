document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        // 옵션 설정
        loop: true, // 슬라이드 반복 여부
        autoplay: {
            delay: 2000, // 자동 넘김 간격 (ms)
        },
    });
});