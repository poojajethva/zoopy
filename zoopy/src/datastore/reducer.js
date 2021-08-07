import postalData from "../data/postalData";

export const initialState = {
  postalData: postalData,
  dataChunk: [],
  nextStart: 2,
  totalPages: 1,
  currentPage: 1,
  searchTerm: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA_CHUNK":
      return {
        ...state,
        dataChunk: action.dataChunk,
      };
    case "SET_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.totalPages,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET_NEXT_START":
      return {
        ...state,
        nextStart: action.nextStart,
      };
      case "SET_SEARCH_TERM":
        return{
          ...state,
          searchTerm: action.searchTerm
        }
    default:
      return state;
  }
};
