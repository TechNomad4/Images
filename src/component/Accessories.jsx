import { useState } from "react";
import { alpacaConfig } from "../alpacaConfig";
import download from "downloadjs";
import { toPng } from "html-to-image";

function Accessories() {
  const [title, setTitle] = useState("Backgrounds");
  const [isActive, setIsActive] = useState(false);
  const [background, setBackground] = useState(0);
  const [ears, setEars] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [leg, setLeg] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [neck, setNeck] = useState(0);
  const [accessories, setAccessories] = useState(0);
  const base = process.env.PUBLIC_URL;

  const randomHandler = () => {
    setBackground(Math.floor(Math.random() * 14));
    setEars(Math.floor(Math.random() * 2));
    setEyes(Math.floor(Math.random() * 5));
    setHair(Math.floor(Math.random() * 5));
    setLeg(Math.floor(Math.random() * 5));
    setMouth(Math.floor(Math.random() * 4));
    setNeck(Math.floor(Math.random() * 3));
    setAccessories(Math.floor(Math.random() * 3));
  };

  const downloadImage = () => {
    const alpacaCanvasNode = document.getElementsByClassName("content")[0];
    toPng(alpacaCanvasNode).then((dataUrl) => {
      download(dataUrl, "alpaca.png");
    });
  };

  return (
    <main>
      <section className="image">
        <div className="content">
          <img
            src={base + alpacaConfig[0].items[background].src}
            alt="BG"
            id="bg"
          />
          <img
            src={base + alpacaConfig[1].items[ears].src}
            alt="ears"
            id="ears"
          />
          <img
            src={base + alpacaConfig[2].items[eyes].src}
            alt="eyes"
            id="eyes"
          />
          <img
            src={base + alpacaConfig[3].items[hair].src}
            alt="hair"
            id="hair"
          />
          <img src={base + alpacaConfig[4].items[leg].src} alt="leg" id="leg" />
          <img
            src={base + alpacaConfig[5].items[mouth].src}
            alt="mouth"
            id="mouth"
          />
          <img
            src={base + alpacaConfig[6].items[neck].src}
            alt="neck"
            id="neck"
          />
          <img
            src={base + alpacaConfig[7].items[accessories].src}
            alt="accessories"
            id="accessories"
          />
          <img src={base + alpacaConfig[8].items[0].src} alt="nose" id="nose" />
        </div>
        <div className="mechanics">
          <button id="random" onClick={randomHandler}>
            Random
          </button>
          <button id="download" onClick={downloadImage}>
            Download
          </button>
        </div>
      </section>

      <section className="accessories">
        <div>
          <h1>Accessorize your Alpaca</h1>
          <div className="buttons">
            {alpacaConfig.map((button) => {
              return (
                <button
                  className={isActive === button.id ? "active" : ""}
                  key={button.id}
                  onClick={(e) => {
                    setTitle(e.target.textContent);
                    setIsActive(button.id);
                  }}
                >
                  {button.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="underline"></div>
        <div>
          <h1>{title}</h1>
          <div className="buttons parts">
            {alpacaConfig.map((item) => {
              if (item.label === title) {
                return item.items.map((part) => {
                  return (
                    <button
                      key={part.id}
                      id={part.id}
                      onClick={(e) => {
                        const id = e.target.id;
                        switch (title) {
                          case "Backgrounds":
                            setBackground(id);
                            break;
                          case "Ears":
                            setEars(id);
                            break;
                          case "Eyes":
                            setEyes(id);
                            break;
                          case "Hair":
                            setHair(id);
                            break;
                          case "Leg":
                            setLeg(id);
                            break;
                          case "Mouth":
                            setMouth(id);
                            break;
                          case "Neck":
                            setNeck(id);
                            break;
                          case "Accessories":
                            setAccessories(id);
                            break;
                          default:
                            break;
                        }
                      }}
                    >
                      {part.label}
                    </button>
                  );
                });
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accessories;
