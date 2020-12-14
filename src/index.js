import React from 'react'
import { render } from 'react-dom'

import App from './app'

render(<App />, document.getElementById('root'))

if (module.hot) {
  console.log('🔥 HMR enabled...')
  module.hot.accept()
}
