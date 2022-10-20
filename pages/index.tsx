import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";
import SectionCards from "../components/card/section-cards";
import { getVideos, getPopularVideos } from "../lib/videos";
import type Video from "../ts/interfaces/videos";
// server
export async function getServerSideProps() {
  const disneyVideos = await getVideos("Disney Trailer");
  const productivityVideos = await getVideos("Productivity");

  const travelVideos = await getVideos("Travel");
  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, productivityVideos, travelVideos, popularVideos },
  };
}

const Home: NextPage<Video> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <NavBar username="michal" />
        <Banner
          title="Clifford red"
          subtitle="a very cute dog"
          imgUrl="/static/210629.jpg"
        />
        <div className={styles.sectionWrapper}>
          <SectionCards
            title="Disney"
            videos={props.disneyVideos}
            size="large"
          />
          <SectionCards
            title="Travel"
            videos={props.travelVideos}
            size="small"
          />
          <SectionCards
            title="Productivity"
            videos={props.productivityVideos}
            size="medium"
          />
          <SectionCards
            title="Popular"
            videos={props.popularVideos}
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
