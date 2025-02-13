const express = require('express');
const app = express();
const aiRoutes = require('./routes/ai.route');

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server is Starting');
});
app.use('/api/ai', aiRoutes);
module.exports = app;