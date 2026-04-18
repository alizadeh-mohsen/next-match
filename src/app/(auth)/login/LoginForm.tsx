"use client";

import { logincSchema, LoginSchema } from "@/lib/schemas/loginSchema";
import { Button, Card, FieldError, Form, Input, Label, Link, TextField } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(logincSchema),
        mode: "onTouched"
    });


    const onSubmit = (data: unknown) => {
        console.log("Form Data:", data);
    };

    return (
        <Card className="w-full max-w-md">
            <Card.Header>
                <Card.Title>Login</Card.Title>
                <Card.Description>Enter your credentials to access your account</Card.Description>
            </Card.Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Card.Content>
                    <div className="flex flex-col gap-4">
                        <TextField name="email" type="email" isRequired isInvalid={!!errors.email}>
                            <Label>Email</Label>
                            <Input placeholder="email@example.com" variant="secondary"
                                {...register("email")}
                            />
                            {errors.email && (
                                <FieldError>email is required</FieldError>
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