function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Typing Effect
const text = ["BTech CSE Student", "Future Cyber Security Expert", "Ethical Hacker"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.getElementById("typing").innerHTML = currentText;

        if (j == text[i].length) isDeleting = true;
        if (j == 0) {
            isDeleting = false;
            i++;
        }
    }

    setTimeout(type, 100);
}

type();
