import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ImagePopup from "./ImagePopup/ImagePopup";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCloseImagePopup = () => {
    setSelectedCard(null);
  };
  
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    

{selectedCard && (
        <ImagePopup card={selectedCard} onClose={handleCloseImagePopup} />  
        )}
</div>
);
}

export default App;  