import React, { useState } from 'react'
import { useForm } from '@formspree/react'
import Input from '../_contact/Input'
import TextArea from '../_contact/TextArea'
import Disclaimer from '../_contact/Disclaimer'

const OrgForm = () => {
    const [state, handleSubmit] = useForm('FORMID');
    if (state.succeeded) {
        return <div> Dziękujemy za kontakt!! </div>;
    }

    return (
        <div className='w-full flex items-center justify-center my-12'>
            <form onSubmit={handleSubmit} className='top-40 bg-white shadow-lg rounded py-12 px-8 md:w-1/2 w-full border'>
                <h1 className='md:text-3xl text-xl font-bold leading-7 text-center text-gray-700'>
                    Zarejestruj się jako organizator
                </h1>
                 <div className='md:flex items-center mt-12 gap-2'>
                    <Input label='Imię' />
                    <Input label='Email' />
                </div>
                <div className='md:flex items-center mt-3 gap-2'>
                    <Input label='Firma' />
                    <Input label='Rola' />
                </div>
                <Disclaimer />
                <div className='flex items-center justify-center w-full'>
                    <button className='mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-main rounded hover:bg-hovermain focus:ring-2 focus:ring-offset-2 focus:hoverblue focus:outline-none'
                    type='submit'>
                        Wyślij
                    </button>
                </div>
            </form>
        </div>
    );
}

export default OrgForm