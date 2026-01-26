import React from "react";
import { useNavigate } from "react-router-dom";


function AboutPage() {
    const navigate = useNavigate()

    const goToHome = () => { navigate('/')}

    return (
        <>
            <h2>Welcome to the About Page</h2>
            <button onClick={goToHome}>Go Home</button>
        </>
    )
}

export default AboutPage