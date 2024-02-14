'use client'
import { Fragment, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import SearchCom from "../components/SearchCom";
import Header from "../components/Header";
import SliderHome from "../components/SliderHome";
export default function Home({ children,headerExtaClass }) {
  return (
    <Fragment>
    <SearchCom />
    <Header extraClass={headerExtaClass} />
    <SliderHome />
    {children}
 
  </Fragment>
  );
}
