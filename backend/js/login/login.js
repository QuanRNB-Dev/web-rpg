const nameLogin = document.getElementById("name-login");
const loginButton = document.getElementById("login-button");

function activateLoginButton(event) {
    event.preventDefault();

    const username = nameLogin.value.trim();

    if (!username) {
        alert("Vui lòng nhập tên đăng nhập.");
        nameLogin.focus();
        return;
    }

    alert("Đăng nhập thành công!\nTên đăng nhập: " + username);
}

loginButton.addEventListener("click", activateLoginButton);
