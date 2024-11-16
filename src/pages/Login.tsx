import {Button, Input} from "@nextui-org/react";
import {useWindowSize} from "react-haiku";
import logo from "../assets/image/logo.svg";
import {Link} from "react-router-dom";

const Login = () => {
    const {width, height} = useWindowSize()
    return (
        <div className={"py-6 px-4"}>
            <form className={"max-w-[450px] w-full flex flex-col items-center gap-4 mx-auto"}>
                <img className={"w-[200px]"} src={logo} />
                <h3 className={"text-center font-bold"}>Welcome to <span className={"text-red-500"}>AstroChat</span> – Where Conversations Are Out of This World! 🚀
                    Log in to explore the cosmos of ideas and connect with others across the galaxy.</h3>
                <Input label={"Email"} />
                <Input label={"Password"} />
                <Button className={"w-full font-bold bg-black text-white"} size={"lg"}>Log in</Button>
                <p>Don't have an account? Sign up <Link to={"/auth/reg"} className={"text-red-500 font-bold"}>here!</Link></p>
            </form>
        </div>
    )
}

export default Login;