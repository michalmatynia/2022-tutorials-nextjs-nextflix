import Image from "next/image";
import styles from "./card.module.css";
import { useState } from "react";
import cx from "classnames";

import { motion } from "framer-motion";

export const Card = (props) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3518&q=80",
    size = "medium",
    id,
    shouldScale = true,
  } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const imageSize = {
    large: {
      width: "218",
      height: "434",
    },
    medium: {
      width: "158",
      height: "280",
    },
    small: {
      width: "300",
      height: "170",
    },
  };

  const handleOnError = () => {
    console.log("hi error");
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3518&q=80"
    );
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };
  const shouldHover = shouldScale && { whileHover: { ...scale } };

  return (
    <div className={styles.container}>
      <motion.div
        className={cx(styles.imgMotionWrapper, classMap[size])}
        {...shouldHover}
      >
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          onError={handleOnError}
          className={styles.cardImg}
          width={imageSize[size].width}
          height={imageSize[size].height}
        />
      </motion.div>
    </div>
  );
};

export default Card;
