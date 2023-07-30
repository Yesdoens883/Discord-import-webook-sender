exports.handler = function (event, context, callback) {
  const info = JSON.parse(event.body).info;

  const fetch = require('node-fetch');
  fetch('https://discord.com/api/webhooks/1135013121799495680/snRqw9Dpbt0tlLxHLmWHpnzcw7ahOS8mQU0lf7CLNH-rV7sn1A78Qf_GqogtUZl2gKkI', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: info })
  })
  .then(response => {
    if (!response.ok) {
      callback(null, {
        statusCode: response.status,
        body: 'Failed to send data to Discord.'
      });
    } else {
      callback(null, {
        statusCode: 200,
        body: 'Data sent to Discord successfully!'
      });
    }
  })
  .catch(error => {
    console.error(error);
    callback(null, {
      statusCode: 500,
      body: 'Failed to send data to Discord.'
    });
  });
};
