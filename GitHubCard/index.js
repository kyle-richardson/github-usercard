
// const axios = require('axios');
// axios.get('https://api.github.com/users/kyle-richardson');

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const kyle = {
  name: 'Kyle Richardson',
  location: 'Fort Worth, TX',
  img: '../assets/githublogo.png',
  address: 'https://github.com/kyle-richardson',
  username: 'kyle-richardson',
  followers: [
    'bobby',
    'fred'
  ],
  following: 'suzie',
  bio: 'i live in fort worth.  stuff stuff'
}

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
  img.setAttribute('src', `${obj.img}`);
  anchor.setAttribute('href', `${obj.address}`);

  //add text content
  h3.textContent = `${obj.name}`;
  userName.textContent = `${obj.username}`;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = `Profile: `;
  anchor.textContent = `${obj.address}`;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

  return topDiv;
}

const container = document.querySelector('.container');
container.appendChild(addCard(kyle));
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
