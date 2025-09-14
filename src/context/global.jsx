import React, {createContext, use, useContext} from "react";
import { useReducer } from "react";

const GlobalContext = createContext();

const baseUrl = "https://api.jikan.moe/v4";

const LOADING = "LOADING";
const GET_SEASONS = "GET_SEASONS";
const GET_UPCOMING = "GET_UPCOMING";
const GET_AIRING = "GET_AIRING";
const GET_PICTURES = "GET_PICTURES";
const SET_SEARCH = "SET_SEARCH";
const CLEAR_SEARCH = "CLEAR_SEARCH";

const reducer = (state, action) => {
    switch(action.type) {
        case LOADING:
            return {...state, loading: true};
        case GET_SEASONS:
            return {...state, SeasonsAnime: action.payload, loading: false};   
        default:
            return state;
    }
}
export const GlobalContextProvider = ({children}) => {
    const initialState = {
        SeasonsAnime : [],
        UpcomingAnime : [],
        airingAnime : [],
        pictures : [],
        isSearch: false,
        searchResults: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const getSeasonsAnime = async() => {
        dispatch({type: LOADING});
        const response = await fetch(`${baseUrl}/seasons`);
        const data = await response.json();
        dispatch({type: GET_SEASONS, payload: data.data});
    }
    const getSeasonsNow = async() => {
        dispatch({type: LOADING});
        const response = await fetch(`${baseUrl}/seasons/now`);
        const data = await response.json();
        dispatch({type: GET_SEASONSNOW, payload: data.data});
    }
    React.useEffect(() => {
        getSeasonsAnime();
    }, []);

    return (
        <GlobalContext.Provider value={{
            ...state,
        }}>
            {children}
        </GlobalContext.Provider>
        )
}
export const useGlobalContext = () => {
    return useContext(GlobalContext);
}