import MainContainer from "@/components/MainContainer"
import Footer from "@/components/Footer/Footer"
import Link from "next/link"


const SuccessPay = () => {
    return (
        <MainContainer title="Successful pay">
            <div className="container">
                <h1 className="suc-title">Thank you!</h1>
                <p className="suc-p">
                    We are pleased to inform you that you can now receive AI answers via SMS. 
                    To access this service, simply send a message to the number from 
                    which you received the initial SMS.
                </p>
                <p className="suc-p">
                    Please note that your access has been granted for one month, and your next payment 
                    will be due in one month&apos;s time. You can review and modify your subscription at any 
                    time by visiting the Account section of our website and clicking on the LOGIN button.
                </p>
                <p className="suc-p">
                    We would like to remind you that our AI system will do its best to provide 
                    answers that fit within the SMS format. If you have any questions or concerns 
                    about the service, please do not hesitate to contact us. Thank you for choosing our service.
                </p>
                <div>
                    <Link href="/login"><h2 className="suc-go">Proceed to your account</h2></Link>
                </div>
            </div>
            <Footer />
        </MainContainer>
    )
}

export default SuccessPay