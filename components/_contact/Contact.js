import React, { useState } from 'react'
import Content from './Content'
import Input from './Input'
import TextArea from './TextArea'
import { useForm } from '@formspree/react'
import Disclaimer from './Disclaimer'

const Contact = () => {
    const [state, handleSubmit] = useForm('FORMID');
    if (state.succeeded) {
        return <div> Dziękujemy za kontakt! </div>;
    }

    return (
        <div className='w-full flex items-center justify-center my-12'>
            <form onSubmit={handleSubmit} className='top-40 bg-white shadow-lg rounded py-12 px-8 md:w-1/2 w-full'>
                <Content />
                <div className='md:flex items-center mt-12'>
                    <Input label='Imię' />
                    <Input label='Email' />
                </div>
                <div>
                    <TextArea label='Wiadomość'/>
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

export default Contact;
