# ProBioPage
![My Profile overview](./images/1st.gif)

### This is my updated version of Portfolio website. I still can remember the first time when I was using the bootstrap create my portfolio website, I felt it was too hard and struggling with all the styples not follow my instruction. Now I feel, Bootstrap is a very useful tool, it does help to make developer's life more easier.

### This time, I am adding a little more things I was learning during the recently classes. 
- Weather: this is a very useful tool, I ant to make my site not only to show people about my work, I also want to make my sitr as a useful tool.
    I created my own API key at website: https://aqicn.org/api/

```javascript
function callweather() {
       
    var queryURL = "https://api.waqi.info/feed/here/?token=12f820d56fa3fd40bd4af15eae5097c9875e7bc5";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response)
        var weatherTemp = response.data.iaqi.t.v;
        console.log(weatherTemp);
        //Different ranges for AQI (air quality index)
       
        $(".weather").append(JSON.stringify(response.data.iaqi.t.v));
        //$("#pollen").append(notes);
        
    })
}
callweather()
```

- Next, I need also to add my professional links to my site, then people will know more about me. 
    - linkedIn is one of the most popular professional network site.
    - Github is the world's leading software development platform, and developers and recruiters can find my projects and codes on my Github Account;

![Weather, LinkedIn and Github](./images/LinkedInGithubImg.png)

- Third, I want to gather people's message they submit to me, this is a good way to keep me the visitors connected and gather opinions from visitors. The Firebase wasn't working at the beginning, it was saying the permission denied. I did some research and solved the problem. I change the security rule to public. This seems a very easy modification, but this is also a learning process, each small correction is a big learning steps for me.

``` javascript
var firebaseConfig = {
    apiKey: "AIzaSyCgEL1kMTluWvQHhFZvsk06JhtJMy2dek4",
    authDomain: "profile-ebdd6.firebaseapp.com",
    databaseURL: "https://profile-ebdd6.firebaseio.com",
    projectId: "profile-ebdd6",
    storageBucket: "profile-ebdd6.appspot.com",
    messagingSenderId: "442690875353",
    appId: "1:442690875353:web:a8ccf7ed49e6e1ae0273c8",
    measurementId: "G-N6LP6CR2K1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var database = firebase.database();
  $("#add-visitor-btn").on("click", function(event) {
      event.preventDefault();

      var visitorName = $("#nameInput").val().trim();
      var visitorEmail = $("#emailInput").val().trim();
      var visitorMessage = $("#messageText").val().trim();
  

  var newVisitor = {
    name: visitorName,
    email: visitorEmail,
    message: visitorMessage
  }

  database.ref().push(newVisitor);

  console.log(newVisitor.name);
  console.log(newVisitor.email);
  console.log(newVisitor.message);

  $("#nameInput").val("");
  $("#emailInput").val("");
  $("#messageText").val("");

});

database.ref().on("child_added", function(childSnapshot){

console.log(childSnapshot.val());

var visitorName = childSnapshot.val().name;
var visitorEmail = childSnapshot.val().email;
var visitorMessage = childSnapshot.val().message;

console.log(visitorName);
console.log(visitorEmail);
console.log(visitorMessage);

})
```

![Firebase backend data](./images/firebaseDate.png)

### Technologies I used in this project:
- HTML
- CSS
- Bootstrap
- Javascript
- API key
- Firebase
- FontAwesome