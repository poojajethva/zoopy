import postalData from "../data/postalData";

export const initialState = {
  postalData: postalData,
  dataChunk: [],
  nextStart: 2,
  totalPages: 1,
  currentPage: 1,
  searchTerm: "",
  mapObj: {},
  errorMsg: false,
  viewport: {},
  showPopup: false,
  popupObj: {},
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
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case "SET_POSTAL_DATA":
      return {
        ...state,
        postalData: action.postalData,
      };
    case "SET_MAP_OBJ":
      return {
        ...state,
        mapObj: action.mapObj,
      };
    case "SET_ERROR_MSG":
      return {
        ...state,
        errorMsg: action.errorMsg,
      };
    case "SET_POPUP_OBJ":
      return {
        ...state,
        popupObj: action.popupObj,
      };
    case "SET_SHOW_POPUP":
      return {
        ...state,
        showPopup: action.showPopup,
      };
    case "SET_VIEW_PORT":
      return {
        ...state,
        viewport: action.viewport,
      };

    default:
      return state;
  }
};
