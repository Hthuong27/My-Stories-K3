document.addEventListener("DOMContentLoaded", function () {
    btnGoogle = document.querySelector(".btn-google");
    btnGoogle.addEventListener("click", function () {
        console.log("click");
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                var token = credential.accessToken;
                var user = result.user;
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
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
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
    btnApple = document.querySelector(".btn-apple");
    btnApple.addEventListener("click", function () {
        console.log("click");
        var provider = new firebase.auth.OAuthProvider("apple.com");
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                var idToken = credential.idToken;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    });
});

