const btn = document.createElement("button");
btn.id = "backToTop";
btn.innerHTML = "↑";
document.body.appendChild(btn);

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
