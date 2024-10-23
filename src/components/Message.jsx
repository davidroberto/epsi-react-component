import { useState } from "react";

function Message() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Afficher le message</button>

      {isClicked && <p>Message super important !</p>}
    </div>
  );
}

export default Message;
