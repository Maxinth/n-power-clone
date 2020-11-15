// const leadingPartVariant = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: "tween",
//     duration: 2,
//   },
// };

const flickerForm = {
  hidden: {
    // x: "100vw",
    // opacity: 0,
  },
  visible: {
    // x: 0,
    // opacity: 1,
    transition: "tween",
    duration: 1,
    // delay: 1,
  },
};

const partDetailsVariant = {
  hidden: {
    // x: "100vw",
    opacity: 0,
  },
  visible: {
    // x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      //   delay: 0.3,
    },
  },
};

// exported this object so I dont have
//  to type initial="hidden" animate="visible" in
//  every motion element with a variants prop

//  i just need to include {...variantsProps}

const variantProps = {
  initial: "hidden",

  animate: "visible",
};

export { flickerForm, variantProps, partDetailsVariant };
