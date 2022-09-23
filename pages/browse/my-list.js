import Head from "next/head";
import NavBar from "../../components/nav/navbar";
import SectionCard from "../../components/card/section-cards";

const MyList = () => {
  return (
    <div>
      <Head>
        <title>My List</title>
      </Head>
      <main>
        <NavBar />
        <div>
          <SectionCard title="My List" videos={[]} size="small" />
        </div>
      </main>
    </div>
  );
};

export default MyList;
