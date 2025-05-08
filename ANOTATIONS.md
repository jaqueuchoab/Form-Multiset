## Conceitos para Relembrar

### Roteamento de Páginas

#### Importações

```import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' ```

**BrowserRouter** é o componente de roteamento principal. Mantém a interface do app sincronizada com a URL do navegador. Ele é ***reponsável por escutar mudanças de URL e renderizar o componente correto com base nela.*** O **BrowserRoouter** deve envolver todo o app.

**Routes** define um grupo de rotas. Dentro dele é especificado quais componentes serão renderizados para cada caminho de URL.

**Route** representa uma rota individual. Cada **Route** tem:
1. Path: URL que o React Router vai escutar.
2. Element: que é o componente que será renderizado quando o caminho correspondente for acessado pelo navegador.

**Link** utilizado para criar links de navegação entre páginas. O ```<Link/>``` diferente do ```<a>``` não recarrega a página, mas sim navega entre os componentes da aplicação sem uma atualização completa do navegador. Atributo **to=""** indica a navegação, como por exemplo: **to="/"**, irá para a rota raiz do app.

**Benefício:** Essa configuração de rota permite uma experiência de **Single Page Application (SPA)**, que basicamente é uma navegação feita sem recarregar a página a cada interação.

### Mais sobre SPA, suas desvantagens e técnicas para contorná-las

**Desvantagens de uma Single Page Application (SPA)**

1. **Search Engine Optimization (SEO):** Como o conteúdo é carregado dinamicamente, as SPAs podem ter dificuldades para serem **indexadas** de forma correta pelos motores de busca. No entanto, isso pode ser contornado com práticas como: 
  1.1. **Server Side Rendering (SSR):** que renderiza o conteúdo da página no lado servidor e não no navegador, como acontece tradicionalmente em SPAs. 
    **Funcionamento:** 
    1. O navegador do usuário faz uma requisição para o servidor, exemplo, acessar um link.
    2. O **servidor executa o código da aplicação**, monta o HTML completo da página já com os dados prontos, e envia esse HTML para o navegador. Significa que primeiro, o código como exemplo em React, é rodado primeiro no servidor e logo após gerado o HTML para o navegador. Na SPA tradicional, o conteúdo inicial é quase vazio.
    3. O navegador exibe a página imediatamente, com o conteúdo já visível.
    4. Após exibir, acontece a **hibernação** em que o JavaScript é carregado para tornar a página interativa com botões, formulários e etc.
  
    **Exemplo:** 
    Imagine que você acessa um blog:

    - Com SPA: você vê uma tela branca ou um "loading" enquanto o JavaScript busca os dados no backend.
    - Com SSR: você já vê o título e o texto da postagem quase instantaneamente, pois o HTML veio pronto do servidor.
    1.2. **Pré-Renderização:** Processo que **gera o HTML de uma página com antecedência, antes que seja exibida ao usuário** O conteúdo com a pré-renderização pode ser gerado antes e pode ser:
      - **Static Site Generation (SSG) - Geração Estática:** 
        - Conteúdo gerado no momento do Build, compilação.
        - Conteúdo fixo, que não muda com frequência, pronto para todos os usuários.
        - Rápido, por só entregar páginas prontas.
      - **Server Side Rendering (SSR) - Geração Dinâmica:**
        - Conteúdo gerado no momento da Requisição.
        - Conteúdo dinâmico, ideal para mudanças frequentes.
        - Leva mais tempo que o SSG, mas tem melhor SEO.
<br>

2. **Tempo de Carregamento Inicial:** Por a aplicação ser carregada toda de uma vez, o tempo de carregamento inicial pode ser mais longo. Isso pode ser otimizado com divisão de código (code splitting) e lazy loading, que dividem o código e carregam apenas o necessário.
  2.1. **Code Splitting (Divisão de Código):** Processo de quebrar o código em partes menores, podem ser chamadas de "chunks" que são carregadas sob demanda, e não todas de uma vez.

    Sem Code Splitting: 
    - ```main.js``` → Apenas um arquivo enorme para lidar com todo o app (rotas, páginas, libs...).

    Com Code Splitting:
    - ```main.js``` → Apenas com o essencial.
    - ```home.js```, ```login.js```, ```dashboard.js``` → Carregados apenas quando o usuário acessa essas páginas.

    2.2. **Lazy Loading (Carregamento Preguiçoso):** Carregamento de um componente ou módulo apenas quandor for realmente necessário.
    📌 Em React: 
    Você pode carregar um componente só quando ele for renderizado pela **primeira vez**, usando ```React.lazy() + Suspense```. Essa primeira vez é no sentido de que ele não chamado ainda.
    🧩 Exemplo:
    ```
    import React, { lazy, Suspense } from "react";
    // Importado mas usando a função lazy()
    const Painel = lazy(() => import("./Painel"));

    function App() {
      return (
        /* Suspense é um componente especial que aguarda enquanto 
         * um componente é carregado de forma preguiçosa, 
        /* com React.lazy e ainda está sendo baixado.

        /* Uma mensagem pode ser passada como propriedade para 
        /* fallback e será mostrada enquanto o componente é baixado.

        <Suspense fallback={<div>Carregando...</div>}>
          <Painel />
        </Suspense>
      );
    }
    ```
    📍 E nas rotas? 
    O lazy pode ajudar no carregamento de um componente apenas quando a sua rota correspondente for acessada. Deixará o carregamento mais leve.
    ```
    import { lazy, Suspense } from "react";
    import { BrowserRouter, Route, Routes } from "react-router-dom";

    // Aplicando carregamento preguiçoso
    const Home = lazy(() => import("./pages/Home"));
    const Sobre = lazy(() => import("./pages/Sobre"));

    function App() {
      return (
        <BrowserRouter>
          <Suspense fallback={<p>Carregando página...</p>}>
            <Routes>
              // Definição das rotas
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      );
    }
    ```
3. **Histórico de Navegação:** Embora as SPAs gerenciem o histórico de navegação é importante se atentar a configuração do comportamento de voltar e avançar. O React Router já cuida muito bem disso.

## Usando Emotion: Substituto do Styled Components

### Instalação:
```npm install @emotion/react @emotion/styled```

### Exemplo de uso

1. Usando a propriedade "css": Aplicando estilo diretamente no HTML;
``` 
    import React from 'react';
    import { css } from '@emotion/react';
    
    function MyComponent() {
      return (
        <div
          css={css`
            background-color: lightblue;
            color: white;
            padding: 16px;
            border-radius: 8px;
          `}
        >
          This is a styled div.
        </div>
      );
    }
```
2. Styled Components: Criação de componentes rereutilizáveis com estilo pré-definido;
```
    import React from 'react';
    import styled from '@emotion/styled';
    
    const StyledButton = styled.button`
      background-color: lightgreen;
      color: white;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    
      &:hover {
        background-color: darkgreen;
      }
    `;
    
    function MyButton() {
      return <StyledButton>Click me</StyledButton>;
    }
```