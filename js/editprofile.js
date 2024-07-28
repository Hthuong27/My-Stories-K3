const photoElement = document.querySelector("#img");
const nameElement = document.querySelector("#name");
const emailElement = document.querySelector("#email");
const avatarElement = document.querySelector("#avatar-profile") || "";
document.addEventListener("DOMContentLoaded", function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log(user);

            // Update the avatar, name, and email
            if (user.photoURL) {
                avatarElement.src = user.photoURL;
                photoElement.value = user.photoURL;
            }
            console.log(nameElement);
            // photoElement.src = `${user.photoURL}`
            nameElement.value = `${user.displayName}`;
            emailElement.value = `${user.email}`;
            // avatarElement.src = `${user.photoURL}`;
        } else {
            // No user is signed in.
            console.log("No user is signed in.");
        }
    });
});

document.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = firebase.auth().currentUser;

    const newName = nameElement.value;
    const newPhotoURL = photoElement.value;
    const newEmail = emailElement.value;

    user.updateProfile({
        displayName: newName,
        photoURL: newPhotoURL,
        email: newEmail,
    })
        .then(() => {
            alert("Profile updated successfully");
            avatarElement.src = newPhotoURL; // Update avatar in form
            window.location.href = "/profile.html";
        })
        .catch((error) => {
            alert("Error updating profile", error);
        });

    // Update email
    if (user.email !== newEmail) {
        user.updateEmail(newEmail)
            .then(() => {
                console.log("Email updated successfully");
            })
            .catch((error) => {
                console.error("Error updating email:", error);
            });
    }
});
