import Link from 'next/link';
import { cn } from 'lib/cn';
import { TNavLink } from '../../widgets/Sidebar/types';

type TProps = TNavLink & {
  isExpanded: boolean;
  isActive: boolean;
}

export const NavLink = ({ href, icon, label, isExpanded, isActive }: TProps) => (
  <Link href={href} className={cn('nav-link', isActive ? 'nav-link-active' : '')}>
    {icon}
    {isExpanded && <span>{label}</span>}
  </Link>
)