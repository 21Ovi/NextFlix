import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/login.module.css";

const Login = () => {
  return (
    <div>
      <Head>
        <title>NextFlix SignIn</title>
      </Head>
      <header>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <a>
              <div className={styles.logoWrapper}>
                <Image
                  src="/static/icons/netflix.svg"
                  alt="Netflix logo"
                  width="128px"
                  height="34px"
                />
              </div>
            </a>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Login;
