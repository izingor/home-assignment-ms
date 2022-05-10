const INITIAL_STATE = {
    photos: {
        currPage: null,
        nextPage: null
    },
    sortBy: {
        sortBy: 'likes',
        order: 'desc'
    },
    filterBy: {
        category: null,
        page: 0
    },
    categories: null
};


export function photoReducer(state = INITIAL_STATE, action) {


    switch (action.type) {
        case 'SET_PHOTOS':
            return {
                ...state,
                photos: action.photos
            };
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: {...action.filterBy}
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.categories
            };

        default:

            return state;
    }
}