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
          <section className='flex mx-auto h-64'>
            <img className='rounded-full h-full' src='/pfp.png' alt='owo' />
            <article className='p-8 h-full'>
              <h1 className='text-7xl mb-4'>Elizabeth Ainslie</h1>
              <div className='flex items-center'>
                <span className='inline-flex text-sm bg-rose-400 py-1 px-2 rounded-sm select-none ml-2'>Computer Booper</span>
                <span className='inline-flex text-sm bg-rose-400 py-1 px-2 rounded-sm select-none ml-2'>
                  &#x1F3F3;&#xFE0F;&#x200D;&#x26A7;&#xFE0F; she/her
                </span>
              </div>
              <p className='text-lg ml-2 mt-2'>I&apos;m an 18-year-old psychobitch that likes to code things,<br />play games,
                and make music.</p>
            </article>
          </section>
        </main>
      </header>
    </>
  )
}
