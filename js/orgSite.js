const signUpBtn = document.querySelector('.signUpBtn');
const orgSitedonateBtn = document.getElementById('orgSitedonateBtn');
const addToListBtn = document.querySelector('.addToListBtn');

signUpBtn.onclick = function () {
  location.href = 'signUp.html';
};

orgSitedonateBtn.onclick = function () {
  this.scrollIntoView('.oneTimeDonation');
};

addToListBtn.onclick = function () {
  location.href = 'profile.html';
};

co; /* nst queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getCharities(charityId) {
  try {
    const response = await fetch(
      'https://noroffcors.herokuapp.com/https://jsonkeeper.com/b/CH8F' +
        charityId
    );
    const jsonResults = await response.json();
    const charitiesResults = jsonResults;
    console.log(charitiesResults);

    document.title = charitiesResults.name;

    document.querySelector('.orgSection').innerHTML = `<div class="orgContainer"
    <img src="${charitiesResults.image}">
    <h2>${charitiesResults.name}</h2>
    <p>${charitiesResults.description}</p>
    <p>${charitiesResults.link}</p>
    <p>${charitiesResults.number}</p>
    </div>`;
  } catch (error) {
    document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    );
  } finally {
    setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000);
  }
}

getCharities(id); */
