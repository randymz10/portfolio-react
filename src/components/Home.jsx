import data from "../data.js";
import { FaFileDownload } from "react-icons/fa";

function Home() {
  return (
    <main className="hero is-fullheight">
      <section className="hero-body columns">
        <article className="block column is-flex is-flex-direction-column is-justify-content-center is-align-content-center">
          <h1 className="title is-1 is-spaced has-text-centered">
            Hi! I&apos;m {data.name}
          </h1>
          <p className="subtitle is-6 has-text-centered-mobile">
            <span className="has-text-weight-bold">{data.experience}</span>{" "}
            {data.introduction} <strong>{data.certified}</strong>
          </p>
          <button className="button is-primary ">
            <span className="icon-text">
              <span className="icon">
                <FaFileDownload />
              </span>
              <span>Resume</span>
            </span>
          </button>
        </article>
        <figure className="image is-3by4 column is-hidden-mobile">
          <img className="" src="./photo2.webp" />
        </figure>
      </section>
    </main>
  );
}

export default Home;
