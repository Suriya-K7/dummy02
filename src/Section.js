import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Section = () => {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </section>
  );
};

export default Section;
