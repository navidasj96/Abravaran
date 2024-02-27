import React, { useEffect, useState, useTransition } from "react";
import AuthFormContainer from "./components/AuthForm";
import { Button, Input } from "@material-tailwind/react";

export default function Login() {
  const [sumbitted, setIsSubmitted] = useState(0);
  const headers = new Headers();
  headers.append("accept", "*/*"); // Set the 'accept' header
  headers.append("Content-Type", "application/json"); // Set the
  // useEffect(() => {
  //   const fetctJWT = async () => {
  //     const res = await fetch(
  //       "http://100.124.5.231/api/Authentication/Signin",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ userName: email, password: password }),
  //         headers: headers,
  //       }
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetctJWT();
  // }, [sumbitted]);

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
    setIsSubmitted((prev) => prev + 1);
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
