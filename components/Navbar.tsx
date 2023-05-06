import { Share } from 'iconsax-react';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="flex justify-between h-20 items-center">
      <Link href="/" className="text-xl font-semibold">
        write social bio
      </Link>
      <button className="text-lg flex items-center gap-2 font-semibold px-6 py-1 rounded-lg transition-all hover:bg-[#2730361a]">
        <Share size="18" />
        Share
      </button>
    </div>
  );
}
