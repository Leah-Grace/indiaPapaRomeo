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
    let list = JSON.stringify(
      res.data.map((pca) => pca.pcaFirstName + ', ' + pca.pcaLastName)
    );
    document.getElementById('PCAList').innerHTML = list;
  });
}

//POST REQUEST

function registerPost() {
  const pcaFirstName = document.getElementById('fname').value;
  const pcaLastName = document.getElementById('lname').value;
  const pcaEmail = document.getElementById('email').value;
  const pcaPhonePrimary = document.getElementById('pcaPhonePrimary').value;
  const pcaPhoneSecondary = document.getElementById('pcaPhoneSecondary').value;
  const pcaCity = document.getElementById('pcaCity').value;
  const pcaState = document.getElementById('pcaState').value;
  const pcaZipcode = document.getElementById('pcaZipcode').value;
  const pcaExperience = document.getElementById('pcaExperience').value;
  const pcaBio = document.getElementById('pcaBio').value;
  const pcaTravelDistanceMiles = document.getElementById(
    'pcaTravelDistanceMiles'
  ).value;
  const pcaHoursPerWeek = document.getElementById('pcaHoursPerWeek').value;
  const pcaGender = document.querySelector('input[name="gender"]:checked')
    .value;
  const payload = {
    pcaFirstName,
    pcaLastName,
    pcaEmail,
    pcaPhonePrimary,
    pcaPhoneSecondary,
    pcaCity,
    pcaState,
    pcaZipcode,
    pcaExperience,
    pcaBio,
    pcaTravelDistanceMiles,
    pcaHoursPerWeek,
    pcaGender
  };
  axios.post('/api', payload).then((res) => console.log(res.data));
}
