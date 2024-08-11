import { Metadata } from "next";
import React, { FC, PropsWithChildren } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "DnD",
    description: "dnd test",
  };
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
