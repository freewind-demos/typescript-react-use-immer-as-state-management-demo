import React from 'react'
import ReactDOM from 'react-dom'

import {Hello} from './hello'
import {StoreProvider} from './store/initStore';

ReactDOM.render(
  <StoreProvider>
    <Hello/>
  </StoreProvider>,
  document.body
)
