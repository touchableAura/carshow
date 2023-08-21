import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => 
    res.send(`car show application is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`your car show app is running on port ${PORT}`)
)
