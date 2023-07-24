import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { useForm } from "react-hook-form";
import googleIcon from "../../assets/google.png"
import githubIcon from "../../assets/github.png"

const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUserWithPass, updateUser, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogIn = () => {
        googleLogin()
            .then((data) => {
                const savedUser = {
                    name: data.user.displayName, email: data.user.email
                }
                // console.log(savedUser)
                fetch('https://eduvenueserver.vercel.app/users', {
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
                fetch('https://eduvenueserver.vercel.app/users', {
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

    const onSubmit = data => {
        createUserWithPass(data.email, data.password)
            .then(() => {
                updateUser(data.name)
                    .then(() => {
                        console.log('yes')
                        const savedUser = {
                            name: data.name,
                            email: data.email,
                            // password: data.password
                        }

                        fetch('https://eduvenueserver.vercel.app/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Successfully Signed in...',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: errorMessage,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    };

    return (
        <div>
            <div className="h-screen pt-20">
                <div className="w-1/2 mx-auto bg-white p-2 mb-4 rounded-lg ">
                    <div className="my-10 px-12">
                        <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Sign Up</h2>
                        <div className="mt-12">
                            <form className="" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">Name</div>
                                    <input {...register("name", { required: true })} name="name" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='text' placeholder="Full name" />
                                    {errors.name && <span className='text-[red] text-xs'>This field is required</span>}
                                </div>
                                <div className="mt-8">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                    <input {...register("email", { required: true })} name="email" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='email' placeholder="Your email" />
                                    {errors.name && <span className='text-[red] text-xs'>This field is required</span>}
                                </div>
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                                            Password
                                        </div>
                                    </div>
                                    <input {...register("password", { required: true })} name="password" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type='password' placeholder="Enter password" />
                                    {errors.name && <span className='text-[red] text-xs'>This field is required</span>}
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
                                    className="btn btn-outline font-bold"
                                >
                                    <img className="w-6" src={githubIcon} alt="" />
                                    Github
                                </button>
                            </div>
                            <div className="mt-6 text-sm font-display font-semibold text-gray-700 text-center">
                                Already have an account ? <Link to='/login' className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;