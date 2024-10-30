import Navbar from '@/components/fragments/Navbar/Index'
import Toster from '@/components/ui/Toster/index'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// Navbar disable pada auth admin
const disableNavbar = ['auth', 'admin', 'member'];
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900']
})
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { pathname } = useRouter();
  const [toster, setToster] = useState<any>({
    // variant: 'warning',
    // message: 'Input Is Empty',
  });
  useEffect(() => {
    if (Object.keys(toster).length > 0) {
      setTimeout(() => {
        setToster({})
      }, 3000)
    }
  }, [toster])
  return (
    <SessionProvider session={session}>
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        </link>
      </Head>
      <div className={lato.className}>
        {!disableNavbar.includes(pathname.split('/')[1]) && <Navbar />}
        <Component {...pageProps} setToaster={setToster} />
        {Object.keys(toster).length > 0 && <Toster variants={toster.variant} message={toster.message} setToster={setToster} />}
      </div>
    </SessionProvider>
  )
}
