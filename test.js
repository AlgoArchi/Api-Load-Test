const loadtest = require('loadtest');

const options = {
    url: 'http://ec2-44-202-107-112.compute-1.amazonaws.com:3001/api/v1/auth/verify', // replace with your API endpoint URL
    method: 'POST', // the HTTP method used by your API endpoint
    maxRequests: 1600, // the maximum number of requests to be sent during the test
    concurrency: 1600, // the number of concurrent users to simulate
    body: { // replace with the payload or data that you want to send in the request
      accessToken: "ya29.a0Ael9sCPxIrgl6RXETRBO5OWFO5EaIjDZSjAvk0HbisSwcBloPEHeqN2V9pYNzhPVr6xb2P0cFdrW-NKkxfQLcXLxPKl53XL1EwuGd0ZJjRNBgWLq4_4DsRYxKVYtHlodPy2HpWIKrFLFcJoCUgvZOKWXWquObrEaCgYKAeMSARESFQF4udJhWd4bvn8dnkXrbJnqifamYA0166"
    },
    headers: { // add headers if needed
      'Content-Type': 'application/json'
    }
  };

loadtest.loadTest(options, function(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
    console.log(`CCU: ${result.rps * result.totalTimeSeconds}`);
  }
});
