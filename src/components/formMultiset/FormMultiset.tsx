/** @jsxImportSource @emotion/react */
import React from 'react';

// Importando os estilos do componente
import {
  containerForm,
  formStyle,
  inputStyle,
  tabSwitcher,
  buttonStyle,
  activeButtonStyle,
} from './style/constFormStyles';

// Importando o useForm o hook a ser utlizado como gerênciador do FormMultiset
import { useForm } from 'react-hook-form';


// Tipo de dados do form
type FormData = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
};


const FormMultiset = () => {
  // Estado que controla quais campos serão mostrados no componente
  const [displayForm, setDisplayForm] = React.useState<'personal' | 'contact'>(
    'personal',
  );

  // Inicializando o useForm com os tipos de dados do form, definindo valores padrão
  // Chamando do useForm as funcionalidades register, handleSubmit e watch necessárias para gerenciamento
  const {
    register,
    handleSubmit,
    watch, 
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      phone: ''
    },
  });

  // Função que realiza a mudança do estado do form para exibir os campos de dados pessoais
  const handleDisplayPersonalForm = () => {
    setDisplayForm('personal');
  };

  // Função que realiza a mudança do estado do form para exibir os campos de dados de contato
  const handleDisplayContactForm = () => {
    setDisplayForm('contact');
  };

  // Usando o watch para observar os valores do formulário completo em tempo real
  const formValues = watch();

  // Verificando se todos os campos necessários estão preenchidos para habilitar o botão de submissão, 
  const isReadyToSubmit =
    formValues.name !== '' &&
    formValues.lastName !== '' &&
    formValues.email !== '' &&
    formValues.phone !== '' &&
    displayForm === 'contact';

  // Função chamada para submissão dos dados
  const onSubmit = (data: FormData) => {
    console.log('Dados enviados:', data);
  };

  // Parei aqui, modifiquei os componentes form mas preciso saber se preciso disso mesmo, coisa complicada
  return (
    <div css={containerForm}>
      <div css={tabSwitcher}>
          <button css={[buttonStyle, displayForm === 'personal' && activeButtonStyle]} onClick={handleDisplayPersonalForm}>
            Login
          </button>
          <button css={[buttonStyle, displayForm === 'contact' && activeButtonStyle]} onClick={handleDisplayContactForm}>
            Cadastro
          </button>
      </div>
      <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
        {/* Gerenciando através do estados do form quais campos estarão disponíveis para o user */}
        {displayForm === 'personal' && (
          <>
            <input
              {...register('name')}
              css={inputStyle}
              type="text"
              placeholder="Nome"
            />
            <input
              {...register('lastName')}
              css={inputStyle}
              type="text"
              placeholder="Sobrenome"
            />
          </>
        )}
        {displayForm === 'contact' && (
          <>
            <input
              {...register('email')}
              css={inputStyle}
              type="e-mail"
              placeholder="Email"
            />
            <input
              {...register('phone')}
              css={inputStyle}
              type="phone"
              placeholder="(99) 99999-9999"
            />
          </>
        )}
      </form>
      
      <div>
        {/* Botão para submeter os dados, só aparece quando todos os campos estão preenchidos */}
        {isReadyToSubmit && <button type='submit' onClick={handleSubmit(onSubmit)} css={buttonStyle}>Submeter Dados</button>}
      </div>
    </div>
  );
};

export default FormMultiset;

// Componente mais generalizado (temos várias páginas com essa mesma configuração mas que coletam dados diferentes)
// Definir os tipos de dados que serão coletados
// Login => FormLogin {email:string, password:string}
// Cadastro => FormRegister {name:string, cpf:string, born:Date, cargo:boolean, email:string, password:string}
