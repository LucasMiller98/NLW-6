import { Routes } from "./routes/routes";
import { GlobalStyles } from './styles/global'
import { ContextProvider } from './context'
import 'react-toastify/dist/ReactToastify.css'

export function App() {

  return (
      <>
        <ContextProvider>
          <Routes />
          <GlobalStyles />
        </ContextProvider>
      </>    
  );
}
