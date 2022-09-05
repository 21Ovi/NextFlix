import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();
  console.log({ router });
  return (
    <div>
      video page {router.query.videoId}
      <Modal
        isOpen={true}
        contentLabel="Watch the Video"
        onRequestClose={() => {
          router.back();
        }}
        overlayClassName={styles.overlay}
      >
        <div>Modal Body</div>
      </Modal>
    </div>
  );
};

export default Video;
