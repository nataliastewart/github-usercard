/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/*
axios.get('https://dog.ceo/api/breed/mastiff/images/random/12')
.then(response => {
console.log(response);
response.data.message.forEach( imgSrc => {
  entryPoint.append(DogCard(imgSrc))
})
})
.catch(error => {
console.log("the data was not returned", error)
})*/

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

const followersArray = [
  "joowoonk",
  "mtruj013",
  "imriven",
  "mrsimpson3000",
  "devjaymoe"
];

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function profileCard(object) {
  //creating elements
  const card = document.createElement("div"),
    imgUser = document.createElement("img"),
    cardInfo = document.createElement("div"),
    userName = document.createElement("h3"),
    pUser = document.createElement("p"),
    pLocation = document.createElement("p"),
    pProfile = document.createElement("p"),
    aGithub = document.createElement("a"),
    pFollowers = document.createElement("p"),
    pFollowing = document.createElement("p"),
    pBio = document.createElement("p");

  //add class-------------------------------
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  userName.classList.add("name");
  pUser.classList.add("username");

  //
  imgUser.src = object.data.avatar_url;
  pLocation.textContent = `Location: ${object.data.location}`;
  pProfile.textContent = "Profile: ";
  aGithub.href = object.data.html_url;
  // console.log(object.html_url);

  pFollowers.textContent = `Followers: ${object.data.followers}`;
  pFollowing.textContent = `Following: ${object.data.following}`;
  pBio.textContent = `Bio: ${object.data.bio}`;
  aGithub.textContent = object.data.html_url;
  userName.textContent = object.data.name;
  pUser.textContent = object.data.login;

  //appending

  card.append(imgUser, cardInfo);
  cardInfo.append(
    userName,
    pUser,
    pLocation,
    pProfile,
    pFollowers,
    pFollowing,
    pBio
  );
  pProfile.append(aGithub);

  return card;
}

const parentCard = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/nataliastewart")
  .then(response => {
    // deal with the response data in here

    parentCard.append(profileCard(response));

    console.log(response);
  })
  .catch(err => {
    // deal with the error in here
    console.log("the data was not returned", err);
  });

// axios
//   .get("https://api.github.com/users/nataliastewart/followers")
//   .then(response => {
//     response.data
followersArray
  .forEach(function(item) {
    axios
      .get(`https://api.github.com/users/${item}`)
      .then(response => {
        parentCard.append(profileCard(response));

        console.log(response);
      })
      .catch(err => {
        console.log("the data was not returned", err);
      });
  })

  .catch(err => {
    console.log("the data was not returned", err);
  });
// });
