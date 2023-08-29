import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
import Image from 'next/image';

import NextImage from '@/assets/nextImage.jpg'


const Homepage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='home page' description='This page is made with next JS' />
      </Head>
      <h1>this is homepage</h1>
      <div>
        <img width={ '100%' } src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />

        <Image
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="Picture of the author"
          width={ 500 }
          height={ 500 }
          layout='responsive'
        />



        <Image
          src={ NextImage }
          alt="Picture of the author"
          width={ 500 }
          height={ 500 }
          layout='responsive'
        />

      </div>
    </div>
  );
};

export default Homepage;


Homepage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      { page }
    </RootLayout>
  )
}
