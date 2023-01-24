import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import sob_logo from '../assets/icon.png';
import Link from 'next/link';
import Head from "next/head";
function index() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <h1>SobseedPS - Launcher</h1>
      {process.env.NODE_ENV === "development" && (
        "development build"
      )}
      <div className="row">
        <span className="logos">
          <a href="https://github.com/sobrooms/sobseed" target="_blank">
            <Image
              width={144}
              height={144}
              src={sob_logo}
              className="logo sob"
              alt="SobseedPS"
            />
          </a>
        </span>
      </div>
      <div className="row">
        <div>
          <Link href="/install" className="btn">
            Install SobseedPS
          </Link>
          <p className="seper">-</p>
          <Link href="/start" className="btn">
            Start SobseedPS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
