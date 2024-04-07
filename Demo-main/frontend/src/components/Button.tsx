import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded",
} as const;
const variants = {
  fill: {
    red_A100: "bg-red-A100",
    gray_900: "bg-gray-900 text-white-A700",
    white_A700_7f: "bg-white-A700_7f text-gray-900_bf",
    blue_gray_50: "bg-blue_gray-50",
    teal_200: "bg-teal-200 text-gray-900",
  },
  outline: {
    teal_200: "border-teal-200 border border-solid text-gray-900",
  },
} as const;
const sizes = {
  "5xl": "h-[56px] px-4",
  xl: "h-[44px] px-2.5",
  lg: "h-[44px] px-3.5 text-sm",
  md: "h-[40px] px-[35px] text-sm",
  "4xl": "h-[56px] px-[17px] text-sm",
  xs: "h-[32px] px-1",
  "2xl": "h-[48px] px-3.5",
  "3xl": "h-[48px] px-[35px] text-sm",
  sm: "h-[32px] px-3 text-xs",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "teal_200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-sm ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant &&
          variants[variant]?.[
            color as keyof (typeof variants)[typeof variant]
          ]) ||
        ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
