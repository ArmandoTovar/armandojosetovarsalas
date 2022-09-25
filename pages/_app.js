import PropTypes from 'prop-types'
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css'
import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'

function MyApp ({ Component, pageProps }) {
  
  return <Component {...pageProps} />

  
}
MyApp.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.func.isRequired
}

export default appWithTranslation(MyApp)
