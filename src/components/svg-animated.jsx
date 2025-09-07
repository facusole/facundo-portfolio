import { motion } from "framer-motion";

export default function SVGAnimated() {
  return (
    <>
      <svg
        className='misc'
        viewBox="0 0 80 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="m 2 40 q 40 -11 75 -3"
          stroke="#5238F4"
          strokeWidth="2.17925"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0}}
          animate={{
            pathLength: 1,
            transition: {
              duration: 1,
              delay: 1,
              ease: "easeInOut",
            },
            opacity: 1,
          }}
        ></motion.path>
      </svg>
    </>
  );
}
