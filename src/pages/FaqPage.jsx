import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const FaqPage = () => {
  const [questionClicked, setQuestionClicked] = useState(false);

  const handleClick = () => {
    setQuestionClicked(true);
  };

  return (
    <>
      <Header />
      <p onClick={handleClick}>Qui a oublié son sac ?</p>

      {questionClicked && <p>Le sac a été oublié par Bastien</p>}
      <Footer />
    </>
  );
};

export default FaqPage;
