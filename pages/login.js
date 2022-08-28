import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/login.module.css";

const Login = () => {
  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    console.log("Login Button Clicked");
  };

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
        <main className={styles.main}>
          <div className={styles.wrapper}></div>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
          />
          <p className={styles.userMsg}></p>
          <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
            Sign in
          </button>
        </main>
      </header>
    </div>
  );
};

export default Login;
