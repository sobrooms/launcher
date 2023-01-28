import { toast } from 'react-toastify';
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import sob_logo from '../assets/icon.png';
import Link from 'next/link';
import Head from 'next/head'
function startPage() {
    async function start() {
        toast.success('Started SobseedPS', {
            position: "bottom-left",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
        return invoke("start");
    }
    return (
        <div className="container">
            <Head>
                <link rel="icon" href="/icon.png" />
            </Head>
            <h1>SobseedPS</h1>

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
                    <button type="button" className="btn-large" onClick={() => start()}>
                        Start the server!
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

export default startPage;
