document.addEventListener("submit", function (e) {
    e.preventDefault();

    var title = e.target.title.value;
    var content = e.target.content.value;
    var image = e.target.image.value;

    console.log(title, content, image);

    if (title == "" || content == "" || image == "") {
        Swal.fire({
            icon: "error",
            title: "Vui lòng nhập đầy đủ thông tin",
        });
    } else {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        let newPost = {
            title: title,
            content: content,
            image: image,
            timestamp: new Date(),
        };

        posts.push(newPost);

        localStorage.setItem("posts", JSON.stringify(posts));

        Swal.fire({
            icon: "success",
            title: "Thêm thông tin thành công",
            didClose: function () {
                window.location.href = "index.html";
            },
        });
    }
});

