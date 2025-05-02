import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Configuração necessária para que o lazy aconteça
const FormMultiset = lazy(() => import('./components/form-multiset/FormMultiset'));
const SendData = lazy(() => import('./components/sendData/SendData'));

function App() {
  return (
    // Todo o App deve ser envolvido pelo BrowserRouter
    <BrowserRouter>
      // O Suspense deve envolver o Routes para acontecer o carregamento preguiçoso
      <Suspense fallback={<p>Carregando...</p>}>
        <Routes>
          <Route path='/' element={<FormMultiset />} />
          <Route path='/send' element={<SendData />} />
        </Routes>
      </Suspense>
    </BrowserRouter>  
  )
}

export default App;
