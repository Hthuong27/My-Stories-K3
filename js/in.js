document.addEventListener("DOMContentLoaded", function () {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let html = "";
    posts.forEach((post) => {
        html += `
            <div class="child-status mb-3">
                <div class="p-3">
                    <h5 id="user">Post by ${post.user}</h5>
                    <h4 id="title" class="mt-2">${post.title}</h4>
                    <p id="content">${post.content}</p>
                </div>
                <img src="${post.image}" alt="" id="image" class="img-fluid" />
                <div class="icon">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
                <p class="time">
                    ${new Date(post.timestamp).toLocaleTimeString()} ${new Date(
            post.timestamp
        ).toLocaleDateString()}
                </p>
            </div>
        `;
    });

    document.getElementById("postsContainer").innerHTML = html;
});
