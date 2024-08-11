"use client";
import { createBem } from "@/shared";
import Link from "next/link";
import { FC } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import { usePathname } from "next/navigation";
const Header: FC = () => {
  const bem = createBem("header", styles);

  const links = [
    {
      label: "Home",
      href: "/en",
    },

    {
      label: "DnD",
      href: "/en/dnd",
    },
    {
      label: "League Champions",
      href: "/en/league/2",
    },
  ];

  const path = usePathname();

  return (
    <header className={bem()}>
      <Image src={logo} alt="logo" width={50} height={50} />
      <nav className={bem("nav")}>
        {links.map(link => (
          <Link
            key={link.label}
            className={bem("link", {
              active: path === link.href,
            })}
            href={link.href}
            rel="noopener noindex noreferrer"
            prefetch={false}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
