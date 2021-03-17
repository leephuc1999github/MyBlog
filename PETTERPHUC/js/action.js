const about_me = document.getElementById("about-me");
const contact_me = document.getElementById("contact-me");
const my_blog = document.getElementById("my-blog");
const my_work = document.getElementById("my-work");
const my_resume = document.getElementById("my-resume");
const bar = document.getElementById("side-bar-toggle");

function goToPage(name , item){
    switch(name){
        case "about":
            about_me.classList.remove("hidden");
            contact_me.classList.add("hidden");
            my_blog.classList.add("hidden");
            my_work.classList.add("hidden");
            my_resume.classList.add("hidden");
            break;
        case "contact":
            contact_me.classList.remove("hidden");
            about_me.classList.add("hidden");
            my_blog.classList.add("hidden");
            my_work.classList.add("hidden");
            my_resume.classList.add("hidden");
            break;
        case "blog":
            contact_me.classList.add("hidden");
            about_me.classList.add("hidden");
            my_blog.classList.remove("hidden");
            my_work.classList.add("hidden");
            my_resume.classList.add("hidden");
            break;
        case "work":
            contact_me.classList.add("hidden");
            about_me.classList.add("hidden");
            my_blog.classList.add("hidden");
            my_work.classList.remove("hidden");
            my_resume.classList.add("hidden");
            break;
        default:
            contact_me.classList.add("hidden");
            about_me.classList.add("hidden");
            my_blog.classList.add("hidden");
            my_work.classList.add("hidden");
            my_resume.classList.remove("hidden");
            break;
    }
}
function showSideBar(){
    bar.classList.remove("hidden");
}
function closeSideBar(){
    bar.classList.add("hidden");
}