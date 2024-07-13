document.addEventListener("DOMContentLoaded", function () {
    var profile = document.querySelector(".profile");
    var btnlogin = document.querySelector(".btnlogin");
    var profileName = document.querySelector(".profile-name");
    var btnlogout = document.querySelector(".btnlogout");

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            btnlogin.classList.add("hidden");
            profile.classList.remove("hidden");
            profileName.innerHTML = user.email;
        } else {
            btnlogin.classList.remove("hidden");
            profile.classList.add("hidden");
        }
    });

    btnlogout.addEventListener("click", function () {
        firebase.auth().signOut().then(function () {
            console.log("Signed Out");
            window.location.href = "/index.html";  
        }).catch(function (error) {
            console.error("Sign Out Error", error);
        });
    });
});

function checklogin() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            window.location.href = "/post.html";
        } else {
            var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
        }
    })
};

function redirectToLogin() {
    window.location.href = "/login.html";
};

