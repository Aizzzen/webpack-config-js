const SET_REPOS = "SET_REPOS"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const initialState = {
    items: [],
    isFetching: true,
    count: 0,
    currentPage: 1,
    perPage: 10,
    totalCount: 0
}


export default function reposReducer(state = initialState, action) {
    switch(action.type) {
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state
    }
}

export const setRepos = (repos) => ({type: SET_REPOS, payload: repos}) 
// получение данных
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
// подгрузка
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page})