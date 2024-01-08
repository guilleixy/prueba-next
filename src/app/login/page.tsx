import ExternalLogin from "@/components/general/ExternalLogin";
import Input from "@/components/general/Input";
import Link from "next/link";

//form deberia ser async? 
export default function Page() {
    function handleClick(e: React.MouseEvent) {
        e.preventDefault();

    }
    return (
    <main className="flex justify-end align-center grow-1">
        <form className="border-secondary-100 border-2 border-solid p-4">
            <h2>LOG IN</h2>
            <Input type="text" label="Username or email" />
            <Input type="password" label="Password" />
            <div className="text-xs">
                <span>Forgot Password?</span>
                <Link className="text-orange-100" href={'/reset-password'}>
                    Reset
                </Link>
            </div>
            <button className="w-full p-1 bg-accent-100 rounded uppercase">login</button>
            <div className="flex align-center">
                <hr className="grow-1"/>
                <span className="text-center">or</span>
                <hr className="grow-1"/>
            </div>
            <ExternalLogin company="Riot"/>
            <div className="text-xs">
                <span>Don&apos;t have an account? </span>
                <Link className="text-orange-100" href={'/register'}>
                    Sign Up
                </Link>
            </div>
        </form>
    </main>
    )
}
