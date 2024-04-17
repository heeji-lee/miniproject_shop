document.getElementById("login-btn").addEventListener("click", function(event) {
    event.preventDefault(); // 기본 동작(폼 전송)을 막음
    alert("ID 또는 비밀번호가 틀립니다.");
    window.location.href = "login.html"; // 로그인 페이지의 URL로 변경하세요.
});

document.addEventListener('login-btn', function () {
    // 폼 요소 가져오기
    var loginForm = document.getElementById('login-form');
    
    // 폼 제출 이벤트 리스너 추가
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 기본 동작 방지
        
        // 여기에 로그인 검증 로직을 추가할 수 있습니다.
        // 예를 들어, AJAX를 사용하여 서버에 로그인 정보를 전송하고 응답을 받아서 처리할 수 있습니다.
        // 이 예시에서는 간단히 성공적으로 로그인되었다고 가정하고 알림 창을 띄웁니다.
        
        // 로그인 성공 시 알림 창 표시
        alert('로그인 성공했습니다!');
    });
});