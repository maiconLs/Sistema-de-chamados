import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import AuthProvider from './contexts/auth';
import { Toas}


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
