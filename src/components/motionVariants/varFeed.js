const feedBackVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
      stiffness: 400,
      mass: 0.3,
      damping: 30,
    },
  },
};

export { feedBackVariant };
