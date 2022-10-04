import { Input, Button } from "react-daisyui";

function AuthPasswordRecovery({ email, setEmail, handleRecovery }) {
    return (
        <div className="relative  mt-20 sm:mt-0 min-h-screen sm:flex sm:flex-row justify-center bg-transparent p-6 sm:p-24 sm:pb-0 rounded-3xl shadow-xl">
            <div className="flex justify-center self-center z-10">
                <div className="p-12 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-800 mx-auto rounded-3xl w-96 ">
                    <div className="mb-7">
                        <h3 className="font-semibold text-2xl text-gray-300">Password Recovery </h3>
                        <p className="text-gray-500">
                            Remember your password?  
                            <a href="login" className="text-sm text-blue-700 hover:text-blue-600">
                                Login
                            </a>
                        </p>
                    </div>
                    <div className="space-y-6">
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400" type="email" placeholder="Email"></Input>
                        <Button onClick={handleRecovery} type="submit" className="w-full flex justify-center bg-blue-800 hover:bg-blue-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex-col flex  self-center lg:p-14 sm:max-w-4xl xl:max-w-md  z-10">
                <div className="self-start hidden lg:flex flex-col  text-gray-300">
                    <h1 className="my-3 font-semibold text-4xl">Password no good?</h1>
                    <p className="pr-3 text-sm opacity-75">
                        No worries! We can help you reset your password. Just enter your email address below and we'll send you a link to reset your password.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AuthPasswordRecovery;