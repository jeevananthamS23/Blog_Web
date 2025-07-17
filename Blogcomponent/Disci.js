"use client";

import { useSearchParams } from "next/navigation";
import style from "./Disci.module.css";

const Discomp = () => {
  const searchParams = useSearchParams();

  const img = searchParams.get("img");
  const name = decodeURIComponent(searchParams.get("title") || "");
  const des = decodeURIComponent(searchParams.get("des") || "");

  return (
    <div className={style.card}>
      <h1>Description</h1>
      <img src={img} alt="Movie" />
      <p>Movie Title: {name}</p>
      <p>Description: {des}</p>
    </div>
  );
};

export default Discomp;
