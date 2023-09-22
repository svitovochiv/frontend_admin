import { SuperTokensWrapper } from 'supertokens-auth-react';
import { initSuperTokens, router } from './service';
import { BrowserRouter, RouterProvider, Routes } from 'react-router-dom';

import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui';
import { ThirdPartyEmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui';
import * as reactRouterDom from 'react-router-dom';

function App() {
  return (
    <SuperTokensWrapper>
      <RouterProvider router={router} />
    </SuperTokensWrapper>
  );
}

export default App;
