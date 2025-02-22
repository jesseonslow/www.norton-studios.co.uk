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
        h1: `text-4xl md:text-6xl text-gray-800 font-bold`,
        h2: `text-3xl md:text-4xl text-gray-800 font-bold`,
        h3: `text-2xl md:text-3xl text-gray-800 font-bold`,
        h4: `text-xl md:text-2xl text-gray-800 font-bold`,
        h5: `text-lg md:text-xl text-gray-800 font-bold`,
        h6: `text-lg text-gray-800 font-bold`,
    }[level];

  return <Component className={twMerge(classes, className)}>{children}</Component>;
};

export default Heading;
