"use client"
import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Scroller = () => {
  return (
    <div>
        <div className="bg-neutral-200 dark:bg-neutral-800">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
    </div>
  )
}
const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["2%", "-85%"]);
  
    return (
      <section ref={targetRef} className="relative h-[200vh] bg-neutral-200 dark:bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };
  
  const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    );
  };
  
  export default Scroller;
  
  const cards = [
    {
      url: "https://images.pexels.com/photos/11379269/pexels-photo-11379269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Title 1",
      id: 1,
    },
    {
      url: "https://images.pexels.com/photos/20310587/pexels-photo-20310587/free-photo-of-a-woman-holding-a-camera-in-front-of-her-face.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Title 2",
      id: 2,
    },
    {
      url: "https://images.pexels.com/photos/18160095/pexels-photo-18160095/free-photo-of-woman-holding-dog-in-arms.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Title 3",
      id: 3,
    },
    {
      url: "https://images.pexels.com/photos/17853121/pexels-photo-17853121/free-photo-of-smiling-woman-lying-down.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Title 4",
      id: 4,
    },
    {
      url: "https://images.pexels.com/photos/15670745/pexels-photo-15670745/free-photo-of-man-standing-in-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Title 5",
      id: 5,
    },
    {
      url: "https://images.pexels.com/photos/19329089/pexels-photo-19329089/free-photo-of-pink-neon-on-a-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Title 6",
      id: 6,
    },
    {
      url: "https://images.pexels.com/photos/18131914/pexels-photo-18131914/free-photo-of-woman-in-wedding-dress-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Title 7",
      id: 7,
    },
  ];
