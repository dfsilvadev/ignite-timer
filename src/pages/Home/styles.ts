import styled, { css } from "styled-components";

export const Display = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${theme["gray-100"]};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;

    datalist option {
      border: 1px solid #fff !important;
    }
  `}
`;

const BaseInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${theme["gray-500"]};
    font-weight: bold;
    font-size: inherit;
    padding: 0 0.5rem;
    color: inherit;
    text-align: center;

    transition: all 0.15s ease-in-out;

    &:hover,
    &:focus {
      box-shadow: none;
      border-color: ${theme["green-500"]};
    }

    &::placeholder {
      color: ${theme["gray-500"]};
    }
  `}
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const WrapperMinutesAmountInput = styled.div`
  ${({ theme }) => css`
    padding: 0 0.5rem;

    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      cursor: pointer;
      transition: color 0.15s ease-in-out;

      &:hover {
        color: ${theme["green-500"]};
      }
    }
  `}
`;

export const MinutesAmountInput = styled(BaseInput)`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
