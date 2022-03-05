const post = (element) => {
    const commentBox = document.createElement('div');
    commentBox.className = 'comment-box';
    const formularioPost = `<form id = "formularioPost" class = "formularioPost">
<<<<<<< HEAD
    <div id="container_comment" class="container-comment">
=======
>>>>>>> c9b5f3a9f81578ecc4fa6bc2d6ffffec4aff6daa
      <div id="${element.id}" class="post-id">
        <div id="user_name" class="user-name">${element.name}</div>   
        <div id="title_comment" class="title-comment">${element.title}</div>
        <div id="description_comment" class="description-comment">${element.description}</div>
        
        <div class="user-icons">
          
          <button class="button-like" id="button_like" value="${element.id}">
            <img id="like_icon" class="like-icon" src="Img/icono-like.png">
          </button>
      
    `;
    viewpost.innerHtml= formularioPost ;

    return commentBox;
<<<<<<< HEAD
};
=======
};
>>>>>>> c9b5f3a9f81578ecc4fa6bc2d6ffffec4aff6daa
