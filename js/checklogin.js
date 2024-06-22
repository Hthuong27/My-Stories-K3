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
            // console.log("No user is signed in.");
            btnlogin.classList.remove("hidden");
            profile.classList.add("hidden");
        }
    });

    btnlogout.addEventListener("click", function () {
        firebase
            .auth()
            .signOut()
            .then(
                function () {
                    console.log("Signed Out");
                },
                function (error) {
                    console.error("Sign Out Error", error);
                }
            );
    });
});
