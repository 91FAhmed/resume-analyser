import React from "react";

const GradientButton = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`
        relative inline-flex items-center justify-center
        rounded-xl px-10 py-2 font-semibold text-md
        text-white
        bg-gradient-to-tl 
        from-slate-800 
        via-violet-500 
        to-zinc-400
        shadow-lg shadow-violet-500/20
        transition-all duration-300
        hover:scale-[1.03]
        active:scale-[0.97]
        focus:outline-none focus:ring-2 focus:ring-violet-500/50
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GradientButton;
