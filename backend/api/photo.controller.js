import { photoService } from './photo.service.js';


async function getPhotos(queryParams) {

    try {
        const photos = await photoService.query(queryParams);
        return photos;
    } catch (err) {
        throw err;
    }
};

async function setCategories() {

    try {
        const categories = photoService.getCategories();
        return categories;
    } catch (err) {
        throw err;
    }
}


export const photoController = {
    getPhotos,
    setCategories
};
