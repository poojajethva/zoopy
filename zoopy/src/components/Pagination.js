import React, { useEffect } from "react";
import "./Pagination.css";
import { useDataLayerValue } from "../datastore/DataLayer";
import { getTotalPages } from "../helper/getEntries";

const Pagination = () => {
  const [{ postalData, totalPages, currentPage, backToResults, nextStart }, dispatch] =
    useDataLayerValue();
  useEffect(() => {
    let _totalPages = getTotalPages(postalData.length - 1);
    dispatch({
      type: "SET_TOTAL_PAGES",
      totalPages: _totalPages,
    });
  }, [postalData]);

  const prevPage = (e) => {
    let _prevVal = currentPage !== 1 ? currentPage - 1 : currentPage;
    dispatch({
      type: "SET_CURRENT_PAGE",
      currentPage: _prevVal,
    });
    dispatch({
      type: "SET_NEXT_START",
      nextStart: nextStart - 10,
    });
  };

  const nextPage = (e) => {
    let _nextVal = currentPage !== totalPages ? currentPage + 1 : currentPage;
    dispatch({
      type: "SET_CURRENT_PAGE",
      currentPage: _nextVal,
    });
    dispatch({
      type: "SET_NEXT_START",
      nextStart: nextStart + 10,
    });
  };

  const backResults = (e) => {
    dispatch({ type: "SET_BACK_TO_RESULTS", backToResults: false });
  }

  return (
    <div className="pagination">
      {!backToResults ? (
        <>
          <button className="btn" id="prev-page" onClick={(e) => prevPage(e)}>
            &lt;
          </button>
          <div>
            <span id="current-page">{currentPage}</span> of{" "}
            <span id="total-pages">{totalPages}</span>
          </div>
          <button className="btn" id="next-page" onClick={(e) => nextPage(e)}>
            &gt;
          </button>
        </>
      ) : (
        <button className="btn back-results" id="back-results" onClick={(e) => backResults(e)}>
            Back to results
        </button>
      )}
    </div>
  );
};

export default Pagination;
