import { animated, useSpring } from 'react-spring'

const BannerDividerBottom = () => {
  const { y, opacity } = useSpring({
    from: {
      y: 40,
      opacity: 0
    },
    to: {
      y: 0,
      opacity: 1
    },
    config: { duration: 1500 }
  });

  return (
    <animated.div style={{ y, opacity }}>
      <div className="h-px w-full bg-primary/80"></div>
    </animated.div>
  );
};

export default BannerDividerBottom;
