const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postsContainer = document.getElementById('container');
const likes = [];

for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    
    let post = document.createElement('div');
    post.classList.add('post');
    postsContainer.appendChild(post);

    let postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    post.appendChild(postHeader);

    let postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.appendChild(postMeta);

    let postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');
    postMeta.appendChild(postMetaIcon);

    let postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMeta.appendChild(postMetaData);

    let postText = document.createElement('div');
    postText.classList.add('post__text');
    post.appendChild(postText);

    let postImage = document.createElement('div');
    postImage.classList.add('post__image');
    post.appendChild(postImage);

    let postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    post.appendChild(postFooter);

    for (const key in element) {

        if(key === 'author'){

            postMetaIcon.innerHTML = `
            <img class="profile-pic" src="${element.author.image}"
             alt="${element.author.name}">`;

            postMetaData.innerHTML = `
            <div class="post-meta__author">${element.author.name}</div>
            <div class="post-meta__time">${element.created}</div>`;

        } else if(key === 'content'){
            
            postText.innerHTML = `${element[key]}`;

        } else if (key === 'media'){

            let imgPost = document.createElement('img');
            imgPost.src = element[key];
            postImage.appendChild(imgPost);

        } else if (key === 'likes'){

            postFooter.innerHTML = `
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#${element.id}" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element[key]}</b> persone
                    </div>
                </div>`
        }

        let likeButton = document.querySelectorAll('.like-button');

        likeButton.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.add('like-button--liked')
                element.likes = element.likes + 1;

                let likes = document.getElementById(`like-counter-${element.id}`);
                likes.innerHTML = `${element.likes}`;
                
            });
            
        });
        
    }
}

