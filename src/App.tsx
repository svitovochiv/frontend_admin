import './resetStyle.css';
import './font.scss';
import './global.scss';

import { SuperTokensWrapper } from 'supertokens-auth-react';
import { router } from './service';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

function App() {
  return (
    <SuperTokensWrapper>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SuperTokensWrapper>
  );
}

export default App;
