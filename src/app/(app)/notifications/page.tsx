import Image from 'next/image'
import logo from "@/assets/logo.png";

const Notifications = () => {
    return (
        <div className='space-y-4'>
            {
                [0, 1, 2].map((_, index: number) =>
                    <div key={index} className='flex items-center gap-3 p-3 bg-common rounded-xl border border-border-color'>
                        <Image src={logo} alt='logo' width={60} height={60} className='rounded-full'></Image>
                        <div>
                            <h3 className='font-semibold text-[18px] text-header'>New User Registered</h3>
                            <p className='text-title text-[16px] font-medium'>A new user has joined the platform.</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Notifications