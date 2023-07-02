import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/style.css'
import Script from 'next/script'
import { store } from '@/store/store'
import { Provider } from 'react-redux'



export default function App({ Component, pageProps }) {
  return (

    <>
      <Provider store={store}>

        <Component {...pageProps} />
        <Script src='/js/bs.js' />
        <Script src='/js/custom.js' />
      </Provider>
    </>
  )
}
