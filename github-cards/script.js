const APIURL = 'https://api.github.com/users/'

const searchValue = document.querySelector('#search');
const mainTag = document.querySelector('main');

async function getUser(username) {
  try {
    const data = await fetch(APIURL + username);
    const response = await data.json();
    if (response.message === 'Not Found') {
      createErrorCard();
    } else {
      createUserInfo(response);
    }
  } catch (err) {
    if (err) {
      createErrorCard();
    }
    console.error(err);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = searchValue.value;
  if (username) {
    getUser(username);
    searchValue.value = '';
  }
})

function createUserInfo(user) {
  const innerText = `<div class="card">
    <div>
      <img src=${user.avatar_url}>
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul>
        <li><span>${user.followers}</span> Followers</li>
        <li><span>${user.following}</span> Following</li>
        <li><span>${user.public_repos}</span> Repos</li>
      </ul>
      <div class="repos">
      </div>
    </div>
  </div>`

  mainTag.innerHTML = innerText;
}


function createErrorCard() {
  const innerText = `<div class="card error-card">
  <span class="nouser"> NO USER FOUND </span>
  </div>`

  mainTag.innerHTML = innerText;
}