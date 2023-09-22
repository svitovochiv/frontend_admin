import { SuperTokensWrapper } from 'supertokens-auth-react';
import { router } from './service';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <SuperTokensWrapper>
      <RouterProvider router={router} />
    </SuperTokensWrapper>
  );
}

export default App;
