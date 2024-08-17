import { IoEye, IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
    const{createUser,googleLogin} = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const togglePasswordVisibility = () => {
        setShow(!show);
    };

    const onSubmit = (data) => {
        const { userEmail, userPassword} = data;
        createUser(userEmail, userPassword)
            .then(result => {
                toast.success("Your account have registered!!")
                navigate('/')
                reset()
            })
            .catch(error => {
                if (error.message) {
                    toast.error("User already exists")
                }
            })
    }
    const handleGoogle = () => {
        googleLogin()
        .then(result => {
            toast.success("Logged in successfully")
            setTimeout(() => {
                navigate(location.state ? location.state : '/')
            }, 1000);

        })
        .catch(error => {
            if (error.message) {
                toast.error("You have already sign in with same email")
            }
        })
    }
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex flex-col md:w-[450px] animate__animated animate__zoomIn my-8 p-10 pb-4 pt-2 rounded-xl text-white bg-opacity-3 backdrop-blur-3xl  bg-[#017a5c]">
                    <div className="mb-4 text-center border-b-2">
                        <h1 className="my-2 text-3xl font-bold  ">Register your account</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <div>
                                <label htmlFor="email" className="block mb-2   text-sm">Email address</label>
                                <input type="email" placeholder="Enter your email address" className="w-full px-3 py-2 border outline-none rounded-md border-gray-200 bg-transparent text-white "  {...register("userEmail",
                                    {
                                        required: true,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid Email"
                                        }
                                    }
                                )} />
                                {errors.userEmail && <small className="text-red-500 font-bold">{errors.userEmail.message}</small>}

                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm ">Password</label>

                                </div>
                                <div className="relative">
                                    <input type={show ? "text" : "password"} placeholder="Enter your password"  className="w-full text-white outline-none px-3 py-2 border rounded-md border-gray-200 bg-transparent  "
                                        {...register("userPassword",
                                            {
                                                required: true,
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must be at least 6 characters"
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])/,
                                                    message: "At least one lowercase letter and one uppercase letter"
                                                }
                                            }
                                        )}
                                    />
                                    <span onClick={togglePasswordVisibility} className="absolute right-[2%] top-[31%]">
                                        {!show ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                                    </span>

                                </div>
                                {errors.userPassword && <small className="text-red-500 font-bold">{errors.userPassword.message}</small>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type="submit" className="w-full px-8 text-white py-2 font-bold rounded-md bg-gradient-to-r from-[#08e07b] to-[#017a5c] text-xl ">Register</button>
                            </div>
                            <div>
                                <button onClick={handleGoogle} className="w-full px-8 py-2 font-bold rounded-md bg-gradient-to-r from-[#08e07b] to-[#017a5c] text-xl ">
                                <div className="flex items-center justify-center gap-3 text-white">
                                <FcGoogle />
                                <p>Google</p>
                                </div>
                                </button>
                            </div>
                            <p className="px-6 text-sm text-center text-gray-300">Already have an account?
                                <Link to="/login" className="hover:underline pl-1 text-red-600 font-extrabold">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;