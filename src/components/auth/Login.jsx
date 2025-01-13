"use client";
import { GoogleIcon, MsIcon, SubmitIcon } from "@/assets/icons";
import { useState } from "react";
import toast from "react-hot-toast";

const signinData = [
  {
    title: "Sign in with Google",
    icon: <GoogleIcon />,
  },
  {
    title: "Sign in with Microsoft",
    icon: <MsIcon />,
  },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");

  console.log("email", email);

  const emailValidHandler = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Enter your email");
    } else {
      setIsEmailValid(true);
    }
  };
  return (
    <section className="w-full sm:w-[400px] mx-auto py-10 md:py-[72px]">
      <h3 className="text-center text-[32px] md:text-[40px] font-extrabold font-dmsans text-[#23262F]">
        Welcome Back!
      </h3>
      <p className="text-base text-[#777E90] font-geist mt-3 mb-8 text-center">
        Let’s get you back to creating amazing apps.
      </p>
      <form onSubmit={emailValidHandler}>
        <div className="flex items-center gap-2 border-2 border-[#E6E8EC] rounded-full pl-4 py-2 pr-2 h-[48px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && (
            <button type="submit">
              <SubmitIcon />
            </button>
          )}
        </div>
        {isEmailValid ? (
          <>
            <div className="flex items-center gap-2 border-2 border-[#E6E8EC] rounded-full pl-4 py-2 pr-2 h-[48px] mt-5">
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-transparent outline-none w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {password === "asif" ? (
                <div className="w-[36px] h-[32px] flex items-center justify-center rounded-full bg-primary">
                  <div className="spin-loader"></div>
                </div>
              ) : (
                <button type="submit">
                  <SubmitIcon />
                </button>
              )}
            </div>
            <div className="flex justify-center">
              <button className="text-primary text-center text-xs font-semibold font-geist mt-4">
                Forgot password?
              </button>
            </div>
          </>
        ) : (
          <>
            <ContinueWith />
            <div className="flex flex-col gap-5">
              {signinData.map((data, i) => (
                <SigninWith key={i} data={data} />
              ))}
            </div>
            <div className="mt-8 flex items-center justify-center gap-1">
              <p className="text-xs font-semibold text-[#353945] font-geist">
                New to Wappr?
              </p>
              <button
                type="button"
                className="text-primary text-xs font-semibold font-geist"
              >
                Signup
              </button>
            </div>
          </>
        )}
      </form>
    </section>
  );
};

export default Login;

const SigninWith = ({ data, ...rest }) => {
  return (
    <button
      type="button"
      {...rest}
      className="flex items-center justify-center gap-3 border border-[#D0D5DD] py-[10px] px-4 shadow-sm w-full rounded-full"
    >
      {data.icon}
      <p className="text-base font-semibold font-geist text-[#344054]">
        {data.title}
      </p>
    </button>
  );
};

const ContinueWith = () => {
  return (
    <div className="flex items-center gap-4 md:gap-6 my-10">
      <div className="flex-1 h-[1px] bg-[#E5E7EB]"></div>
      <p className="text-xs font-geist text-[#777E90]">Or continue with</p>
      <div className="flex-1 h-[1px] bg-[#E5E7EB]"></div>
    </div>
  );
};
