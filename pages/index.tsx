import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";
import SectionCards from "../components/card/section-cards";
import { getVideos } from "../lib/videos";
import type Video from "../ts/interfaces/videos";

// server
export async function getServerSideProps() {
  const disneyVideos = await getVideos();
  return { props: { disneyVideos } };
}

const Home: NextPage<{ disneyVideos: Video[] }> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="michal" />
      <Banner
        title="Clifford red"
        subtitle="a very cute dog"
        imgUrl="/static/210629.jpg"
      />
      <div className={styles.sectionWrapper}>
        <SectionCards title="Disney" videos={props.disneyVideos} size="large" />
        <SectionCards
          title="Disney"
          videos={props.disneyVideos}
          size="medium"
        />
      </div>
    </div>
  );
};

export default Home;
