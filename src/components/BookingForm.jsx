'use client'

import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { toast } from "react-toastify";

const BookingForm = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        toast.success('Booking successful.')
    };

    return (
        <div className="my-7 not-md:my-5">
            <h2 className='text-4xl not-md:text-2xl text-center font-bold'>Booking form</h2>

            <Form className="p-7 my-5 bg-base-200 mx-auto rounded-2xl flex w-96 flex-col gap-4" onSubmit={onSubmit}>

                {/* name */}
                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                {/* email */}
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                {/* phone */}
                <TextField
                    isRequired
                    name="phone"
                    type="number"
                >
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                    <FieldError />
                </TextField>

                {/* address */}
                <TextField
                    isRequired
                    name="address"
                    type="text"
                >
                    <Label>Address</Label>
                    <Input placeholder="Enter your address" />
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default BookingForm;