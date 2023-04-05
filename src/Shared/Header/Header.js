import React from 'react';

const Header = () => {
    return (
        <div>
            <header aria-label="Site Header" class="border-b border-gray-100">
                <div
                    class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
                >
                    <div class="flex items-center gap-4">
                    <button type="button" class="p-2 lg:hidden">
                        <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    </button>

                    <a href="#" class="flex">
                        <span class="sr-only">Logo</span>
                        <span class="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
                    </a>
                    </div>

                    <div class="flex flex-1 items-center justify-end gap-8">
                    <nav
                        aria-label="Site Nav"
                        class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
                    >
                        <a
                        href="/about"
                        class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                        About
                        </a>

                        <a
                        href="/news"
                        class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                        News
                        </a>

                        <a
                        href="/products"
                        class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                        Products
                        </a>

                        <a
                        href="/contact"
                        class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                        >
                        Contact
                        </a>
                    </nav>

                    
                    </div>
                </div>
            </header>

        </div>
    );
};

export default Header;