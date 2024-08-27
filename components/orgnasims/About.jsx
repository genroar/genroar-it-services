import React from 'react'

function About() {
  return (
    <section id="about" className="relative">
      <div className="container lg:max-w-[1120px]">
        <div>
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                data-wow-delay=".2s"
              >
                <img
                  alt="about image"
                  loading="lazy"
                  decoding="async"
                  data-nimg={1}
                  className="mx-auto max-w-full rounded-2xl"
                  srcSet="/about.jpeg"
                  src="/about.jpeg"
                  style={{ color: "transparent" }}
                />
                <div className="absolute right-[-70px] top-[-40px] -z-10">
                  <svg
                    width={72}
                    height={50}
                    viewBox="0 0 72 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_33_10)">
                      <path
                        d="M21.8126 0.216481C21.8159 0.143661 21.8196 0.071493 21.8237 0C21.8203 0.0723874 21.8165 0.144547 21.8126 0.216481C21.4747 7.63863 25.1425 21.8522 42.5976 21.0032C35.4678 21.503 21.3391 26.5685 21.822 42.8298C21.6005 35.7375 17.0094 21.7229 0.441399 21.645C0.291298 21.6473 0.144104 21.6477 0 21.6462C0.148069 21.6447 0.2952 21.6443 0.441399 21.645C7.47462 21.5363 20.8883 17.1617 21.8126 0.216481Z"
                        fill="#7083F5"
                      />
                      <path
                        d="M58.7832 24.2896C58.7851 24.2459 58.7874 24.2025 58.7898 24.1597C58.7878 24.2031 58.7855 24.2464 58.7832 24.2896C58.5804 28.7428 60.7811 37.271 71.2541 36.7616C66.9763 37.0614 58.499 40.1008 58.7888 49.8576C58.6559 45.6022 55.9013 37.1934 45.9605 37.1467C45.8704 37.1481 45.782 37.1482 45.6956 37.1474C45.7844 37.1465 45.8727 37.1462 45.9605 37.1467C50.1803 37.0815 58.2286 34.4567 58.7832 24.2896Z"
                        fill="#7ED8FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_33_10">
                        <rect width="71.2541" height="49.8779" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full rounded-[20px] bg-gradient-1">
                  <div className="absolute top-[230px] left-[-70px] -z-10">
                    <svg
                      width={65}
                      height={36}
                      viewBox="0 0 65 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55.4149 1.83203C53.339 1.57898 51.3475 2.4214 49.2904 4.18456C45.9052 7.08611 40.0313 8.52953 34.7368 4.19769C32.4686 2.34195 30.4917 2.04856 28.8583 2.32079C27.1672 2.60264 25.7448 3.50424 24.6267 4.24961C22.8559 5.43014 20.9059 6.67067 18.66 6.9618C16.3417 7.2623 13.8664 6.54246 11.0465 4.19256C8.68539 2.22501 6.66504 1.84655 5.11312 2.08531C3.52522 2.32961 2.288 3.24185 1.57603 4.08328C1.25719 4.46008 0.69326 4.50708 0.316454 4.18824C-0.0603521 3.86941 -0.107346 3.30548 0.21149 2.92867C1.13803 1.83367 2.73868 0.642115 4.84131 0.318626C6.97991 -0.0103986 9.50274 0.579362 12.1908 2.81939C14.7333 4.93815 16.7266 5.40998 18.4302 5.18915C20.2062 4.95894 21.831 3.96513 23.6352 2.76234L24.131 3.50597L23.6352 2.76234C24.7515 2.01814 26.4572 0.908837 28.5644 0.557635C30.7295 0.196804 33.2212 0.648204 35.8687 2.81426C40.3566 6.48615 45.2562 5.28815 48.1272 2.82739C50.3886 0.889088 52.8657 -0.279434 55.6312 0.057691C58.3691 0.391448 61.1615 2.17558 64.1309 5.60179C64.4541 5.9748 64.4138 6.53924 64.0408 6.86252C63.6678 7.18579 63.1034 7.14547 62.7801 6.77246C59.9402 3.49563 57.5184 2.08846 55.4149 1.83203Z"
                        fill="#7083F5"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55.4149 11.2024C53.339 10.9493 51.3475 11.7918 49.2904 13.5549C45.9052 16.4565 40.0312 17.8999 34.7367 13.5681C32.4686 11.7123 30.4916 11.4189 28.8583 11.6912C27.1671 11.973 25.7447 12.8746 24.6267 13.62C22.8559 14.8005 20.9058 16.041 18.66 16.3322C16.3417 16.6327 13.8663 15.9128 11.0464 13.5629C8.68536 11.5954 6.66501 11.2169 5.11309 11.4557C3.52519 11.7 2.28797 12.6122 1.576 13.4536C1.25716 13.8304 0.69323 13.8774 0.316424 13.5586C-0.0603826 13.2398 -0.107377 12.6758 0.211459 12.299C1.138 11.204 2.73865 10.0125 4.84128 9.68899C6.97988 9.35996 9.50271 9.94972 12.1907 12.1897C14.7333 14.3085 16.7266 14.7803 18.4302 14.5595C20.2061 14.3293 21.831 13.3355 23.6352 12.1327L24.1309 12.8763L23.6352 12.1327C24.7515 11.3885 26.4572 10.2792 28.5644 9.928C30.7294 9.56717 33.2212 10.0186 35.8686 12.1846C40.3565 15.8565 45.2562 14.6585 48.1271 12.1978C50.3885 10.2594 52.8657 9.09093 55.6312 9.42805C58.3691 9.76181 61.1614 11.5459 64.1308 14.9722C64.4541 15.3452 64.4138 15.9096 64.0408 16.2329C63.6678 16.5561 63.1033 16.5158 62.7801 16.1428C59.9401 12.866 57.5184 11.4588 55.4149 11.2024Z"
                        fill="#7083F5"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55.4149 20.5825C53.339 20.3295 51.3475 21.1719 49.2904 22.935C45.9052 25.8366 40.0312 27.28 34.7367 22.9482C32.4686 21.0924 30.4916 20.7991 28.8583 21.0713C27.1671 21.3531 25.7447 22.2547 24.6267 23.0001C22.8559 24.1806 20.9058 25.4212 18.66 25.7123C16.3417 26.0128 13.8663 25.293 11.0464 22.9431C8.68536 20.9755 6.66501 20.597 5.11309 20.8358C3.52519 21.0801 2.28797 21.9923 1.576 22.8338C1.25716 23.2106 0.69323 23.2576 0.316424 22.9387C-0.0603826 22.6199 -0.107377 22.056 0.211459 21.6792C1.138 20.5842 2.73865 19.3926 4.84128 19.0691C6.97988 18.7401 9.50271 19.3299 12.1907 21.5699C14.7333 23.6886 16.7266 24.1605 18.4302 23.9396C20.2061 23.7094 21.831 22.7156 23.6352 21.5128L24.1309 22.2565L23.6352 21.5128C24.7515 20.7686 26.4572 19.6593 28.5644 19.3081C30.7294 18.9473 33.2212 19.3987 35.8686 21.5647C40.3565 25.2366 45.2562 24.0386 48.1271 21.5779C50.3885 19.6396 52.8657 18.4711 55.6312 18.8082C58.3691 19.1419 61.1614 20.9261 64.1308 24.3523C64.4541 24.7253 64.4138 25.2897 64.0408 25.613C63.6678 25.9363 63.1033 25.896 62.7801 25.523C59.9401 22.2461 57.5184 20.8389 55.4149 20.5825Z"
                        fill="#7083F5"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55.4149 29.9622C53.339 29.7091 51.3475 30.5515 49.2904 32.3147C45.9052 35.2162 40.0312 36.6597 34.7367 32.3278C32.4686 30.4721 30.4916 30.1787 28.8583 30.4509C27.1671 30.7328 25.7447 31.6344 24.6267 32.3797C22.8559 33.5603 20.9058 34.8008 18.66 35.0919C16.3417 35.3924 13.8663 34.6726 11.0464 32.3227C8.68536 30.3551 6.66501 29.9767 5.11309 30.2154C3.52519 30.4597 2.28797 31.372 1.576 32.2134C1.25716 32.5902 0.69323 32.6372 0.316424 32.3184C-0.0603826 31.9995 -0.107377 31.4356 0.211459 31.0588C1.138 29.9638 2.73865 28.7722 4.84128 28.4488C6.97988 28.1197 9.50271 28.7095 12.1907 30.9495C14.7333 33.0683 16.7266 33.5401 18.4302 33.3193C20.2061 33.0891 21.831 32.0953 23.6352 30.8925L24.1309 31.6361L23.6352 30.8925C24.7515 30.1483 26.4572 29.039 28.5644 28.6878C30.7294 28.3269 33.2212 28.7783 35.8686 30.9444C40.3565 34.6163 45.2562 33.4183 48.1271 30.9575C50.3885 29.0192 52.8657 27.8507 55.6312 28.1878C58.3691 28.5216 61.1614 30.3057 64.1308 33.7319C64.4541 34.1049 64.4138 34.6694 64.0408 34.9926C63.6678 35.3159 63.1033 35.2756 62.7801 34.9026C59.9401 31.6258 57.5184 30.2186 55.4149 29.9622Z"
                        fill="#7083F5"
                      />
                    </svg>
                  </div>
                  <div className="absolute left-0 top-0 h-full w-full bg-texture" />
                </div>
              </div>
            </div>
            <div className="rounded-[16px] w-full lg:w-1/2">
              <div
                className="wow fadeInUp lg:ml-auto lg:max-w-[510px]"
                data-wow-delay=".3s"
              >
                <span className="mb-4 block text-lg font-medium text-primary md:text-[22px]">
                Our Story and Mission
                </span>
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
                About Us
                </h2>
                <p className="mb-[30px] text-base leading-relaxed text-body">
                At GENROAR, we drive innovation through advanced mobile and web development, intuitive UI/UX design, and strategic digital marketing. Our expert team delivers tailored solutions that drive growth and enhance customer engagement, setting us apart with our commitment to excellence and client satisfaction.
                </p>
                <div className="mb-[30px] flex items-center">
                  <div className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white">
                    01
                  </div>
                  <div>
                    <h5 className="text-xl font-medium text-black dark:text-white">
                    Our Mission
                    </h5>
                    <p className="text-base text-body">
                    Our Commitment to Excellence.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black dark:border-stroke-dark dark:bg-dark dark:text-white">
                    02
                  </div>
                  <div>
                    <h5 className="text-xl font-medium text-black dark:text-white">
                    What Sets Us Apart
                    </h5>
                    <p className="text-base text-body">
                    Our Unique Approach to Digital Solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-36 -z-10">
        <svg
          width={95}
          height={190}
          viewBox="0 0 95 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx={95}
            cy={95}
            r={77}
            stroke="url(#paint0_linear_47_27)"
            strokeWidth={36}
          />
          <defs>
            <linearGradient
              id="paint0_linear_47_27"
              x1={0}
              y1={0}
              x2="224.623"
              y2="130.324"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8FE8" />
              <stop offset={1} stopColor="#FFC960" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default About
