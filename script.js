if (!document.getElementById('backToTop')) {
    const btn = document.createElement("button");
    btn.id = "backToTop";
    btn.innerHTML = "↑";
    document.body.appendChild(btn);
}

const backToTopBtn = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
};
backToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};