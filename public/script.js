//REFERENCE MERN2 EXPRES
//show PCA Profile
function showPCAProfile() {
  const input = document.getElementById('showPCAProfileInput').value;
  console.log(`Show PCA Profile`);

  //show the profile
  //LATER >>> then render it on different page
  axios.get('/getone/' + input).then((response) => {
    document.getElementById('showPCAProfile').innerHTML = JSON.stringify(
      response.data
    );
    console.log(typeof response.data);
    console.log(response.data);
  });
}

function showAll() {
  axios.get('/getall').then((res) => {
    let list = JSON.stringify(res.data);
    document.getElementById('PCAList').innerHTML = list;
  });
}

//POST REQUEST
/*
function registerPost() {
  axios.post("/api").then( res => 
const pcaFirstName = document.getElementById("fname").value;
    //derp
}
*/
