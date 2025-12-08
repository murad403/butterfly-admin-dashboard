import AdminHeader from '@/components/shared/AdminHeader'
import adminSettings, { TAdminSetting } from '@/lib/adminSettings'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

const Settings = () => {
    return (
        <div className='space-y-5'>
            <AdminHeader title='Welcome, John' description='Have a good day'></AdminHeader>
            <div className='space-y-4'>
                {
                    adminSettings.map((item: TAdminSetting, index: number) =>
                        <Link className='flex justify-between items-center text-header bg-common border border-border-color p-4 rounded-xl font-medium text-[20px]' href={item?.route} key={index}>
                            <span>{item?.pathName}</span>
                            <IoIosArrowForward />
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Settings
