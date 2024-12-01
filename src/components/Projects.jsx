const Projects = () => {
  return (
    // <section className="mt-6">
    //   <h3 className="text-2xl font-semibold">Personal Projects</h3>
    //   <div className="mt-4">
    //     <h4 className="font-bold">Aimer Candles - eCommerce Website + PWA</h4>
    //     <p>
    //       Developed a PWA for Aimer Candles, featuring secure Firebase
    //       Authentication, dynamic theme toggle, responsive design, product
    //       management, and advanced filtering.{" "}
    //       <a
    //         href="https://aimer-candles.netlify.app/"
    //         className="text-blue-600 hover:underline"
    //       >
    //         View Project
    //       </a>
    //     </p>
    //   </div>
    //   <div className="mt-4">
    //     <h4 className="font-bold">ReadMe - News Website + PWA</h4>
    //     <p>
    //       Built a news website as a PWA, using a fake news API to display
    //       articles across multiple categories.{" "}
    //       <a
    //         href="https://readme-news.netlify.app/"
    //         className="text-blue-600 hover:underline"
    //       >
    //         View Project
    //       </a>
    //     </p>
    //   </div>
    // </section>
    <section>
      <div class="grid grid-flow-col gap-4 px-4 py-4 leading-10">
        <div class="p-4 w-full bg-bg-card rounded-xl ">
          <img
            src="/images/aimer-candles.netlify.app_.png"
            alt="ecom app screenshot"
          />
        </div>
        <div class="p-4 w-full bg-bg-card rounded-xl ">
          <div class="px-6 py-4">
            <div class="font-bold heading-xl mb-2">
              Aimer Candles - eCommerce Website + PWA
            </div>
            <p class="text-text-secondary text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-primary text-bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span class="inline-block bg-primary text-bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span class="inline-block bg-primary text-bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </div>
      <div class="grid  grid-flow-col gap-4 px-4 py-4 leading-10">
        <div class="p-4 w-full bg-bg-card rounded-xl">
          <div class="px-6 py-4">
            <div class="font-bold heading-xl mb-2">
              ReadMe - News Website + PWA
            </div>
            <p class="text-text-secondary text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-primary text-bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span class="inline-block bg-primary text-bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span class="inline-block bg-primary text-bg-primary rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
        <div class="p-4 w-full bg-bg-card rounded-xl ">
          <img
            src="/images/readme-news.netlify.app_.png"
            alt="news app screenshot"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
