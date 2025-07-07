import { css } from '@emotion/react';

// Constante de estilização injetada
export const containerForm = css`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: rgba(34, 34, 34, 1);
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-radius: 16px;
  padding-bottom: 1rem;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const inputStyle = css`
  width: 250px;
  height: 30px;
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: rgba(23, 23, 23, 1);
  border: 1px solid rgb(96, 96, 96);
  border-radius: 8px;
  outline: none;
  color : #FDFDFD;
`;

export const tabSwitcher = css`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 50px;
  padding: 6px;
  gap: 10px;
  border-radius: 16px 16px 0px 0px;
  background-color: rgba(96, 96, 96, 1);
`;

export const buttonStyle = css`
  padding: 10px 12px;
  width: 140px;
  height: auto;
  background-color:  rgba(23, 23, 23, 1);
  color: #FDFDFD;
  border: 1px solid rgb(96, 96, 96);
  border-radius: 8px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgba(23, 23, 23, 1);
  }
`;

export const activeButtonStyle = css`
  background-color:  rgba(96, 96, 96, 1);
`;
