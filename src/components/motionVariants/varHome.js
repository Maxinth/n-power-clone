const homeContainerVariant = (delay) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: 2,
        delay: delay,
      },
    },
  };
};

// creating a function where the delay can be
// set as needed - the function returns an object
const leftParagraph = (delay) => {
  return {
    hidden: {
      x: "-100vw",
    },

    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 3,
        delay: delay,
        mass: 0.1,
        stiffness: 200,
        damping: 100,
      },
    },
  };
};

const rightParagraph = (delay) => {
  return {
    hidden: {
      x: "100vw",
    },

    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 3,
        delay: delay,
        mass: 0.1,
        stiffness: 200,
        damping: 100,
      },
    },
  };
};

const miniVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 2,
      delay: 2,
    },
  },
};

const ctaButton = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.1,
      type: "spring",
    },
  },
  hover: {
    scale: 1.05,
    fontWeight: "bolder",
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
};

const slideBreak = {
  hidden: {
    // x: "-100vw",
    opacity: 0,
  },

  visible: {
    // x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 10,
      delay: 0.3,
    },
  },
};
// all exports
export {
  ctaButton,
  miniVariant,
  homeContainerVariant,
  rightParagraph,
  leftParagraph,
  slideBreak,
};
