const content = document.querySelector('.content');
const likeBtn = document.querySelector('.like_btn');

function handleClick(e) {
  e.preventDefault();

  const target = e.target;

  console.log(target);
}

function handleLike(e) {
  e.preventDefault();
  if (likeBtn.classList.contains('.active')) {
    likeBtn.classList.remove('.active');
  } else {
    likeBtn.classList.add('.active');
  }
}

content.addEventListener('click', handleClick);
likeBtn.addEventListener('click', handleLike);
