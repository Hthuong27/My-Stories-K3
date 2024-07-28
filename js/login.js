// document.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const email = document.getElementById("exampleInputEmail1").value;
//     const password = document.getElementById("exampleInputPassword1").value;

//     const user = JSON.parse(localStorage.getItem("user"));

//     if (user && user.email === email && user.password === password) {
//         Swal.fire({
//             title: "Success!",
//             text: "Login successful.",
//             icon: "success",
//             confirmButtonText: "OK",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 window.location.href = "/index.html";
//             }
//         });
//     } else {
//         Swal.fire({
//             title: "Error!",
//             text: "Invalid email or password.",
//             icon: "error",
//             confirmButtonText: "Try Again",
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");

    document.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Sign in using Firebase Authentication
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                Swal.fire({
                    title: "Success!",
                    text: "Login successful.",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/index.html";
                    }
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: `Invalid email or password`,
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            });
    });
});

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
