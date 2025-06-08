// scripts.js
// JerryStudio 博客 JavaScript 脚本
// 目的：为后续动态功能预留结构、添加基本交互逻辑

// 确保 DOM 加载完成后再执行脚本
window.addEventListener('DOMContentLoaded', function () {
    console.log('JerryStudio 脚本已加载 ✅');

    // 示例：动态高亮导航栏当前选项
    const navLinks = document.querySelectorAll('.site-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // 预留：未来可添加异步加载博客内容
    // fetch('/api/posts')
    //   .then(response => response.json())
    //   .then(data => renderPosts(data));

    // 预留：主题切换（浅色/深色模式）
    // const themeToggle = document.getElementById('theme-toggle');
    // themeToggle.addEventListener('click', toggleTheme);
});

// 示例函数：未来用于渲染博客文章列表
function renderPosts(posts) {
    const container = document.querySelector('.post-list');
    container.innerHTML = '';
    posts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'post-item';
        article.innerHTML = `
      <h3><a href="/posts/${post.slug}">${post.title}</a></h3>
      <p class="post-date">${post.date}</p>
      <p class="post-excerpt">${post.excerpt}</p>
    `;
        container.appendChild(article);
    });
}

// 示例函数：切换主题模式（未启用）
// function toggleTheme() {
//   document.body.classList.toggle('dark-mode');
// }