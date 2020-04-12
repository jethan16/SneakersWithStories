import React from "react";
import Footer from "../../components/Footer";
import "./vision.css";

function Vision() {
  return (
    <div>
      <div className="vision-upper">
        <div className="vision-hero upper-splash"></div>
        <p className="vision-content">
          <span style={{ color: "green" }}>SNKRSwithStories</span> was born as a
          way to combine the art of custom shoes and the need for people to feel
          seen and known. Everyone has a story that drives their desire to
          capture moments in art. Our belief is that those moments should not
          take a backseat to the art, but that the art should complement the
          story being told. This approach begins and ends with empathy, and from
          empathy comes great art and beautiful stories. We exist to make sure
          those stories are being told and are represented well in the art.
        </p>
      </div>
      <div className="vision-lower">
        <div className="lower-splash"></div>
        <p className="vision-lower-content">
          Daniel Brenneman is the founder, creative director, and shoe creator
          for SNKRSwithStories. He is a jack of all trades and has spent many
          years diving headfirst into hobbies that would teach him the skills to
          begin creating custom shoes. He believes in the power of a story and
          how stories move culture. By the time all is said and done, he hopes
          to have told many stories across many facets of society for many
          different types of people and, through that, made countless people
          feel seen and known.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Vision;
