import blogData from "../data/blogData.js";

const blogContainer = document.getElementById("blog-container");
const viewMoreBtn = document.getElementById("view-more-btn");
const menuIcon = document.getElementById("menu-icon");
const navMobile = document.querySelector(".nav-mobile");

const blogDataArray = blogData.slice(0, 6);

renderBlogs();

viewMoreBtn.addEventListener("click", viewMore);

menuIcon.addEventListener("click", () => {
    navMobile.classList.toggle("display");
});

function renderBlogs() {
    blogContainer.innerHTML = "";
    blogDataArray.forEach((blog) => {
        const blogDiv = document.createElement("div");
        blogDiv.classList.add("blog");
        blogDiv.innerHTML = `
        <img src="${blog.image}" alt="blog image" class="blog-img" />
        <p class="blog-date-created">${blog.date}</p>
        <h2 class="blog-title">${blog.title}</h2>
        <p class="blog-text">${blog.text}</p>
        `;
        blogContainer.appendChild(blogDiv);
    });
}

function viewMore() {
    const index = blogDataArray.length;
    const subArray = blogData.slice(index, index + 6);
    blogDataArray.push(...subArray);
    renderBlogs();

    if (blogDataArray.length === blogData.length) {
        viewMoreBtn.classList.add("hidden");
    }
}
