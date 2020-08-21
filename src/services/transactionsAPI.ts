import { v4 as uuid } from 'uuid';

export interface ITransferData {
  sentAt: Date;
  plan: string;
  sent: number;
  received: number;
  from: string;
  to: string;
}

export interface ITransferRecord {
  id: string;
  created_at: Date;
  data: ITransferData;
}

export const post = (newTransaction: ITransferData): ITransferRecord => {
  const storedTransactions = get();

  const formattedTransaction = {
    id: uuid(),
    created_at: new Date(Date.now()),
    data: {
      ...newTransaction
    }
  }

  if(storedTransactions){
    const newStoredTransactions = [...storedTransactions, formattedTransaction];
    localStorage.setItem('@DM/transactions', JSON.stringify(newStoredTransactions));
  } else {
    const newTransactionsStore = [ formattedTransaction ];
    localStorage.setItem('@DM/transactions', JSON.stringify(newTransactionsStore));
  }

  return formattedTransaction;
}

export const get = () => {
  const transactionStore = localStorage.getItem('@DM/transactions');

  if(transactionStore){
    return JSON.parse(transactionStore);
  }
};

/*
export const put = (books: IBook[]) => {
  localStorage.removeItem('Sheetgo/Books')
  localStorage.setItem('Sheetgo/Books', JSON.stringify(books));
};

// Update a single book from local storage
export const patch = (updatedBook: IBook) => {
  // Searchs for the given book to update it
  const storedBooks = get();
  const updatedStoredBooks = storedBooks.map( (book: IBook) => {
    if(book.id === updatedBook.id){
      return {...updatedBook};
    } else {
      return book;
    }
  })

  localStorage.setItem('Sheetgo/Books', JSON.stringify(updatedStoredBooks));
} */
