import { useRouter } from 'next/router';
import Link from 'next/link';

const NavLink = ({ href, exact, children, ...props }) => {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active-nav';
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    )
}

export default NavLink;
