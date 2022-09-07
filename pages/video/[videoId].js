/* eslint-disable react/no-unknown-property */
import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

import clsx from "classnames";

Modal.setAppElement("#__next");

export async function getStaticProps() {
  // fetch from API
  const video = {
    title: " Hi Cute dog",
    publishTime: "1999-01-31",
    description: "",
    channelTitle: "Paramount Pictures",
    viewCount: 10000,
  };

  return {
    props: {
      video,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];

  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));

  return { paths, fallback: "blocking" };
}

const Video = ({ video }) => {
  const { title, publishTime, description, channelTitle, viewCount } = video;

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
                <p className={styles.publishTime}>{publishTime}</p>
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
