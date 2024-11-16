import { Button, Input } from "@nextui-org/react";
import logo from "../assets/image/logo.svg";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik, Field } from "formik";

const Register = () => {
    const validationSchema = Yup.object({
        email: Yup.string()
            .required("Email will not be able to be empty.")
            .email("Please enter a valid email"),
        password: Yup.string()
            .required("Password will not be able to be empty.")
    });

    const initialValues = {
        email: '',
        password: ''
    };

    // Handle form submission
    const handleSubmit = (values: any) => {
        // Replace with your API call or login logic
        console.log("Form submitted with:", values);
    };

    return (
        <div className={"py-6 px-4"}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ touched, errors, isSubmitting, isValid }) => (
                    <Form className={"max-w-[450px] w-full flex flex-col items-center gap-4 mx-auto"}>
                        <img className={"w-[200px]"} src={logo} alt="AstroChat Logo" />
                        <h3 className={"text-center font-bold"}>
                            Welcome to <span className={"text-red-500"}>AstroChat</span> – Your Gateway to the Stars! ✨
                            Sign up now to join a community of cosmic thinkers and stargazers. Create your account and start exploring the universe of ideas, astrology, and astronomy with like-minded souls!
                        </h3>

                        {/* Email Input */}
                        <div className="w-full">
                            <Field
                                name="email"
                                as={Input}
                                label="Email"
                                isRequired
                                isInvalid={touched.email && errors.email}
                                errorMessage={touched.email && errors.email ? errors.email : ""}
                            />
                        </div>

                        {/* Password Input */}
                        <div className="w-full">
                            <Field
                                name="password"
                                as={Input}
                                label="Password"
                                type="password"
                                isRequired
                                isInvalid={touched.password && errors.password}
                                errorMessage={touched.password && errors.password ? errors.password : ""}
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            isDisabled={!isSubmitting && !isValid}
                            type="submit"
                            className={"w-full font-bold bg-black text-white"}
                            size={"lg"}
                        >
                            Sign up
                        </Button>

                        <p>
                            Have an account? Log in <Link to={"/auth/login"} className={"text-red-500 font-bold"}>here!</Link>
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;
