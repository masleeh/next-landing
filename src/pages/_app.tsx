import '@/scss/style.scss'
import type { AppProps } from 'next/app'
import GlobalContextProvider from '@/context/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}
