
 let  axios = require ("axios");

function  personEnrich () {
    const options = {
      method: 'GET',
      url: 'https://api.peopledatalabs.com/v5/person/enrich',
      params: {
        name: 'Abdul%20Rehman%20Sohail',
        first_name: 'Abdul%20Rehman',
        last_name: 'Sohail',
        middle_name: 'Rehman',
        street_address: 'Royal%20Avenue%20streat%20no%202%20pearl%20boys%20hostel%20near%20Comsats%20university%20islamabd',
        locality: 'Islamabad',
        postal_code: '45710',
        min_likelihood: '0',
        titlecase: 'false',
        include_if_matched: 'false'
      },
      headers: {
        Accept: 'application/json',
        'X-API-Key': '2c808478f8ae6eff25c5a24a12aa1a4f7c101bdf27b73ad6cd42424aa066fcc2'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    
    
}

function personIdentify ()
{
const options = {
  method: 'GET',
  url: 'https://api.peopledatalabs.com/v5/person/identify',
  params: {
    name: 'Abdul%20Rehman%20Sohail',
    first_name: 'Abdul',
    last_name: 'Sohail',
    middle_name: 'Rehman',
    street_address: 'Royal%20Avenue%20streat%20no%202%20pearl%20boys%20hostel%20near%20Comsats%20university%20islamabd',
    country: 'Pakistan',
    postal_code: '45710',
    company: 'quecko.inc',
    phone: '%2B923326694310',
    email: 'adrehman11%40gmail.com',
    email_hash: 'adrehman11%40gmail.com',
    profile: 'https%3A%2F%2Fwww.linkedin.com%2Fin%2Fabdul-rehman-sohail-0745b11b3%2F',
    min_likelihood: '0',
    titlecase: 'false',
    include_if_matched: 'false'
  },
  headers: {
    Accept: 'application/json',
    'X-API-Key': '2c808478f8ae6eff25c5a24a12aa1a4f7c101bdf27b73ad6cd42424aa066fcc2'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
}
function personSearch ()
{
const options = {
  method: 'GET',
  url: 'https://api.peopledatalabs.com/v5/person/search',
  params: {
    query: 'abdulRehman',
    size: '1',
    from: '0',
    titlecase: 'false',
    pretty: 'false',
    dataset: 'resume'
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-API-Key': '2c808478f8ae6eff25c5a24a12aa1a4f7c101bdf27b73ad6cd42424aa066fcc2'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
}
function personRetrieve ()
{
const options = {
  method: 'GET',
  url: 'https://api.peopledatalabs.com/v5/person/retrieve/1',
  params: {titlecase: 'false'},
  headers: {
    Accept: 'application/json',
    'X-API-Key': '2c808478f8ae6eff25c5a24a12aa1a4f7c101bdf27b73ad6cd42424aa066fcc2'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
} 
personEnrich()
personIdentify()
personSearch()
personRetrieve()