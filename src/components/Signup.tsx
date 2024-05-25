import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import Button from "@mui/material/Button";

const Signup: React.FC = () => {
    const { keycloak } = useKeycloak();

    const handleSignup = async()=> {
        try{
            await keycloak.register();
            alert("Registration successful!");
        } catch(error: any){
            console.log('Registration failed:', error);
            alert("Registration failed! Please check the console for details.");
        }
    };

    return(
        <div>
            <h1>signup</h1>
            <Button variant="contained" color="primary" onClick={handleSignup}>
                signup with keycloak
            </Button>
        </div>
    );
};

export default Signup;




