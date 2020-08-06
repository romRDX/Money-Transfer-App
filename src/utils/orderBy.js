/**
 * Receives:
 * @param {*} data - Array of Comments of type IComment or Books of type IBook
 * @param {*} type - Type of sorting (by date, alphabetical)
 * @param {*} direction - If its Ascending or Descending
 * There is an specific process for each combination of type and direction.
 */

export default function orderBy(data, type, direction){

  const typeDirection = type + '/' + direction;

  /* Array.sort : Compare two elements (a,b), if the result is negative, the first one
      *  is placed before the second one.
      *  If the result is positive the first element will be placed after the second one.
      *  To reverse the order just exchange positions with (a,b).
      */
  switch(typeDirection){

    case 'DATE/DESC': {
      const sortedArray = data.slice().sort((a, b) => b.created_at - a.created_at);
      return sortedArray;
    }

    case 'DATE/ASC': {
      const sortedArray = data.slice().sort((a, b) => a.created_at - b.created_at);
      return sortedArray;
    }

    case 'A-Z/DESC': {
      const sortedArray = data.slice().sort(function(a, b) {
        return b.title.localeCompare(a.title);
      });

      return sortedArray;
    }

    case 'A-Z/ASC': {
      const sortedArray = data.slice().sort(function(a, b) {
        return a.title.localeCompare(b.title);
      });

      return sortedArray;
    }

    default: {
      return data;
    }
  }
};
