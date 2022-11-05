import type { AnchorHTMLAttributes, DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { useSpring, animated } from 'react-spring'
import ArrowRightIcon from '../UI/ArrowRightIcon'

type AnchorElementProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

interface SectionLinkProps extends AnchorElementProps {
  title: string
  iconSrc: string
}

const initialAnimation = {
  from: { y: -24, opacity: 0 },
  to: { y: -48, opacity: 1 },
};

const leaveAnimation = {
  from: { y: -48, opacity: 1 },
  to: { y: -24, opacity: 0 },
};

const SectionLink: FC<SectionLinkProps> = ({
  title,
  iconSrc,
  ...props
}) => {
  const [iconStyles, iconApi] = useSpring(() => ({
    opacity: 0,
    y: 0,
    config: { duration: 250 }
  }));

  return (
    <a
      onMouseEnter={() => iconApi.start(initialAnimation)}
      onMouseLeave={() => iconApi.start(leaveAnimation)}
      className="section-links__item flex items-end justify-between border-r border-primary font-display font-semibold uppercase text-[48px] text-accent p-12 pointerable"
      {...props}
    >
      <div className="relative">
        <div className="absolute w-full flex justify-center">
          <animated.div style={iconStyles}>
            <img src={iconSrc} alt="" />
          </animated.div>
        </div>
        <p>{title}</p>
      </div>
      <ArrowRightIcon className="relative -top-8" />
    </a>
  );
};

export default SectionLink;
