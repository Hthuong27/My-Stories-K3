document.addEventListener("DOMContentLoaded", function () {
    var btnlogin = document.querySelector(".btnlogin");
    var profileName = document.querySelector(".profile-name");
    var btnlogout = document.querySelector(".btnlogout");
    var avatar = document.querySelector(".avatar");
    console.log(btnlogin);

    profileName.addEventListener("click", function (e) {
        console.log("login");
    });
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // var uid = user.uid;
            btnlogin.classList.add("hidden");
            profileName.classList.remove("hidden");
            console.log(user.photoURL);
            avatar.src = user.photoURL;
        } else {
            btnlogin.classList.remove("hidden");
            profileName.classList.add("hidden");
        }
    });

    btnlogout.addEventListener("click", function () {
        firebase
            .auth()
            .signOut()
            .then(function () {
                console.log("Signed Out");
            })
            .catch(function (error) {
                console.error("Sign Out Error", error);
            });
    });
});

function checklogin() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            window.location.href = "/post.html";
        } else {
            var loginModal = new bootstrap.Modal(
                document.getElementById("loginModal")
            );
            loginModal.show();
        }
    });
}

function redirectToLogin() {
    window.location.href = "/login.html";
}
