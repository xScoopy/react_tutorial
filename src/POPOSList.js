import React from "react";
import POPOSSpace from "./POPOSSpace";

const POPOSList = () => {
    return (
        <div>
            <POPOSSpace 
                    name="50 California Street"
                    address="50 California St."
                    image="50-california-st.jpg"
            />
            <POPOSSpace />
            <POPOSSpace />
            <POPOSSpace />
        </div>
    )
}
export default POPOSList