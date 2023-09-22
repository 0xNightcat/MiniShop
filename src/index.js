import './index.scss';
import reactDom from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const root = reactDom.createRoot(document.querySelector('#root'));
root.render(<Provider store={store}><App /></Provider>);