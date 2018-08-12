const express = require('express');
const app = express();
const path = require('path');

app.listen(5000, (err)=>{
    if(err) {
        console.log('Ooops...');
    }else {
        console.log('Test Listening');
    }
});

app.use(express.static('public'));
express.static('public');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// app.get('/frm-events', (req, res) => {
//     res.sendFile(path.join(__dirname, 'framework/events.html'));
// });


