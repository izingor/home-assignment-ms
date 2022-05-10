import axios from 'axios';

const PHOTOS_URL = 'http://localhost:3030/api/photos';
const CATEGORIES_URL = 'http://localhost:3030/api/categories';



async function query(queryParams) {
    try {
        const res = await axios.get(PHOTOS_URL, { params: queryParams });
        return res.data;
    } catch (err) {
        console.log('Error while getting your photos, try again later');
    }
}

async function getCategories() {
    try {
        const res = await axios.get(CATEGORIES_URL);
        return res.data
    } catch (err) {
        console.log('Error while getting photo categories, try again later');
    }
}


export const photoService = {
    query,
    getCategories
};