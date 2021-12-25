import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authentication = useSession();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        signIn('credentials', {
            email: email,
            password: password
        })
    }

    console.log(authentication);

    useEffect(() => {
        if (authentication && authentication.status === 'authenticated') {
            router.push('/profile')
        }
    }, [router, authentication])


    return (
        <div>
            {authentication && (authentication.status ==='loading' || authentication.data) ? <Loader /> :
                <div className="h-screen w-screen flex justify-center items-center bg-slate-300">
                    <form onSubmit={handleSubmit} className="border h-auto w-full lg:w-96 p-5 rounded-xl shadow-lg bg-white">
                        <h1 className="text-center text-2xl font-semibold mb-4">Sign In</h1>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" className="w-full my-1 h-6 border rounded-lg py-5 focus:outline-none px-3" placeholder="Email" />
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" className="w-full my-1 h-6 border rounded-lg py-5 focus:outline-none px-3" placeholder="Password" />
                        <button type="submit" className="w-full border rounded-lg bg-gray-700 hover:bg-gray-900 text-white py-3 my-1 normal-transition">Sign In</button>
                    </form>
                </div>
            }
        </div>

    )

}