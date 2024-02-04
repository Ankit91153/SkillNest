import { NavLink } from "react-router-dom";
import Analytics from "../components/Analytics";
// import { Analytics } from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Why Choose Us? </h1>
              <p>
              Engaging Courses: Immerse yourself in interactive and engaging courses that cover the latest in technology.
              </p>
              <p>
              Expert Instructors: Learn from seasoned professionals and industry leaders passionate about sharing their knowledge.
              </p>
              <p>
              Practical Skills: Acquire practical, hands-on skills applicable to real-world scenarios, ensuring you're ready for any challenge.
              </p>
              <p>
              Community Support: Connect with like-minded learners, collaborate on projects, and build a network that lasts beyond the courses.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className=""> Connect Now</button>
                </NavLink>
                <button className=" secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};