import { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Button({
  children,
  styles,
}: {
  children: ReactNode;
  styles: string | undefined;
}) {
  return (
    <button
      className={`py-3 px-9 bg-blue-400 rounded-full font-medium text-blue-900 font-inter hover:bg-blue-300 cursor-pointer transition-all duration-200 ${styles}`}
    >
      {children} <BsArrowRight size={18} />
    </button>
  );
}
