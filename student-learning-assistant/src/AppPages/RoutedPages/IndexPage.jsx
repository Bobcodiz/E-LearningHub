import {useEffect, useState} from "react";
import {refreshToken} from "../DataSource/BackEndConnection.js";
import {useNavigate} from "react-router";

export const IndexPage = () => {

    const navigate = useNavigate();
    const [isFirstMount, setIsFirstMount] = useState(true);

    const tokenRefresh = () => {
        refreshToken()

            .then((response) => {
                sessionStorage.setItem("token", response.data.accessToken);
                navigate("/student-assistant/learn/main");
                console.log("token refreshed.")
            })

            .catch(() => {
                navigate("/");
            })
    }

    useEffect(() => {

        if (!isFirstMount) {
            tokenRefresh();
            setIsFirstMount(false);
        }

        const intervals = setInterval(() => {
            tokenRefresh();
        }, 5000 * 60)


    }, []);


    return (
        <div>
            <h1>Index Page.</h1>
        </div>
    );
}