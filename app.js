
const express = require("express");
const app = express();
const cookieSession = require('cookie-session');

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(cookieSession({
  secret: 'barranquilla inmortal',
  maxAge: 3 * 60 * 1000
}));

app.get("/", (req, res) => { 
  req.session.views = (req.session.views || 0) + 1; 
  app.locals.totalVisits = (app.locals.totalVisits || 0) + 1; 

  res.render("index", { totalVisits: app.locals.totalVisits, totalSession: req.session.views});  
});

app.listen(3000, () => console.log('Listening on port 3000!'));