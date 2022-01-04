import Head from 'next/head'
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Liz Ainslie</title>
      </Head>

      <header className='w-screen h-screen bg-rose-500 flex flex-col text-white'>
        <Navbar />

        <main className='flex flex-grow items-center'>
          <section className='flex flex-col lg:flex-row items-center mx-auto h-64'>
            <img className='rounded-full h-32 w-32 lg:h-64 lg:w-64' src='/pfp.png' alt='owo' />
            <article className='p-4 h-full text-center lg:text-left'>
              <h1 className='text-4xl lg:text-7xl mb-4'>Elizabeth Ainslie</h1>
              <div className='flex items-center justify-center lg:justify-start'>
                <span className='inline-flex text-sm bg-rose-400 py-1 px-2 rounded-sm select-none ml-0 lg:ml-2'>Computer Booper</span>
                <span className='inline-flex text-sm bg-rose-400 py-1 px-2 rounded-sm select-none ml-2'>
                  &#x1F3F3;&#xFE0F;&#x200D;&#x26A7;&#xFE0F; she/her
                </span>
              </div>
              <p className='text-lg ml-0 lg:ml-2 mt-2'>I&apos;m an 18-year-old psychobitch that likes to code things, <br className='hidden lg:inline' />play games,
                and make music.</p>
            </article>
          </section>
        </main>
      </header>
    </>
  )
}
