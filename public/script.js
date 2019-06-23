//REFERENCE MERN2 EXPRES
//show PCA Profile
function PCAprofile() {
  //fix input to _id
  const input = document.getElementById("insert dynamic user ID");
  console.log(`Show PCA Profile`);

  //show the profile then render it on different page?
  axios.get("/profile/" + input).then(response => {
    document.getElementById("insert spec id").innerHTML = response.data;
  });
}
