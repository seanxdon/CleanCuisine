import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full border-b-2 pb-7 sm:px-4 p-5">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/food-icon-white-1.jpg"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          cleancuisine.ai
        </h1>
      </Link>
    </header>
  );
}
