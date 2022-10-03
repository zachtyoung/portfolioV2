import Head from "next/head";
import Image from "next/image";
import Master from "../components/Master";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Zach Young</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/smu2yps.css"
        ></link>
      </Head>
      <Master>
        <Landing />
        <Skills />
        <Work />
        <Contact />
      </Master>
    </div>
  );
}
