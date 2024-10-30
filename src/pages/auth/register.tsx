import RegisterView from "@/components/views/auth/Registers"
import { Dispatch, SetStateAction } from "react";


const RegisterPage = ({ setToaster }: { setToaster: Dispatch<SetStateAction<{}>> }) => {
    return (
        <>
            <RegisterView setToaster={setToaster} />
        </>
    )
}
export default RegisterPage;