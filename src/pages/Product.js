import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    name: "Raise Brand Awareness",
    description:
      "MetaShip helps people think of your brand’s products and raise brand awareness",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Engaging",
    description:
      "Engaging with the users within the MetaShip and/or online platform is a big part of what helps them maintain awareness and keep people interested in your product.",
    icon: LockClosedIcon,
  },
  {
    name: "Co-operation",
    description:
      "Offer your training free or sell them via our training platform.",
    icon: ArrowPathIcon,
  },
];

const variants = {
  hidden: { opacity: 0, x: 0, y: 300 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
};

export default function Product() {
  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear", duration: 1 }} // Set the transition to linear
      className=""
    >
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://orkainformatics.com/assets/images/page-images/metaship/product-placement/banner.png"
            alt=""
          />
          <div
            className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-8xl py-40 px-4 sm:py-60 sm:px-6 lg:px-8">
          <h1 className="mt-60 text-4xl text-right font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Product Replacement
          </h1>
          <p className="mt-6 ml-auto mr-0 text-right max-w-3xl text-xl text-indigo-100">
            You want to learn, understand and experience the complex systems of
            life and operations onboard. MetaShip gives you responsibility, and
            competence, and more than that it gives you the courage to make
            mistakes.
          </p>
        </div>
      </div>

      <div className="bg-zinc-900 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
              Trusted by developers from over 80 planets
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              MetaSHIP platform covers digital vessels, ports, shipyards and
              waterways.
            </p>
          </div>
        </div>
        <div className="mt-10 bg-zinc-900 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-zinc-900" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="sm:grid sm:grid-cols-3">
                  <div className="flex bg-zinc-800 mx-5 my-3 flex-col border-b border-gray-800 p-6 text-center sm:border-0 sm:border-r shadow-lg rounded-lg">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-300">
                      Days Playtime
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">
                      100+
                    </dd>
                  </div>
                  <div className="flex bg-zinc-800  mx-5 my-3 flex-col border-t border-b border-gray-800 p-6 text-center sm:border-0 sm:border-l sm:border-r shadow-lg rounded-lg">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-300">
                      Miles Navigation
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">
                      30.000+
                    </dd>
                  </div>
                  <div className="flex bg-zinc-800  mx-5 my-3 flex-col border-t border-gray-800 p-6 text-center sm:border-0 sm:border-l shadow-lg rounded-lg">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-300">
                      Customers
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-blue-600">
                      100+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden bg-zinc-900">
        <div className="mx-auto max-w-8xl flex items-center">
          <div className="relative z-10 bg-zinc-900 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-8xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-5xl md:text-6xl">
                  <h2 className="text-xl mb-5 font-semibold text-gray-400 uppercase">
                    Changing regulations
                  </h2>
                  <span className="block text-white mt-5 xl:inline">
                    BRAND EXPOSURE
                  </span>{" "}
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  MetaShip provides the ultimate landing point as the solution
                  for users and brands. Users can spend time with varied content
                  onboard and operate. Also, they can visit the brand's training
                  and introduction materials. This will help users to try out
                  brand products in real life before they make a purchase.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://orkainformatics.com/assets/images/page-images/metaship/product-placement/officer.png"
            alt=""
          />
        </div>
      </div>

      <div className="relative bg-zinc-900 py-24 sm:py-32 lg:py-16">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-blue-600">OPPORTUNITIES</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
            We offer a better way
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Use MetaShip for creating new training contents
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="h-72 flow-root rounded-lg bg-gray-50 px-6 pb-8 bg-zinc-800">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-blue-500 p-3 shadow-lg">
                          <feature.icon
                            className="h-8 w-8 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold leading-8 tracking-normal text-zinc-300">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base leading-7 text-gray-400">
                        {feature.description}
                      </p>
                    </div>
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
