import { AppProps } from 'next/app'

import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const moralisAppId = process.env.NEXT_PUBLIC_APP_ID
  const moralisUrl = process.env.NEXT_PUBLIC_SERVER_URL

  return (
    <MoralisProvider appId={moralisAppId} serverUrl={moralisUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
