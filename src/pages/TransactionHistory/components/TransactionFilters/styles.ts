import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  color: black;
  position: relative;
  margin-bottom: 15px;

  position: relative;

  animation: filtersAnimation .8s, 'fadeIn' .8s;

  @keyframes filtersAnimation {
    from {bottom: 30px;}
    to {bottom: 0px;}
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  * {
    padding-top: 0;
    padding-bottom: 0;
  }

  > div {
    width: 100%;
    text-align: center;
    background: #F5F7FA;
    padding: 5px 6px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    font-weight: bold;
    font-family: 'Inter';
    font-size: 18px;

    & + div {
      margin-left: 4px;
    }

    &:first-child {
      border-radius: 8px 0 0 8px;
    }

    &:last-child {
      border-radius: 0 8px 8px 0;
    }

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

interface FilterOptionProps {
  isSelected: boolean;
}

export const FilterOption = styled.div<FilterOptionProps>`
  ${(props) =>
    props.isSelected &&
    css`
      box-shadow: 0px 3px 0px ${ lighten(0.1 , '#F364A2')};
  `}
`;
