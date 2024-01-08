"use client"
import React, { useState } from 'react';

import ExternalLogin from "@/components/general/ExternalLogin";
import Input from "@/components/general/Input";
import Link from "next/link";
import signup from '../signup.module.css';

export default function Page(){
    const [step, setStep] = useState(0);
    function handleClick(e: React.MouseEvent){
        e.preventDefault();
        if(step < 2){
            setStep(step + 1);
        }
    }
    function handleClickBack(e: React.MouseEvent){
        e.preventDefault();
        if(step > 0){
            setStep(step - 1);
        }
    }
    return(
        <main className="flex justify-end align-center grow-1">
            <form className={`border-secondary-100 border-2 border-solid p-4 ${signup.container}`}>
                <div className='flex justify-between'>    
                    <h2>SIGN UP</h2>  
                    <button onClick={handleClickBack}>back</button>          
                </div>
                <div className={step === 0 ? '' : 'hidden'}>
                    <Input type="text" label="Username" />
                    <Input type="email" label="Email" />
                    <div className="text-xs">
                        <span>Already have an account? </span>
                        <Link className="text-orange-100" href={'/login'}>
                            Log In
                        </Link>
                    </div>                        
                </div>
                <div className={step === 1 ? '' : 'hidden'}>
                    <Input type="password" label="Password" />
                    <Input type="password" label="Confirm Password" />
                    <div className="flex align-center">
                        <input type="checkbox"/>
                        <div className="text-xs">
                            <span>I accept the </span>
                            <Link className="text-orange-100" href="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
                <div className={step === 2 ? '' : 'hidden'}>
                    <h3>Congrats! Your account has been created succesfully!</h3>
                    <p>Wait! You still have to link your Riot Accout.</p>
                    <p>Don&apos;t worry, you&apos;ll be able to do it later too.</p>
                    <ExternalLogin company="Riot"/>
                </div>
                <button onClick={handleClick} className="w-full p-1 bg-accent-100 rounded uppercase">
                    {step === 0 && 'Continue'}
                    {step === 1 && 'Register'}
                    {step === 2 && 'Continue Without Linking'}
                </button>    
                <div className="flex align-center">
                    <hr className="grow-1"/>
                    <span className="text-center">or</span>
                    <hr className="grow-1"/>
                </div>
                <ExternalLogin company="Riot"/>
            </form>
    </main>
    )
}