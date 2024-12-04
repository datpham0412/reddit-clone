import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { UserAccountNav } from "./UserAccountNav";
import SearchBar from "./SearchBar";
import Image from 'next/image';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <div className="relative w-12 h-12">
            <Image 
              src="/images/reddit-logo.png"
              alt="Reddit Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex-1 py-1 flex justify-stretch">
          <div className="flex justify-stretch w-full">
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
