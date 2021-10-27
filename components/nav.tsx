import React from 'react';
import { NavButton } from './navButton';

const Nav = function Component() {
  return (
    <div>
      <section className="bg-equator rounded drop-shadow-lg py-10 z-50 container transform -rotate-2 mx-auto my-0 lg:my-0">
        <nav
          className="flex flex-col justify-center transform rotate-2 md:flex-row md:space-x-3 lg:space-x-6
                   font-semibold w-full lg:w-auto md:my-4 space-y-3 md:space-y-0
                   md:bg-transparent p-6 md:p-0 "
        >
          <NavButton text="Home" link="/" />
          <NavButton text="About" link="/about" />
          <NavButton text="Work" link="/work" />
          <NavButton text="Posts" link="/posts" />
          <NavButton text="Team" link="/team" />
        </nav>
      </section>
      <div className="bg-hippiegreen rounded drop-shadow-xl w-100 lg:h-44 lg:-mt-40 lg:mb-12" />
    </div>
  );
};

export default Nav;
