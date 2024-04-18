// 로그인 유효성 검사
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });
});

function login_onclick() {
    var id = document.querySelector("#id").value.trim();
    var password = document.querySelector("#pwd").value.trim();

    if (id === '' || password === '') {
        alert("ID 또는 비밀번호가 틀립니다.");
    } else {
        location.href="index.html";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var joinForm = document.getElementById('JoinForm');
    
    // Add form submission event listener
    joinForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
    });
});

// Membership validation function
function memcheck_onclick() {
    var id = document.querySelector("#id").value.trim();
    var password = document.querySelector("#password").value.trim();
    var password_1 = document.querySelector("#password_1").value.trim();

    // Check if any field is empty
    if (id === '' || password === '' || password_1 === '') {
        alert("필수 입력란이 비어있습니다. 입력해주세요");
    } else {
        alert('떡볶잉의 회원이 되었어요! ');
    }
}
