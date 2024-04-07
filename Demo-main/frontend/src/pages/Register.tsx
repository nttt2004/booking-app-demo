import React from "react";
import { Helmet } from "react-helmet";
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

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignupPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "User registered successfully", type: "SUCCESS" });
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
      <Helmet>
        <title>Sign Up</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="w-full px-14 py-[67px] md:p-5 bg-white-A700">
        <div className="flex md:flex-col justify-between items-start w-full mt-[37px] gap-5 mx-auto max-w-[1232px]">
          <div className="w-[40%] md:w-full">
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
                      <div className="w-[10px] h-[10px] bg-black-900" />
                    ) : (
                      <div className="w-[10px] h-[10px] bg-white-A700" />
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
          <div className="flex flex-col w-[52%] md:w-full gap-16 sm:gap-8">
            <Img
              src="images/img_logo.svg"
              alt="logo_one"
              className="h-[36px]"
            />
            <div className="flex flex-col gap-[39px]">
              <div className="flex flex-col self-start items-start gap-[13px]">
                <a href="#">
                  <Heading
                    size="3xl"
                    as="h1"
                    className="!text-black-900 !font-tradegothicltextended"
                  >
                    Sign up
                  </Heading>
                </a>
                <Text
                  size="md"
                  as="p"
                  className="!text-gray-900_9e opacity-0.75"
                >
                  Let’s get you all st up so you can access your personal
                  account.
                </Text>
              </div>

              <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                <div className="flex flex-col gap-10">
                  <div>
                    <div className="flex flex-col">
                      <div className="flex md:flex-col items-center gap-6">
                        <label className="text-gray-700 text-sm flex-1 ">
                          First Name
                          <input
                            className="w-full pl-3.5 pr-[35px] py-[5px] sm:pr-5 text-gray-900_01 text-left text-base border-gray-600 border border-solid bg-white-A700 rounded"
                            {...register("firstName", {
                              required: "This field is required",
                            })}
                          ></input>
                          {errors.firstName && (
                            <span className="text-red-500">
                              {errors.firstName.message}
                            </span>
                          )}
                        </label>

                        <label className="text-gray-700 text-sm flex-1">
                          Last Name
                          <input
                            className="w-full pl-3.5 pr-[35px] py-[5px] sm:pr-5 text-gray-900_01 text-left text-base border-gray-600 border border-solid bg-white-A700 rounded"
                            {...register("lastName", {
                              required: "This field is required",
                            })}
                          ></input>
                          {errors.lastName && (
                            <span className="text-red-500">
                              {errors.lastName.message}
                            </span>
                          )}
                        </label>
                      </div>

                      <div className="flex flex-col items-start w-full mt-3">
                        <Text as="p" className="font-normal">
                          Email
                        </Text>
                        <div className="flex self-stretch mt-[px] pl-4 pr-[35px] gap-px py-2 sm:pr-5 text-gray-900_01 text-left text-base border-gray-600 border border-solid bg-white-A700 rounded">
                          <input
                            type="email"
                            className="border rounded w-full py-1 px-2 font-normal"
                            {...register("email", {
                              required: "This field is required",
                            })}
                          ></input>
                        </div>
                        {errors.email && (
                          <span className="text-red-500 text-sm">
                            {errors.email.message}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col items-start w-full mt-3">
                        <Text as="p" className="font-normal">
                          Password
                        </Text>
                        <div className="flex self-stretch mt-[px] pl-4 pr-[35px] gap-px py-2 sm:pr-5 text-gray-900_01 text-left text-base border-gray-600 border border-solid bg-white-A700 rounded">
                          <input
                            type="password"
                            className="border rounded w-full py-1 px-2 font-normal focus:border-blue-500"
                            {...register("password", {
                              required: "This field is required",
                              minLength: {
                                value: 6,
                                message:
                                  "Password must be at least 6 characters long",
                              },
                            })}
                          ></input>
                        </div>
                        {errors.password && (
                          <span className="text-red-500 text-sm">
                            {errors.password.message}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col items-start w-full mt-3">
                        <Text as="p" className="font-normal">
                          Confirm Password
                        </Text>
                        <div className="flex self-stretch mt-[px] pl-4 pr-[35px] gap-px py-2 sm:pr-5 text-gray-900_01 text-left text-base border-gray-600 border border-solid bg-white-A700 rounded">
                          <input
                            type="password"
                            className="border rounded w-full py-1 px-2 font-normal"
                            {...register("confirmPassword", {
                              validate: (value) => {
                                if (!value) {
                                  return "This field is required";
                                } else if (watch("password") !== value) {
                                  return "Passwords do not match";
                                }
                              },
                            })}
                          ></input>
                        </div>
                        {errors.confirmPassword && (
                          <span className="text-red-500 text-sm">
                            {errors.confirmPassword.message}
                          </span>
                        )}
                      </div>

                      <CheckBox
                        name="checkbox"
                        label="I agree to all the Terms and Privacy Policies"
                        id="checkbox"
                        className="mt-6 gap-2 py-[3px] text-gray-900 text-left text-sm font-medium"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[38px]">
                    <div className="flex flex-col items-center gap-[17px]">
                      <Button
                        shape="round"
                        className="w-full sm:px-5 font-semibold"
                      >
                        <button type="submit">Create Account</button>
                      </Button>
                      <Text as="p" className="text-center">
                        <span className="text-gray-900">
                          Already have an account?&nbsp;
                        </span>
                        <span className="text-red-A100 font-semibold">
                          Login
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[39px]">
                      <div className="flex md:flex-col justify-center items-start gap-4">
                        <div className="md:self-stretch h-px mt-[7px] opacity-0.25 bg-gray-900_71 flex-1" />
                        <Text
                          as="p"
                          className="!text-gray-900_87 !font-normal opacity-0.5"
                        >
                          Or Sign up with
                        </Text>
                        <div className="md:self-stretch h-px mt-[7px] opacity-0.25 bg-gray-900_71 flex-1" />
                      </div>
                      <div className="flex md:flex-col gap-4">
                        <div className="flex justify-center w-full p-4 border-teal-200 border border-solid rounded">
                          <Img
                            src="images/img_vector.svg"
                            alt="vector_one"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                        <div className="flex justify-center w-full p-4 border-teal-200 border border-solid rounded">
                          <Img
                            src="images/img_flat_color_icons_google.svg"
                            alt="flatcolor_one"
                            className="h-[24px] w-[24px]"
                          />
                        </div>
                        <div className="flex justify-center w-full p-4 border-teal-200 border border-solid rounded">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
