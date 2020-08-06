 /**
  * Receives:
  * @param {*} data - Array of objects of type IBook
  * @param {*} category - String with the Category to filter
  * @param {*} name - Optional name to filter
  * If there is no name to filer, only filters by category.
  */
export default function filterBy(data, category, name){
  let filteredData = data;

  if(category){
    filteredData = data.filter((data) => data.category === category);
  }

  if(name){
    filteredData = filteredData.filter((data) => data.title.includes(name));
  }

  return filteredData;
};
