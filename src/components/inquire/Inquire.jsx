export default function Inquire() {
  return (
    <section className="page" id="page-inquire">
          <div className="page-hero">
            <div className="container reveal">
              <span className="eyebrow">Inquire</span>
              <h1 className="editorial-title page-hero-title">
                Begin a{" "}
                <span
                  className="editorial-italic"
                  style={{ color: "var(--accent-violet)" }}
                >
                  conversation
                </span>
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Tell us about the room, the light it receives, and how you live
                in it. We reply personally within two working days.
              </p>
            </div>
          </div>
          <div className="container inquire-grid">
            <div className="inquire-details reveal">
              <h3>Showroom &amp; Workshop</h3>
              <p>
                Refshalevej 163A
                <br />
                1432 Copenhagen K, Denmark
                <br />
                By appointment, Tuesday to Saturday
              </p>
              <h3>Contact</h3>
              <p>
                studio@lumen80.example
                <br />
                +45 33 12 80 80
              </p>
              <h3>Commissions</h3>
              <p>
                Current lead time is 14 to 18 weeks. The annual commission list
                opens each January and typically closes by late spring.
              </p>
              <h3>Trade &amp; Architects</h3>
              <p>
                We collaborate with architects and interior studios on full
                spatial programmes. Request the trade dossier in your message.
              </p>
            </div>
            <form id="inquireForm" className="reveal" noValidate="">
              <div className="form-row">
                <div className="field">
                  <label htmlFor="f-name">Full name</label>
                  <input
                    type="text"
                    id="f-name"
                    name="name"
                    required=""
                    autoComplete="name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-email">Email</label>
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
                  <label htmlFor="f-interest">Interest</label>
                  <select id="f-interest" name="interest">
                    <option>Minimalist Lounge</option>
                    <option>Monolith Tables</option>
                    <option>Architectural Lighting</option>
                    <option>Bespoke Textiles</option>
                    <option>Full spatial programme</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="f-timeline">Timeline</label>
                  <select id="f-timeline" name="timeline">
                    <option>Flexible</option>
                    <option>Within 3 months</option>
                    <option>Within 6 months</option>
                    <option>This year</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="f-message">About the space</label>
                <textarea
                  id="f-message"
                  name="message"
                  placeholder="Room dimensions, orientation, existing materials, and anything the piece must live alongside."
                  required=""
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-solid">
                Send inquiry
              </button>
              <p className="form-note" id="formNote">
                Thank you. Your inquiry has been received and the studio will
                reply within two working days.
              </p>
            </form>
          </div>
        </section>
  )
}