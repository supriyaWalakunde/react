import { useState } from "react";

const User = ({name,location}) => {
    const [count]=useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count={count}</h1>
            <h1>Count2 = {count2}</h1>
            <h3>Name:{name}</h3>
            <h4>Location:{location}</h4>
            <h5>Conatct Info:</h5>
        </div>
    )
}

export default User;