import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import Swal from "sweetalert2";

import googleIcon from "../../assets/google.png"
import githubIcon from "../../assets/github.png"

export default function Login() {

    const navigate = useNavigate()
    const { signInUserWithPass, googleLogin, githubLogin } = useContext(AuthContext);

    const location = useLocation()
    // console.log(location)
    const from = location.state?.from.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        form.reset();

        signInUserWithPass(email, password)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully signed in.',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                // console.log(errorMessage)
                // alert(errorMessage)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `${errorMessage}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    const handleGoogleLogIn = () => {
        googleLogin()
            .then((data) => {
                const savedUser = {
                    name: data.user.displayName, email: data.user.email
                }
                // console.log(savedUser)
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Signed in...',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/');
                    })
            })
    }

    const handleGithubLogIn = () => {
        githubLogin()
            .then((data) => {
                const savedUser = {
                    name: data.user.displayName, email: data.user.email
                }
                // console.log(savedUser)
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Signed in...',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/');
                    })
            })
    }

    return (
        <div>
            <div className="h-screen pt-32">
                <div className="w-1/2 mx-auto bg-white p-2 my-4 rounded-lg mt-0 ">
                    <div className="my-10 px-12">
                        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in</h2>
                        <div className="mt-12">
                            <form className="" onSubmit={handleSubmit}>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                    <input name="email" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='email' placeholder="mike@gmail.com" />
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            Password
                                        </div>
                                        <div>
                                            <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer">
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </div>
                                    <input name="password" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='password' placeholder="Enter your password" />
                                </div>
                                <div className="mt-10">
                                    <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                        Log In
                                    </button>
                                </div>
                            </form>
                            <div className="flex mt-5 justify-center gap-5">
                                <button
                                    onClick={handleGoogleLogIn}
                                    className="btn btn-outline border-[#869ca7] text-[#869ca7] font-bold"
                                >
                                    <img className="w-6" src={googleIcon} alt="" />
                                    CONTINUE WITH GOOGLE
                                </button>
                                <button 
                                    onClick={handleGithubLogIn} 
                                    className="btn btn-outline"
                                    >
                                    <img className="w-6" src={githubIcon} alt="" />
                                    Github
                                </button>
                            </div>
                            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                                Don&apos;t have an account ? <Link to='/signup' className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}