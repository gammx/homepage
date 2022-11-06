import type { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { useSpring, animated } from 'react-spring';
import ArrowRightIcon from './UI/ArrowRightIcon';
import cn from 'classnames';

type AnchorElementProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

interface SectionLinkProps extends AnchorElementProps {
  title: string;
  iconSrc: string;
  lightMode?: boolean;
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
  lightMode = false,
  target = '_self',
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
      className={cn("section-links__item flex items-end justify-between sm:odd:border-r border-b font-display font-semibold uppercase text-2xl sm:text-[4vw] lg:text-5xl leading-none sm:leading-normal text-accent p-10 lg:p-12", {
        'bg-smoke border-bones': !lightMode,
        'bg-bones border-smoke': lightMode,
      })}
      target={target}
      {...props}
    >
      <div className="relative">
        <div className="absolute flex justify-center w-full">
          <animated.div style={iconStyles}>
            <img src={iconSrc} alt="3d abstract shape" className="h-20 sm:h-32" />
          </animated.div>
        </div>
        <p>{title}</p>
      </div>
      <ArrowRightIcon
        className={cn("self-center sm:self-auto relative sm:-top-8", {
          'dark': lightMode,
          'light': !lightMode,
        })}
      />
    </a>
  );
};

export default SectionLink;
