import React from 'react'

function Header() {
  return (
    <header className="navbar left-0 top-0 z-50 w-full border-stroke dark:border-stroke-dark dark:bg-black absolute">
        <div className="container relative max-w-[1400px]">
          <div className="flex items-center justify-between">
            <div className="block py-4 lg:py-0">
              <a
                className="text-3xl uppercase font-semibold mr-5 pr-5 border-r border-r-[rgba(250,250,250,0.3)]"
                href="/"
                previewlistener="true"
              >
                GENROAR
              </a>
            </div>
            <button
              className="navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden"
              aria-label="navbarOpen"
              name="navbarOpen"
            >
              <span className="block h-[2px] w-7 bg-black dark:bg-white" />
              <span className="block h-[2px] w-7 bg-black dark:bg-white" />
              <span className="block h-[2px] w-7 bg-black dark:bg-white" />
            </button>
            <div className="hidden menu-wrapper relative justify-between lg:flex">
              <button
                className="navbarClose fixed right-10 top-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden"
                name="navbarClose"
                aria-label="navbarClose"
              >
                <span className="block h-[2px] w-7 rotate-45 bg-black dark:bg-white" />
                <span className="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black dark:bg-white" />
              </button>
              <nav className="fixed left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm dark:bg-black dark:bg-opacity-95 lg:static lg:h-auto lg:w-max lg:bg-transparent lg:bg-opacity-100 lg:backdrop-blur-0 lg:backdrop-blur-none lg:dark:bg-transparent dark:lg:bg-opacity-100">
                <ul className="items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10">
                  <li className="menu-item">
                    <a
                      className="lg:py-7 ud-menu-scroll inline-flex items-center text-black font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      href="/#features"
                    >
                      Features
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="lg:py-7 ud-menu-scroll inline-flex items-center text-black font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      href="/#about"
                    >
                      About
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="lg:py-7 ud-menu-scroll inline-flex items-center text-black font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      href="/#work-process"
                    >
                      How It Works
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      className="lg:py-7 ud-menu-scroll inline-flex items-center text-black font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      href="/#support"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
