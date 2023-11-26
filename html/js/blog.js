const closeModal = document.querySelector('.close-button');
const getContent = () => {
  fetch('/api/content')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let getDate = new Date(data[i].createdAt).toLocaleString();

        $('.blog-post-area').prepend(`
        <div id="${data[i].id}" data-content-id="${data[i].id}" class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data[i].title}</h5>

                </div>
                <div class="date-created newPost">
                <p><i class="usernameI" data-username="${data[i].user.username}">${data[i].user.username} posted </i>${getDate}</p>
                <p class="card-text">"${data[i].content}"</p>
                <div class=" content-card-buttons" data-user-posted-id="${data[i].user.id}">
                <a href="#" class="w-100 align-bottom btn btn-primary" id="seePost" data-bs-toggle="modal" data-target="#postModal">See post</a>
                </div>
            
              </div>
              
            </div>
            
          </div>`);
      }
      return fetch('/api/users/loggedInUser')
    })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
      }})};