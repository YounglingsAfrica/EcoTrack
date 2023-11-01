import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const clientId = "AXJBdNgoxh0GJvbFF0i7v53KrO6X7duF5vyB4CpBNKmG2svgBDuGnz4U76ZWcAwE1vC35Zg3Euk3Q0j1";

function PayPalBtn(props) {
    const { amount, createSubscription, onApprove, catchError, onError, onCancel } = props;
    // const paypalKey = clientId;

    return (
        <PayPalScriptProvider 
            options={{ 
                "clientId": clientId,
                vault: true,
                amount: {amount},
                currency: "ZAR"
            }}>
            <PayPalButtons
                style={{
                    shape: 'rect',
                    color: 'black',
                    layout: 'horizontal',
                    label: 'subscribe',
                }}
                createSubscription={(data, details) => createSubscription(data, details)}
                onApprove={(data, details) => onApprove(data, details)}
                onError={(err => onError(err))}
                catchError={(err) => catchError(err)}
                onCancel={(err) => onCancel(err)}
            />
        </PayPalScriptProvider>
    );
}

export default PayPalBtn;