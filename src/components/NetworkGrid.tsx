import type { FC, HTMLAttributes } from 'react';
import SectionLink from './SectionLink';
import cn from 'classnames';

export interface SectionLink {
  title: string;
  iconSrc: string;
  href: string;
  target?: string;
}

interface NetworkGridProps extends HTMLAttributes<HTMLDivElement> {
  links: SectionLink[];
  lightMode?: boolean;
}

const NetworkGrid: FC<NetworkGridProps> = ({
  links,
  className,
  lightMode = false,
  ...props
}) => {
  return (
    <div
      className={cn("w-full grid grid-rows-2 sm:grid-rows-1 sm:grid-flow-col sm:grid-cols-2 h-52 border-t", className, {
        'border-primary': !lightMode,
        'border-smoke': lightMode,
      })}
      {...props}
    >
      {links.map((link, index) => (
        <SectionLink
          key={index}
          title={link.title}
          iconSrc={link.iconSrc}
          href={link.href}
          lightMode={lightMode}
          target={link.target}
        />
      ))}
    </div>
  );
};

export default NetworkGrid;
