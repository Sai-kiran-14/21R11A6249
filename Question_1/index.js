const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;
const url = "http://20.244.56.144/test/companies/";
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE5MDM5MDk2LCJpYXQiOjE3MTkwMzg3OTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU3ZDRkOGIzLTYzOGYtNDBiOS1iY2RkLWMzNDZmYzcwYWQ5ZSIsInN1YiI6IjIxcjExYTYyNDlAZ2NldC5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjU3ZDRkOGIzLTYzOGYtNDBiOS1iY2RkLWMzNDZmYzcwYWQ5ZSIsImNsaWVudFNlY3JldCI6In4gUHVwcGFsYSIsIm93bmVyRW1haWwiOiIyMXIxMWE2MjQ5QGdjZXQuZWR1LmluIiwicm9sbE5vIjoiMjFSMTFBNjI0OSJ9._fS7w-UHiIXpVHTVZ_bHPrXCXJXM_aqgeHjilDCI5oo";  // Replace with the actual Bearer token

axios.get(url, {
    headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`
    }
})
.then((res)=>{
    console.log("success");
})
.catch((err)=>{
    console.log("ERROR");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
