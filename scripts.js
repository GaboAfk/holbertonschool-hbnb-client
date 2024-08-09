/*
  This is a SAMPLE FILE to get you started.
  Please, follow the project instructions to complete the tasks.
*/

const countryPath = './countries.json';
const response = fetch(countryPath);
console.log(response);

/* async function populateCountryList() {
  try {
    const response = await fetch(countryPath);
    
    if (!response.ok) throw Error(`country.json error ${response.status}`);

    const data = await response.json();
    console.log(data);

    const countryList = document.getElementById('country-filter');

    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'All';
    countryList.appendChild(allOption);

    data.forEach((country) => {
      const newCountry = document.createElement('option');
      newCountry.value = country.code;
      newCountry.textContent = country.name;
      countryList.appendChild(newCountry);
    });
  } catch (error) {
    console.error('Error loading country data:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateCountryList();
}); */
