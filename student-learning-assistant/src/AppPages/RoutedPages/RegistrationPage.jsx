import {Container} from "react-bootstrap";
import {useState} from "react";
import Progress from "../Component/Progress.jsx";
import RegistrationForm from "../Component/RegistrationForm.jsx";
import VerifyEmailForm from "../Component/VerifyEmailForm.jsx";
import './../Styles/RegistrationPage.css'
import UserProfileForm from "../Component/UserProfileForm.jsx";

export const RegistrationPage = () => {
    const [register, setRegister] = useState(40);
    const [verify, setVerify] = useState(0);
    const [profile, setProfile] = useState(0);
    const [registrationPage, setRegistrationPage] = useState(false);
    const [verifyEmail, setVerifyEmail] = useState(false)
    const [userprofile, setUserProfile] = useState(true)

    return(
        <Container fluid={"xxl"}>
            <Progress register={register} verify={verify} profile={profile}/>
            <hr />
            <div>
                {registrationPage && <RegistrationForm />}
                {verifyEmail && <VerifyEmailForm />}
                {userprofile && <UserProfileForm />}
            </div>
        </Container>
    );
}

