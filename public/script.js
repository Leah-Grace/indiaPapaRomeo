//REFERENCE MERN2 EXPRES
//show PCA Profile
function showPCAProfile() {
  const input = document.getElementById("showPCAProfileInput").value;
  console.log(`Show PCA Profile`);

  //show the profile
  //LATER >>> then render it on different page
  axios.get("/getone/" + input).then(response => {
    document.getElementById("showPCAProfile").innerHTML = JSON.stringify(
      response.data
    );
    console.log(typeof response.data);
    console.log(response.data);
  });
}

function showAll() {
  axios.get("/getall").then(res => {
    document.getElementById("PCAList").innerHTML = JSON.stringify(res.data);
  });
}
