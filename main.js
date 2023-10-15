const safeBrowsingApiKey = 'AIzaSyDy8guNmoR0XynEQRLojTUdtVP8XgO7gRY';
const safeBrowsingURL = 'https://safebrowsing.googleapis.com/v4/threatMatches:find?key=' + safeBrowsingApiKey;
const test = 'https://google.com';

//https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyDy8guNmoR0XynEQRLojTUdtVP8XgO7gRY

// getting the url
document.addEventListener('click', (e) => {
    const urlToCheck = e.target.closest('a');

    if (urlToCheck) {
        console.clear();
        console.log(`You clicked ${urlToCheck.href}`);

      const url = urlToCheck.href;

      // Request body
      const requestObject = {
        client: {
          clientVersion: '1.0.0'
        },
        threatInfo: {
          threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE'],
          platformTypes: ['ANY_PLATFORM'],
          threatEntryTypes: ['URL'],
          threatEntries: [{url: url}]
        }
      };

      // Make the API request
      fetch(safeBrowsingURL,  {
          mode: 'cors',
        method: 'POST',
          crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestObject),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data here (contains threat information)
          console.log(data);

        })
        .catch((error) => {
          console.error('The api error IS THIS:', error);
        });
    }

  });