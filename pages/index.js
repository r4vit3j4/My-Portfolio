import Head from "next/head";
import Contact from "../components/Main/Contact";
import Footer from "../components/Main/Footer";
import Main from "../components/Main/Main";
import Projects from "../components/Main/Projects";
import Skills from "../components/Main/Skills";

export default function Home() {
  return (
    <div className="bg-[#f0f0f0] px-3 md:px-10">
      <Head>
        <title>Ravi Teja | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="border-x flex flex-col space-y-6 border-gray-400 shadow-xl bg-[#f0f0f0] selection:bg-gray-300">
        <Main />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
