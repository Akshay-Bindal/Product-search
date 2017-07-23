import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/app.js';

render( <AppContainer>
					<App/>
				</AppContainer>,
				document.querySelector("#app")
);

if (module && module.hot) {
  module.hot.accept('./components/App/app.js', () => {
    const App = require('./components/App/app.js').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
