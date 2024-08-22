var express = require('express');
var app = express();
const usermodal = require('./databaseSetup');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', async function(req, res) {
  const { email, name, password, addressLine1, addressLine2, city, state, zip, country } = req.body;
  
  const emailValidation = await usermodal.findOne({ email: email });
  if (emailValidation) {
    return res.status(400).json({ message: 'Email is already in use.' });
  }
  
  const data = await usermodal.create({
    email: email,
    name: name,
    password: password,
    address1: addressLine1,
    address2: addressLine2,
    city: city,
    province: state,
    postalcode: zip,
    country: country,
  });
  
  res.json(data); 
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
