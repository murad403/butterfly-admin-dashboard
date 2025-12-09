"use client"
import FormHandler from '@/components/form/FormHandler'
import FormInput from '@/components/form/FormInput'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { useRouter } from 'next/navigation'
import BackButton from '@/components/button/BackButton'

const ForgetPassword = () => {
    const router = useRouter();
    const onsubmit = (data: { email: string }) => {
        console.log(data);
        router.push('/auth/verify-otp');
    }
    const validation = {
        required: 'This field is required',
    }
    return (
        <div className="flex justify-center items-center">
            <div className="w-[540px] bg-common p-7 rounded-xl flex flex-col justify-between items-center space-y-5">
                {/* logo */}
                <Image src={logo} alt="logo" width={150} height={150}></Image>
                {/* back button */}
                <div className='flex w-full items-center'>
                    <BackButton text='verify email'></BackButton>
                </div>
                {/* login form */}
                <div className="w-full">
                    <FormHandler onSubmit={onsubmit}>
                        <FormInput validation={validation} type="email" name="email" label="email" placeholder="Enter your email"></FormInput>
                        <button type="submit" className="bg-main w-full text-header rounded-xl py-3 mt-7 cursor-pointer">Verify</button>
                    </FormHandler>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword