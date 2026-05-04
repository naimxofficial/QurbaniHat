'use client'
import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { authClient, useSession } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import { usePathname } from 'next/navigation';


const Navbar = () => {

    const pathname = usePathname();


    const { data, isPending } = useSession();
    if (isPending) {
        return <div>Loading...</div>
    }
    const user = data?.user;

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    location.reload();
                },
            },
        });
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="px-0 btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/allanimals'}>All Animals</Link></li>
                    </ul>
                </div><Link href={'/'}><Image quality={100} height={400} width={400} src={logo} alt='logo'></Image></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-5 font-bold text-md menu-horizontal px-1">
                    <li><Link className={pathname === '/' ? 'text-white bg-black px-5 py-3' : 'px-5 py-3'} href={'/'}>Home</Link></li>
                    <li><Link className={pathname === '/allanimals' ? 'text-white bg-black px-5 py-3' : 'px-5 py-3'} href={'/allanimals'}>All Animals</Link></li>
                </ul>
            </div>
            {
                !user && <div className="navbar-end gap-4">
                    <Link href='/auth/login' className='btn btn-outline btn-success not-md:text-xs not-md:w-18 not-md:h-8'>Login</Link>
                    <Link href='/auth/register' className='btn btn-success text-white not-md:text-xs not-md:w-18 not-md:h-8'>Register</Link>
                    <div>
                        {user?.name}
                    </div>
                </div>}
            {
                user && <div className="navbar-end gap-3">
                    <Link href={'/profile'}>
                        <Avatar>
                            <Avatar.Image alt={user?.name} src={user?.image}
                                referrerPolicy='no-referrer' />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            
                        </Avatar>
                    </Link>
                    <Button onClick={handleLogout} variant='danger'>Logout</Button>
                </div>
            }
        </div>
    );
};

export default Navbar;