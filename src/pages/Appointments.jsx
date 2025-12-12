import React from "react";

const Appointments = () => {
  return (
    <main className="bg-secondary">
      <div>
        <h1 className="custom-tattoo-border rounded text-center bg-dark text-white my-0 py-3">
          Book your next tattoo here!
        </h1>
      </div>

      <div className="container">
        <br />
        <div className="mx-5 text-center">
          <h2 className="custom-tattoo-border rounded my-text-shadow bg-light">
            A journey of a thousand miles begins with a single step. Although I
            pride myself on being on top of my work, there are times that I may
            not get back to clients on the day you send your email. Fear not
            adventurer, for your wait shall not go in vane. Message away! Your
            journey begins below.
          </h2>
        </div>
        <br />

        <form
          action="https://formsubmit.co/brothertiki@gmail.com"
          method="POST"
          encType="multipart/form-data"
          className="container-fluid bg-dark rounded text-white custom-tattoo-border p-4"
        >
          <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />

          <input type="hidden" name="_captcha" value="false" />

          <div className="mb-3">
            <label htmlFor="name" className="form-label required">
              First and last name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="first and last name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label required">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label required">
              Phone number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="design" className="form-label required">
              Please describe the design you would like:
              <br />
              1. Size in inches
              <br />
              2. Placement
              <br />
              3. Linework / Black & Grey / Color
            </label>
            <textarea
              className="form-control"
              id="design"
              name="design"
              rows="8"
              placeholder='tell me your "What if"...'
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="dateNeeded" className="form-label required">
              Do you need a specific date? If so, list it here.
            </label>
            <textarea
              className="form-control"
              id="dateNeeded"
              name="dateNeeded"
              rows="2"
              placeholder="leave date(s) here"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="location" className="form-label required">
              Are you local to Asheville or visiting?
            </label>
            <textarea
              className="form-control"
              id="location"
              name="location"
              rows="2"
              placeholder="where are you coming from?"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="budget" className="form-label required">
              Do you have a certain budget?
            </label>
            <textarea
              className="form-control"
              id="budget"
              name="budget"
              rows="2"
              placeholder="it's ok to have a budget..."
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="images" className="form-label required">
              Upload your ideas and inspirations here!
            </label>
            <input
              className="form-control"
              type="file"
              id="images"
              name="images"
              accept="image/*"
              multiple
            />
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-secondary btn-lg d-block mx-auto custom-button-border"
            >
              SUBMIT APPOINTMENT REQUEST
            </button>
          </div>

          <br />
        </form>

        <br />
      </div>
    </main>
  );
};

export default Appointments;
