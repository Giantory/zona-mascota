const app = require('./src/app');
const connectToDb = require('./src/config/database');
const PORT = 3001;

connectToDb();


app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});