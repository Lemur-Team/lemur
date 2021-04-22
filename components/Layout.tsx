import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <link href="style.css" rel="stylesheet" /> */}
    </Head>
    <header>
      <nav>
        <div>
          {/* To do: Clever navbar based on users location */}
          <Link href="/"> login </Link> |{" "}
          <Link href="/register_page"> register </Link>
        </div>
        <div></div>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
    <br />
    <a href="https://vercel.com/?utm_source=lemur-team&amp;utm_campaign=oss">
      <img
        style={{ width: "120px" }}
        src="vercel-logo.png"
        alt="powered by vercel"
      />
    </a>
  </div>
);

export default Layout;
