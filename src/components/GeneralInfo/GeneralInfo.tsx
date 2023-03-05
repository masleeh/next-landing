import { IPersonal } from "@/types/form"

const GeneralInfo:React.FC<IPersonal> = (props) => {
    return (
        <section className="personal">
            <div className="container">
                <h1 className="personal-title">General info</h1>
                <div className="personal-grid">
                    <h2 className="personal-grid-name">Name:</h2>
                    <div className="personal-grid-info">{props.userName}</div>
                    <h2 className="personal-grid-name">Phone number:</h2>
                    <div className="personal-grid-info">{props.phoneNumber}</div>
                    {/* <h2 className="personal-grid-name">Subscription status:</h2>
                    <div className="personal-grid-info blue">Active</div> */}
                    <h2 className="personal-grid-name">Expiring date:</h2>
                    <div className="personal-grid-info">{props.paidTill}</div>
                </div>
                <div className="personal-row">
                    <button className="personal-logout" onClick={() => props.logOut()}>Log out</button>
                    <button className="personal-cancel" onClick={() => props.cancelSubscription()}>Cancel subscription{props.isLoading && <div className="spinner"></div>}</button>

                </div>
            </div>
        </section>
    )
}

export default GeneralInfo