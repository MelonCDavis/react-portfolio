import React from "react";

import melonWork from "../assets/melonwork4.jpg";
import imgSmellin from "../assets/smellin.JPG";
import imgFestus from "../assets/festus.JPG";
import imgAfterwhile from "../assets/afterwhile.JPG";
import imgLogan from "../assets/logan.JPG";
import imgFfhorse from "../assets/ffhorse.JPG";

const Home = () => {
  return (
    <main>
      <div className="bg-secondary">
        <h1 className="display-1 text-center custom-tattoo-border mb-4 bg-dark text-white">
          Hi there. I'm Melon.
          <br />
          Let me introduce myself.
        </h1>

        <div className="container py-6">
          <div className="row flex-lg-row-reverse flex-md-row-reverse flex-sm-row-reverse">
            <div className="col-12 col-md-6">
              <img
                className="w-100 rounded custom-tattoo-border mb-3"
                src={melonWork}
                alt="melon chris davis tattoo artist"
              />
            </div>

            <div className="col-12 col-md-6">
              <p className="custom-tattoo-border p-3 bg-light rounded mb-3">
                Bent Back &amp; Beyond isn't just an idea. I don't JUST do
                tattoos. I think outside the box. &quot;What if...&quot; are two
                of my favorite words. There's childish want for adventure in
                those words. There are incredible journeys to be taken in those
                words. There are endless possibilities, &quot;Fencing, fighting,
                torture, revenge, giants, monsters, chases, escapes, true love,
                miracles.&quot; All in two simple words. So yeah. What if....
                <br />
                I want my clients to feel like they can be themselves in my
                space. Their comfortability means we can speak in a way that
                they can get the best out of their tattoo experience. It's not
                just about doing a tattoo. We are collectively working to create
                something special and meaningful. Over the past twenty plus
                years, I have found that the more we talk, the more fun the
                tattoo becomes. The idea pours out, first onto paper, and then
                onto you. I get to give that to you and you carry our story with
                you forever. That's pretty wild! I'm looking forward to sharing
                a story with you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-secondary pb-3">
        <div className="row flex-lg-row-reverse flex-md-row-reverse flex-sm-row-reverse">
            <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-4">
            <hr className="my-4" />
            <p className="text-white text-center">
              If you're itching to start something right away, or just want to
              get the ball rolling...
            </p>
            <p className="lead text-center">
              <a className="btn btn-light btn-lg" href="/appointments" role="button">
                BOOK NOW
              </a>
            </p>
          </div>
          

          <div className="col-12 col-md-6">

            <div
                id="carouselFade"
                className="carousel slide carousel-fade custom-tattoo-border rounded"
                data-bs-ride="carousel"
                data-bs-interval="3000"
                data-bs-pause="hover"
            >

                <div className="carousel-inner">

                <div className="carousel-item active">
                    <div className="carousel-equalizer">
                    <img src={imgSmellin} alt="t-rex" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-equalizer">
                    <img src={imgFestus} alt="bear" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-equalizer">
                    <img src={imgAfterwhile} alt="crocodile" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-equalizer">
                    <img src={imgLogan} alt="logan" />
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-equalizer">
                    <img src={imgFfhorse} alt="horse" />
                    </div>
                </div>

                </div>

                <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselFade"
                data-bs-slide="prev"
                >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>

                <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselFade"
                data-bs-slide="next"
                >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>

            </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
