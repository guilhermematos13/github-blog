import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import './styles/input.css';
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Router />
    </BrowserRouter>
  );
}
