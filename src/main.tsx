import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '~/styles/index.scss';
import { Provider } from 'react-redux';
import { App } from './app';
import { store } from './store';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
}
