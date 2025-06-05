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
// useForm gerência os forms e o Controller lida com inputs customizados que não são nativos do HTML
import { useForm, Controller } from 'react-hook-form';
// InputMask da lib com atualizações que rodam no React +18
import InputMask from 'react-input-mask-next';

// Type para os dados do form
type FormData = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
}


const FormMultiset = () => {
  // Estado que controla quais campos serão mostrados no componente
  const [displayForm, setDisplayForm] = React.useState<'personal' | 'contact'>(
    'personal',
  );

  // Estado que guarda os dados dos inputs
  const [formData, setFormData] = React.useState<FormData>({
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

   // Função chamada para submissão dos dados
   const onSubmit = (data: FormData) => {
    console.log('Dados enviados:', data);
  };

  // inicializando o react-hook-form para atender aos tipos, a cara que meus dados terão
  const { control, handleSubmit } = useForm<FormData>();


  // Parei aqui, tenho que modificar os containers para <form> 
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
            <input
              value={formData.phone}
              onChange={(e) =>
                setFormData((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
              css={inputStyle}
              type="text"
              placeholder="Telefone"
            />
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
