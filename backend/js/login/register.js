const nameRegister = document.getElementById("name-register");
const passwordRegister = document.getElementById("password-register");
const confirmPasswordRegister = document.getElementById("confirm-password-register");


function activateRegisterButton(event) {
    event.preventDefault();
    const username = nameRegister.value.trim();
    const password = passwordRegister.value.trim();
    const confirmPassword = confirmPasswordRegister.value.trim();
    if (!username) {
        alert("Vui lòng nhập tên đăng nhập.");
        nameRegister.focus();
        return;
    }
    if (!password) {
        alert("Vui lòng nhập mật khẩu.");
        passwordRegister.focus();
        return;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp.");
        confirmPasswordRegister.focus();
        return;
    }
    alert("Đăng ký thành công!\nTên đăng nhập: " + username);
}

const registerButton = document.getElementById("register-button");
registerButton.addEventListener("click", activateRegisterButton);