import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (<div>
        <h1>About US</h1>
        <h3>Namaste Dev</h3>
        {/* <User name={"Sup"} location={"Mumbai"}  /> */}
        <UserClass name={"vinayak"} location={"banglore"}></UserClass>
    </div>)
}

export default About;