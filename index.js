const keyframes = require("styled-components").keyframes;

const flash = keyframes`
  0%,
  50%,
  100% {
    opacity: 1
  }
  25%,
  75% {
    opacity: 0
  }
`;

const shake = keyframes`
  0%,
  100% {
    transform: translateX(0)
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px)
  }
  20%,
  40%,
  60%,
  80% }
  transform: translateX(10px)
`;

const bounce = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0)
  }
  40% {
    transform: translateY(-30px)
  }
  60% {
    transform: translateY(-15px)
  }
`;

const tada = keyframes`
  0% {
    transform: scale(1)
  }
  10%,
  20% {
    transform: scale(0.9) rotate(-3deg)
  }
  30%,
  50%,
  70%,
  90% {
    transform: scale(1.1) rotate(3deg)
  }
  40%,
  60%,
  80% {
    transform: scale(1.1) rotate(-3deg)
  }
  100% {
    transform: scale(1) rotate(0)
  }
`;

const swing = keyframes`
  20%,
  40%,
  60%,
  80%,
  100% {
    transform-origin: top center;
  }
  20% {
    transform: rotate(15deg)
  }
  40% {
    transform: rotate(-10deg)
  }
  60% {
    transform: rotate(5deg)
  }
  80% {
    transform: rotate(-5deg)
  }
  100% {
    transform: rotate(0deg)
  }
`;

const wobble = keyframes`
  0% {
    transform: translateX(0%);
  }
  15% {
    transform: translateX(-25%) rotate(-5deg);
  }
  30% {
    transform: translateX(20%) rotate(3deg);
  }
  45% {
    transform: translateX(-15%) rotate(-3deg);
  }
  60% {
    transform: translateX(10%) rotate(2deg);
  }
  75% {
    transform: translateX(-5%) rotate(-1deg);
  }
  100% {
    transform: translateX(0%);
  }
`;

const wiggle = keyframes`
  0% {
    transform: skewX(9deg);
  }
  10% {
    transform: skewX(-8deg);
  }
  20% {
    transform: skewX(7deg);
  }
  30% {
    transform: skewX(-6deg);
  }
  40% {
    transform: skewX(5deg);
  }
  50% {
    transform: skewX(-4deg);
  }
  60% {
    transform: skewX(3deg);
  }
  70% {
    transform: skewX(-2deg);
  }
  80% {
    transform: skewX(1deg);
  }
  90% {
    transform: skewX(0deg);
  }
  100% {
    transform: skewX(0deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const flip = keyframes`
  0% {
    transform: perspective(400px) rotateY(0);
    animation-timing-function: ease-out;
  }
  40% {
    transform: perspective(400px) translateZ(150px) rotateY(170deg);
    animation-timing-function: ease-out;
  }
  50% {
    transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
    animation-timing-function: ease-in;
  }
  80% {
    transform: perspective(400px) rotateY(360deg) scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    transform: perspective(400px) scale(1);
    animation-timing-function: ease-in;
  }
`;

const flipInX = keyframes`
  0% {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-10deg);
  }
  70% {
    transform: perspective(400px) rotateX(10deg);
  }
  100% {
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
`;

const flipOutX = keyframes`
  0% {
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
  100% {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
`;

const flipInY = keyframes`
  0% {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateY(-10deg);
  }
  70% {
    transform: perspective(400px) rotateY(10deg);
  }
  100% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
`;

const flipOutY = keyframes`
  0% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`;

const fadeOutUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const fadeOutDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const fadeOutLeft = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
`;

const fadeOutRight = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

const bounceInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2000px);
  }
  60% {
    opacity: 1;
    transform: translateY(-30px);
  }
  80% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const bounceInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2000px);
  }
  60% {
    opacity: 1;
    transform: translateY(30px);
  }
  80% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const bounceInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    transform: translateX(30px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;

const bounceInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    transform: translateX(-30px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
`;

const easeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }
  60% {
    opacity: 1;
    transform: translateX(30px);
  }
  100% {
    transform: translateX(0);
  }
`;

const easeOutLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    transform: translateX(20px);
  }
  100% {
    opacity: 0;
    transform: translateX(-2000px);
  }
`;

const easeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0);
  }
`;

const easeOutRight = keyframes`
  0% {
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    transform: translateX(-20px);
  }
  100% {
    opacity: 0;
    transform: translateX(2000px);
  }
`;

const bounceOut = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.95);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
    transform: scale(0.3);
  }
`;

const bounceOutDown = keyframes`
  0% {
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    transform: translateY(-20px);
  }
  100% {
    opacity: 0;
    transform: translateY(2000px);
  }
`;

const bounceOutUp = keyframes`
  0% {
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    transform: translateY(20px);
  }
  100% {
    opacity: 0;
    transform: translateY(-2000px);
  }
`;

const bounceOutLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    transform: translateX(20px);
  }
  100% {
    opacity: 0;
    transform: translateX(-2000px);
  }
`;

const bounceOutRight = keyframes`
  0% {
    transform: translateX(0);
  }
  20% {
    opacity: 1;
    transform: translateX(-20px);
  }
  100% {
    opacity: 0;
    transform: translateX(2000px);
  }
`;

const scaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  30% {
    opacity: .3;
    transform: scale(0.75);
  }
  70% {
    opacity: 1;
    transform: scale(1.03);
  }
  100% {
    opacity: 1;
  }
`;

const scaleOut = keyframes`
  0% {
    opacity: 1;
  }
  30% {
    transform: scale(0.75);
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
`;

const rotateIn = keyframes`
  0% {
    transform-origin: center center;
    transform: rotate(-200deg);
    opacity: 0;
  }
  100% {
    transform-origin: center center;
    transform: rotate(0);
    opacity: 1;
  }
`;

const rotateOut = keyframes`
  0% {
    transform-origin: center center;
    transform: rotate(0);
    opacity: 1;
  }
  100% {
    transform-origin: center center;
    transform: rotate(200deg);
    opacity: 0;
  }
`;

const lightspeedIn = keyframes`
  0% {
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
  60% {
    transform: translateX(-20%) skewX(30deg);
    opacity: 1;
  }
  80% {
    transform: translateX(0%) skewX(-15deg);
    opacity: 1;
  }
  100% {
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
`;

const lightspeedOut = keyframes`
  0% {
    transform: translateX(0%) skewX(0deg);
    opacity: 1;
  }
  100% {
    transform: translateX(100%) skewX(-30deg);
    opacity: 0;
  }
`;

const hingeLeft = keyframes`
  0% {
    transform: rotate(0);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  20%,
  60% {
    transform: rotate(80deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  40% {
    transform: rotate(60deg);
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  80% {
    transform: rotate(60deg) translateY(0);
    opacity: 1;
    transform-origin: top left;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(700px);
    opacity: 0;
  }
`;

const hingeRight = keyframes`
  0% {
    transform: rotate(0);
    transform-origin: top right;
    animation-timing-function: ease-in-out;
  }
  20%,
  60% {
    transform: rotate(-80deg);
    transform-origin: top right;
    animation-timing-function: ease-in-out;
  }
  40% {
    transform: rotate(-60deg);
    transform-origin: top right;
    animation-timing-function: ease-in-out;
  }
  80% {
    transform: rotate(-60deg) translateY(0);
    opacity: 1;
    transform-origin: top right;
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: translateY(700px);
    opacity: 0;
  }
`;

const rollIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%) rotate(-120deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
  }
`;

const rollOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0px) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateX(100%) rotate(120deg);
  }
`;

const dropUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
`;

const dropDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

module.exports = {
  flash,
  shake,
  bounce,
  tada,
  swing,
  wobble,
  wiggle,
  pulse,
  flip,
  flipInX,
  flipOutX,
  flipInY,
  flipOutY,
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeOut,
  fadeOutUp,
  fadeOutDown,
  fadeOutLeft,
  fadeOutRight,
  bounceIn,
  bounceInUp,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  easeInLeft,
  easeOutLeft,
  easeInRight,
  easeOutRight,
  bounceOut,
  bounceOutDown,
  bounceOutUp,
  bounceOutLeft,
  bounceOutRight,
  scaleIn,
  scaleOut,
  rotateIn,
  rotateOut,
  lightspeedIn,
  lightspeedOut,
  hingeLeft,
  hingeRight,
  rollIn,
  rollOut,
  dropDown,
  dropUp
};
