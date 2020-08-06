/**
 * Local Storage Categories Service.
 * Manipulate the categories object in local storage.
 */
export const post = () => {
  const categoryStore = {
    uncategorized: 'Uncategorized',
     wantToRead: 'Want to Read',
     reading: 'Currently reading',
     read: 'Read',
  }

  localStorage.setItem('Sheetgo/Categories', JSON.stringify(categoryStore));
};

export const get = () => {
  const categoryStore = localStorage.getItem('Sheetgo/Categories');

  if(categoryStore){
    return JSON.parse(categoryStore);
  }
};
