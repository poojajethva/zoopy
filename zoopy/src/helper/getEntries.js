const getEntries = (arr, start) => {
  let end = start + 10;
  const data = arr.filter((a, i) => i >= start && i < end);
  return { data: data, nextStart: end };
};

export const getTotalPages = (totalCount, pageSize = 10) => {
  return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
};

export const getSearchedQuery = (arr, query) => {
    return arr.filter((a, i) => a.postal_code === query);
}

export const removeUnavailableData = (arr) => {
    return arr.filter((a) => !!a.postal_code);
}

export default getEntries;
