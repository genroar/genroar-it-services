import React from 'react'

function Clients() {
  return (
    <section className="relative z-10 dark:bg-[#15182B] bg-[#F8FAFB]">
    <div
      className="wow fadeInUp container overflow-hidden lg:max-w-[1200px]"
      data-wow-delay=".2s"
    >
      <div className="-mx-4 flex flex-wrap items-center justify-center">
        <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <div className="mb-5 text-center">
            <a className="block" href="#">
              <img
                alt="client"
                fetchpriority="high"
                width={92}
                height={28}
                decoding="async"
                data-nimg={1}
                className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                src="/alfahd.png"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
        <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <div className="mb-5 text-center">
            <a className="block" href="#">
              <img
                alt="client"
                fetchpriority="high"
                width={120}
                height={24}
                decoding="async"
                data-nimg={1}
                className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                src="/mieEvents.png"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
        <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <div className="mb-5 text-center">
            <a className="block" href="#">
              <img
                alt="client"
                fetchpriority="high"
                width={99}
                height={24}
                decoding="async"
                data-nimg={1}
                className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                src="/nissan.png"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
        <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <div className="mb-5 text-center">
            <a className="block" href="#">
              <img
                alt="client"
                fetchpriority="high"
                width={89}
                height={32}
                decoding="async"
                data-nimg={1}
                className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                src="/peu.png"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
        <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <div className="mb-5 text-center">
            <a className="block" href="#">
              <img
                alt="client"
                fetchpriority="high"
                width={108}
                height={32}
                decoding="async"
                data-nimg={1}
                className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                src="/tnc-group.png"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
        <div className="w-1/2 px-4 sm:w-1/3 md:w-1/4 lg:w-1/6">
          <div className="mb-5 text-center">
            <a className="block" href="#">
              <img
                alt="client"
                fetchpriority="high"
                width={106}
                height={32}
                decoding="async"
                data-nimg={1}
                className="mx-auto max-w-full opacity-[65%] hover:opacity-100"
                src="/zeniq.png"
                style={{ color: "transparent" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Clients
