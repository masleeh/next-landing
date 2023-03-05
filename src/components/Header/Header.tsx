import { ISetFormShow } from "@/types/form"
import Image from "next/image"

const Header:React.FC<ISetFormShow> = (props) => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h1 className="header-title">Experience the power <br /> 
                        of Al with the Text <br />
                        to AI chat app AEIX!</h1>

                    <p className="header-description">
                        Learn and interact with a revolutionary Al-powered system 
                        that understands context and meaning in human language. 
                    </p>

                    <p className="header-description">
                        Ask questions and get meaningful responses with our cutting-edge natural 
                        language understanding capabilities. Step into the future of Al interaction 
                        with the Text to Al chat app AEIX today! 
                    </p>

                    <div className="header-row">

                        <div className="header-card">
                            <div className="header-card-image-cont">
                                <Image alt="Icon" width={48} height={42} className="header-card-image" src="/images/ic_twotone-cloud-off.svg"/>
                            </div>
                            <h3 className="header-card-title">Doesn’t require internet connection</h3>
                        </div>

                        <div className="header-card">
                            <div className="header-card-image-cont">
                                <Image alt="Icon" width={48} height={48} className="header-card-image" src="/images/123.png"/>
                            </div>
                            <h3 className="header-card-title">Easier to use</h3>
                        </div>
                    </div>

                    <button className="header-btn" onClick={() => props.toggleForm(!props.isShown)}>Get Started</button>
                    
                </div>
                
            </div>
        </header>
    )
}

export default Header