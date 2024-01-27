'use client'

import { useCallback, useState } from "react";
import {
    FieldValues,
    useForm,
    SubmitHandler
} from "react-hook-form";
import Input from "../../components/inputs/Input";
import Button from "../../components/Button";

type Variant = 'LOGIN' | 'REGISTER' ;

const AuthForm =() => {
    const [variant,setVariant]=useState<Variant>('LOGIN');
    const [isLoading,setIsLoading]=useState(false);

 
    const toggleVariant=useCallback(()=> {
        if(variant === 'LOGIN'){
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN')
        }
    },[variant])

const {
    register,
    handleSubmit,
    formState :{
        errors
    }
} = useForm<FieldValues>({
    defaultValues : {
        name: '',
        email: '',
        password: ''
    }

});
const onSubmit : SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if(variant === "REGISTER"){
        // Axios Register
    }

    if(variant === "LOGIN"){
        // nextAuth SignIn
    }

    const socialAction = (action:String) => {
        setIsLoading(true);

        //NextAuth Social SignIn

    }

}


    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"> 
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {variant === 'REGISTER' && ( 
                <Input
                label="Name"
                id="name"
                register={register}
                errors={errors} disabled={false}                
                 />
                )}
                <Input
                label="Email address"
                id="email"
                type="email"
                register={register}
                errors={errors} disabled={false}                
                 />
                 <Input
                label="Password"
                id="password"
                type="password"
                register={register}
                errors={errors} disabled={false}                
                 />
                 <div>
                    <Button
                    disabled={isLoading}
                    fullWidth
                    type="submit"
                    >
                        {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                    </Button>
                 </div>
            </form>
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div
                        className="
                        w-full
                        border-t
                        border-gray-300
                        "
                        />

                    </div>
                    <div className="flex relative justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">
                            Or continue with
                        </span>

                    </div>

                </div>

            </div>

        </div>

        </div>

    );
}
export default AuthForm;