import React, { useState } from "react";
import AuthFormContainer from "./AuthForm";
import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useRefreshList } from "../helpers/useReshPageHook";

export default function BranchForm() {
  const { mutate } = useRefreshList();
  // const headers = new Headers();
  // headers.append("accept", "*/*"); // Set the 'accept' header
  // headers.append("Content-Type", "application/json"); // Set the
  const { values, handleSubmit, handleBlur, handleChange, setFieldValue } =
    useFormik({
      initialValues: { name: "", description: "", file: null as any },
      onSubmit: async (state) => {
        const { name, description, file } = values;

        if (file) {
          const formData = new FormData();
          const fileContent = new Blob([file.name], { type: file.type });

          formData.append("File", fileContent, file.name);
          formData.append("FilePrivacy", "1");
          formData.append("FileTypes", "1");

          const uploadRes = await fetch(
            `http://100.124.5.231/Branch/v1/Upload/haftkhan
          `,
            {
              method: "POST",
              body: formData,
              headers: {
                Accept: "*/*",
              },
            }
          );
          const res1 = await uploadRes.json();
          const BranchrequestData = {
            name: name,
            description: description,
            priority: 0,
            parentId: null,
            showInSale: true,
            fileId: res1.content,
            status: 0,
          };
          console.log("upload res is", res1);

          const res = await fetch(
            `http://100.124.5.231/Sale/v1/Category/haftkhan/Create`,
            {
              method: "POST",
              body: JSON.stringify(BranchrequestData),
              headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();
          console.log("res from category", data);
          mutate();
        }
        if (!file) return;
      },
    });
  const { name, description } = values;
  return (
    <div className="">
      <AuthFormContainer
        title=" category"
        onSubmit={handleSubmit}
      >
        <Input
          name="name"
          label="name"
          onChange={handleChange}
          labelProps={{
            className: "fontIR ",
          }}
          value={name}
          crossOrigin={undefined}
        />

        <Input
          name="description"
          label="description"
          onChange={handleChange}
          labelProps={{
            className: "fontIR",
          }}
          value={description}
          type="text"
          crossOrigin={undefined}
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Choose File
        </label>
        <Input
          type="file"
          onChange={(e) => setFieldValue("file", e.currentTarget.files![0])}
          crossOrigin={undefined}
        />
        <Button
          type="submit"
          className="w-full "
          placeholder={undefined}
        >
          <p className="fontIR">ورود</p>
        </Button>
      </AuthFormContainer>
    </div>
  );
}
