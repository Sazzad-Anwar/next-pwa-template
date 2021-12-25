import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import NavLink from "./NavLink"
import { signOut, useSession } from 'next-auth/react';

const Nav = () => {

    const authentication = useSession();
    const router = useRouter();

    useEffect(() => {


    }, [])

    return (
        <header>
            <nav className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center py-3">
                    <div className="flex justify-between items-center w-full">
                        <Link href="/">
                            <a>
                                <Image src="/vercel.svg" alt="logo" width={150} height={50} />
                            </a>
                        </Link>
                        <i className="bi bi-list text-3xl block lg:hidden cursor-pointer"></i>
                    </div>
                    <ul className="list-none w-full h-screen lg:h-auto flex flex-col justify-start items-start lg:flex-row lg:justify-end lg:items-center bg-white">
                        <li className="py-2 lg:py-0 lg:px-5">
                            <NavLink href="/" exact className="nav-hover border-b border-white py-2">Home</NavLink>
                        </li>

                        {/* megaMenu */}
                        <li className="py-2 lg:py-0 lg:px-5 group">
                            <NavLink href="/products" className="nav-hover border-b border-white py-2">Products</NavLink>
                            <div className="
                                    absolute 
                                    lg:top-[3.9rem] 
                                    left-0 
                                    right-0 
                                    hidden
                                    opacity-0 
                                    group-hover:opacity-100 
                                    group-hover:block 
                                    normal-transition  
                                    shadow-sm                               
                                    border 
                                    px-0 
                                    bg-white
                                    lg:px-4"
                            >
                                <div className="container mx-auto py-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                        <div>
                                            <Image layout="responsive" height={300} width={400} src="https://picsum.photos/300" alt="product-1" />
                                        </div>
                                        <ul className="list-none px-10 border-r h-full">
                                            <h1 className="text-2xl font-semibold">Product Section 2</h1>
                                            <li className="my-4">
                                                <Link href="/product-1">
                                                    <a className="py-2 link-hover">Product 1</a>
                                                </Link>
                                            </li>
                                            <li className="my-4">
                                                <Link href="/product-1">
                                                    <a className="py-2 link-hover">Product 2</a>
                                                </Link>
                                            </li>
                                            <li className="my-4">
                                                <Link href="/product-1">
                                                    <a className="py-2 link-hover">Product 3</a>
                                                </Link>
                                            </li>
                                            <li className="my-4">
                                                <Link href="/product-1">
                                                    <a className="py-2 link-hover">Product 4</a>
                                                </Link>
                                            </li>
                                        </ul>
                                        <ul className="list-none px-10 border-r h-full">
                                            <h1 className="text-2xl font-semibold">Product Section 2</h1>

                                            <li className="my-4">
                                                <Link href="/product-1">
                                                    <a className="py-2 link-hover">Product 1</a>
                                                </Link>
                                            </li>
                                            <li className="my-4">
                                                <Link href="/product-1">
                                                    <a className="py-2 link-hover">Product 2</a>
                                                </Link>
                                            </li>
                                            <li className="my-4">
                                                <Link href="/product-1">
                                                    <a className="py-2 link-hover">Product 3</a>
                                                </Link>
                                            </li>
                                            <li className="my-4">
                                                <Link href="/product-1">
                                                    <a className="py-2 link-hover">Product 4</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {authentication?.data?.user &&
                            <li className="py-2 lg:py-0 lg:px-5 group">
                                <NavLink href="/profile" className="nav-hover border-b border-white py-2">Profile</NavLink>
                            </li>
                        }
                        <li className="py-2 lg:py-0 lg:px-5 group">
                            {authentication?.data?.user ? <p onClick={() => {
                                signOut();
                                router.push('/login');
                            }} className="nav-hover border-b border-white py-2 cursor-pointer">Log Out</p> :
                                <NavLink href="/login" className="nav-hover border-b border-white py-2">Login</NavLink>}
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav
