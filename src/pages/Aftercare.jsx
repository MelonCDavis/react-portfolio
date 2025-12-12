import React from "react";
import planchette from "../assets/planchette1.png";

const Aftercare = () => {
  return (
    <main>
      <div className="bg-secondary pb-2">
        <h1 className="display-1 custom-card-border text-center mb-4 bg-dark text-white">
          TATTOO AFTERCARE
        </h1>

        <div className="px-4 py-5 text-center">
          <h2 className="display-5 p-3 my-text-shadow custom-card-border rounded mb-5 bg-light">
            Your new tattoo isn&apos;t just a piece of art. I did the tattoo to
            the best of my ability, but now it&apos;s up to you to take care of
            it. Here is how to do just that.
          </h2>
        </div>
      </div>

      <div className="bg-secondary pb-5">
        <h3 className="display-1 custom-card-border text-center mb-4 bg-dark text-white">
          Derm Shield / Saniderm
        </h3>

        <div className="container">
          <div className="row pt-5">

            <Card  number="1" title="WASH YOUR HANDS!" img={planchette}
              text="Wash your hands thoroughly with warm water and a liquid antibacterial soap. You need to sing the chorus of the song 'Jolene' by Dolly Parton roughly twice to meet the CDC's recommended 20-second handwashing time."
            />

            <Card number="2" title="REMOVE YOUR BANDAGE" img={planchette}
              text="Peel horizontally away from the tattoo. As it stretches the bandage may tear. That's ok. The bandage stretches and the adhesive lets go. Do this in the shower or over a sink due to the fluid that can build up underneath. It can be messy."
            />

            <Card number="3" title="WASH YOUR TATTOO!" img={planchette}
              text="Thoroughly wash your tattoo with hot water and a liquid antibacterial soap. Avoid foam soaps as they contain alcohol. Always wash your hands before touching your tattoo until it is fully healed."
            />

            <Card number="4" title="DRY YOUR TATTOO!" img={planchette}
              text="Use a fresh square of paper towel to blot your tattoo dry. Do NOT wipe. A hand towel contains enough bacteria to cause infection. Stick to paper towels."
            />

            <Card number="5" title="YEP — ALCOHOL!" img={planchette}
              text="I provide alcohol swabs so you can remove any leftover bacteria and residual soap. Do NOT moisturize here—the tattoo must be dry for the bandage to work."
            />

            <Card number="6" title="PREPARE YOUR BANDAGE!" img={planchette}
              text="Ensure the bandage will cover the tattoo with a 1/2 inch border. Peel the white backing carefully. If it sticks to itself, switch to traditional aftercare or an alternative derm."
            />

            <Card number="7" title="PEEL AND REVEAL!" img={planchette}
              text="Place the bandage down and press firmly. Remove the top plastic using the yellow arrows. If it leaks, remember that leaks allow things IN and OUT."
            />

            <Card number="8" title="LEAVE IT ALONE!" img={planchette}
              text="Your tattoo may fill with fluid. This is NORMAL. Aftercare is a marathon, not a sprint. Your goal is to finish healing without scabs!"
            />

            <Card number="9" title="REPEAT 1–4!" img={planchette}
              text="After 3–5 days, remove the second bandage and repeat steps 1–4. You’ve got this!"
            />

            <Card number="10" title="MOISTURIZE!" img={planchette}
              text="Your tattoo may peel like a sunburn. Use Aveeno or similar. Avoid petroleum-based products—they clog pores and cause poor healing."
            />

            <Card number="11" title="SUNSCREEN!" img={planchette}
              text="The sun is NOT your tattoo’s friend. Protect your investment with sunscreen so it lasts."
              
            />

          </div>
        </div>
      </div>


      <div className="bg-secondary pb-5 pt-5">
        <h3 className="display-1 custom-card-border text-center mb-4 bg-dark text-white">
          Traditional Aftercare
        </h3>

        <div className="container">
          <div className="row pt-5">

            <Card number="1" title="WASH YOUR HANDS!" img={planchette}
              text="Wash thoroughly with warm water and antibacterial soap for 20 seconds. Always wash before touching your tattoo." />

            <Card number="2" title="REMOVE YOUR BANDAGE!" img={planchette}
              text="Remove after 2–4 hours. Do NOT re-bandage. Keep it simple—less is more." />

            <Card number="3" title="WASH YOUR TATTOO!" img={planchette}
              text="Wash under hot running water using mild antibacterial soap and your bare hand. Repeat until clean." />

            <Card number="4" title="DRY YOUR TATTOO!" img={planchette}
              text="Blot dry using fresh paper towels only. Do NOT wipe—it causes irritation." />

            <Card number="5" title="JUST THIS ONCE!" img={planchette}
              text="Apply a VERY small amount of Aquaphor or Hustle Butter. Blot excess. Too much ointment harms healing." />

            <Card number="6" title="REPEAT & REPEAT!" img={planchette}
              text="Repeat steps except step 2 for 2–3 days. When itching begins, switch to unscented lotion. STOP USING AQUAPHOR." />

            <Card number="7" title="LOTION AS NEEDED!" img={planchette}
              text="Use unscented lotion for the next 2–3 weeks until fully healed. Avoid fragrances and alcohol." />

            <Card number="8" title="SUNSCREEN!" img={planchette}
              text="The sun fades tattoos quickly. Use sunscreen anytime you’re outdoors." />

          </div>
        </div>
      </div>

    </main>
  );
};


const Card = ({ number, title, text, img }) => (
  <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
    <div className="card custom-card-border m-2 pb-5">
      <div className="card-body">
        <h6 className="d-block item-center mx-auto card-subtitle mb-4 text-muted">
          <img src={img} alt="ouija planchette" />
        </h6>

        <h6 className="card-title custom-card-border text-center text-white bg-dark">
          {number}-{title}
        </h6>

        <p className="card-text text-center p-2">{text}</p>
      </div>
    </div>
  </div>
);

export default Aftercare;
