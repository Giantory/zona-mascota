require('dotenv').config();

const app = require('./src/app');
const connectToDb = require('./src/config/database');
const PORT = process.env.PORT;

connectToDb();

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});