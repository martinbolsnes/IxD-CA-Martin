const charitiesUrl = '';

async function getCharities() {
  try {
    const repsonse = await fetch(
      'https://noroffcors.herokuapp.com/https://jsonkeeper.com/b/CH8F'
    );
    const jsonFromServer = await repsonse.json();
    const charitiesResults = jsonFromServer;
    console.log(charitiesResults);

    charitiesResults.forEach(function (value) {
      document.querySelector('.charityCards').innerHTML += `
        <div class="card">
        <img class="card_img" src="${value.image}">
        <h3>${value.name}<h3>
        <a id="readMoreBtn" href="orgSite.html?id=${value.id}">Read more and donate</a>
        </div>`;
    });
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

getCharities(charitiesUrl);

const signUpBtn = document.querySelector('.signUpBtn');
const signUpCta = document.querySelector('.signUpCTA');
const exploreMoreBtn = document.querySelector('.exploreMoreBtn');
const howItWorksBtn = document.querySelector('.howItWorksBtn');
signUpBtn.onclick = function () {
  location.href = 'signUp.html';
};
signUpCta.onclick = function () {
  location.href = 'signUp.html';
};

howItWorksBtn.onclick = function () {
  location.href = 'howItWorks.html';
};
