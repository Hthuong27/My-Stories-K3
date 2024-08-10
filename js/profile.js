document.addEventListener("DOMContentLoaded", function () {
    const avatarElement = document.querySelector("#avatar-profile");
    const nameElement = document.querySelector("#name");
    const emailElement = document.querySelector("#email");

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log(user);

            // Update the avatar, name, and email
            if (user.photoURL) {
                avatarElement.src = user.photoURL;
                nameElement.textContent = user.displayName;
                emailElement.textContent = `Email: ${user.email}`;
            }
        } else {
            // No user is signed in.
            console.log("No user is signed in.");
        }
    });
});

