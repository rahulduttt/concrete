"use client"

import { useRef } from "react";
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export function ContactForm({ submitContactForm }) {
    const formRef = useRef(null);
    const { toast } = useToast()
    return ((<div>
        <h2 className="text-3xl font-bold text-gray-400">
            Get in Touch
        </h2>
        <p className="mt-4 text-gray-400">
            Fill out the form below and we&apos;ll get back to you as soon
            as possible.
        </p>
        <form className="mt-8 space-y-4" ref={formRef} action={async (formData) => {
            let success = await submitContactForm(formData);
            formRef.current?.reset();
            if (success) {
                toast({
                    title: "Contact Form Submitted",
                    description: "Thank you for your message!",
                    duration: 5000,
                })
            }
        }} >
            <div>
                <Label className="text-gray-400" htmlFor="name">
                    Name
                </Label>
                <Input
                    className="bg-gray-800 text-white"
                    id="name"
                    name="name"
                    required
                    type="text"
                />
            </div>
            <div>
                <Label className="text-gray-400" htmlFor="email">
                    Email
                </Label>
                <Input
                    className="bg-gray-800 text-white"
                    id="email"
                    name="email"
                    required
                    type="email"
                />
            </div>
            <div>
                <Label className="text-gray-400" htmlFor="message">
                    Message
                </Label>
                <Textarea
                    className="bg-gray-800 text-white"
                    id="message"
                    name="message"
                    required
                    rows={4}
                />
            </div>
            <Button type="submit" variant="outline">
                Submit
            </Button>
        </form>
    </div>
    ))
}