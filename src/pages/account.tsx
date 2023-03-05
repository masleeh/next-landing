import Footer from "@/components/Footer/Footer";
import MainContainer from "@/components/MainContainer";
import GeneralInfo from "@/components/GeneralInfo/GeneralInfo";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/context";
import axios from 'axios'
import { useRouter } from "next/router";
import Cookie from 'js-cookie'
import CancelModalContainer from "@/components/GeneralInfo/CancelModalContainer";



const Personal = () => {

    const router = useRouter()
    const {auth, setAuth, isLoading, setIsLoading} = useContext(GlobalContext)
    const [userData, setUserData] = useState({
        user_name: "",
        paid_till: "",
        phone: auth
    })
    const [formatPhone, setFormatPhone] = useState("")
    const [form, toggleForm] = useState(falsegit commit -m "first commit")


    const formattedNumber = (rawPhone: string) => {
        const x = Number(rawPhone.length - 12)
        let number = rawPhone.substring(x)
        let first = '', second = '', third = '', fourth = ''
        first = number.substring(0, 3)
        second = number.substring(3, 6)
        third = number.substring(6, 9)
        fourth = number.substring(9, 12)
        number = "+" + first + " " + second + ' ' + third + " " + fourth

        setFormatPhone(number)
    }

    const getUserData = async () => {
        try {
            const trimmedAuth = auth.replace(/(\D+)/g, '')
            // console.log(trimmedAuth)
            const response = await axios.get(`http://137.184.177.18:16085/get_user_data/${trimmedAuth}`)
            setUserData(response.data)
            formattedNumber(userData.phone)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        console.log(auth)
        if (auth) {
            getUserData()
        } else{
            router.push("/login")
        }
    }, [])

    const logOut = () => {
        Cookie.remove('aeix_phone')
        setAuth("")
        router.push("/")
    }

    const cancelSubscription = async () => {
        setIsLoading(true)
        try {
            const response = await axios.post('http://137.184.177.18:16085/cancel_subscription', {
                user_phone: userData.phone
            })
            setIsLoading(false)
            toggleForm(true)
        } catch (error: any) {
            setIsLoading(false)
        }
    }

    return (
        <MainContainer title="AEIX: Account">
            {form && <CancelModalContainer toggleForm={toggleForm} logOut={logOut}/>}
            <GeneralInfo 
                userName={userData.user_name}
                paidTill={userData.paid_till}
                phoneNumber={formatPhone}
                logOut={logOut}
                cancelSubscription={cancelSubscription}
                isLoading={isLoading}
            />

            <Footer />
        </MainContainer>
    )
}

export default Personal