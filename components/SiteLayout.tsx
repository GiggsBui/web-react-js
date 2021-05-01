import Link from 'next/link';
import { ReactNode } from 'react';
import React from 'react';
interface IProps {
  children: ReactNode
}

const SiteLayout = ({ children }: IProps) => (
    <div className="bg-white antialiased">
        <div>
            <div>
                <div className="max-w-xl mx-auto px-8">
                    <nav>
                        <div className="py-4 flex-shrink-0 flex items-center">
                            <Link href="/">
                                <a className="ml-8 font-medium text-gray-900">Home </a>
                            </Link>
                        </div>
                        <div className="py-4 flex-shrink-0 flex items-center">
                            <Link href="/about">
                                <a className="ml-8 font-medium text-gray-900">About</a>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div className="mt-6 sm:mt-0 sm:py-12">{children}</div>
    </div>
);

export default SiteLayout;
