import Link from "next/link"
import {useContext} from 'react'
import { GlobalContext } from "@/context/context"

const Nav = () => {
    const {auth} = useContext(GlobalContext)
    return (
        <nav>
            <div className="container">
                <div className="nav-row">
                    <Link href="/"><h1 className="nav-title">AEIX</h1></Link>
                    {auth ? <Link href="/account"><h2 className="nav-office">Account</h2></Link> : <Link href="/login"><h2 className="auth-send">Log In</h2></Link>}
                </div>
            </div>
        </nav>
    )
}

export default Nav