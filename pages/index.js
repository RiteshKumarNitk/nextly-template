import Head from "next/head";
import Hero from "../components/hero";
import Content from "../components/Content";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import HeroOne from "../components/HeroOne";
import Scroller from "../components/Scroller";
import Servicep from "../components/Servicep";
import Pricing from "../components/Pricing";
import ShuffleHero from "../components/ShuffleHero";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <>
      <Head>
        <title>
          Welcome to Innovatex Technology Pvt Ltd, where innovation meets
          technology to transform businesses.
        </title>
        <meta
          name="description"
          content="Welcome to Innovatex Technology Pvt Ltd, where innovation meets technology to transform businesses."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* <Content /> */}
      <Hero />
      <HeroOne />
      <Servicep />
      <product />
      <SectionTitle
        pretitle="Leading Management Consultancy In India"
        title="Unlock Growth with DETROIT CONSULTANCY"
      >
        Innovatex Technology Pvt Ltd provides tailored software development,
        top-tier talent access, and strategic digital marketing solutions for
        growth. Partner with us for success and support beyond project
        completion.
      </SectionTitle>
      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how Innovatex Technology can fulfill your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts say a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle> */}
      <Scroller />
      {/* <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our clients say about Detroit Consultancy"
      >
        Testimonials are a great way to increase brand trust and awareness. Use
        this section to highlight feedback from our satisfied clients.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers' possible questions here; it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      <Pricing/>

      <ShuffleHero/>
      <Portfolio/>
      <Faq />
      <Contact/>
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
