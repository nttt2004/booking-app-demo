import { Helmet } from "react-helmet";
import { Img } from "../components/Img";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { SelectBox } from "../components/SelectBox";
import { RatingBar } from "../components/RatingBar";
import SignOutButton from "../components/SignOutButton";
import { useAppContext } from "../contexts/AppContext";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Meta title</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full pt-[20px] sm:pt-5 overflow-auto bg-gray-50">
        <div>
          <div className="w-full mx-auto md:p-5 max-w-[1380px]">
            <div className="flex flex-col items-center">
              <div className="self-stretch h-[530px] relative">
                <Img
                  src="images/img_rectangle_31.png"
                  alt="image"
                  className="h-[599px] w-full bottom-[-50px] right-0 left-0 m-auto object-cover absolute rounded-[24px]"
                />
                <div className="w-full top-[0.00px] right-0 left-0 m-auto md:pb-5 rounded-bl-[24px] rounded-br-[24px] bg-gradient absolute">
                  <div className="flex flex-col items-center gap-[px] mb-[0px] sm:gap-[27px]">
                    <header className="self-stretch mt-20 p-6 sm:p-5">
                      <div className="flex md:flex-col justify-between items-center gap-5 mt-[-110px]">
                        <div className="flex justify-between items-center w-[54%] md:w-full gap-5">
                          <div className="flex justify-between w-[34%] gap-5">
                            <div className="flex items-center gap-">
                              <Img
                                src="images/img_airplane.svg"
                                alt="airplane_one"
                                className="h-[24px] w-[24px]"
                              />
                              <Heading
                                size="s"
                                as="p"
                                className="self-end !text-white-A700 !font-semibold"
                              >
                                Find Flight
                              </Heading>
                            </div>
                            <div className="flex items-center gap-1">
                              <Img
                                src="images/img_ion_bed.svg"
                                alt="ionbed_one"
                                className="h-[24px] w-[24px]"
                              />
                              <Heading
                                size="s"
                                as="p"
                                className="self-end !text-white-A700 !font-semibold"
                              >
                                Find Stays
                              </Heading>
                            </div>
                          </div>
                          <Img
                            src="images/img_logo_teal_200.svg"
                            alt="logo_one"
                            className="h-[36px]"
                          />
                        </div>
                        <div className="flex justify-between items-center w-[13%] md:w-full gap-5">
                          {
                            <a
                              href="Login"
                              target="_blank"
                              rel="noreferrer"
                              className="self-end mb-[13px]"
                            >
                              <Heading
                                size="s"
                                as="p"
                                className="!text-white-A700 !font-semibold"
                              >
                                Login
                              </Heading>
                            </a>
                          }
                          <a href="Register" target="_blank" rel="noreferrer">
                            <Button
                              color="white_A700"
                              className="sm:px-5 font-semibold min-w-[104px] rounded-lg"
                            >
                              Sign up
                            </Button>
                          </a>
                        </div>
                      </div>
                    </header>
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center pt-1">
                        <Heading
                          size="5xl"
                          as="h1"
                          className="!text-white-A700 !font-tradegothicltextended text-center"
                        >
                          Helping Others
                        </Heading>
                        <Heading
                          size="6xl"
                          as="h2"
                          className="!text-white-A700 !font-tradegothicltextended uppercase text-center"
                        >
                          <span className="text-white-A700">Live</span>
                          <span className="text-white-A700">&nbsp;&&nbsp;</span>
                          <span className="text-white-A700">Travel</span>
                        </Heading>
                      </div>
                      <Heading
                        size="lg"
                        as="h3"
                        className="!text-white-A700 text-center"
                      >
                        Special offers to suit your plan
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-[89%] md:w-full mt-[50px] gap-8 p-4 z-[9999] bg-colors shadow-sm rounded-[16px] relative">
                <div className="flex flex-col self-stretch items-start gap-[18px]">
                  <div className="flex justify-between items-center w-[19%] md:w-full gap-5">
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_airplane_gray_900.svg"
                        alt="airplane_three"
                        className="h-[24px] w-[24px]"
                      />
                      <Heading as="h4" className="self-end">
                        Flights
                      </Heading>
                    </div>
                    <div className="h-full w-px bg-gray-300" />
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_ion_bed_gray_900.svg"
                        alt="ionbed_three"
                        className="h-[24px] w-[24px]"
                      />
                      <Heading as="h5" className="self-end">
                        Stays
                      </Heading>
                    </div>
                  </div>
                  <div className="h-[4px] w-[8%] bg-teal-200" />
                  <div className="flex md:flex-col self-stretch gap-6">
                    <div className="flex md:self-stretch pl-4 pr-[35px] gap-px py-[18px] sm:pr-5 text-gray-900_01 text-left text-base border-gray-600_01 border border-solid bg-white-A700 flex-1 rounded">
                      Lahore - Karachi
                    </div>
                    <SelectBox
                      shape="round"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      name="createfromframe"
                      placeholder={`Trip`}
                      options={dropDownOptions}
                      className="w-[12%] md:w-full sm:pr-5 border-gray-600_01 border border-solid"
                    />
                    <div className="md:self-stretch pl-4 pr-[35px] py-[18px] sm:pr-5 text-gray-900_01 text-left text-base border-gray-600_01 border border-solid bg-white-A700 flex-1 rounded">
                      07 Nov 22 - 13 Nov 22
                    </div>
                    <div className="md:self-stretch pl-4 pr-[35px] py-[18px] sm:pr-5 text-gray-900_01 text-left text-base border-gray-600_01 border border-solid bg-white-A700 flex-1 rounded">
                      1 Passenger, Economy
                    </div>
                  </div>
                </div>
                <div className="flex mb-4 gap-6 pl-[800px]">
                  <div className="flex">
                    <div className="flex items-center gap-[3px] py-3.5">
                      <Img
                        src="images/img_add_outline.svg"
                        alt="addoutline_one"
                        className="h-[16px] w-[16px]"
                      />
                      <Text as="p" className="ml-5">
                        Add Promo Code
                      </Text>
                    </div>
                  </div>
                  <Button
                    shape="round"
                    leftIcon={
                      <Img src="images/img_paper_plane.svg" alt="Paper Plane" />
                    }
                    className="gap-1 ml-auto font-medium min-w-[144px]"
                  >
                    Show Filghts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-col w-[93%] md:w-full mt-20 gap-[74px] mr-[50px] md:gap-[55px] md:p-5 sm:gap-[37px]">
            <div className="flex flex-col w-full gap-10 mx-auto max-w-[1232px]">
              <div className="flex md:flex-col justify-between items-center gap-5">
                <div className="flex flex-col items-start gap-[11px]">
                  <Heading size="2xl" as="h2" className="!text-black-900">
                    Plan your perfect trip
                  </Heading>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-900_9e opacity-0.75"
                  >
                    Search Flights & Places Hire to our most popular
                    destinations
                  </Text>
                </div>
                <Button
                  size="xs"
                  variant="outline"
                  shape="round"
                  className="font-medium min-w-[149px]"
                >
                  See more places
                </Button>
              </div>
              <div className="justify-center gap-8 grid-cols-[repeat(auto-fill,_minmax(357px_,_1fr))] grid">
                <div className="flex md:flex-col justify-center items-center w-full gap-4 p-4 bg-white-A700 shadow-md rounded-[16px]">
                  <div className="w-[26%] md:w-full">
                    <Img
                      src="images/img_rectangle_3.png"
                      alt="istanbulturkey"
                      className="h-[90px] w-full md:h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start md:self-stretch gap-1.5 flex-1">
                    <Heading as="h3" className="!text-gray-900_99 opacity-0.7">
                      Istanbul, Turkey
                    </Heading>
                    <div className="flex gap-2 flex-wrap">
                      <Text as="p" className="self-end">
                        Flights
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Hotels
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Resorts
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 p-4 bg-white-A700 shadow-md rounded-[16px]">
                  <div className="w-[26%]">
                    <Img
                      src="images/img_rectangle_3_90x90.png"
                      alt="image"
                      className="h-[90px] w-full md:h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <Heading as="h4" className="!text-gray-900_99 opacity-0.7">
                      Sydney, Australia
                    </Heading>
                    <div className="flex gap-2 flex-wrap">
                      <Text as="p" className="self-end">
                        Flights
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Hotels
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Resorts
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 p-4 bg-white-A700 shadow-md rounded-[16px]">
                  <div className="w-[26%]">
                    <Img
                      src="images/img_rectangle_4.png"
                      alt="image"
                      className="h-[90px] w-full md:h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <Heading as="h5" className="!text-gray-900_99 opacity-0.7">
                      Baku, Azerbaijan
                    </Heading>
                    <div className="flex gap-2 flex-wrap">
                      <Text as="p" className="self-end">
                        Flights
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Hotels
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Resorts
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 p-4 bg-white-A700 shadow-md rounded-[16px]">
                  <div className="w-[26%]">
                    <Img
                      src="images/img_rectangle_4_90x90.png"
                      alt="image"
                      className="h-[90px] w-full md:h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-.5 flex-1">
                    <Heading as="h6" className="!text-gray-900_99 opacity-0.7">
                      Malé, Maldives
                    </Heading>
                    <div className="flex gap-2 flex-wrap">
                      <Text as="p" className="self-end">
                        Flights
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Hotels
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Resorts
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 p-4 bg-white-A700 shadow-md rounded-[16px]">
                  <div className="w-[26%]">
                    <Img
                      src="images/img_rectangle_3_2.png"
                      alt="image"
                      className="h-[90px] w-full md:h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <Heading as="h6" className="!text-gray-900_99 opacity-0.7">
                      Paris, France
                    </Heading>
                    <div className="flex gap-2 flex-wrap">
                      <Text as="p" className="self-end">
                        Flights
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Hotels
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Resorts
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 p-4 bg-white-A700 shadow-md rounded-[16px]">
                  <div className="w-[26%]">
                    <Img
                      src="images/img_rectangle_4_1.png"
                      alt="image"
                      className="h-[90px] w-full md:h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <Heading as="h6" className="!text-gray-900_99 opacity-0.7">
                      New York, US
                    </Heading>
                    <div className="flex gap-2 flex-wrap">
                      <Text as="p" className="self-end">
                        Flights
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Hotels
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Resorts
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 p-4 bg-white-A700 shadow-md rounded-[16px]">
                  <div className="w-[26%]">
                    <Img
                      src="images/img_rectangle_3_3.png"
                      alt="image"
                      className="h-[90px] w-full md:h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <Heading as="h6" className="!text-gray-900_99 opacity-0.7">
                      London, UK
                    </Heading>
                    <div className="flex gap-2 flex-wrap">
                      <Text as="p" className="self-end">
                        Flights
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Hotels
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Resorts
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 p-4 bg-white-A700 shadow-md rounded-[16px]">
                  <div className="w-[26%]">
                    <Img
                      src="images/img_rectangle_3_4.png"
                      alt="image"
                      className="h-[90px] w-full md:h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <Heading as="h6" className="!text-gray-900_99 opacity-0.7">
                      Tokyo, Japan
                    </Heading>
                    <div className="flex gap-2 flex-wrap">
                      <Text as="p" className="self-end">
                        Flights
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Hotels
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Resorts
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full gap-4 p-4 bg-white-A700 shadow-md rounded-[16px]">
                  <div className="w-[26%]">
                    <Img
                      src="images/img_rectangle_4_2.png"
                      alt="image"
                      className="h-[90px] w-full md:h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1.5 flex-1">
                    <Heading as="h6" className="!text-gray-900_99 opacity-0.7">
                      Dubai, UAE
                    </Heading>
                    <div className="flex gap-2 flex-wrap">
                      <Text as="p" className="self-end">
                        Flights
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Hotels
                      </Text>
                      <Text as="p" className="self-end">
                        •
                      </Text>
                      <Text as="p" className="self-start">
                        Resorts
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col w-full gap-6 mx-auto max-w-[1232px]">
              <div className="h-[559px] w-full md:h-auto shadow-md relative rounded-[20px]">
                <Img
                  src="images/img_rectangle_40.png"
                  alt="image"
                  className="h-[559px] w-full object-cover rounded-[20px]"
                />
                <div className="w-full bottom-[0.00px] right-0 left-0 m-auto absolute">
                  <div className="flex justify-end p-6 sm:p-5 rounded-bl-[24px] rounded-br-[24px] bg-gradient1">
                    <div className="flex flex-col items-center w-[81%] md:w-full mt-[69px] mr-[77px] gap-4 md:mr-0">
                      <div className="flex flex-col self-stretch items-center gap-[3px]">
                        <Heading
                          size="3xl"
                          as="h1"
                          className="!text-white-A700 !font-tradegothicltextended text-center"
                        >
                          Flights
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="!text-white-A700 text-center"
                        >
                          Search Flights & Places Hire to our most popular
                          destinations
                        </Text>
                      </div>
                      <Button
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_paper_plane.svg"
                            alt="Paper Plane"
                          />
                        }
                        className="gap-1 font-medium min-w-[144px]"
                      >
                        Show Filghts
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[559px] w-full shadow-md relative">
                <Img
                  src="images/img_rectangle_41_559x603.png"
                  alt="image"
                  className="h-[559px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                />
                <div className="w-full bottom-[0.00px] right-0 left-0 m-auto absolute">
                  <div className="flex justify-end p-6 sm:p-5 rounded-bl-[20px] rounded-br-[20px] bg-gradient1">
                    <div className="flex flex-col items-center w-[81%] md:w-full mt-[69px] mr-[77px] gap-4 md:mr-0">
                      <div className="flex flex-col self-stretch items-center gap-1.5">
                        <Heading
                          size="3xl"
                          as="h1"
                          className="!text-white-A700 !font-tradegothicltextended text-center"
                        >
                          Hotels
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="!text-white-A700 text-center"
                        >
                          Search hotels & Places Hire to our most popular
                          destinations
                        </Text>
                      </div>
                      <Button
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_paper_plane.svg"
                            alt="Paper Plane"
                          />
                        }
                        className="gap-1 font-medium min-w-[141px]"
                      >
                        Show Hotels
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-baseline justify-around gap-[38px] mx-auto">
                <div className="flex sm:flex-col justify-between items-center w-full gap-5 pl-[120px] md:p-5 max-w-[1232px]">
                  <div className="flex flex-col items-start gap-3.5">
                    <Heading size="2xl" as="h2" className="!text-black-900">
                      Reviews
                    </Heading>
                    <Text size="md" as="p" className="!text-black-900">
                      What people says about Golobe facilities
                    </Text>
                  </div>
                  <Button
                    size="xs"
                    variant="outline"
                    shape="round"
                    className="font-medium min-w-[80px]"
                  >
                    See All
                  </Button>
                </div>
                <div className="flex md:flex-col gap-10 ml-auto pl-[120px] pr-[50px]">
                  <div className="flex flex-col w-full gap-10 p-6 sm:p-5 bg-teal-200_66 shadow-lg cursor-pointer rounded-[20px] hover:shadow-lg">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-4">
                        <Heading
                          size="xl"
                          as="h4"
                          className="!font-tradegothicltextended"
                        >
                          “A real sense of community, nurtured”
                        </Heading>
                        <div className="flex flex-col items-end gap-[11px]">
                          <Text
                            as="p"
                            className="!text-gray-900_87 opacity-0.5"
                          >
                            Really appreciate the help and support from the
                            staff during these tough times. Shoutout to Katie
                            for helping me always, even when I was out of the
                            country. And always available when needed.
                          </Text>
                          <a href="#">
                            <Heading
                              size="s"
                              as="p"
                              className="!font-tradegothicltextended text-right"
                            >
                              View more
                            </Heading>
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={24}
                          className="flex justify-between"
                        />
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col self-start items-start gap-0.5">
                            <Heading
                              size="s"
                              as="p"
                              className="!font-tradegothicltextended"
                            >
                              Olga
                            </Heading>
                            <Text
                              size="xs"
                              as="p"
                              className="!text-gray-900_87 opacity-0.5"
                            >
                              Weave Studios – Kai Tak
                            </Text>
                          </div>
                          <div className="flex self-start items-center gap-2">
                            <Img
                              src="images/img_flat_color_icons_google.svg"
                              alt="google_one"
                              className="h-[24px] w-[24px]"
                            />
                            <Heading
                              size="xs"
                              as="p"
                              className="self-end mb-0.5 !text-gray-900_7e !font-tradegothicltextended opacity-0.4"
                            >
                              Google
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_rectangle_36.png"
                      alt="google_four"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="h-[586px] w-full mt-[22px] md:mt-0 bg-teal-200_66 cursor-pointer hidden rounded-[20px] hover:shadow-lg" />
                  <div className="flex flex-col w-full gap-10 p-6 sm:p-5 bg-teal-200_66 shadow-lg cursor-pointer rounded-[20px] hover:shadow-lg">
                    <div className="flex flex-col gap-[15px]">
                      <div className="flex flex-col gap-4">
                        <Heading
                          size="xl"
                          as="h4"
                          className="!font-tradegothicltextended"
                        >
                          “The facilities are superb. Clean, slick, bright.”
                        </Heading>
                        <div className="flex flex-col items-end gap-[11px]">
                          <Text
                            as="p"
                            className="!text-gray-900_87 opacity-0.5"
                          >
                            “A real sense of community, nurtured”Really
                            appreciate the help and support from the staff
                            during these tough times. Shoutout to Katie for
                            helping me always, even when I was out of the
                            country. And always available when needed.View
                            moreOlgaWeave Studios – Kai TakGoogle
                          </Text>
                          <a href="#">
                            <Heading
                              as="h6"
                              className="!font-tradegothicltextended text-right !font-bold"
                            >
                              View more
                            </Heading>
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={24}
                          className="flex justify-between"
                        />
                        <div className="flex flex-col gap-2.5">
                          <div className="flex flex-col self-start items-start gap-[5px]">
                            <Heading
                              size="s"
                              as="p"
                              className="!font-tradegothicltextended"
                            >
                              Thomas
                            </Heading>
                            <Text
                              size="xs"
                              as="p"
                              className="!text-gray-900_87 opacity-0.5"
                            >
                              Weave Studios – Olympic
                            </Text>
                          </div>
                          <div className="flex self-start items-center gap-2">
                            <Img
                              src="images/img_flat_color_icons_google.svg"
                              alt="flatcolor_one"
                              className="h-[24px] w-[24px]"
                            />
                            <Heading
                              size="xs"
                              as="p"
                              className="self-end mb-0.5 !text-gray-900_7e !font-tradegothicltextended opacity-0.4"
                            >
                              Google
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_rectangle_36_200x377.png"
                      alt="image"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="h-[586px] w-full bg-teal-200_66 cursor-pointer hidden rounded-[20px] hover:shadow-lg" />
                  <div className="flex flex-col w-full gap-10 p-6 sm:p-5 bg-teal-200_66 shadow-lg cursor-pointer rounded-[20px] hover:shadow-lg">
                    <div className="flex flex-col gap-[15px]">
                      <div className="flex flex-col gap-4">
                        <Heading
                          size="xl"
                          as="h4"
                          className="!font-tradegothicltextended"
                        >
                          “A real sense of community, nurtured”
                        </Heading>
                        <div className="flex flex-col gap-[11px]">
                          <Text
                            as="p"
                            className="!text-gray-900_87 opacity-0.5"
                          >
                            Really appreciate the help and support from the
                            staff during these tough times. Shoutout to Katie
                            for helping me always, even when I was out of the
                            country. And always available when needed.
                          </Text>
                          <a href="#">
                            <Heading
                              as="h6"
                              className="!font-tradegothicltextended text-right !font-bold"
                            >
                              View more
                            </Heading>
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[19px]">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={24}
                          className="flex justify-between"
                        />
                        <div className="flex flex-col gap-[11px]">
                          <div className="flex flex-col self-start items-start gap-1">
                            <Heading
                              size="s"
                              as="p"
                              className="!font-tradegothicltextended"
                            >
                              Eliot
                            </Heading>
                            <Text
                              size="xs"
                              as="p"
                              className="!text-gray-900_87 opacity-0.5"
                            >
                              Weave Studios – Kai Tak
                            </Text>
                          </div>
                          <div className="flex self-start items-center gap-2">
                            <Img
                              src="images/img_flat_color_icons_google.svg"
                              alt="flatcolor_one"
                              className="h-[24px] w-[24px]"
                            />
                            <Heading
                              size="xs"
                              as="p"
                              className="self-end mb-0.5 !text-gray-900_7e !font-tradegothicltextended opacity-0.4"
                            >
                              Google
                            </Heading>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_rectangle_36_1.png"
                      alt="image"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="h-[586px] w-full bg-teal-200_66 cursor-pointer hidden rounded-[20px] hover:shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <footer className="w-[96%] md:w-full mt-[90px] md:p-5 shadow-xs rounded-[30px]">
            <div>
              <div>
                <div className="flex md:flex-col justify-between w-full ml-auto mr-[120px] gap-5 px-6 md:p-5 sm:px-5 z-[1] bg-blue_gray-100 shadow-md max-w-[1232px] relative rounded-[20px]">
                  <div className="flex flex-col w-[50%] md:w-full gap-[23px] py-6 sm:py-5">
                    <Heading
                      size="4xl"
                      as="h1"
                      className="w-[61%] md:w-full !font-tradegothicltextended leading-[54px]"
                    >
                      Subscribe Newsletter
                    </Heading>
                    <div className="flex flex-col gap-3.5">
                      <div className="flex flex-col self-start items-start gap-2">
                        <Heading
                          size="lg"
                          as="h5"
                          className="!text-gray-900_a2 !font-tradegothicltextended !font-bold opacity-0.8"
                        >
                          The Travel
                        </Heading>
                        <Text
                          size="md"
                          as="p"
                          className="!text-gray-900_99 !font-medium opacity-0.7"
                        >
                          Get inspired! Receive travel discounts, tips and
                          behind the scenes stories.
                        </Text>
                      </div>
                      <div className="flex sm:flex-col justify-center gap-4">
                        <div className="sm:self-stretch pl-4 pr-[35px] py-[18px] sm:pr-5 text-gray-900_01 text-left text-base bg-white-A700 flex-1 rounded">
                          Your email address
                        </div>
                        <Button
                          color="gray_900"
                          size="md"
                          shape="round"
                          className="font-semibold min-w-[104px]"
                        >
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_emojione_v1_ope.svg"
                    alt="emojionev1ope"
                    className="h-[305px] md:w-full"
                  />
                </div>
                <div className="flex md:flex-col justify-between items-end mt-[-154px] gap-5 mr-[-63px] p-[63px] md:p-5 bg-teal-200">
                  <div className="flex flex-col w-[10%] md:w-full mb-[57px] ml-[41px] gap-6 md:ml-0">
                    <Img
                      src="images/img_logo_white_a700.svg"
                      alt="logo_three"
                      className="h-[39px] mr-auto"
                    />
                    <div className="flex gap-3">
                      <Img
                        src="images/img_akar_icons_facebook_fill.svg"
                        alt="akaricons_one"
                        className="h-[20px] w-[20px]"
                      />
                      <Img
                        src="images/img_akar_icons_twitter_fill.svg"
                        alt="akaricons_three"
                        className="h-[20px] w-[20px]"
                      />
                      <Img
                        src="images/img_akar_icons_youtube_fill.svg"
                        alt="akaricons_five"
                        className="h-[20px] w-[20px]"
                      />
                      <Img
                        src="images/img_ant_design_instagram_filled.svg"
                        alt="antdesign_one"
                        className="h-[20px] w-[20px]"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-center items-center w-[79%] md:w-full mt-[155px] mr-[42px] gap-6 md:mr-0">
                    <div className="flex w-full">
                      <div className="flex flex-col items-start w-[85%] md:w-full gap-[20px]">
                        <Heading
                          as="h6"
                          className="self-center mr-auto !font-tradegothicltextended !font-bold"
                        >
                          Our Destinations
                        </Heading>
                        <ul className="flex flex-col items-start gap-2.5">
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Canada
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Alaksa
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                France
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Iceland
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="flex flex-col items-start w-[70%] md:w-full gap-[15px]">
                        <Heading
                          as="h6"
                          className="self-center mr-auto !font-tradegothicltextended !font-bold"
                        >
                          Our Activities
                        </Heading>
                        <ul className="flex flex-col items-start gap-[11px]">
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Northern Lights
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Cruising & sailing
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Multi-activities
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Kayaing
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex w-full">
                      <div className="flex flex-col items-start w-[89%] md:w-full gap-[13px]">
                        <Heading
                          as="h6"
                          className="!font-tradegothicltextended !font-bold"
                        >
                          Travel Blogs
                        </Heading>
                        <ul className="flex flex-col items-start gap-[11px]">
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Bali Travel Guide
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Sri Lanks Travel Guide
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Peru Travel Guide
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Bali Travel Guide
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex self-start w-full">
                      <div className="flex flex-col items-start w-[54%] md:w-full gap-[15px]">
                        <Heading
                          as="h6"
                          className="!font-tradegothicltextended !font-bold"
                        >
                          About Us
                        </Heading>
                        <ul className="flex flex-col items-start gap-[9px]">
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Our Story
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Work with us
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex self-start w-full">
                      <div className="flex flex-col items-start w-[58%] md:w-full gap-[15px]">
                        <Heading
                          as="h6"
                          className="self-center mr-auto !font-tradegothicltextended !font-bold relative"
                        >
                          Contact Us
                        </Heading>
                        <ul className="flex flex-col items-start justify-around gap-[9px]">
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Our Story
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="opacity-0.7">
                              <Text as="p" className="!text-gray-900_99">
                                Work with us
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
