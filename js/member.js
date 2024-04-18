// 로그인 유효성 검사
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });
});

function login_onclick() {
    var id = document.querySelector("#id").value;
    var password = document.querySelector("#pwd").value;

    if (id === '' || password === '') {
        alert("ID 또는 비밀번호가 틀립니다.");
    } else {
        location.href="index.html";
    }
}

// 회원가입 유효성 검사
document.addEventListener('DOMContentLoaded', function () {
    var joinForm = document.getElementById('join-form');
    
    joinForm.addEventListener('submit', function (event) {
        event.preventDefault();
    });
});

function join_onclick() {
    var name = document.querySelector("#name").value;
    var id = document.querySelector("#id").value;
    var password = document.querySelector("#pwd").value;
    var password1 = document.querySelector("#pwd1").value;
    var email = document.querySelector("#email").value;

    if (name === '' || id === '' || password === '' || password1 === '' || email === '') {
        alert("필수 입력란이 비어있습니다. 입력해주세요.");
    } else {
        location.href="login.html";
    }
}
