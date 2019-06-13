import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <Link href="/page1">
        <a>Visit me but dont land on me</a>
      </Link>
    </React.Fragment>
  );
}
