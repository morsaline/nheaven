import React from "react";
import Image, { StaticImageData } from "next/image";

// Define prop types for the ReusableBanner component
interface ReusableBannerProps {
  img1: string | StaticImageData; // The source for the first image (file path or URL)
  img2: string | StaticImageData; // The source for the second image
  img3: string | StaticImageData; // The source for the third image
  title: string; // The title that will be displayed over the first image
}

// ReusableBanner Component
const ReusableBanner: React.FC<ReusableBannerProps> = ({
  img1,
  img2,
  img3,
  title,
}) => {
  return (
    <section className="max-w-[90rem] mx-auto py-16 px-6 md:px-16 my-10">
      <div className="w-full flex flex-col md:flex-row gap-5">
        {/* First Image (Large) */}
        <div className="w-full md:w-[60%] h-[400px] relative">
          <Image
            src={img1}
            alt="Fitness 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <p className="uppercase absolute bottom-0 left-0 text-white text-4xl md:text-8xl -mb-2 md:-mb-4 ">
            {title}
          </p>
        </div>

        {/* Second and Third Images (Stacked on mobile, side by side on larger screens) */}
        <div className="w-full md:w-[40%] flex flex-col md:flex-row gap-5">
          {/* Second Image */}
          <div className="w-full h-[400px] relative rounded-lg">
            <Image
              src={img2}
              alt="Fitness 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* Third Image */}
          <div className="w-full h-[400px] relative rounded-lg">
            <Image
              src={img3}
              alt="Fitness 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableBanner;
