// pages/Indicators.js
"use client";
import { Carousel } from "flowbite-react";

export default function Indicators() {
  return (
    <>
      <Carousel>
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
      </Carousel>
      <Carousel indicators={true}>
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
        <img alt="..." src="https://dummyimage.com/1080x550/000/fff" />
      </Carousel>
    </>
  );
}
