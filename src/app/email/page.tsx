"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface InputProps {
    name: string,
    email: string,
    subject: string,
    body: string
}

interface ErrorProps {
    name: boolean,
    email: boolean,
    subject: boolean,
    body: boolean
}

export default function Email() {
    const [input, setInput] = useState<InputProps>({ name: "", email: "", subject: "", body: ""});
    const [error, setError] = useState<ErrorProps>({ name: false, email: false, subject: false, body: false });
    const [success, setSuccess] = useState<boolean>(false);

    function validateForm(): boolean {
        const newError = { name: false, email: false, subject: false, body: false };
        let isValid = true;
    
        if (!input.name) {
            newError.name = true;
            isValid = false;
        }
    
        if (!input.email) {
            newError.email = true;
            isValid = false;
        }
    
        if (!input.subject) {
            newError.subject = true;
            isValid = false;
        }
    
        if (!input.body) {
            newError.body = true;
            isValid = false;
        }
    
        setError(newError);
    
        if (!isValid) {
            setTimeout(() => {
                setError({ name: false, email: false, subject: false, body: false });
            }, 5000);
        }
    
        return isValid;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, ) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs.send("service_71qf9pv", "template_j0v7c43", {
            name: input.name,
            email: input.email,
            subject: input.subject,
            body: input.body
        }, "gWJ3uFncMXWrKUMgw")
        .then((response) => {
            console.log("Email sent successfully", response);
            setSuccess(true);
            setInput({ name: "", email: "", subject: "", body: "" });
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        })
        .catch((error) => {
            console.log("Error sending email", error);
        });
    }

    function SubmittionButtons({ success }: { success: boolean }): JSX.Element {
        if (error.body || error.email || error.name || error.subject) {
            return (
                <div className="primary-bg dark:bg-red-500 px-8 py-6 rounded-xl font-medium text-lg text-red-500 dark:text-white">Please fill in all the fields</div>
            )
        }
        
        if (success) {
            return (
                <div className="primary-bg dark:bg-green-500 px-8 py-6 rounded-xl font-medium text-lg text-green-500 dark:text-white">Email Successfully Sent</div>
            )
        }

        return (
            <>
                <Button type="submit" size="lg" className="primary-bg dark:bg-slate-800 dark:border-2 dark:font-medium border dark:hover:bg-blue-600 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Submit</Button>
                <Button type="reset"size="lg"  className="primary-bg dark:bg-slate-800 dark:border-2 dark:font-medium dark:hover:bg-red-600 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white">Clear</Button>
            </>
        )
    }

    return (
        <div className="flex flex-row w-full h-full justify-center items-center">
            <form id="emailForm" onSubmit={(e) => handleSubmit(e)} className="max-w-[1500px] w-4/5 grid grid-cols-1 gap-4 shadow-large p-8 rounded-large border dark:border-none dark:secondary-bg">
                <Input color={`${error.name ? "danger" : "primary"}`} classNames={{ inputWrapper: "border-default-300" }} value={input.name} onValueChange={(newValue) => setInput({ ...input, name: newValue })} label="Name" isRequired size="lg" variant="bordered" />
                <Input color={`${error.email ? "danger" : "primary"}`} classNames={{ inputWrapper: "border-default-300" }} value={input.email} onValueChange={(newValue) => setInput({ ...input, email: newValue })} label="Email" isRequired size="lg" variant="bordered" />
                <Input color={`${error.subject ? "danger" : "primary"}`} classNames={{ inputWrapper: "border-default-300" }} value={input.subject} onValueChange={(newValue) => setInput({ ...input, subject: newValue })} label="Subject" isRequired size="lg" variant="bordered" />
                <Textarea color={`${error.body ? "danger" : "primary"}`} classNames={{ inputWrapper: "border-default-300" }} value={input.body} onValueChange={(newValue) => setInput({ ...input, body: newValue })} label="Body" isRequired size="lg" variant="bordered" />
                <div className="flex flex-row w-full justify-center items-center gap-4 mt-4">
                    <SubmittionButtons success={success} />
                </div>
            </form>
        </div>
    )
}