import React, { useEffect, useState, useTransition } from "react";
import AuthFormContainer from "./components/AuthForm";
import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
export default function Login() {
  const headers = new Headers();
  headers.append("accept", "*/*"); // Set the 'accept' header
  headers.append("Content-Type", "application/json"); // Set the

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const SumbitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://100.124.5.231/api/Authentication/Signin",
        {
          method: "POST",
          body: JSON.stringify({ userName: email, password: password }),
          headers: headers,
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(`pass is ${password} and email is ${email}`);
  };
  const emailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const passwordHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <AuthFormContainer title="ورود کاربر">
      <Input
        name="email"
        label="ایمیل"
        onChange={emailHandler}
        labelProps={{
          className: "fontIR ",
        }}
        className=""
        crossOrigin={undefined}
      />

      <Input
        name="password"
        label="رمزعبور"
        onChange={passwordHandler}
        labelProps={{
          className: "fontIR",
        }}
        type="password"
        crossOrigin={undefined}
      />

      <Button
        type="submit"
        className="w-full "
        placeholder={undefined}
        onClick={async (e: any) => await SumbitHandler(e)}
      >
        <p className="fontIR">ورود</p>
      </Button>
    </AuthFormContainer>
  );
}
