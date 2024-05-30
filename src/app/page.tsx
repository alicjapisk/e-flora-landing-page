import Main from "./components/Main";

import { useLayoutEffect, useState } from "react";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <div>
        <Main />
        <Products />
      </div>
    </main>
  );
}
