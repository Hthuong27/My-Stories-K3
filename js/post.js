document.addEventListener("DOMContentLoaded", function () {
    const postForm = document.getElementById("postForm");
    var data_user = [];
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            console.log(user);
            data_user = user;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    document.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const image = document.getElementById("image").value;

        const post = {
            user: data_user.displayName,
            title: title,
            content: content,
            image: image,
            timestamp: new Date().toISOString(),
        };

        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));

        postForm.reset();
        window.location.href = "index.html";
    });
});
