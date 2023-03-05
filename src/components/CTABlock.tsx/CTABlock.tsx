import { ISetFormShow } from "@/types/form"

const CTABlock:React.FC<ISetFormShow> = (props) => {
    return (
        <section className="cta">
            <div className="container">
                <div className="cta-block">

                    <div className="cta-circle1"></div>
                    <div className="cta-circle2"></div>

                    <h2 className="cta-block-title">Features of the Subscription</h2>
                    <div className="cta-row">
                        <div className="cta-grid">
                            <img className="cta-block-icon" src='/images/Checkmark.svg'/>
                            <h3 className="cta-block-option">Access to GPT-3</h3>
                            <img className="cta-block-icon" src='/images/Checkmark.svg'/>
                            <h3 className="cta-block-option">Personalized responses</h3>
                            <img className="cta-block-icon" src='/images/Checkmark.svg'/>
                            <h3 className="cta-block-option">24/7 availability</h3>
                            <img className="cta-block-icon" src='/images/Checkmark.svg'/>
                            <h3 className="cta-block-option">Natural language understanding</h3>
                        </div>
                        <div className="cta-grid">    
                            <img className="cta-block-icon" src='/images/Checkmark.svg'/>
                            <h3 className="cta-block-option">Expert-level knowledge</h3>
                            <img className="cta-block-icon" src='/images/Checkmark.svg'/>
                            <h3 className="cta-block-option">High-quality responses</h3>
                            <img className="cta-block-icon" src='/images/Checkmark.svg'/>
                            <h3 className="cta-block-option">Competitive pricing</h3>
                            <img className="cta-block-icon" src='/images/Checkmark.svg'/>
                            <h3 className="cta-block-option">User privacy and data security</h3>
                        </div>
                    </div>
                    <button className="cta-block-btn" onClick={() => props.toggleForm(!props.isShown)}>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default CTABlock