document.addEventListener("DOMContentLoaded", function () {
    btnGoogle = document.querySelector(".btn-google");
    btnGoogle.addEventListener("click", function () {
        console.log("click");
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase

            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                window.location.href = "/index.html";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    btnFacebook = document.querySelector(".btn-facebook");
    btnFacebook.addEventListener("click", function () {
        console.log("click");
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                window.location.href = "/login.html";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    });
});

document.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmpassword =
            document.getElementById("confirmpassword").value;

        if (password !== confirmpassword) {
            Swal.fire({
                title: "Error!",
                text: "Passwords do not match.",
                icon: "error",
                confirmButtonText: "Try Again",
            });
            return;
        }

        const user = {
            username: username,
            email: email,
            password: password,
        };

        localStorage.setItem("user", JSON.stringify(user));

        Swal.fire({
            title: "Success!",
            text: "Registration successful.",
            icon: "success",
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/login.html";
            }
        });
    });
