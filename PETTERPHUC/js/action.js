const about_me = document.getElementById("about-me");
const contact_me = document.getElementById("contact-me");
const my_blog = document.getElementById("my-blog");
const my_work = document.getElementById("my-work");
const my_resume = document.getElementById("my-resume");
const bar = document.getElementById("side-bar-toggle");
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        goToPage("about");
    }
};

function goToPage(name) {
    about_me.classList.add("hidden");
    contact_me.classList.add("hidden");
    my_blog.classList.add("hidden");
    my_work.classList.add("hidden");
    my_resume.classList.add("hidden");
    switch (name) {
        case "about":
            about_me.classList.remove("hidden");
            break;
        case "contact":
            contact_me.classList.remove("hidden");
            break;
        case "blog":
            my_blog.classList.remove("hidden");
            break;
        case "work":
            my_work.classList.remove("hidden");
            break;
        default:
            my_resume.classList.remove("hidden");
            break;
    }
    closeSideBar();
}

function showSideBar() {
    bar.classList.remove("hidden");
}

function closeSideBar() {
    bar.classList.add("hidden");
}