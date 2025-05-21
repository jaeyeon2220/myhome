// This file contains the JavaScript code for the bulletin board functionality.

document.addEventListener('DOMContentLoaded', function () {
    const posts = [];
    const postsList = document.getElementById('posts');
    const postInput = document.getElementById('postInput');
    const addPostButton = document.getElementById('addPostButton');

    function renderPosts() {
        postsList.innerHTML = '';
        posts.forEach((post, idx) => {
            const li = document.createElement('li');
            li.textContent = post;
            postsList.appendChild(li);
        });
    }

    addPostButton.addEventListener('click', function () {
        const text = postInput.value.trim();
        if (text) {
            posts.push(text);
            postInput.value = '';
            renderPosts();
        }
    });

    // 엔터키로도 게시글 추가
    postInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addPostButton.click();
        }
    });

    renderPosts();
});