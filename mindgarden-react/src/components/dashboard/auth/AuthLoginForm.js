import { Input, Button } from "react-daisyui";

function AuthLoginForm({ email, setEmail, password, setPassword, signin, signinGoogle }) {
    return (
        <div className="relative  mt-20 sm:mt-0 min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent p-6 sm:p-24 sm:pb-0 rounded-3xl shadow-xl">
            <div className="flex-col flex  self-center lg:p-14 sm:max-w-4xl xl:max-w-md  z-10">
                <div className="self-start hidden lg:flex flex-col  text-gray-300">
                    <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
                    <p className="pr-3 text-sm opacity-75">
                        Login and start your dairy journey
                    </p>
                </div>
            </div>
            <div className="flex justify-center self-center  z-10">
                <div className="p-12 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 mx-auto rounded-3xl w-96 ">
                    <div className="mb-7">
                        <h3 className="font-semibold text-2xl text-gray-300">Sign In </h3>
                        <p className="text-gray-500">
                            Don'thave an account?  
                            <a href="register" className="text-sm text-purple-700 hover:text-purple-600">
                                Sign Up
                            </a>
                        </p>
                    </div>
                    <div className="space-y-6">
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="email" placeholder="Email"></Input>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="password" placeholder="Password"></Input>
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <div className="text-sm ml-auto">
                            <a href="password-recovery" className="text-purple-700 hover:text-purple-600">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <Button onClick={signin} type="submit" className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
                        Sign in
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AuthLoginForm;