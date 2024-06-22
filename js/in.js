document.addEventListener("DOMContentLoaded", function () {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    let html = "";

    posts.forEach((post) => {
        html += `
            <div class="child-status mb-3">
                <div class="p-3">
                    <div class="time">Post by u/ ${new Date(
                        post.timestamp
                    ).toLocaleTimeString()} ${new Date(
            post.timestamp
        ).toLocaleDateString()}</div>
                    <h5>${post.title}</h5>
                    <p>${post.content}</p>
                </div>
                <img src="${post.image}" alt="" />
                <div class="icon">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
            </div>
        `;
    });

    document.getElementById("postsContainer").innerHTML = html;
});
