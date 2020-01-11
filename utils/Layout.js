import Head from "next/head";
import Link from "next/link";
const SITE_NAME = "SydneySwims";
const SITE_DESCRIPTION =
  "A collection of swimming holes, rivers and beaches in Sydney Australia";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          {SITE_NAME} | {SITE_DESCRIPTION}
        </title>
        <meta
          name="keywords"
          content="HTML,CSS,React,Bootstrap,minimal,web app,template"
        />
        <meta name="author" content="Bach Ly" />
        <meta name="publisher" content="Bach Ly" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta key="description" name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href="/" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        ></link>
      </Head>

      <header className="lh-solid center bg-white mv3 mb4-ns">
        <div className="mw9 center">
          <div className="flex items-center">
            <div className="ph1 ph2-ns">
              <a className="link">Filter</a>
            </div>
            <div className="tc flex-auto">
              <Link href="/">
                <a
                  title="Go to homepage"
                  className="link dim black-80 b db mr2 pv3"
                >
                  <div className="flex flex-row flex-wrap items-center">
                    <h1 className="f2 mv0 db mr2 tc w-100">{SITE_NAME}</h1>
                  </div>
                </a>
              </Link>
            </div>
            <div className="ph1 ph2-ns">
              <a className="link">Map</a>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </>
  );
};

export default Layout;
