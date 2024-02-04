// import { Analytics } from "../components/Analytics";

import Analytics from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best IT Company</p>
              <h1>Welcome to SkillNest</h1>
              <p>
                Welcome to SkillNest, your ultimate destination for unlocking
                the full potential of your technical skills. At SkillNest, we
                believe in fostering a learning environment where knowledge
                takes flight and abilities find their wings.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="">connect now</button>
                </a>
                <a href="/service">
                  <button className="secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how SkillNest can help your business thrive in the
              digital age. At SkillNest, we specialize in empowering businesses
              with cutting-edge technical solutions and training.  Let SkillNest be the
              catalyst for transforming your business into a powerhouse of
              innovation and efficiency. We look forward to helping you succeed
              in the digital era.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="">connect now</button>
              </a>
              <a href="/service">
                <button className="secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
