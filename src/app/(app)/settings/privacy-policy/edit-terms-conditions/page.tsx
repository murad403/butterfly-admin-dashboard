"use client"
import { SubmitHandler, useForm } from 'react-hook-form'
import { termsAndConditions } from '../page'
import AdminHeader from '@/components/shared/AdminHeader';
import BackButton from '@/components/button/BackButton';

type TInput = {
    termsAndConditions: string;
}

const EditTermsConditions = () => {
    const {
        register,
        handleSubmit,
    } = useForm<TInput>()
    const onSubmit: SubmitHandler<TInput> = (data) => {
        console.log(data);
    }
    return (
        <div className='space-y-5'>
            <AdminHeader title='Welcome, John' description='Have a good day'></AdminHeader>
            <div>
                <BackButton text='Edit Terms & Conditions'></BackButton>
            </div>
            <div className='mt-3'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='border w-full border-border-color rounded-xl bg-common'>
                        <textarea {...register("termsAndConditions")} defaultValue={termsAndConditions} className='w-full text-title appearance-none min-h-[400px] outline-none p-5'></textarea>
                    </div>
                    <div className='flex justify-end items-center mt-5'>
                        <button type='submit' className={`bg-common text-header py-2 w-1/3 rounded-lg cursor-pointer border border-border-color text-center`}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTermsConditions