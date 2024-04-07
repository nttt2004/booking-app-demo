import { Heading } from "./Heading";
import { Img } from "./Img";

interface Props {
  className?: string;
}

export default function HeadingTmp({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="mx-auto flex w-full max-w-[1232px] justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
            <div className="flex items-center gap-1">
              <Img
                src="images/img_ion_bed.svg"
                alt="ionbed_one"
                className="h-[24px] w-[24px]"
              />
              <Heading size="s" as="p" className="self-end">
                Find Stays
              </Heading>
            </div>
            <div className="flex w-[10%] justify-center sm:w-full">
              <div className="w-full px-[9px]">
                <Img
                  src="images/img_logo.svg"
                  alt="logo_one"
                  className="h-[36px] w-full md:h-auto"
                />
              </div>
            </div>
            <div className="flex w-[21%] items-center justify-between gap-5 sm:w-full">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Img
                    src="images/img_heart.svg"
                    alt="heart_one"
                    className="h-[24px] w-[24px]"
                  />
                  <Heading size="s" as="p">
                    Favourites
                  </Heading>
                </div>
                <Heading size="s" as="p" className="self-end">
                  |
                </Heading>
              </div>
              <div className="flex w-[40%] items-center justify-center gap-[3px]">
                <div className="relative h-[45px] w-[45px] md:h-auto">
                  <div className="flex w-full flex-col items-end">
                    <Img
                      src="images/img_ellipse_1.png"
                      alt="circleimage"
                      className="h-[45px] w-[45px] rounded-[50%]"
                    />
                    <Img
                      src="images/img_arrow_down.svg"
                      alt="arrowdown_one"
                      className="relative mt-[-14px] h-[14px] w-[14px]"
                    />
                  </div>
                  <div className="absolute bottom-[2.00px] right-[2.00px] m-auto h-[10px] w-[10px] rounded-[5px] bg-gray-900" />
                </div>
                <Heading size="s" as="p">
                  John D.
                </Heading>
              </div>
            </div>
          </div>
          <div className="mr-[173px] h-[5px] w-[10%] bg-teal-200 md:mr-0" />
        </div>
      </div>
    </header>
  );
}
