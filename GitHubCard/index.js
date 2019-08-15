
const container = document.querySelector('.container');
const cards = document.querySelector('.cards');

axios.get(`https://api.github.com/users/kyle-richardson`)
    .then( response => {
        cards.appendChild(addCard(response.data));
        return axios.get(`https://api.github.com/users/kyle-richardson/followers`);
    })
    .then (response => {
      const myFollowers = response.data.map( ele => ele.login);
      myFollowers.forEach(ele => {
        axios.get(`https://api.github.com/users/${ele}`)
          .then( response => {
              cards.appendChild(addCard(response.data));
          })
          .catch( err => {
              console.log(err);
          })
      })
    })
    .catch( err => {
        console.log(err);
    })

const followersArray = [];
followersArray.push('tetondan');
followersArray.push('dustinmyers');
followersArray.push('justsml'); 
followersArray.push('luishrd'); 
followersArray.push('bigknell'); 

followersArray.forEach(ele => {
  axios.get(`https://api.github.com/users/${ele}`)
    .then( response => {
        cards.appendChild(addCard(response.data));
    })
    .catch( err => {
        console.log(err);
    })
})

//test component without axios get (local object)
/*
const kyle = {
  name: 'Kyle Richardson',
  location: 'Fort Worth, TX',
  avatar_url: 'https://avatars1.githubusercontent.com/u/52683176?v=4',
  html_url: 'https://github.com/kyle-richardson',
  login: 'kyle-richardson',
  followers: 2,
  following: 4,
  bio: 'i live in fort worth.  stuff stuff'
} */

function addCard(obj) {
  //instantiate
  let topDiv = document.createElement('div');
  let img = topDiv.appendChild(document.createElement('img'));
  let cardDiv = topDiv.appendChild(document.createElement('div'));
  let h3 = cardDiv.appendChild(document.createElement('h3'));
  let userName = cardDiv.appendChild(document.createElement('p'));
  let location = cardDiv.appendChild(document.createElement('p'));
  let profile = cardDiv.appendChild(document.createElement('p'));
  let anchor = profile.appendChild(document.createElement('a'));
  let followers = cardDiv.appendChild(document.createElement('p'));
  let following = cardDiv.appendChild(document.createElement('p'));
  let bio = cardDiv.appendChild(document.createElement('p'));

  //add classes and attributes
  topDiv.classList.add('card');
  cardDiv.classList.add('card-info');
  h3.classList.add('name');
  userName.classList.add('username');
  img.setAttribute('src', `${obj.avatar_url}`);
  anchor.setAttribute('href', `${obj.html_url}`);

  //add text content
  h3.textContent = `${obj.name}`;
  userName.textContent = `${obj.login}`;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = `Profile: `;
  anchor.textContent = `${obj.html_url}`;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

  return topDiv;
}

