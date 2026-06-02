import { motion } from 'motion/react';

interface MarqueeProps {
  text: string;
  color?: string;
  bg?: string;
}

export default function Marquee({ text, color = 'text-[#F2F0EC]', bg = 'bg-[#1E2D4A]' }: MarqueeProps) {
  const repeated = Array(10).fill(text).join(' · ');
  return (
    <div className={`${bg} overflow-hidden py-4 whitespace-nowrap`}>
      <div className={`inline-flex animate-marquee font-display text-xl uppercase tracking-widest ${color}`}>
        <span className="mr-8">{repeated} &nbsp;&nbsp;&nbsp; {repeated}</span>
      </div>
    </div>
  );
}
