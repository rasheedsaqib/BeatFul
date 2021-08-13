import '../styles/globals.scss'
import {Fragment} from "react";
import Head from "next/head";
import Navbar from "../UI/Navbar/navbar";
import Footer from "../UI/Footer/footer";
import withWidth from "../HOC/withWidth/withWidth";

function MyApp({ Component, pageProps }) {
  return(
      <Fragment>
        <Head>
          <title>BeatFul - The Sound of a new generation</title>

          {/* Font Awesome CDN */}

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />

          {/* Google fonts */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={+true} />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        </Head>
        <Navbar />

        <Component {...pageProps} />

        <Footer />


      </Fragment>
  )
}

export default MyApp;
