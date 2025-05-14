import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image className="h-8 w-auto" src="/images/logo.png" width={200} height={100} alt="" />
          </Link>
        </div>
        <div className="lg:flex lg:gap-x-12">
          <Link href="/products/create" className="text-sm/6 font-semibold text-gray-900">Cadastrar Produtos</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;