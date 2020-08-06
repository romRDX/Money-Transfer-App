import React, { useState } from 'react';

import { useContent } from 'src/hooks/content';

import { AiOutlineAppstore } from 'react-icons/ai';
import {
  FiCreditCard,
  FiDatabase,
  FiLogOut,
  FiShuffle,
  FiRepeat,
  FiFileText,
  FiHelpCircle,
  FiMenu,
} from 'react-icons/fi';

import { BsGear } from 'react-icons/bs';

import {
  Container,
  NavMenu,
  NavButton,
  ExtraButtons,
} from './styles';


const Navigation: React.FC = () => {

  const { selectedContent, setSelectedContent } = useContent();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>

      <button onClick={() => setIsOpen(state => !state)}>
        <FiMenu />
      </button>

      <NavMenu isOpen={isOpen}>
        <div>
          <NavButton
            isSelected={ selectedContent === 'Services'}
            onClick={ () => setSelectedContent('Services')}
          >
            <AiOutlineAppstore />
            Services
          </NavButton>

          <NavButton
            isSelected={ selectedContent === 'Transactions'}
            onClick={ () => setSelectedContent('Transactions')}
          >
            <FiRepeat />
            Transactions
          </NavButton>

          <NavButton
            isSelected={ selectedContent === 'SendMoney'}
            onClick={ () => setSelectedContent('SendMoney')}
          >
            <FiShuffle />
            Send Money
          </NavButton>

          <NavButton
            isSelected={ selectedContent === 'Cards'}
            onClick={ () => setSelectedContent('Cards')}
          >
            <FiCreditCard />
            Cards
          </NavButton>

          <NavButton
            isSelected={ selectedContent === 'History'}
            onClick={ () => setSelectedContent('History')}
          >
            <FiDatabase />
            History
          </NavButton>
        </div>

        <ExtraButtons isOpen={isOpen}>
          <NavButton>
            <FiFileText />
            Terms
          </NavButton>

          <NavButton>
            <FiHelpCircle />
            Help
          </NavButton>
        </ExtraButtons>

        <div>
          <NavButton>
            <BsGear />
            Settings
          </NavButton>

          <NavButton>
            <FiLogOut />
            Log Out
          </NavButton>
        </div>
      </NavMenu>
    </Container>
  );
};

export default Navigation;
