document.addEventListener("DOMContentLoaded", function () {
    var data_user = [];
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            var uid = user.uid;
            console.log(user);
            data_user = user;
        } else {

        }
    });

    document.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const image = document.getElementById("image").value;

        if (!title && !content && !image) {
            alert("Please fill in the content of the article");
            return;
        }

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

