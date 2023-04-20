import Head from 'next/head'
import Navbars from '@/components/Navbars'
import SidebarClient from '@/components/Sidebar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbars />
      <main className="main">
        <div className='main-container'>
          <SidebarClient />
          <div className='content-formmi'>
            <div className='w-100'>
              <h1>Hello world</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
