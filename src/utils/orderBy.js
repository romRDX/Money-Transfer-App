export default function orderBy(data, type, direction){

  const typeDirection = type + '/' + direction;

  switch(typeDirection){

    case 'DATE/DESC': {
      const sortedArray = data.slice().sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      return sortedArray;
    }

    case 'DATE/ASC': {
      const sortedArray = data.slice().sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      return sortedArray;
    }

    case 'VALUE/DESC': {
      const sortedArray = data.slice().sort((a, b) => a.data.sent - b.data.sent);

      return sortedArray;
    }

    case 'VALUE/ASC': {
      const sortedArray = data.slice().sort((a, b) => b.data.sent - a.data.sent);

      return sortedArray;
    }

    default: {
      return data;
    }
  }
};
