import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 100 },
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
    >
      <div className="relative bg-zinc-100">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://orkainformatics.com/assets/images/page-images/metaship/metaship-platform/banner.png"
            alt=""
          />
          <div
            className="absolute inset-0 bg-zinc-400 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear", duration: 1 }} // Set the transition to linear
        >
          <div className="relative mx-auto max-w-8xl pt-14 pb-32 px-4 sm:pt-72 sm:px-6 lg:px-8">
            <h1 className="mt-60 text-4xl text-center font-bold tracking-normal text-white sm:text-5xl lg:text-6xl uppercase">
              Revolutionizing Reality
            </h1>
          </div>
        </motion.div>
      </div>

      <div className="flex overflow-hidden bg-zinc-900">
        <div className="mx-auto max-w-8xl">
          <div className="relative z-10 bg-zinc-900 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-8xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ type: "linear", duration: 1 }} // Set the transition to linear
                >
                  <h1 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-5xl md:text-6xl">
                    <h2 className="text-xl mb-5 font-semibold text-gray-400 uppercase">
                      Changing regulations
                    </h2>
                    <span className="block text-white mt-5 xl:inline">
                      MetaSHIP Platform
                    </span>{" "}
                  </h1>
                </motion.div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ type: "linear", duration: 1 }} // Set the transition to linear
                >
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    Marine training, like lots of industries, is expensive,
                    difficult, and very risky. At the same time, it is a big
                    hassle to get training on a real vessel, facility, or at the
                    shipyard. Even if you do, it may not be always efficient and
                    satisfactory. For maritime universities and shipping
                    companies, training requires costly laboratory environments.
                    Changing regulations, instruments and techniques render
                    costly investments obsolete.
                  </p>
                </motion.div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ type: "linear", duration: 1 }} // Set the transition to linear
                >
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    Unfortunately, under the pressure of cost and time during
                    in-house and onboard training, the effectiveness of training
                    is not tracked beyond “passing grades”. All those problems
                    plus the unsuccessful onboard training cost the loss of life
                    and pollution of the environment.
                  </p>
                </motion.div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ type: "linear", duration: 1 }} // Set the transition to linear
                >
                  <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                    So we aimed to reduce costs and risks and increase success
                    by helping everyone who wants to learn more and improve
                    their naval skills and knowledge.
                  </p>
                </motion.div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://orkainformatics.com/assets/images/page-images/metaship/metaship-platform/why.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex overflow-hidden bg-zinc-900">
        <div className="lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="https://orkainformatics.com/assets/images/page-images/metaship/metaship-platform/how.png"
            alt=""
          />
        </div>

        <div className="flex items-center m-auto justify-center my-5">
          <div className="relative max-w-8xl z-10 bg-zinc-900 pb-8 ml-auto mr-0 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-8xl sm:mt-12  md:mt-16 lg:mt-20  xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-5xl md:text-6xl">
                  <h2 className="text-xl mb-2 font-semibold text-blue-600 uppercase">
                    Real-time naval interactive platform
                  </h2>
                  <span className="block text-5xl text-white xl:inline">
                    Naval interactive platform
                  </span>{" "}
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  We believe that a realistic, real-time naval interactive
                  platform could be an effective way to help people understand
                  and experience the complex systems of marine life.
                </p>

                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  In order to create a lifelike experience, we used the most
                  powerful game engine called Unreal Engine.
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  We embodied a digital universe by designing every detail from
                  the tiny screws of the vessel to the movement of the waves, We
                  developed ship physics infrastructure which gives a realistic
                  ship maneuvering capability and many other advanced
                  technologies.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
