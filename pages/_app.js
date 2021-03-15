import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import fetch from 'service/fetchJson';
import { SWRConfig } from 'swr';
import Router from 'next/router';




function MyApp({ Component, pageProps }) {
/* 
  Router.events.on('routeChangeStart', () => <><h1 style={{color:"red"}}>Loading</h1></>);
  Router.events.on('routeChangeComplete', () => <><h1></h1></>);  */

  return (
    <SWRConfig
    value={{
      fetcher: fetch,
      onError: (err) => {
        console.error(err)
      },
    }}
  >
  <Component {...pageProps} />
  </SWRConfig>
  )
}

export default MyApp
