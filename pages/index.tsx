import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Heroes who should react</title>
        <meta name="description" content="Heroes who should react" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-lg'>
          Heroes who should react
        </h1>
      </main>
    </>
  );
}
