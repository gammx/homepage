import type { FC, SVGProps } from 'react';
import cn from 'classnames';

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("arrow-icon", className)}
      {...props}
    >
      <path d="M42.2206 23.9999C42.2206 23.3095 41.6609 22.7499 40.9706 22.7499L29.7206 22.7499C29.0302 22.7499 28.4706 23.3095 28.4706 23.9999C28.4706 24.6903 29.0302 25.2499 29.7206 25.2499H39.7206V35.2499C39.7206 35.9403 40.2802 36.4999 40.9706 36.4999C41.6609 36.4999 42.2206 35.9403 42.2206 35.2499V23.9999ZM24.8839 41.8543L41.8544 24.8838L40.0867 23.116L23.1161 40.0866L24.8839 41.8543Z" fill="white" />
    </svg>
  );
};

export default ArrowRightIcon;