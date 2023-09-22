import { SuperTokensWrapper } from 'supertokens-auth-react';
import { initSuperTokens } from './service';
import { BrowserRouter, Routes } from 'react-router-dom';

import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui';
import { ThirdPartyEmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui';
import * as reactRouterDom from 'react-router-dom';
initSuperTokens();

function App() {
  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <Routes>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
            ThirdPartyEmailPasswordPreBuiltUI,
          ])}
          {/*Your app routes*/}
        </Routes>
      </BrowserRouter>
    </SuperTokensWrapper>
  );
}

export default App;
