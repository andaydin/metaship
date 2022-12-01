import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "R&D",
    description:
      "Research and Development is the most important culture of Orka. Every year, Orka invests more than 60% of its profit for new R&D projects.",
    icon: GlobeAltIcon,
  },
  {
    name: "The team",
    description:
      "Hiring smart, nice people is always crucial for Orka. Investing in our employees increases employee satisfaction, retention and improves our service quality with revenue.",
    icon: UserGroupIcon,
  },
  {
    name: "IMPROVEMENT",
    description:
      "Continuous improvement of products, resolving the issues makes our relationship stronger with our clients also providing customer satisfaction.",
    icon: BoltIcon,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: DevicePhoneMobileIcon,
  },
];

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

export default function Example() {
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear", duration: 1 }} // Set the transition to linear
    >
      <div className="bg-neutral-900 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <img
              className="h-24 w-auto m-auto"
              src="https://orkainformatics.com/assets/images/logo-white.png"
              alt=""
            />
            <p className="mt-2 text-6xl font-bold tracking-tight text-white sm:text-8xl">
              ORKA
            </p>
            <h2 className="text-xl font-semibold leading-8 text-zinc-300 mt-4">
              a better way of learning and solving problems.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:flex overflow-hidden bg-neutral-900 ">
        <div className="flex p-2 items-center m-auto justify-center my-5">
          <div className="relative max-w-8xl z-10 bg-neutral-900 pb-8 ml-auto mr-0 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32  text-gray-400 hover:text-white duration-500 transition-all">
            <main className="mx-auto mt-10 max-w-8xl sm:mt-12  md:mt-16 lg:mt-20  xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-5xl text-white xl:inline">
                    High energy brand
                  </span>{" "}
                </h1>
                <p className="mt-3 text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Orka is a ‘high energy brand’ led by a young, innovative,
                  creative team who has already won the respect of the XR &
                  digital community and clients with award-nominated projects
                  and services.
                </p>

                <p className="mt-3 text-base sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Orka has a high brand momentum with continuous research and
                  development projects, especially for the Maritime Industry.
                  Its potential is not limited to marine; Its innovation and
                  content creation capabilities are available for all XR and
                  Training projects. Orka has proven himself with the quality of
                  different projects since 2011.
                </p>
              </div>
            </main>
          </div>
        </div>

        <div className=" relative lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://orkainformatics.com/assets/images/page-images/company/about-us/banner.png"
            alt=""
          />
          <div
            className="absolute inset-0 bg-neutral-400 hover:bg-neutral-200 transition-all duration-300 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="bg-neutral-900 py-24 sm:py-32 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-40 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="relative bg-neutral-800 p-5 rounded-xl shadow-2xl flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-neutral-200">
                      {feature.name}
                    </p>
                    <p className="mt-2 text-base leading-7 text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
