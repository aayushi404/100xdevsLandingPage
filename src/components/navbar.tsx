import Link from "./ui/link";
import Button from "./ui/button";
export default function NavBar() {
    return (
        <nav className="flex h-[60px] justify-between px-12 items-center">
            <div className="text-lg">100xDevs</div>
            <div className="h-[60px] bg-secondary/40 border-[0.5px] border-gray-800 rounded-4xl flex gap-10 items-center px-5">
                <Link>course</Link>
                <Link>testimonials</Link>
                <Link>FAQs</Link>
            </div>
            <div>
                <Button>Login</Button>
            </div>
        </nav>
    )
}