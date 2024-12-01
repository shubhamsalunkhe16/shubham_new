import React from "react";
import "./Fallback.css";

const Fallback = () => {
  return (
    <div
      role="status"
      className="w-screen h-screen flex flex-col gap-12 justify-center items-center"
    >
      <div class="hexagon" aria-label="Animated hexagonal ripples">
        <div class="hexagon__group">
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
        </div>
        <div class="hexagon__group">
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
        </div>
        <div class="hexagon__group">
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
        </div>
        <div class="hexagon__group">
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
        </div>
        <div class="hexagon__group">
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
        </div>
        <div class="hexagon__group">
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
          <div class="hexagon__sector"></div>
        </div>
      </div>
      <p aria-label="Loading" className="heading-2xl">
        Loading...
      </p>
    </div>
  );
};

export default Fallback;
