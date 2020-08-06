import React, { createContext, useState, useContext, useCallback } from 'react';
import { uuid } from 'uuidv4';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  description?: string;
  code: string;
}

export interface AlertMessage {
  active: boolean;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
  messages: ToastMessage[];
  alert: AlertMessage;
  addAlert(message: AlertMessage): void;
  removeAlert(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [ messages, setMessages] = useState<ToastMessage[]>([]);
  const [ alert, setAlert] = useState<AlertMessage>({ } as AlertMessage);

  const addToast = useCallback(({ type, description, code }: Omit<ToastMessage, 'id'>) => {
    if(messages.some( message => message.code === code))
      return;

    const id = uuid();

    const toast = {
      id,
      type,
      description,
      code,
    };

    setMessages((state) => [...state, toast]);
  },[messages]);

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  const addAlert = useCallback(({ type, title, message}: AlertMessage)=>{
    setAlert({ active: true, type, title, message});
  },[]);

  const removeAlert = useCallback(() => {
    setAlert({} as AlertMessage);
  },[]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, messages, alert, addAlert, removeAlert }}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}
