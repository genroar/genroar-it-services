import React from 'react'

function Contact() {
  return (

      <section id="support" className="pb-[164px]">
      <div className="container">
        <div
          className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
          data-wow-delay=".2s"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            Let's Stay Connected
          </h2>
          <p className="text-base text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.
          </p>
        </div>
      </div>
      <div className="container">
        <div
          className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-lg bg-[#F8FAFB] px-8 py-10 shadow-card dark:bg-[#15182B] dark:shadow-card-dark sm:px-10"
          data-wow-delay=".3s"
        >
          <form>
            <div className="-mx-[22px] flex flex-wrap">
              <div className="w-full px-[22px] md:w-1/2">
                <div className="mb-8">
                  <input
                    id="name"
                    placeholder="Enter your name"
                    className="w-full rounded border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    type="text"
                    name="name"
                  />
                </div>
              </div>
              <div className="w-full px-[22px] md:w-1/2">
                <div className="mb-8">
                  <input
                    id="company"
                    placeholder="Comapy (optioanl)"
                    className="w-full rounded border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    type="text"
                    name="company"
                  />
                </div>
              </div>
              <div className="w-full px-[22px] md:w-1/2">
                <div className="mb-8">
                  <input
                    id="email"
                    placeholder="Enter Your email"
                    className="w-full rounded border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    type="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="w-full px-[22px] md:w-1/2">
                <div className="mb-8">
                  <input
                    id="phone"
                    placeholder="Enter your Phone Number"
                    className="w-full rounded border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="w-full px-[22px]">
                <div className="mb-8">
                  <textarea
                    rows={6}
                    name="message"
                    id="message"
                    placeholder="Tell us about yourself"
                    className="w-full rounded border border-stroke bg-white px-[30px] py-4 text-base text-body outline-none focus:border-primary dark:border-[#34374A] dark:bg-[#2A2E44] dark:focus:border-primary"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="w-full px-[22px]">
                <div className="text-center">
                  <p className="mb-5 text-center text-base text-body">
                    By clicking contact us button, you agree our terms and
                    policy,
                  </p>
                  <button
                    type="submit"
                    className="mb-6 mr-6 inline-flex h-[60px] items-center rounded-lg bg-black px-[30px] py-[14px] text-white hover:bg-opacity-90 dark:bg-white dark:text-black dark:hover:bg-opacity-90"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
