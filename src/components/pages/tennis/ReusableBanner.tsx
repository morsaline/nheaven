import React from "react";
import Image, { StaticImageData } from "next/image";

interface ReusableBannerProps {
  img1: string | StaticImageData;
  img2: string | StaticImageData;
  img3: string | StaticImageData;
  title: string;
}

const ReusableBanner: React.FC<ReusableBannerProps> = ({
  img1,
  img2,
  img3,
  title,
}) => {
  return (
    <section className="max-w-[90rem] mx-auto py-6 px-2 sm:px-4 md:px-16 my-8 mt-20">
      {/* Always a single row — no flex-col ever */}
      <div className="w-full flex flex-row gap-2 sm:gap-3 md:gap-5">
        {/* Main Image - 60% */}
        <div className="w-[60%] h-[220px] sm:h-[280px] md:h-[400px] relative">
          <Image
            src={img1}
            alt="Banner 1"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
          <p
            className="uppercase absolute bottom-0 left-0 sm:left-0 text-white font-bold
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl !-mb-3
                        whitespace-nowrap"
          >
            {title}
          </p>
        </div>

        {/* Right container: 40% total width, holds two side-by-side images */}
        <div className="w-[40%] flex flex-row gap-2 sm:gap-3">
          {/* Image 2 - 50% of right area → 20% of total */}
          <div className="w-1/2 h-[220px] sm:h-[280px] md:h-[400px] relative">
            <Image
              src={img2}
              alt="Banner 2"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          {/* Image 3 - 50% of right area → 20% of total */}
          <div className="w-1/2 h-[220px] sm:h-[280px] md:h-[400px] relative">
            <Image
              src={img3}
              alt="Banner 3"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReusableBanner;
