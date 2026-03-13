import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowLeftIcon } from 'components/UI/Icon';
import { NavLink } from 'components/UI/NavLink';
import { cn } from 'lib/cn';

import { navConfig } from './config';

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-col transition-[width] duration-200 ease-in-out overflow-hidden shrink-0 rounded-r-2xl h-full bg-grey-900", expanded ? 'w-75' : 'w-22')}>
      <h2 className='text-preset-1 text-white px-8 py-10 mb-6 w-full text-center cursor-not-allowed'>
        {expanded ? 'BURNRATE' : 'B'}
      </h2>
      <ul className='flex flex-col'>
        {navConfig.map((link) => (
          <li>
            <NavLink {...link} isExpanded={expanded} isActive={link.href === pathname} />
          </li>
        ))}
      </ul>
      <button className='nav-link mt-auto' onClick={() => setExpanded(!expanded)}>
        {expanded ? (
          <>
            <ArrowLeftIcon className='size-6' />
            <span>Minimize Menu</span>
          </>
        ) : (
          <ArrowLeftIcon className='size-6 rotate-180' />
        )}
      </button>
    </div>
  )
};