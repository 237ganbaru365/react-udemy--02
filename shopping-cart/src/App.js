import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isOpen, setIsOpen] = useState("false");

  const isOpenHandler = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <Fragment>
      <Cart isOpen={isOpenHandler} />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
