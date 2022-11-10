import { animated, useSpring } from 'react-spring';

const BannerDividerBottom = () => {
  const { width, opacity } = useSpring({
    from: {
      width: '0%',
      opacity: 0
    },
    to: {
      width: '100%',
      opacity: 1
    },
    config: { duration: 1500 }
  });

  return (
    <animated.div style={{ width, opacity }}>
      <div className="h-px bg-white/25 mb-6"></div>
    </animated.div>
  );
};

export default BannerDividerBottom;
