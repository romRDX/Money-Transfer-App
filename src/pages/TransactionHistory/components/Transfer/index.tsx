import React, { } from 'react';

import { ITransferRecord } from 'src/services/transactionsAPI';

import { BsArrowRightShort } from 'react-icons/bs';

import {
  Container,
  DeliveryInfo,
  TransferInfo,
  DateInfo,
  ArrowIcon,
} from './styles';
import MiniFlag from 'src/components/MiniFlag';

interface CustomTransferProps {
  transfer: ITransferRecord;
}

const Transfer: React.FC<CustomTransferProps> = ({ transfer }) => {

  const formatDate = (date: Date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  return (
    <Container>
      <DeliveryInfo>
        <span>Recipient: John Doe</span>
        <span>Plan: { transfer.data.plan }</span>
        <span>Delivery date: { formatDate(transfer.data.sentAt)}</span>
      </DeliveryInfo>

      <TransferInfo>
        <div>
          <span>{transfer.data.sent.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
          <span>
            <MiniFlag id={transfer.data.from} size={15} />
            {transfer.data.from}
          </span>
        </div>

        <ArrowIcon>
          <BsArrowRightShort />
        </ArrowIcon>

        <div>
          <span>{transfer.data.received.toLocaleString('en-US', {maximumFractionDigits: 2})}</span>
          <span>
            <MiniFlag id={transfer.data.to} size={15} />
            {transfer.data.to}
          </span>
        </div>
      </TransferInfo>

      <DateInfo>
        <span>Transaction date:</span>
        <span>{ formatDate(transfer.created_at) }</span>
      </DateInfo>
    </Container>
  );
};

export default Transfer;
