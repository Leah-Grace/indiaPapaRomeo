//REFERENCE MERN2 EXPRES
//show PCA Profile
function showPCAProfile() {
  //fix input to _id
  console.log("let's party");
  const input = document.getElementById("showPCAProfileInput").value;
  console.log(`Show PCA Profile`);

  //show the profile then render it on different page?
  axios.get("/getone/" + input).then(response => {
    document.getElementById("showPCAProfile").innerHTML = response.data;
  });
}
