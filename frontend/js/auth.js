function registerUser(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm_password").value;

    if(password !== confirm){
        alert("Passwords do not match!");
        return;
    }

    // Store user in localStorage (demo)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({name, phone, email, gender, password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully!");
    window.location.href = "login.html";
}

function loginUser(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if(user){
        localStorage.setItem("user_id", email); // demo user_id
        window.location.href = "category.html";
    } else {
        alert("Invalid credentials!");
    }
}