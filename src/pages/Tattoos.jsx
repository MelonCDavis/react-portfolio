import React from "react";


import melonavl450 from "../assets/melonavl450.jpg";

import aj from "../assets/aj.JPG";
import armadillo from "../assets/armadillo.JPG";
import bentyPanther from "../assets/bentyPanther.JPG";
import brains from "../assets/brains.JPG";
import chucky from "../assets/chucky.JPG";
import critbird from "../assets/critbird.JPG";
import egg from "../assets/egg.JPG";
import festus from "../assets/festus.JPG";
import ffhorse from "../assets/ffhorse.JPG";
import jazz from "../assets/jazz.JPG";
import jenni from "../assets/jenni.JPG";
import joel from "../assets/joel.JPG";
import kate from "../assets/kate.JPG";
import lildebil from "../assets/lildebil.JPG";
import logan from "../assets/logan.JPG";
import memento from "../assets/memento.JPG";
import merlin from "../assets/merlin.JPG";
import noah from "../assets/noah.JPG";
import pickle from "../assets/pickle.JPG";
import rubix from "../assets/rubix.JPG";
import seeya from "../assets/seeya.JPG";
import smellin from "../assets/smellin.JPG";
import thirsty from "../assets/thirsty.JPG";
import tittywiz from "../assets/tittywiz.JPG";


const galleryImages = [
  { src: festus, alt: "Festus tattoo" },
  { src: seeya, alt: "Seeya tattoo" },
  { src: armadillo, alt: "Armadillo tattoo" },
  { src: brains, alt: "Brains tattoo" },
  { src: merlin, alt: "Merlin tattoo" },
  { src: jenni, alt: "Jenni tattoo" },
  { src: jazz, alt: "Jazz tattoo" },
  { src: egg, alt: "Egg tattoo" },
  { src: kate, alt: "Kate tattoo" },
  { src: rubix, alt: "Rubix tattoo" },
  { src: pickle, alt: "Pickle tattoo" },
  { src: tittywiz, alt: "Tittywiz tattoo" },
  { src: critbird, alt: "Critbird tattoo" },
  { src: ffhorse, alt: "Horse tattoo" },
  { src: lildebil, alt: "Lildebil tattoo" },
  { src: chucky, alt: "Chucky tattoo" },
  { src: logan, alt: "Logan tattoo" },
  { src: memento, alt: "Memento tattoo" },
  { src: thirsty, alt: "Thirsty tattoo" },
  { src: bentyPanther, alt: "Panther tattoo" },
  { src: smellin, alt: "Smellin tattoo" },
  { src: aj, alt: "AJ tattoo" },
  { src: noah, alt: "Noah tattoo" },
  { src: joel, alt: "Joel tattoo" },
];

const Tattoos = () => {
  return (
    <main>
      <div className="bg-secondary">
        <h1 className="display-1 text-center custom-tattoo-border mb-4 bg-dark text-white">
          <strong>
            THE BENT GALLERY
            <br />
            <small>
              <em>(and a few other fun tattoos)</em>
            </small>
          </strong>
        </h1>

        <div className="px-4 py-5 text-center">
          <img
            className="d-block custom-tattoo-border rounded mx-auto mb-4"
            src={melonavl450}
            alt="Melon Chris Davis"
          />
          <h2 className="p-3 custom-tattoo-border rounded my-text-shadow bg-light">
            Hello and welcome! I'm Melon Chris Davis and I'm excited to share a
            bit of my tattoo journey with you. I hope you enjoy the show!
          </h2>
        </div>
      </div>

      <div className="container-fluid bg-dark">
        <div className="row pt-5">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <img
                className="img-fluid custom-tattoo-border shadow rounded mb-4"
                src={img.src}
                alt={img.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Tattoos;
