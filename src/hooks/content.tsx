import React, { createContext, useState, useContext } from 'react';

interface ContentContextData {
  selectedContent: string;
  setSelectedContent(string): void;
}

const ContentContext = createContext<ContentContextData>({} as ContentContextData);

export const ContentProvider: React.FC = ({ children }) => {
  const [ selectedContent, setSelectedContent] = useState('SendMoney');

  return (
    <ContentContext.Provider
      value={{ selectedContent, setSelectedContent }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export function useContent(): ContentContextData {
  const context = useContext(ContentContext);

  return context;
}
