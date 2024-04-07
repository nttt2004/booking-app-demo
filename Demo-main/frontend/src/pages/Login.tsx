import React from "react";
import { Img } from "../components/Img";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { CheckBox } from "../components/CheckBox";
import { Button } from "../components/Button";
import { Slider } from "../components/Slider";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export type SignInFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Signed in successfully", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <>
      {" "}
      <Helmet>
        <title>Sign In</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="w-full px-14 py-[102px] md:p-5 bg-white-A700">
          <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto max-w-[1234px]">
            <div className="flex flex-col w-[41%] md:w-full gap-16 md:p-5 sm:gap-8">
              <Img
                src="images/img_logo.svg"
                alt="logo_one"
                className="h-[36px]"
              />
              <div className="flex flex-col gap-[39px]">
                <div className="flex flex-col self-start items-start gap-[13px]">
                  <a href="Login" target="_blank" rel="noreferrer">
                    <Heading
                      size="3xl"
                      as="h1"
                      className="!text-black-900 !font-tradegothicltextended"
                    >
                      Login
                    </Heading>
                  </a>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-900_9e opacity-0.75"
                  >
                    Login to access your Golobe account
                  </Text>
                </div>
                <div className="flex flex-col gap-[39px]">
                  <div>
                    <div className="pl-3.5 pr-[35px] py-[18px] sm:pr-5 text-gray-900_01 text-left text-base border-gray-600 border border-solid bg-white-A700 rounded">
                      <label className="text-gray-700 text-sm font-bold flex-1">
                        Email
                        <input
                          type="email"
                          className="border rounded w-full py-1 px-2 font-normal"
                          {...register("email", {
                            required: "This field is required",
                          })}
                        ></input>
                        {errors.email && (
                          <span className="text-red-500">
                            {errors.email.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className="flex mt-[15px] pl-4 pr-[35px] gap-px py-[17px] sm:pr-5 text-gray-900 text-left text-sm border-gray-600 border border-solid bg-white-A700 rounded">
                      <label className="text-gray-700 text-sm font-bold flex-1">
                        Password
                        <input
                          type="password"
                          className="border rounded w-full py-1 px-2 font-normal"
                          {...register("password", {
                            required: "This field is required",
                            minLength: {
                              value: 6,
                              message:
                                "Password must be at least 6 characters long",
                            },
                          })}
                        ></input>
                        {errors.password && (
                          <span className="text-red-500">
                            {errors.password.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className="flex justify-between items-center mt-6 gap-5">
                      <CheckBox
                        name="rememberme"
                        label="Remember me"
                        id="rememberme"
                        className="gap-2 p-px text-gray-900 text-left text-sm font-medium"
                      />
                      <a href="#" className="self-end">
                        <Text as="p" className="!text-red-A100 text-right">
                          Forgot Password
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-[17px]">
                    <Button
                      shape="round"
                      className="w-full sm:px-5 font-semibold"
                    >
                      <button type="submit">Login</button>
                    </Button>
                    <Text as="p" className="text-center">
                      <span className="text-gray-900">
                        Don’t have an account?{" "}
                      </span>
                      <span className="text-red-A100 font-semibold">
                        Sign up
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[39px]">
                    <div className="flex sm:flex-col justify-center items-start gap-4">
                      <div className="h-px mt-[7px] opacity-0.25 bg-gray-900_71 flex-1" />
                      <Text
                        as="p"
                        className="!text-gray-900_87 !font-normal opacity-0.5"
                      >
                        Or login with
                      </Text>
                      <div className="h-px mt-[7px] opacity-0.25 bg-gray-900_71 flex-1" />
                    </div>
                    <div className="flex md:flex-row sm:flex-col gap-4">
                      <div className="flex justify-center w-full sm:w-full p-4 border-teal-200 border border-solid rounded">
                        <Img
                          src="images/img_vector.svg"
                          alt="vector_one"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div className="flex justify-center w-full sm:w-full p-4 border-teal-200 border border-solid rounded">
                        <Img
                          src="images/img_flat_color_icons_google.svg"
                          alt="flatcolor_one"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div className="flex justify-center w-full sm:w-full p-4 border-teal-200 border border-solid rounded">
                        <Img
                          src="images/img_ant_design_apple_filled.svg"
                          alt="antdesign_one"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] md:w-full md:p-5">
              <div>
                <div className="w-full">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{
                      "0": { items: 1 },
                      "550": { items: 1 },
                      "1050": { items: 1 },
                    }}
                    renderDotsItem={(props: DotsItem) => {
                      return props?.isActive ? (
                        <div className="w-[32px] h-[10px] mr-2 bg-teal-200 rounded-[5px]" />
                      ) : (
                        <div className="h-[10px] w-[10px] mr-2 bg-white-A700" />
                      );
                    }}
                    activeIndex={sliderState}
                    onSlideChanged={(e: EventObject) => {
                      setSliderState(e?.item);
                    }}
                    ref={sliderRef}
                    items={[...Array(3)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <div className="flex flex-col mx-auto">
                          <Img
                            src="images/img_rectangle_20.png"
                            alt="image"
                            className="object-cover rounded-[30px]"
                          />
                        </div>
                      </React.Fragment>
                    ))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
