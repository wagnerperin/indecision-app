import React from "react";
import { useLocation, useParams } from "react-router-dom";

const EditExpensePage = () => {
    let params = useParams();
    let location = useLocation();
    console.log(location);
    console.log(params);
    return (
        <div>
            This is from my EditExpensePage component
        </div>
    );
};

export default EditExpensePage;