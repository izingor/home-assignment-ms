import express from 'express';
import { photoController } from './api/photo.controller.js';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true,
};
app.use(cors(corsOptions));

app.get('/api/photos', async (req, res) => {
    try {
        const photos = await photoController.getPhotos(req.query);
        res.send(photos);
    } catch (err) {
        console.log('Got error: ', err.message);
        res.status(500).send('Error while fetching your data');
    }
});


app.get('/api/categories', async (req, res) => {
    try {
        const categories = await photoController.setCategories();
        res.send(categories);
    } catch (err) {
        console.log('Got error: ', err.message);
        res.status(500).send('Error while fetching categories');
    }
});

app.listen(3030,
    () => console.log('Server listening on port 3030'));
