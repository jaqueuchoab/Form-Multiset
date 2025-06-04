import { css } from '@emotion/react';

// Constante de estilização injetada
export const containerForm = css`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 400px;
  background-color: blueviolet;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 15px;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const inputStyle = css`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  outline: none;
`;

export const containerButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  gap: 1rem;
`;

export const buttonStyle = css`
  padding: 0.5rem 1rem;
  background-color: beige;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  color: darkslateblue;

  &:hover {
    background-color: gainsboro;
  }
`;

