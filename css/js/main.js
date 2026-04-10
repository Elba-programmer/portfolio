console.log("Portfolio Loaded");

// Example interaction
document.querySelector(".btn").addEventListener("click", () => {
    window.location.href = "projects.html";
});
const text = ["System Developer", "Python Developer", "Web Designer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentText.substring(0, j++);
    } else {
        document.getElementById("typing").textContent =
            currentText.substring(0, j--);
    }

    if (j === currentText.length) isDeleting = true;
    if (j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});
function loginUser() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "index.html";
    return false;
  } else {
    document.getElementById("error").innerText = "Invalid login!";
    return false;
  }
}