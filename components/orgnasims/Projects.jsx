import React from 'react'

function Projects() {
  return (
    <section id="projects" className="relative z-20 pt-[121px]">
      <div className="container">
        <div
          className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
          data-wow-delay=".2s"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            Projects
          </h2>
          <p className="text-base text-body">
          Browse our portfolio to see how we've brought ideas to life with impactful and innovative solutions. Each project reflects our dedication to quality and client success.
          </p>
        </div>
      </div>
      <div className="container">
        <div
          className="wow fadeInUp mx-auto"
          data-wow-delay=".2s"
        >
          <div className="swiper swiper-initialized swiper-horizontal mySwiper relative z-20 swiper-backface-hidden">
            <div className="swiper-wrapper flex flex-wrap gap-[3.5%]">
              <div
                className="swiper-slide w-[31%]"
                data-swiper-slide-index={0}
              >
                <div className="mx-auto w-full">
                  <img
                    alt="screenshot"
                    loading="lazy"
                    decoding="async"
                    data-nimg={1}
                    className="mx-auto w-full rounded-2xl portfolio__image"
                    srcSet="https://1dotdigital.com/wp-content/uploads/2024/05/science-ritecbd.png"
                    src="https://1dotdigital.com/wp-content/uploads/2024/05/science-ritecbd.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next w-[31%]"
                data-swiper-slide-index={1}
              >
                <div className="mx-auto w-full">
                  <img
                    alt="screenshot"
                    loading="lazy"
                    decoding="async"
                    data-nimg={1}
                    className="mx-auto w-full rounded-2xl portfolio__image"
                    srcSet="https://1dotdigital.com/wp-content/uploads/2024/05/geobizops-min.png"
                    src="https://1dotdigital.com/wp-content/uploads/2024/05/geobizops-min.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="swiper-slide w-[31%]"
                data-swiper-slide-index={2}
              >
                <div className="mx-auto w-full">
                  <img
                    alt="screenshot"
                    loading="lazy"
                    decoding="async"
                    data-nimg={1}
                    className="mx-auto w-full rounded-2xl portfolio__image"
                    srcSet="https://1dotdigital.com/wp-content/uploads/2024/05/the-barn-cafe-min.png"
                    src="https://1dotdigital.com/wp-content/uploads/2024/05/the-barn-cafe-min.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="swiper-slide w-[31%] mt-[45px]"
                data-swiper-slide-index={3}
              >
                <div className="mx-auto w-full">
                  <img
                    alt="screenshot"
                    loading="lazy"
                    decoding="async"
                    data-nimg={1}
                    className="mx-auto w-full rounded-2xl portfolio__image"
                    srcSet="https://1dotdigital.com/wp-content/uploads/2024/05/ondot-removals-min.png"
                    src="https://1dotdigital.com/wp-content/uploads/2024/05/ondot-removals-min.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="swiper-slide w-[31%] mt-[45px]"
                data-swiper-slide-index={4}
              >
                <div className="mx-auto w-full">
                  <img
                    alt="screenshot"
                    loading="lazy"
                    decoding="async"
                    data-nimg={1}
                    className="mx-auto w-full rounded-2xl portfolio__image"
                    srcSet="https://1dotdigital.com/wp-content/uploads/2024/05/dama-min.png"
                    src="https://1dotdigital.com/wp-content/uploads/2024/05/dama-min.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div
                className="swiper-slide w-[31%] mt-[45px]"
                data-swiper-slide-index={5}
              >
                <div className="mx-auto w-full">
                  <img
                    alt="screenshot"
                    loading="lazy"
                    decoding="async"
                    data-nimg={1}
                    className="mx-auto w-full rounded-2xl portfolio__image"
                    srcSet="https://1dotdigital.com/wp-content/uploads/2024/05/Soft-soon.png"
                    src="https://1dotdigital.com/wp-content/uploads/2024/05/Soft-soon.png"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-10">
        <svg
          width={95}
          height={190}
          viewBox="0 0 95 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cy={95}
            r={77}
            stroke="url(#paint0_linear_47_26)"
            strokeWidth={36}
          />
          <defs>
            <linearGradient
              id="paint0_linear_47_26"
              x1="-117.84"
              y1={190}
              x2="117.828"
              y2="25.9199"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8EA5FE" />
              <stop offset="0.541667" stopColor="#BEB3FD" />
              <stop offset={1} stopColor="#90D1FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default Projects
