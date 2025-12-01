/* SPORTS HUB AUTH SYSTEM (Frontend Only) */

var userJsonData=[];


// Fetch JSON data
fetch('users.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
       userJsonData=data;
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });

// Save new user in localStorage
function registerUser(e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let role = document.getElementById("role").value;
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let messageBox = document.getElementById("message");

    if (password !== confirmPassword) {
        return showMessage("Passwords do not match!", "danger");
    }

    let userData = {
        fullName, email, mobile, role, password
    };

    localStorage.setItem("sportsHubUser", JSON.stringify(userData));

    showMessage("Registration successful! Redirecting...", "success");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
}


// Login validation
function loginUser(e) {
    e.preventDefault();
    let email = document.getElementById("loginName").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let messageBox = document.getElementById("loginMessage");
debugger;
    let storedUser = userJsonData.find(x=>x.username == email && x.password == password);


    if (!storedUser) {
        return showMessage("No user found! Please register first.", "danger", messageBox);
    }

    if (storedUser.email === email && storedUser.password === password) {
        showMessage("Login successful! Redirecting...", "success", messageBox);

        setTimeout(() => {
            window.location.href = "dashboard.html"; 
        }, 1500);
    } else {
        showMessage("Invalid email or password!", "danger", messageBox);
    }
}


// Show message alert box
function showMessage(text, type, element = document.getElementById("message")) {
    element.innerHTML = `
        <div class="alert alert-${type} mt-2">${text}</div>
    `;
}
