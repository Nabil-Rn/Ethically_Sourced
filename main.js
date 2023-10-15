document.addEventListener(`click`, e => {
    const origin = e.target.closest(`a`);
    
    if (origin) {
      console.clear();
      console.log(`You clicked ${origin.href}`);
    }
  });


const request = require('request');
const body = {
    threatInfo: {
        threatTypes: ["SOCIAL_ENGINEERING", "MALWARE"],
        platformTypes: ["ANY_PLATFORM"],
        threatEntryTypes: ["URL"],
        threatEntries: [{url: origin.href}]
    }
}

const options = {
    method: "POST",
    url: "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyDy8guNmoR0XynEQRLojTUdtVP8XgO7gRY",
    json: body
}

console.log(options);

request(options,
    function(err, res, data) {
        console.log('data', data)
        if (!err && res.statusCode == 200) {
            console.log(data);
        }
    }
)
/*
POST https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyDy8guNmoR0XynEQRLojTUdtVP8XgO7gRY HTTP/1.1
    Content-Type: application/json
*/


