//-- server-side-code -- //

const express  = required('express');
const axios = required('axios');

const app = express();
const port = 3000;

app.use(express.static('public'));

