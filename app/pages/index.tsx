import { Loading, Mute, Volume } from "app/components";
import { BlitzPage, Head } from "blitz";
import { Suspense } from "react";

const Home: BlitzPage = () => {
  return (
    <>
      <Head>
        <title>Volume Delivery Network</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Suspense fallback={<Loading />}>
        <Mute />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Volume />
      </Suspense>
    </>
  );
};

export default Home;
