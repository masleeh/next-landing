import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer/Footer";
import AuthForm from "@/components/AuthForm/AuthForm";

const Login = () => {
    return  (
        <MainContainer title="Log In">
            <AuthForm />
            <Footer />
        </MainContainer>
    )
}

export default Login