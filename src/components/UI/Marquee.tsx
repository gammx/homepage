import type React from 'react';
import MarqueePrimitive from "react-fast-marquee";
import cn from 'classnames';

interface MarqueeProps extends React.HTMLProps<HTMLDivElement> {
  direction?: 'left' | 'right';
}

const Marquee: React.FC<MarqueeProps> = ({ className, direction = 'left', children }) => {
  return (
    <div className="overflow-hidden text-primary">
      <MarqueePrimitive gradient={false} direction={direction} speed={150} className="overflow-hidden">
        <p className={cn("text-9xl flex [&_*]:ml-16", className)}>
          {children}
        </p>
      </MarqueePrimitive>
    </div>
  );
};

export default Marquee;
