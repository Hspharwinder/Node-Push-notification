const express = require('express')
const webpush = require('web-push');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const vapidKey = webpush.generateVAPIDKeys();
    res.send(vapidKey);
})
console.log("vapidKey ******** ", webpush.generateVAPIDKeys());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


// Step 1: npm i web-push "web-push": "^3.4.5"
// Step 2: work in angular project