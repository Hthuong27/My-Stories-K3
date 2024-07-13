document.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
        Swal.fire({
            title: "Success!",
            text: "Login successful.",
            icon: "success",
            confirmButtonText: "OK",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/index.html";
            }
        });
    } else {
        Swal.fire({
            title: "Error!",
            text: "Invalid email or password.",
            icon: "error",
            confirmButtonText: "Try Again",
        });
    }
});
