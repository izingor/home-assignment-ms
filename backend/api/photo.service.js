import axios from 'axios';


const categories = [
    'work',
    'flowers',
    'fruits',
    'vegetables',
    'cars',
    'foods',
    'people',
    'toys',
    'dogs',
    'cats',
    'ships',
    'women',
    'man'
];

async function query(queryParams) {

    let photos = {
        currPage: null,
        nextPage: null
    };
    const PAGE_SIZE = 9;
    const sortBy = queryParams.sortBy;
    const order = queryParams.order === 'desc' ? -1 : 1;
    const currPageIdx = queryParams.page * PAGE_SIZE;

    try {
        const res = await axios.get(`http://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${queryParams.category}`);
        //Sending back current page and next page in order to norify the frontend if it can move to the next page
        photos.currPage = res.data.hits.slice(currPageIdx, currPageIdx + PAGE_SIZE);
        photos.nextPage = res.data.hits.slice(currPageIdx + PAGE_SIZE).length;
        photos.currPage.sort((a, b) => (a[sortBy] - b[sortBy]) * (order));
        return photos;

    } catch (err) {
        console.log('Error while getting your photos from pixabay api', err);
        throw (err);
    }
}

function getCategories() {
    return Promise.resolve(categories);
}

export const photoService = {
    query,
    getCategories
};