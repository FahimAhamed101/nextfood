'use client'
import { Fragment, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import Header from "../components/Header";
export default function Home({ children,headerExtaClass }) {
  return (
    <Fragment>

    <Header extraClass={headerExtaClass} />
    {children}
 
  </Fragment>
  );
}
