'use client';

import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { usePathname } from "next/navigation";
import Detail from "../components/Detail";

export default function DetailPage() {
  const url = usePathname();
  const rawItem = localStorage.getItem("selectedItem");
  const item = JSON.parse(rawItem);

  return (
    <>
      <Navbar />
      <Header url={url} />

      {item ? (
        <Detail item={item} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}