/** @jsxImportSource @emotion/react */
import React from 'react';
// Importando os estilos do componente
import {
  containerForm,
  formStyle,
  inputStyle,
  containerButton,
  buttonStyle,
} from './style/constFormStyles';
// Importando o InputMask
import InputMask from 'react-input-mask';


const FormMultiset = () => {
  // Estado que controla quais campos serão mostrados no componente
  const [displayForm, setDisplayForm] = React.useState<'personal' | 'contact'>(
    'personal',
  );

  // Estado que guarda os dados dos inputs
  const [formData, setFormData] = React.useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // Realiza a mudança do estado do form para exibir os campos de dados pessoais
  const handleDisplayPersonalForm = () => {
    setDisplayForm('personal');
  };

  // Realiza a mudança do estado do form para exibir os campos de dados de contato
  const handleDisplayContactForm = () => {
    setDisplayForm('contact');
  };

   // Verifica se todos os campos necessários estão preenchidos para habilitar o botão de submissão
   const isReadyToSubmit = formData.name !== '' && formData.lastName !== '' && formData.email !== '' && formData.phone !== '' && displayForm === 'contact';

  return (
    <div css={containerForm}>
      <div css={formStyle}>
        {/* Gerenciando através do estados do form quais campos estarão disponíveis para o user */}
        {displayForm === 'personal' && (
          <>
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
              css={inputStyle}
              type="text"
              placeholder="Nome"
            />
            <input
              value={formData.lastName}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  lastName: e.target.value,
                }))
              }
              css={inputStyle}
              type="text"
              placeholder="Sobrenome"
            />
          </>
        )}
        {displayForm === 'contact' && (
          <>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
              css={inputStyle}
              type="e-mail"
              placeholder="Email"
            />
            <InputMask>
            </InputMask>
          </>
        )}
      </div>
      {/* Botões para alternar entre os formulários */}
      <div css={containerButton}>
        <button css={buttonStyle} onClick={handleDisplayPersonalForm}>
          Dados Pessoais
        </button>
        <button css={buttonStyle} onClick={handleDisplayContactForm}>
          Dados de Contato
        </button>
      </div>
      <div>
        {/* Botão para submeter os dados, só aparece quando todos os campos estão preenchidos */}
        {isReadyToSubmit && (<button css={buttonStyle}>Submeter Dados</button>)}
      </div>
    </div>
  );
};

export default FormMultiset;
