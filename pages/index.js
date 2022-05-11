import Head from "next/head";
import Image from "next/image";
import Master from "../components/Master";
import Landing from "../components/Landing";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Zach Young</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Master>
        <Landing />
      </Master>
    </div>
  );
}
