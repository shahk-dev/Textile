import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";

export default function Logo({size}:{size:string}) {
  return (
    <div className={`${size}`}>
      <Link href={"/"}>
        <Image src={logo} alt="logo image" loading="lazy"/>
      </Link>
    </div>
  );
}
