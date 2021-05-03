import { NextPage } from 'next';
import React from 'react';
import { useForm } from "react-hook-form";
import BlankLayout from '../../layouts/blank';

type FormValues = {
    email: string;
    password: string;
};

const AboutPage: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = handleSubmit((data: FormValues) => console.log(data));
    return (
        <BlankLayout>
            <section className="page-blank">
                <div className="row no-gutters row-blank align-items-center">
                    <div className="col text-white">
                        <div className="box-left">
                            <h3 className="page-blank-title font-weight-medium m-b-lg">
                                Hello
                            </h3>
                            <p className="page-blank-description">
                                Find out more about the many benefits that we bring to serve your daily needs
                            </p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div
                            className="box-right"
                        >
                            <form
                                onSubmit={onSubmit}
                                className="form-style text-left"
                            >
                                <img
                                    src="/images/logo.png"
                                    alt="logo"
                                    className="form-logo m-b-md"
                                />
                                <h4 className="form-title font-weight-medium m-b-lg">
                                    Login
                                </h4>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="text"
                                        placeholder="email"
                                        className="form-input"
                                        {
                                            ...register("email", {
                                                required: 'The email is required.',
                                                pattern: {
                                                    value: /\S+@\S+.\S+/,
                                                    message: 'The email format is invalid.',
                                                }
                                            })
                                        }
                                    />
                                    <p
                                        className="text-danger font-size-normal m-b-none"
                                    >
                                        { errors.email?.message }
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <div className="form-group-password">
                                        <input
                                            type="password"
                                            placeholder="password"
                                            className="form-input"
                                            {
                                                ...register("password", {
                                                    required: 'The password is required.',
                                                    minLength: {
                                                        value: 6,
                                                        message: 'The minimum password length of 6.'
                                                    },
                                                    maxLength: {
                                                        value: 20,
                                                        message: 'The maximum password length of 20.'
                                                    }
                                                })
                                            }
                                        />
                                        <a
                                            className="form-group-toggle cursor-pointer"
                                        />
                                    </div>
                                    <p
                                        className="text-danger font-size-normal m-b-none"
                                    >
                                        { errors.password?.message }
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="btn-normal form-btn m-t-xs"
                                >
                                    Login       
                                </button>
                                <p
                                    className="text-danger m-b-none m-t-sm form-error-message text-center"
                                >
                                </p>
                                <div className="text-center m-t-xl">
                                    <p className="m-b-xs font-weight-medium">
                                        <a
                                            href="/forgot-password"
                                            className="link-forgot-password"
                                        >
                                            Forgot password?
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </BlankLayout>
    );
};
export default AboutPage;
