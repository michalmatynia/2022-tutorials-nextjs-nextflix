import type { NextPage } from "next";
import Image from "next/image";
import styles from "./banner.module.css";

interface Props {
  title: string;
  subtitle: string;
  imgUrl: string;
  styles?: string;
}

export const Banner: React.FC<Props> = ({ title, subtitle, imgUrl }) => {
  const handleOnPlay = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subtitle}</h3>
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image
                src="/static/play_arrow.svg"
                alt="Play Icon"
                width="32px"
                height="32px"
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      ;
    </div>
  );
};

export default Banner;
