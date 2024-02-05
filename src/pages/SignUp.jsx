
import { supabase } from "./client";
import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import logo from "./images/logo.png";
import authBg from "./images/bg-auth.jpg";
import dashMockup from "./images/dash-mockup.jpg";
import { userSchema } from './validations/UserValidation.jsx';
// import Error from './components/Error';
import { useFormik } from 'formik';
const initialValues = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  cpassword: "",
}
const SignUp = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onSubmit: (values) => {

      console.log(values);
    }
  });

 
 
  return (
    <>
      <div className="grid sm:grid-cols-2 ">
        <div className="col-span-full absolute overflow-x-hidden w-screen z-10 sm:text-white flex items-center justify-between py-2 sm:px-24 px-2">
          <div>
            <a href="#">
              <img src={logo.src} alt="" className="object-cover h-20" />
            </a>
          </div>
          <div className="">
            <a href="#" className="flex items-center">
              <HiOutlineChevronLeft className="me-2 cursor-pointer" /> Back to Home
            </a>
          </div>
        </div>
        <div className="h-screen grid justify-center">
          <div className="mt-32">
            <h1 className="text-3xl font-bold mb-6">Sign up</h1>
            <form className="flex flex-col gap-4 md:w-96" onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fname" value="First Name" />
                </div>
                <TextInput
                placeholder="First Name"
                  id="fname"
                  type="text"
                  required
                  shadow
                  value={values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                />
                        {errors.fname && touched.fname ? <p style={{ 'color': "red" }}>{errors.fname}</p> : null}

              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lname" value="Last Name" />
                </div>
                <TextInput
                placeholder="Last Name"
                  id="lname"
                  type="text"
                  required
                  shadow
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                />
                        {errors.lname && touched.lname ? <p style={{ 'color': "red" }}>{errors.lname}</p> : null}

              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Email address" />
                </div>
                <TextInput
                placeholder="Email address"
                  id="email"
                  type="email"
                  required
                  shadow
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                />
                        {errors.email && touched.email ? <p style={{ 'color': "red" }}>{errors.email}</p> : null}

              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Password" />
                </div>
                <div className="">
                  <TextInput
                  placeholder="Enter your password"
                    id="password"
                    type="password"
                    required
                    shadow
                    value={values.password}
                    onChange={handleChange}
                  />
                          {errors.password && touched.password ? <p style={{ 'color': "red" }}>{errors.password}</p> : null}

                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="cpassword" value="Confirm Password" />
                </div>
                <div className="">
                  <TextInput
                  placeholder="Confirm Password"
                    id="cpassword"
                    type="password"
                    required
                    shadow
                    value={values.cpassword}
                    onChange={handleChange}
                  />
                          {errors.cpassword && touched.cpassword ? <p style={{ 'color': "red" }}>{errors.cpassword}</p> : null}

                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center">
                  <Checkbox id="agree"  onChange={handleChange} />
                  <Label htmlFor="agree" className="flex ms-2">
                    Remember me
                  </Label>
                </div>
                <div>
                  <Label className="flex">
                    <a href="#">Forget Password</a>
                  </Label>
                </div>
              </div>
              <div className="mt-5">
                <Button
                  type="submit"
                  className="rounded-full w-full bg-indigo-700 hover:-translate-y-1 transition-all duration-300 h-14"
                >
                  <span className="text-xl">Sign up</span>
                </Button>
              </div>
              <div className="text-center mt-5">
                <h2>
                  Have an account?{" "}
                  <a
                    href="/login"
                    className="text-indigo-700 font-medium underline decoration-solid"
                  >
                    Sign in
                  </a>
                </h2>
              </div>
            </form>
          </div>
        </div>
        <div className="relative  overflow-hidden">
          <img src={authBg.src} alt="" className=" w-screen object-cover" />
          <img
            src={dashMockup.src}
            alt=""
            className="h-96 rounded-3xl absolute top-20 right-10 translate-y-52 translate-x-40"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
