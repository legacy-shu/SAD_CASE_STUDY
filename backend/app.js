import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("SAD Attendance will be created")
})

app.listen(8080);
