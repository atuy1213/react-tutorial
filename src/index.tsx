import { createRoot } from 'react-dom/client';
import Game from './components/game';
import './index.css'

const rootElement :HTMLElement | null = document.getElementById('root');
if ( rootElement ) {
  const root = createRoot(rootElement);
  root.render(<Game />);
}