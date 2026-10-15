export default function Inquire() {
  return (
    <section className="page" id="page-inquire">
          <div className="page-hero">
            <div className="container reveal">
              <span className="eyebrow">Share an item</span>
              <h1 className="editorial-title page-hero-title">
                Give it a{" "}
                <span
                  className="editorial-italic"
                  style={{ color: "var(--accent-violet)" }}
                >
                  second life
                </span>
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Tell the community what is broken. Other users will suggest how
                to fix it, or someone may want to take it and repair it.
              </p>
            </div>
          </div>
          <div className="container inquire-grid">
            <div className="inquire-details reveal">
              <h3>Take a good photo</h3>
              <p>
                Use daylight and show the broken part up close. A clear photo
                gets better advice.
              </p>
              <h3>Describe the problem</h3>
              <p>
                What happened, what you already tried and the model number, if
                there is one.
              </p>
              <h3>Choose the right category</h3>
              <p>
                So that people who know how to fix this kind of thing can find
                it faster.
              </p>
              <h3>Free to take?</h3>
              <p>
                If you do not want to repair it yourself, tick the box and give
                it to someone who will.
              </p>
            </div>
            <form id="inquireForm" className="reveal" noValidate="">
              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-name">Title</label>
                  <input
                    type="text"
                    id="f-name"
                    name="name"
                    required=""
                    autoComplete="name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-email">City</label>
                  <input
                    type="email"
                    id="f-email"
                    name="email"
                    required=""
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-interest">Category</label>
                  <select id="f-interest" name="interest">
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Textiles &amp; clothes</option>
                    <option>Bikes</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="f-timeline">I want to</label>
                  <select id="f-timeline" name="timeline">
                    <option>Repair it myself</option>
                    <option>Give it away</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="f-message">Description</label>
                <textarea
                  id="f-message"
                  name="message"
                  placeholder="What is broken, what you already tried, and the model number if there is one."
                  required=""
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-solid">
                Share item
              </button>
              <p className="form-note" id="formNote">
                Thank you. Your item has been shared with the community.
              </p>
            </form>
          </div>
        </section>
  )
}