import React from 'react';
import { twMerge } from 'tailwind-merge'

type Level = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  level: Level;
  className?: string;
  children: React.ReactNode;
}

export const Heading = ({ level, children, className }: HeadingProps) => {
  // Dynamically determine the heading tag (h1, h2, etc.)
    const Component = level;
    const classes = {
        h1: `text-4xl md:text-6xl`,
        h2: `text-3xl md:text-4xl`,
        h3: `text-2xl md:text-3xl`,
        h4: `text-xl md:text-2xl`,
        h5: `text-lg md:text-xl`,
        h6: `text-lg`,
    }[level];

  return <Component className={twMerge(classes, className)}>{children}</Component>;
};

export default Heading;
