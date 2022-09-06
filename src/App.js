import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Meme from "./components/Meme/Meme";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";

function App() {
  const [image, setImage] = useState();
  const [topText, setTopText] = useState();
  const [bottomText, setBottomText] = useState();

  const fetchMeme = async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const images = await response.json();
    const index = Math.floor(Math.random() * images.data.memes.length);
    setImage(images.data.memes[index].url);
  };

  const formSubmittedHandler = async (topText, bottomText) => {
    await fetchMeme();
    setTopText(topText);
    setBottomText(bottomText);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <div>
      <Header />
      <Form onFormSubmitted={formSubmittedHandler} />
      <Meme image={image} topText={topText} bottomText={bottomText} />
      <Footer />
    </div>
  );
}

export default App;
