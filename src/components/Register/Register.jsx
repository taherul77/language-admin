"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { BASE_URL } from "@/lib/Helper/BaseURL";
const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState({
    password: false,
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const data = {
      name,
      phone,
      password,
    };
    setIsLoading(true);
    fetch(`${BASE_URL}/user/create-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        if (data?.success) {
          form.reset();
          setError("");
          toast.success("Register successful please log in");
          router.push("/");
        } else {
          setError(data?.message);
          toast.error(data?.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="hero-content flex justify-center items-center w-96">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
            <div>
              <div className="p-8 space-y-3 rounded-xl  text-neutral">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                {error && (
                  <div className="flex justify-center items-center gap-1">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-5 h-5 text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>{" "}
                    <p className="text-md font-bold text-red-500 text-center">
                      {error}
                    </p>
                  </div>
                )}
                <form
                  onSubmit={handleSubmit}
                  noValidate=""
                  action=""
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white rounded-md border border-black  text-neutral"
                      required
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white rounded-md border border-black  text-neutral"
                      required
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 rounded-md bg-white border border-black text-neutral"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="block w-full p-3 text-center px-6 py-2 font-bold text-cyan-50 border-md rounded-md  bg-[#1C8CC3]"
                  >
                    Register
                  </button>
                </form>

                <p className="text-xs text-center sm:px-6">
                  Have an account? <br />
                  <Link href="/" className="underline hover:text-primary">
                    Login Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
