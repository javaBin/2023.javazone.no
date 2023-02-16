'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link'
import Image from "next/image";
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();
  const [burger, setBurger] = useState(false);
  const [isOnRootPage, setIsOnRootPage] = useState(false);

  console.log(router)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsOnRootPage(window.location.pathname === '/');
    }

    console.log(window.location.pathname)
  }, []);

  return (
  <nav className={`navbar is-fixed-top ${isOnRootPage ? 'is-transparent' : 'is-dark'}`} role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <Image src="/logo-sharp.svg" height={48} width={48}  alt="logo"/>
      </a>

      <a role="button"
         onClick={() => setBurger(!burger)}
         className={burger ? "navbar-burger is-active" : "navbar-burger"}
         aria-label="menu" aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className={burger ? "navbar-menu is-active" : "navbar-menu"}>
      <div className="navbar-center">
        <Link className="navbar-item" href="/">JavaZone 2023 - JavaBin</Link>

        <Link className="navbar-item" href="/partners">Partners</Link>

        <Link className="navbar-item" href="/speakers">Speakers</Link>
        <Link className="navbar-item" href="/tickets">Tickets</Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <strong>
              <Link className="button is-dark-blue" href="/speakers">Submit your talk!</Link>
            </strong>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
