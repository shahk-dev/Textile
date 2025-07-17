"use client";
import { ReactNode } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Hero({
    children,
    image,
}: {
    children: ReactNode;
    image: string;
}) {
    const style: React.CSSProperties = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const pathname = usePathname();
    const parts = pathname.split("/").filter(Boolean);
    const crumbs = [
        { name: "Home", href: "/" },
        ...parts.map((part, idx) => {
            const href = "/" + parts.slice(0, idx + 1).join("/");
            const name = part.charAt(0).toUpperCase() + part.slice(1);
            return { name, href };
        }),
    ];

    return (
        <div>
            <section className="flex flex-col mb-16">
                <div
                    style={style}
                    className="inset-shadow-[100vw_0px_0px_rgba(255,_255,_255,_0.5)] py-[90px]"
                >
                    <div className="container">
                        <nav aria-label="Breadcrumb" className="flex text-blue-900 text-lg">
                            {crumbs.map((crumb, idx) => (
                                <span key={idx} className="flex items-center">
                                    {idx !== 0 && <span className="mx-1">/</span>}
                                    <Link href={crumb.href} className="hover:underline">
                                        {crumb.name}
                                    </Link>
                                </span>
                            ))}
                        </nav>
                        <h1 className="text-[35px] sm:text-[48px] font-bold font-roboto text-blue-900">
                            {children}
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
}
