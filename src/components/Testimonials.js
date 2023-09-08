import React from "react";
import TestimonialItem from "./TestimonialItem";
import { Element } from "react-scroll";

function Testimonials() {
  const testimonial = [
    "Using this app has been a game-changer for my finances. It's user-friendly, and I can easily track my expenses, saving me both time and money.",
    "I love how this app simplifies budgeting and provides insightful reports. It's become an indispensable tool for managing my financial goals.",
    "Using this app has made tracking expenses a breeze. It's user-friendly and has helped me stay on top of my finances. Highly recommended!",
  ];
  return (
    <section className="container mt-36 text-center flex flex-col items-center">
      <Element name="testimonial">
        <h3 className="text-4xl font-bold">What Clients Say</h3>{" "}
      </Element>
      <p className="font-medium mt-4 max-w-lg">
        Here's what our valued clients have to say about their experience with
        our app
      </p>

      <div className="mt-12 min-w-[80vw] justify-center md:gap-4 md:min-w-full grid gap-8 md:grid-cols-3">
        <TestimonialItem
          name="Nina Watson"
          designation="Designer"
          userImg="./images/user-1.jpg"
          rating={4}
          testimonial={testimonial[0]}
        />
        <TestimonialItem
          name="Janice Harrison"
          designation="Trader"
          userImg="./images/user-2.jpg"
          rating={3}
          testimonial={testimonial[1]}
        />
        <TestimonialItem
          name="Amy Adams"
          designation="Model"
          userImg="./images/user-3.jpg"
          rating={4}
          testimonial={testimonial[2]}
        />
      </div>
    </section>
  );
}

export default Testimonials;
