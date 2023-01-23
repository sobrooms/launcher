import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import sob_logo from '../../assets/icon.png';
import { toast, ToastContainer } from 'react-toastify';
import Link from "next/link";
const Inst: NextPage = () => {
    async function install() {
        /* toast.info('Downloading SobseedPS jar...', {
            position: 'bottom-left',
            autoClose: 20000,
            hideProgressBar: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark'
        }) */
        const IrP = new Promise(async function () {
            await invoke("install");
        });
        toast.promise(IrP, {
            pending: 'Downloading jar file...',
            success: 'Successfully downloaded SobseedPS jar',
            error: 'Installation has been canceled or encountered an error.'
        });
    }
    async function install_res() {
        /* toast.info('Downloading SobseedPS resources...', {
            position: 'bottom-left',
            autoClose: 20000,
            hideProgressBar: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'dark'
        }) */
        const IrP = new Promise(async function () {
            await invoke("install_res")
        });
        toast.promise(
            IrP,
            {
              pending: 'Downloading resources...',
              success: 'Successfully downloaded resources',
              error: 'Installation has been canceled or encountered an error. '
            }
        );
    }
    return (
        <div className="container">
            <h1>Download SobseedPS</h1>
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
                    <button type="button" className="btn" onClick={() => install()}>
                        Download .jar
                    </button>
                    <p className="seper"></p>
                    <button type="button" className="btn" onClick={() => install_res()}>
                        Download resources
                    </button>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div>
                    <Link href="/" className="btn">
                        Go back
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Inst;
