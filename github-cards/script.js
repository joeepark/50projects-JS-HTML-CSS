const APIURL = 'https://api.github.com/users/'

const searchValue = document.querySelector('#search');
const mainTag = document.querySelector('main');

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)
    createUserInfo(data)
  } catch (err) {
    if (err.response.status === 404) {
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
        <li>${user.followers} Followers</li>
        <li>${user.following} Following</li>
        <li>${user.public_repos} Repos</li>
      </ul>
      <div class="repos">
      </div>
    </div>
  </div>`

  mainTag.innerHTML = innerText;
}


function createErrorCard() {
  const innerText = `<div class="card">
  <span class="nouser"> NO USER FOUND </span>
  </div>`

  mainTag.innerHTML = innerText;
}