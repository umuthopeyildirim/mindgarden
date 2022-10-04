import { Input, Button } from "react-daisyui";

function AuthRegisterForm({ name, setName, email, setEmail, password, setPassword, register, registerGoogle }) {
    return (
        <div className="relative  mt-20 sm:mt-0 min-h-screen sm:flex sm:flex-row justify-center bg-transparent p-6 sm:p-24 sm:pb-0 rounded-3xl shadow-xl">
            <div className="flex justify-center self-center z-10">
                <div className="p-12 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 mx-auto rounded-3xl w-96 ">
                    <div className="mb-7">
                        <h3 className="font-semibold text-2xl text-gray-300">Register </h3>
                        <p className="text-gray-500">
                            Do you have an account?  
                            <a href="login" className="text-sm text-purple-700 hover:text-purple-600">
                                Login
                            </a>
                        </p>
                    </div>
                    <div className="space-y-6">
                        <Input value={name} onChange={(e) => setName(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="Name"></Input>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="email" placeholder="Email"></Input>
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} className=" w-full text-sm text-white px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400" type="password" placeholder="Password"></Input>
                        <Button onClick={register} type="submit" className="w-full flex justify-center bg-purple-800 hover:bg-purple-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex-col flex  self-center lg:p-14 sm:max-w-4xl xl:max-w-md  z-10">
                <div className="self-start hidden lg:flex flex-col  text-gray-300">
                    <h1 className="my-3 font-semibold text-4xl">Welcome!</h1>
                    <p className="pr-3 text-sm opacity-75">
                        Let's create your first MindGarden account. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AuthRegisterForm;