import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./banner.module.css";

interface Props {
  videoId: string;
  title: string;
  subtitle: string;
  imgUrl: string;
  styles?: string;
}

export const Banner: React.FC<Props> = ({
  title,
  subtitle,
  imgUrl,
  videoId,
}) => {
  const router = useRouter();

  const handleOnPlay = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(`video/${videoId}`);
  };
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
                width="32"
                height="32"
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
