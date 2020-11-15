export const articleVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 3,
      type: "tween",
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.09,

    transition: {
      type: "tween",
      duration: 0.7,
    },
  },
};

export const programHeaderVariant = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      // delay: 0.01,
      // stiffness: 300,
      // mass: 0.3,
      // damping: 40,
    },
  },
};
