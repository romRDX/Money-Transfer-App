import styled, { css } from 'styled-components';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,

  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,

  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 5px;
  border-radius: 8px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  background: #ebf8ff;
  color: #3172b7;

  ${(props) => toastTypeVariations[props.type || 'info']};

  > svg {
    width: 16px;
    height: 16px;
    align-self: center;
  }

  div {
    flex: 1;

    p {
      margin-left: 10px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
      margin-bottom: 0;
    }
  }

  button {
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    display: flex;
    align-items: center;
  }
`;
