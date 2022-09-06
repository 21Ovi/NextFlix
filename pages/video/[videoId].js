/* eslint-disable react/no-unknown-property */
import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

import clsx from "classnames";

Modal.setAppElement("#__next");

const Video = () => {
  const video = {
    title: " Hi Cute dog",
    publishTitle: "1999-01-31",
    description: "A big dog that is super cute, can he get any bigger",
    channelTitle: "Paramount Pictures",
    viewCount: 10000,
  };

  const { title, publishTitle, description, channelTitle, viewCount } = video;

  const router = useRouter();
  console.log({ router });
  return (
    <div className={styles.container}>
      <Modal
        isOpen={true}
        contentLabel="Watch the Video"
        onRequestClose={() => {
          router.back();
        }}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div>
          <iframe
            id="ytplayer"
            className={styles.videoPlayer}
            type="text/html"
            width="100%"
            height="360"
            src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=0`}
            frameborder="0"
          ></iframe>
          <div className={styles.modalBody}>
            <div className={styles.modalBodyContent}>
              <div className={styles.col1}>
                <p className={styles.publishTitle}>{publishTitle}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
              </div>
              <div className={styles.col2}>
                <p className={clsx(styles.subText, styles.subTextWrapper)}>
                  <span className={styles.textColor}>Cast : </span>
                  <span className={styles.channelTitle}>{channelTitle}</span>
                </p>
                <p className={clsx(styles.subText, styles.subTextWrapper)}>
                  <span className={styles.textColor}>View Count : </span>
                  <span className={styles.channelTitle}>{viewCount}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Video;
