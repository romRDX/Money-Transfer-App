import React, { createContext, useState, useContext, useCallback } from 'react';
import { useToast } from './toast';

export interface ITransfer {
  sentAt: Date | undefined;
  plan: string;
  sent: number;
  received: number;
  initialCurrency: string;
  initialCurrencyFlag: string;
  toConvertCurrency: string;
  toConvertCurrencyFlag: string,
}

interface TransferContextData {
  transfer: ITransfer;
  setTransfer(ITransfer): void;
  confirmTransfer(): void;
  planOptions: {
    Express: number;
    Standard: number;
    WorkingDays: number;
  }
}

const TransferContext = createContext<TransferContextData>({} as TransferContextData);

export const TransferProvider: React.FC = ({ children }) => {
  const { addToast, addAlert } = useToast();

  const planOptions = {
    Express: 12,
    Standard: 6,
    WorkingDays: 8,
  }

  const [ transfer, setTransfer] = useState<ITransfer>({
    sentAt: new Date( Date.now()),
    plan: '',
    sent: 0,
    received: 0,
    initialCurrency: "BRL",
    initialCurrencyFlag: "https://www.countryflags.io/br/flat/64.png",
    toConvertCurrency: "USD",
    toConvertCurrencyFlag: "https://www.countryflags.io/us/flat/64.png",
  });

  const confirmTransfer = useCallback(()=>{
    const {
      sentAt,
      plan,
      sent,
      received,
      initialCurrency,
      toConvertCurrency,
    } = transfer;

    if(!plan)
      addToast({ type: 'error', description: 'Select a plan', code: 'plan'});

    if(sent === 0)
      addToast({ type: 'error', description: 'Type a value to send', code: 'sent'});

    if(!plan || sent === 0)
      return;

    const deliveryDate = new Date();

    if(sentAt)
      deliveryDate.setDate(sentAt?.getDate());
      deliveryDate.setHours(planOptions[plan]);
      deliveryDate.setMinutes(0);
      deliveryDate.setSeconds(0);

    const payment = {
      sentAt: deliveryDate,
      plan,
      sent,
      received,
      from: initialCurrency,
      to: toConvertCurrency,
    }

    addAlert({
      active: true,
      type: 'success',
      title: 'Transaction succeeded!',
      message: JSON.stringify(payment, null, 4)
    });
  },[transfer, planOptions, addToast, addAlert]);

  return (
    <TransferContext.Provider
      value={{ transfer, setTransfer, confirmTransfer, planOptions }}
    >
      {children}
    </TransferContext.Provider>
  );
};

export function useTransfer(): TransferContextData {
  const context = useContext(TransferContext);

  return context;
}
