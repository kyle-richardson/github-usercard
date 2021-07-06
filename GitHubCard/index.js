const container = document.querySelector('.container');
const cards = document.querySelector('.cards');
const followersArray = [];

//pushing individually in case I want to remove this portion later
followersArray.push('tetondan');
followersArray.push('dustinmyers');
followersArray.push('justsml'); 
followersArray.push('luishrd'); 
followersArray.push('bigknell'); 


axios
    .get(`https://api.github.com/users/kyle-richardson`)
    .then( response => {
        cards.appendChild(addCard(response.data));
        return axios.get(`https://api.github.com/users/kyle-richardson/followers`);
    })
    .then (response => {
      response.data.forEach(ele => followersArray.push(ele.login));
      followersArray.forEach(ele => {
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
  let profile = cardDiv.appendChild(document.createElement('span'));
  let anchor = cardDiv.appendChild(document.createElement('A'));
  let followers = cardDiv.appendChild(document.createElement('p'));
  let following = cardDiv.appendChild(document.createElement('p'));
  let repos = cardDiv.appendChild(document.createElement('p'));
  let bio = cardDiv.appendChild(document.createElement('p'));
  
  //add classes and attributes
  topDiv.classList.add('card');
  cardDiv.classList.add('card-info');
  h3.classList.add('name');
  userName.classList.add('username');
  img.setAttribute('src', `${obj.avatar_url}`);
  anchor.href = `${obj.html_url}`;
 
  //add text content
  h3.textContent = `${obj.name}`;
  userName.textContent = `${obj.login}`;
  !obj.location 
    ? location.style.display = "none" 
    : location.textContent = `Location: ${obj.location}`;
  profile.textContent = `Profile: `;
  anchor.text = `${obj.html_url}`;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  repos.textContent = `Repositories: ${obj.public_repos}`;
  !obj.bio 
    ? bio.style.display = "none" 
    : bio.textContent = `Bio: ${obj.bio}`;

    //other styling and DOM additions outside MVP
    topDiv.classList.add('color-background')
  
  
  return topDiv;
}


// const textArray = document.querySelectorAll('text')
// textArray.forEach(ele => console.log(ele))

const body = document.querySelector('body')

const colorOne = '#9666a5 0%';
const colorTwo = '#1fc8db 51%';
const colorThree = "#2cb5e8 75%";

body.style.background = `linear-gradient(141deg, ${colorOne}, ${colorTwo}, ${colorThree})`