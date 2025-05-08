/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// Constante de estilização injetada
const containerForm = css`
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

const formStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const inputStyle = css`
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  outline: none;

`;

const containerButton = css`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
gap: 1rem;
`;

const buttonStyle = css`
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

const FormMultiset = () => {
  return (
    <div css={containerForm}>
      <form css={formStyle}>
        <input css={inputStyle} type="text" placeholder="Nome" />
        <input css={inputStyle} type="text" placeholder="Sobrenome" />
        <input css={inputStyle} type="e-mail" placeholder="Email" />
        <input css={inputStyle} type="text" placeholder="Telefone" />
      </form>
      <div css={containerButton}>
        <button css={buttonStyle}>Dados Pessoais</button>
        <button css={buttonStyle}>Dados de Contato</button>
      </div>
    </div>
  );
};

export default FormMultiset;
