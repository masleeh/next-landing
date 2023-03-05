import Head from "next/head"
import { ReactNode } from "react"
import Nav from "./Nav/Nav"

type MainContainerProps = {
    children: ReactNode,
    title: string
}

const MainContainer:React.FC<MainContainerProps> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <div id="root">
                <Nav />
                {children}
            </div>
        </>
    )
}

export default MainContainer