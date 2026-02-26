// components/ProjectShowcaseVelocity.tsx
'use client';

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import Image from "next/image";

const PROJECT_IMAGES = [
  { id: 1, src: "/projects/p1.png", alt: "AI E-commerce", title: "E-commerce" },
  { id: 2, src: "/projects/p2.png", alt: "Analytics Dashboard", title: "Dashboard" },
  { id: 3, src: "/projects/p3.png", alt: "Health Tracker", title: "Health" },
  { id: 4, src: "/projects/p4.png", alt: "Portfolio Builder", title: "Portfolio" },
  { id: 5, src: "/projects/p5.png", alt: "SaaS Platform", title: "SaaS" },
  { id: 6, src: "/projects/p6.png", alt: "Content Generator", title: "Content" },
  { id: 7, src: "/projects/8.png.webp", alt: "Project", title: "Project" },
  { id: 7, src: "/projects/p7.png", alt: "Project", title: "Project" },
  { id: 7, src: "/projects/p8.png", alt: "Project", title: "Project" },
  { id: 7, src: "/projects/p9.png", alt: "Project", title: "Project" },
];

export default function ProjectShowcaseVelocity() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center pt-40">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          <span className="block text-accent-light">Image Gallery</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          See the images of the projects we have in our portfolio. <span className="text-accent-light">Note that the links to the actual projects will be provided during the training as well as more projects</span>
        </p>
      </div>

      {/* Main Image Scroll Area */}
      <div className="w-full max-w-[1500px] mx-auto px-4">

        {/* Row 3: Slow right scroll */}
        <div className="mb-20">
          <ScrollVelocityContainer>
            <ScrollVelocityRow
              baseVelocity={3/2}
              direction={1}
              className="flex"
            >
              {[...PROJECT_IMAGES, ...PROJECT_IMAGES, ...PROJECT_IMAGES].map((img, index) => (
                <div
                  key={`row3-${img.id}-${index}`}
                  className="relative flex-shrink-0 w-[460px] h-[350px] rounded-2xl shadow-4xl overflow-hidden hover:brightness-90 transition-all duration-300 mr-6"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="288px"
                    unoptimized
                  />
                </div>
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>
    </div>
  );
}