"use client";

import { registerSchema, RegisterSchema } from "@/lib/schemas/registerSchema";
import { Button, Card, FieldError, Form, Input, Label, Link, TextField } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        mode: "onTouched"
    });


    const onSubmit = (data: unknown) => {
        console.log("Form Data:", data);
    };

    return (
        <Card className="w-full max-w-md">
            <Card.Header className="flex flex-col items-center gap-2">
                <Card.Title className="text-2xl font-semibold">Register</Card.Title>
                <Card.Description>Enter your credentials to access your account</Card.Description>
            </Card.Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Card.Content>
                    <div className="flex flex-col gap-4">
                        <TextField name="name" isRequired isInvalid={!!errors.name}>
                            <Label>Name</Label>
                            <Input placeholder="John Doe" variant="secondary"
                                {...register("name")}
                            />
                            {errors.name && (
                                <FieldError>{errors.name.message}</FieldError>
                            )}
                        </TextField>
                        <TextField name="email" type="email" isRequired isInvalid={!!errors.email}>
                            <Label>Email</Label>
                            <Input placeholder="email@example.com" variant="secondary"
                                {...register("email")}
                            />
                            {errors.email && (
                                <FieldError>{errors.email.message}</FieldError>
                            )}
                        </TextField>
                        <TextField name="password" type="password" isRequired isInvalid={!!errors.password}>
                            <Label  >Password</Label>
                            <Input placeholder="••••••••" variant="secondary"
                                {...register("password")} />
                            {errors.password && (<FieldError>{errors.password.message}</FieldError>)}
                        </TextField>
                    </div>
                </Card.Content>
                <Card.Footer className="mt-4 flex flex-col gap-2">
                    <Button className="w-full" type="submit">
                        Sign In
                    </Button>
                    <Link className="text-center text-sm" href="#">
                        Forgot password?
                    </Link>
                </Card.Footer>
            </Form>
        </Card >
    );
}