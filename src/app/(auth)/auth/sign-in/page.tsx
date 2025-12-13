"use client"
import FormHandler from "@/components/form/FormHandler";
import FormInput from "@/components/form/FormInput";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "@/assets/logo.png"
import { LuEye, LuEyeOff } from "react-icons/lu";

type TSignIn = {
    email: string;
    password: string;
}

const SignIn = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const onsubmit = (data: TSignIn) => {
        console.log(data);
        router.push('/');
    }

    const emailValidation = {
        required: 'Email is required',
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        }
    }
    const passwordValidation = {
        required: 'Password is required',
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-[540px] bg-common p-7 rounded-xl flex flex-col justify-between items-center space-y-8">
                {/* logo */}
                <Image src={logo} alt="logo" width={150} height={150}></Image>
                {/* form heading */}
                <div className="text-center space-y-2">
                    <h2 className="font-semibold text-2xl text-header">Welcome Back Admin!</h2>
                    <p className="text-sm font-medium text-title">Sign in on your account</p>
                </div>
                {/* login form */}
                <div className="w-full">
                    <FormHandler onSubmit={onsubmit}>
                        <FormInput type="text" name="email" label="email" placeholder="Enter your email" validation={emailValidation}></FormInput>
                        <div className="relative">
                            <FormInput label="Password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" validation={passwordValidation}></FormInput>
                            <div onClick={() => setShowPassword(!showPassword)} className="absolute top-12 text-xl right-5 text-title">
                                {
                                    showPassword ? <LuEye /> : <LuEyeOff />
                                }
                            </div>
                        </div>
                        <div className="flex justify-end items-center text-[#DF2421]">
                            <Link href={"/auth/forget-password"} className="text-sm font-medium">Forget Password?</Link>
                        </div>
                        <button type="submit" className="bg-main w-full text-header rounded-xl py-3 mt-7 cursor-pointer">Sign in</button>
                    </FormHandler>
                </div>
            </div>
        </div>
    )
}

export default SignIn