import React from 'react';
import { useTransfer } from 'src/hooks/transfer';

import { AiOutlineCalendar } from 'react-icons/ai';
import { FiDollarSign, FiShuffle, FiFileText, FiHelpCircle } from 'react-icons/fi';

import MiniFlag from 'src/components/MiniFlag';

import {
  Container,
  PaymentDetails,
  DeliveryDetails,
  ConversionDetails,
  ArrowIcon,
  PaymentInfo,
  ConfirmButton,
} from './styles';

import { BsArrowRightShort } from 'react-icons/bs';
import ToastContainer from '../ToastContainer';

const Details: React.FC = () => {
  const { transfer, confirmTransfer, planOptions } = useTransfer();

  return (
    <Container>
      <PaymentDetails>
        <p>Payment Details</p>
        <div>
          <ConversionDetails>
            <span>{ transfer.sent && transfer.sent.toLocaleString('en-US',{minimumFractionDigits: 2}) }</span>
            <div>
              <MiniFlag
                id={transfer.initialCurrency}
                size={12}
              />
              <p>{transfer.initialCurrency}</p>
            </div>
          </ConversionDetails>
            <ArrowIcon>
              <BsArrowRightShort />
            </ArrowIcon>
          <ConversionDetails>
            <span>{ transfer.received && transfer.received.toLocaleString('en-US',{minimumFractionDigits: 2}) }</span>
            <div>
              <MiniFlag
                id={transfer.toConvertCurrency}
                size={12}
              />
              <p>{transfer.toConvertCurrency}</p>
            </div>
          </ConversionDetails>
        </div>

      </PaymentDetails>

      <DeliveryDetails>
        <div>
          <PaymentInfo>
            <div>
              <AiOutlineCalendar />
              <span>Delivery</span>
            </div>
          { transfer.sentAt && transfer.plan ?
            <p>
              <span>
                {transfer.sentAt.getDate()} {transfer.sentAt.toLocaleString('en-US', { month: 'long' })}
              </span> till {planOptions[transfer.plan]} pm
            </p> :
            <p> No selected plan</p> }
          </PaymentInfo>

          <PaymentInfo>
            <div>
              <FiDollarSign />
              <span>Conversion rate</span>
            </div>
            <p>{transfer.sent.toLocaleString('en-US',{minimumFractionDigits: 2})}</p>
          </PaymentInfo>

          <PaymentInfo>
            <div>
              <FiShuffle />
              <span>Recipient gets</span>
            </div>
            <p>
              {transfer.received.toLocaleString('en-US',{minimumFractionDigits: 2})}
            </p>
          </PaymentInfo>
        </div>

        <ToastContainer className='errorMessages' />
        <ConfirmButton onClick={confirmTransfer}>Confirm</ConfirmButton>
      </DeliveryDetails>
    </Container>
  );
};

export default Details;
