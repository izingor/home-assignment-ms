import { photoService } from "../../services/photo.service";

export function loadPhotos() {
    return async (dispatch, getState) => {
        try {
            const { filterBy, sortBy } = getState().photoModule;

            const categories = await photoService.getCategories();
            dispatch({ type: 'SET_CATEGORIES', categories });

            const photos = await photoService.query({ ...filterBy, ...sortBy });
            dispatch({ type: 'SET_PHOTOS', photos });
        } catch (err) {
            console.log('err:', err);
        }
    };
}


export function setFilter(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy });
    };
}

export function setSort(sortBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_SORT_BY', sortBy });
    };
}

