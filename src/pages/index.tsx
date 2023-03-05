import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header/Header";
import Examples from "@/components/Examples/Examples";
import CTABlock from "@/components/CTABlock.tsx/CTABlock";
import Footer from "@/components/Footer/Footer";
import ActionFormContainer from "@/components/ActionForm/ActionFormContainer";
import useFormModal from "@/hooks/useFormModal";


export default function Home() {
  const {isFormShown, setIsFormShown} = useFormModal()

  return (
      <MainContainer title="AEIX">
            {isFormShown && <ActionFormContainer toggleForm={setIsFormShown} isShown={isFormShown}/>}
            <Header toggleForm={setIsFormShown} isShown={isFormShown}/>
            <Examples />
            <CTABlock toggleForm={setIsFormShown} isShown={isFormShown}/>
            <Footer />
      </MainContainer>
  )
}
