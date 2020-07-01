const express = require('express');
const mongoose = require('mongoose');
const exhbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');

const PORT = process.env.PORT || 3000 ;

const app = express();
const hbs = exhbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(todoRoutes);

const cfg = {
    username: 'user',
    password: 'pommes12345',
    dbname: 'todos'
}

async function start() {
    try {
        await mongoose.connect(`mongodb+srv://${cfg.username}:${cfg.password}@hentacle.uj6hp.mongodb.net/${cfg.dbname}?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology:true 
        })
    } catch (error) {
        console.log(error);
        
    }
}

app.listen(PORT, () => {
    console.log('Server has been started...');
    
});

start();