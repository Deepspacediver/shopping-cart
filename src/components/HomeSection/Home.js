import Image from "../Image/Image";
import MainBird from "../../assets/home-imgs/parrot-main.webp";
import "./Home.css";

const Home = () => (
  <section className="home-section">
    <article className="home-section_article">
      <h2 className="home-section_heading">Fancy Bird Sanctuary</h2>
      <p className="home-section_paragraph">
        The perfect place for the <br />
        Birds Enthusiasts.
      </p>

      {/* <p className="home-section_paragraph">
        Decorate your interior with our collection of Exotic Birds.
      </p> */}
    </article>
    <Image name="home-section_img" src={MainBird} alt="gray-bird" />
  </section>
);

export default Home;
