'use client';

import { Button, Input, Textarea } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { IoIosMail } from "react-icons/io";
import emailjs from "@emailjs/browser";

interface InputProps {
    name: string,
    email: string,
    subject: string,
    body: string
}

function EmailForm() {
    const [input, setInput] = useState<InputProps>({ name: "", email: "", subject: "", body: ""});

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, ) => {
        e.preventDefault();

        emailjs.send("service_71qf9pv", "template_j0v7c43", {
            name: input.name,
            email: input.email,
            subject: input.subject,
            body: input.body
        }, "gWJ3uFncMXWrKUMgw")

        .then((response) => {
            console.log("Email sent successfully", response);
        },
        (error) => {
            console.log("Error sending email: ", error);
        });
    }

    return (
        <form id="emailForm" onSubmit={(e) => handleSubmit(e)} className="max-w-[1500px] w-4/5 grid grid-cols-1 gap-4 shadow-large p-8 rounded-large border">
            <Input value={input.name} onValueChange={(newValue) => setInput({ ...input, name: newValue })} label="Name" isRequired size="lg" variant="bordered" />
            <Input value={input.email} onValueChange={(newValue) => setInput({ ...input, email: newValue })} label="Email" isRequired size="lg" startContent={<IoIosMail />} variant="bordered" />
            <Input value={input.subject} onValueChange={(newValue) => setInput({ ...input, subject: newValue })} label="Subject" isRequired size="lg" variant="bordered" />
            <Textarea value={input.body} onValueChange={(newValue) => setInput({ ...input, body: newValue })} label="Body" isRequired size="lg" variant="bordered" />
            <div className="flex flex-row w-full justify-center items-center gap-4 mt-4">
                <Button type="submit" className="primary-bg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">Submit</Button>
                <Button type="reset" className="primary-bg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white">Clear</Button>
            </div>
        </form>
    )
}

export default function EmailPage() {
    return (
        <div className="flex flex-row w-full h-full justify-center items-center">
            <EmailForm />
        </div>
    )
}