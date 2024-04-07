import React from "react";

const sizes = {
  "5xl": "text-6xl font-normal md:text-[52px] sm:text-[46px]",
  xs: "text-xs font-medium",
  lg: "text-xl font-normal",
  s: "text-sm font-medium",
  "2xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  "3xl": "text-[44px] font-normal md:text-[40px] sm:text-[34px]",
  "4xl": "text-[45px] font-normal md:text-[41px] sm:text-[35px]",
  xl: "text-2xl font-normal md:text-[22px]",
  md: "text-base font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "s",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-gray-900 font-montserrat ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
