const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});