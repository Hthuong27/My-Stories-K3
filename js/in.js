document.addEventListener("DOMContentLoaded", function () {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let html = "";

    // Đảo ngược thứ tự của mảng posts
    posts.reverse();

    posts.forEach((post) => {
        html += `
            <div class="child-status mb-3">
                <div class="p-3">
                    <h5 id="user">Post by ${post.user}</h5>
                    <h4 id="title" class="mt-2">${post.title}</h4>
                    <p id="content" class="fs-5">${post.content}</p>
                </div>
                <img src="${post.image}" alt="" id="image" class="img-fluid" />
                <div class="icon">
                    <label class="container">
                        <input type="checkbox">
                        <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
                        <i class="fa-solid fa-comments"></i>
                        <i class="fa-solid fa-paper-plane"></i>
                    </label>
                </div>
                <p class="time">
                    ${new Date(post.timestamp).toLocaleTimeString()} ${new Date(
            post.timestamp
        ).toLocaleDateString()}
                </p>
            </div>`;
    });

    document.getElementById("postsContainer").innerHTML = html;
});
