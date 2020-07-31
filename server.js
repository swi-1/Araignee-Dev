const express = require('express');
const connectDB = require('./config/db');
const { use } = require('./routes/api/auth');

const app = express();

connectDB();


// init middleware
app.use(express.json({extended:false}))

app.get('/', (req,res) => res.send("Api lancé"));


// Define Routes

app.use('/api/users', require('./routes/api/users'))
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server lancé port ${PORT}`))