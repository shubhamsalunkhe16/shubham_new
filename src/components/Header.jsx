import CodeSnippet from "./CodeSnippet";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div class="flex justify-between items-center gap-12 pt-28 px-16 flex-wrap">
        <div class="flex-1 text-text-primary flex flex-col gap-2 justify-center">
          <h1 class="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
            Hi, I'm
          </h1>
          <h1 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
            Shubham
          </h1>
          <p class="xl:text-lg lg:text-base md:text-base text-sm my-4">
            Full Stack Developer with 3+ years of experience in creating and
            developing innovative web applications. My background includes
            building AI-driven content platforms, contributing to music
            streaming services, and leading teams in high-impact projects.
            {/* With a solid technical skill set and a passion for learning, I
              excel at collaborating with diverse teams to deliver exceptional
              digital solutions. */}
          </p>

          <div class="flex sm:flex-row flex-col gap-4 lg:mt-4 mt-2">
            <div class="relative w-fit">
              <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
              <button
                href="#"
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <CodeSnippet />
        </div>
      </div>
      {/* <header class="relative bg-black">
        <img
          src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg"
          alt=""
          class="absolute -z-10 inline-block h-full w-full object-cover"
        />
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="mb-6 pb-4 text-4xl font-bold text-text-primary md:text-6xl">
              The Website You Want Without The Dev Time.
            </h1>
            <p class="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <a
              href="#"
              class="inline-block rounded-full bg-[#c9fd02] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
            >
              Get Started
            </a>
          </div>
          <div class="mx-auto mt-16 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-12 md:grid-cols-5">
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a267_Microsoft%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26a_PayPal%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a268_Google%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a269_Chase%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26b_Walmart%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
