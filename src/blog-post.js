import blogData from "../data/blogData.js";

const recentPostsContainer = document.getElementById("recent-posts");
const menuIcon = document.getElementById("menu-icon");
const navMobile = document.querySelector(".nav-mobile");


const recentPostsArray = blogData.slice(0, 3);

renderRecentPosts();

menuIcon.addEventListener("click", () => {
    navMobile.classList.toggle("display");
});

function renderRecentPosts() {
    recentPostsContainer.innerHTML = "";
    recentPostsArray.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("blog");
        postDiv.innerHTML = `
        <img src="${post.image}" alt="blog image" class="blog-img" />
        <p class="blog-date-created">${post.date}</p>
        <h2 class="blog-title">${post.title}</h2>
        <p class="blog-text">${post.text}</p>
        `;
        recentPostsContainer.appendChild(postDiv);
    });
}