import Link from 'next/link';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-95 shadow-lg top-0 w-full z-50">
      <nav className="container mx-auto p-5 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Taha Awan</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li className="hover:text-red-400 transition-colors flex items-center">
            <FaHome className="mr-2" />
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-red-400 transition-colors flex items-center">
            <FaUser className="mr-2" />
            <Link href="/About">About Me</Link>
          </li>
          <li className="hover:text-red-400 transition-colors flex items-center">
            <FaProjectDiagram className="mr-2" />
            <Link href="/Projects">Projects</Link>
          </li>
          <li className="hover:text-red-400 transition-colors flex items-center">
            <FaEnvelope className="mr-2" />
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Navigation with shadcn Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-white border-white flex items-center p-2 border rounded-md">
              <FaBars className="mr-2" /> Menu
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white">
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaHome className="mr-2" />
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center">
                <FaUser className="mr-2" />
                <Link href="/About">About Me</Link>
              </li>
              <li className="flex items-center">
                <FaProjectDiagram className="mr-2" />
                <Link href="/Projects">Projects</Link>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Header;
