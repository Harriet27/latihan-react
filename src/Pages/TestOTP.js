import React, { useEffect, useState } from 'react';
import config from '../config';

const TestOTP = () => {
    useEffect(() => {
        document.title = "Send OTP Whatsapp";
    }, []);

    const [otp_code, set_otp_code] = useState("");
    const [div_display, set_div_display] = useState("block");

    const handleSetOTPCode = (e) => {
        set_otp_code(e.target.value);
    };

    const clickSetOTP = () => {
        if (otp_code !== "") {
            set_div_display("none");
            console.log("otp code:", otp_code);
        } else {
            alert(`You haven't set otp yet!`);
        }
    };

    const admin_phone_number = "08111619068";
    const message = `Hi John!%0a%0aYour%20Verification%20Code%20to%20log%20in%20is%20${otp_code}.%20If%20this%20is%20not%20you,%20please%20contact%20us%20via%20${admin_phone_number}.`;

    const [form, set_form] = useState({
        otp: "",
    });

    const handleChange = (e) => {
        set_form({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitOTP = () => {
        form.otp === otp_code.toString() ? alert("Success!") : alert("Wrong OTP, please try again.");
    };

    return (
        <div>
            <div
                style={{
                    display: div_display,
                }}
            >
                <input 
                    type="number" 
                    placeholder="set otp here" 
                    maxLength={6} 
                    value={otp_code} 
                    onChange={handleSetOTPCode} 
                />
                <button onClick={clickSetOTP}>
                    Set OTP
                </button>
            </div>
            <button>
                <a 
                    style={{
                        textDecoration: 'none',
                        color: 'black',
                    }}
                    id="whatsapp_otp"
                    href={`${config.api_url_send_whatsapp}/62811999068?text=${message}`}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Send OTP
                </a>
            </button>
            <div>
                <input 
                    type="number" 
                    placeholder="type your otp" 
                    name="otp" 
                    maxLength={6} 
                    value={form.otp} 
                    onChange={handleChange} 
                />
                <button onClick={handleSubmitOTP}>
                    Submit OTP
                </button>
            </div>
        </div>
    );
};

export default TestOTP;
