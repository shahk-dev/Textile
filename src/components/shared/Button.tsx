import { ReactNode } from "react";

export default function Button({ children, styles }: { children: ReactNode, styles: string | undefined }) {
  return (
    <button className={`py-3 px-9 bg-blue-400 rounded-full font-medium text-blue-900 hover:bg-blue-300 cursor-pointer transition-all duration-200 ${styles}`}>{children}</button>
  )
}
