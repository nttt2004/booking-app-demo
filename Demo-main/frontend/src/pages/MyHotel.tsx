import { Helmet } from "react-helmet";
import { OptionProps } from "react-select";
import { DatePicker } from "../components/DatePicker";
import { SelectBox } from "../components/SelectBox";
import { Img } from "../components/Img";
import { Button } from "../components/Button";
import { RatingBar } from "../components/RatingBar";
import { Text } from "../components/Text";
import HeadingTmp from "../components/HeadingTmp";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function MyHotelsPage() {
  function getRatingMessage(starRating: number) {
    if (starRating >= 4 && starRating <= 5) {
      return "Very Good";
    } else if (starRating >= 3 && starRating < 4) {
      return "Good";
    } else if (starRating >= 2 && starRating < 3) {
      return "Average";
    } else if (starRating >= 1 && starRating < 2) {
      return "Poor";
    } else {
      return "Very Poor";
    }
  }

  // Không có hotelData nên page không hiện => tắt tạm /////////
  //   const { data: hotelData } = useQuery(
  //     "fetchMyHotels",
  //     apiClient.fetchMyHotels,
  //     {
  //       onError: () => {},
  //     }
  //   );

  //   if (!hotelData) {
  //     return <span>No Hotels found</span>;
  //   }
  /////////////////////////////////////////////////////////////

  return (
    <>
      <Helmet>
        <title>Hotel Booking</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-gray-50">
        {/* {hotelData.map((hotel) => ( */}
        <>
          <HeadingTmp className="flex items-center justify-center bg-white-A700 px-[21px] pt-[21px] shadow-xs sm:px-5 sm:pt-5" />
          <div className="flex flex-col items-center gap-[34px]">
            <div className="flex flex-col items-center self-stretch">
              <div className="flex flex-col items-center self-stretch">
                {/* <div className="flex h-[537px] items-start self-stretch bg-[url(/public/images/img_frame_36.png)] linear-gradient(100%, #00234D 63%) bg-cover bg-no-repeat py-20 pl-20 pr-14 md:h-auto md:p-5"> */}
                <div
                  className="flex w-1440 h-600 items-start self-stretch bg-[url(/public/images/img_frame_36.png)] bg-cover bg-no-repeat bg-fixed py-20 pl-20 pr-14 md:h-auto md:p-5"
                  style={{
                    background:
                      "linear-gradient(rgba(0, 35, 77, 0.63) 63%, transparent 63%, pass-through 63%)",
                  }}
                >
                  <div className="mb-[172px] ml-[46px] flex w-[35%] md:ml-0 md:w-full">
                    <div className="flex w-full flex-col items-start gap-[7px]">
                      <Text
                        size="4xl"
                        as="p"
                        className="!font-abel !text-[#363b4e]"
                      >
                        Make your travel whishlist, we’ll do the rest
                      </Text>
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-white-A700"
                      >
                        Special offers to suit your plan
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto mt-[-74px] flex w-full max-w-[1232px] flex-col items-start justify-center rounded-[16px] bg-white-A700 p-6 shadow-xs md:p-5">
                  <Text size="lg" as="h1" className="mt-2">
                    Where are you flying?{" "}
                  </Text>
                  <div className="mt-[22px] flex gap-4 self-stretch md:flex-col">
                    <div className="w-[36%] rounded-tl rounded-tr px-[35px] pb-3.5 pt-[27px] text-left text-base border-gray-600_01 border border-solid text-gray-900_01 sm:px-5 sm:pt-5">
                      Istanbul, Turkey
                    </div>
                    <DatePicker
                      name="calendar"
                      placeholder={`Fri 12/2`}
                      className="flex flex-grow gap-[35px] rounded-tl rounded-tr bg-transparent px-3.5 pb-3 pt-6 text-left text-base border-gray-600_01 border border-solid text-gray-900_01 sm:pt-5"
                    />
                    <DatePicker
                      name="calendar_one"
                      placeholder={`Sun 12/4`}
                      className="flex flex-grow gap-[35px] rounded-tl rounded-tr bg-transparent px-3.5 pb-3 pt-6 text-left text-base border-gray-600_01 border border-solid text-gray-900_01 sm:pt-5"
                    />
                    <SelectBox
                      shape="round"
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_900.svg"
                          alt="arrow_down"
                          className="h-[24px] w-[24px]"
                        />
                      }
                      getOptionLabel={(e: OptionProps) => (
                        <>
                          <div className="flex items-center">
                            <Img
                              src="images/img_user_gray_900_24x24.svg"
                              alt="User"
                              className="h-[24px] w-[24px]"
                            />
                            <span>{e.label}</span>
                          </div>
                        </>
                      )}
                      name="user"
                      placeholder={`Rooms & Guests`}
                      options={dropDownOptions}
                      className="flex-grow text-gray-900_01 border-gray-600_01 border border-solid sm:px-5 sm:pt-5"
                    />
                  </div>
                  <div className="mb-2 mt-9 flex gap-6 self-end">
                    <div className="flex items-center gap-[3px] py-3.5">
                      <Img
                        src="images/img_add_outline.svg"
                        alt="addoutline_one"
                        className="h-[16px] w-[16px]"
                      />
                      <Text as="p">Add Promo Code</Text>
                    </div>
                    <Button
                      size="3xl"
                      variant="fill"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_building.svg"
                          alt="building"
                          className="h-[16px] w-[16px]"
                        />
                      }
                      className="min-w-[142px] gap-1 font-medium"
                    >
                      Show Places
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-20 flex items-start justify-between gap-5 self-stretch p-[5px]">
                <Text
                  size="5xl"
                  as="p"
                  className="mb-1 ml-[98px] !font-abel !text-black-900 md:ml-0"
                >
                  My Hotels
                </Text>
                <a href="add-hotel" target="_blank" rel="noreferrer">
                  <Button
                    size="md"
                    shape="round"
                    className="mr-[94px] mt-3.5 min-w-[150px] font-medium md:mr-0 sm:px-5"
                  >
                    Add Hotel
                  </Button>
                </a>
              </div>
              <div className="mx-auto mt-[33px] flex w-full max-w-[1232px] items-center justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[40%] flex-col gap-4 md:w-full">
                  <div className="flex items-start gap-4 sm:flex-col">
                    <Text size="xl" as="p" className="!font-abel">
                      CVK Park Bosphorus Hotel Istanbul
                      {/* {hotel.name} */}
                    </Text>
                    <div className="mt-[5px] flex w-[33%] items-center gap-1 sm:w-full">
                      <RatingBar
                        // value={Math.round({hotel.starRating})}
                        value={Math.round(4.2)}
                        isEditable={true}
                        size={16}
                        className="flex justify-between"
                      />
                      <Text size="xs" as="p">
                        {/* {Math.round({hotel.starRating})} Star Hotel */}
                        {Math.round(4.2)} Star Hotel
                        {/* {hotel.starRating} Star Hotel */}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5">
                    <div className="flex">
                      <Img
                        src="images/img_location.svg"
                        alt="location_one"
                        className="h-[18px] w-[18px] self-start"
                      />
                      <Text as="p" className="self-end !text-gray-900_bf">
                        Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                        {/* {hotel.city}, {hotel.country} */}
                      </Text>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <Text
                        size="xl"
                        as="h2"
                        className="text-left !text-black-A100 font-bold "
                      >
                        <span className="text-[20px] text-black-A100">
                          {/* {hotel.starRating} */}
                          4.2
                        </span>
                      </Text>
                      <Text size="xs" as="p" className="mb-[7px] self-end">
                        {/* Very Good{" "} */}
                        {/* {getRatingMessage({hotel.starRating})}{" "} */}
                        {getRatingMessage(4.2)}{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-[12%] flex-col items-end gap-3.5 md:w-full">
                  <Text size="xl" as="h2" className="text-right !text-red-A100">
                    <span className="text-[32px] text-red-A100">
                      {/* ${hotel.pricePerNight} */}
                      $240
                    </span>
                    <span className="text-sm text-red-A100">/night</span>
                  </Text>
                  <a
                    href="/edit-hotel/${hotel._id}"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      size="3xl"
                      shape="square"
                      className="w-full font-semibold text-gray-900 sm:px-5"
                    >
                      View Details
                    </Button>
                  </a>
                </div>
              </div>
              <div className="mx-auto mt-[70px] flex w-full max-w-[1232px] gap-2 md:flex-col md:p-5">
                <Img
                  src="images/img_rectangle_3_550x612.png"
                  alt="image"
                  className="h-[550px] w-[50%] rounded-bl-[12px] rounded-tl-[12px] object-cover md:w-full"
                />
                <div className="flex w-[50%] flex-col gap-2 md:w-full">
                  <div className="flex gap-2 md:flex-col">
                    <Img
                      src="images/img_rectangle_5.png"
                      alt="image_one"
                      className="h-[271px] w-[50%] object-cover md:w-full"
                    />
                    <Img
                      src="images/img_rectangle_6.png"
                      alt="image_two"
                      className="h-[271px] w-[50%] rounded-tr-[12px] object-cover md:w-full"
                    />
                  </div>
                  <div className="flex gap-2 md:flex-col">
                    <Img
                      src="images/img_rectangle_5_271x302.png"
                      alt="image_three"
                      className="h-[271px] w-[50%] object-cover md:w-full"
                    />
                    <Img
                      src="images/img_rectangle_6_271x302.png"
                      alt="image_four"
                      className="h-[271px] w-[50%] rounded-br-[12px] object-cover md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[1232px] flex-col items-start gap-[45px] md:p-5">
              <div className="h-px w-full self-stretch bg-gray-900_3f" />
              <div className="flex flex-col items-start gap-[15px] self-stretch">
                <Text size="lg" as="p" className="!font-abrilfatface">
                  Overview
                </Text>
                <Text size="md" as="p" className="!text-gray-900_bf">
                  Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
                  Bosphorus Hotel Istanbul has risen from the ashes of the
                  historic Park Hotel, which also served as Foreign Affairs
                  Palace 120 years ago and is hosting its guests by assuming
                  this hospitality mission. With its 452 luxurious rooms and
                  suites, 8500 m2 SPA and fitness area, 18 meeting rooms
                  including 4 dividable ones and 3 terraces with Bosphorus view,
                  Istanbuls largest terrace with Bosphorus view (4500 m2) and
                  latest technology infrastructure, CVK Park Bosphorus Hotel
                  Istanbul is destined to be the popular attraction point of the
                  city. Room and suite categories at various sizes with city and
                  Bosphorus view, as well as 68 separate luxury suites, are
                  offered to its special guests as a wide variety of selection.
                  {/* {hotel.description} */}
                </Text>
              </div>
              <div className="flex w-[71%] gap-4 md:w-full md:flex-col">
                <div className="flex w-full flex-col items-start gap-8 rounded-[12px] bg-teal-200 p-[15px]">
                  <Text size="2xl" as="p" className="!font-abel">
                    4.2
                    {/* {hotel.starRating} */}
                  </Text>
                  <div className="flex flex-col items-start gap-0.5">
                    <Text as="h2" className="!font-bold">
                      Very good
                    </Text>
                    <Text as="p">371 reviews</Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-[62px] rounded-[12px] border border-solid border-teal-200 p-3.5 sm:gap-[31px]">
                  <Img
                    src="images/img_bookmark.svg"
                    alt="bookmark_one"
                    className="h-[32px] w-[32px]"
                  />
                  <Text size="md" as="p">
                    Near park
                  </Text>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-[62px] rounded-[12px] border border-solid border-teal-200 p-3.5 sm:gap-[31px]">
                  <Img
                    src="images/img_bookmark.svg"
                    alt="bookmark_one"
                    className="h-[32px] w-[32px]"
                  />
                  <Text size="md" as="p">
                    Near nightlife
                  </Text>
                </div>
                <div className="flex w-full flex-col items-start gap-[61px] rounded-[12px] border border-solid border-teal-200 p-[15px] sm:gap-[30px]">
                  <Img
                    src="images/img_bookmark.svg"
                    alt="bookmark_one"
                    className="h-[32px] w-[32px]"
                  />
                  <Text size="md" as="p">
                    Near theater
                  </Text>
                </div>
                <div className="flex w-full flex-col items-start gap-[61px] rounded-[12px] border border-solid border-teal-200 p-[15px] sm:gap-[30px]">
                  <Img
                    src="images/img_bookmark.svg"
                    alt="bookmark_one"
                    className="h-[32px] w-[32px]"
                  />
                  <Text size="md" as="p">
                    Clean Hotel
                  </Text>
                </div>
              </div>
              <div className="flex w-[58%] flex-col items-start gap-[30px] md:w-full">
                <Text size="lg" as="p" className="!font-mitr">
                  Facilities
                </Text>
                <div className="mb-[21px] flex gap-[300px] self-stretch md:flex-row sm:flex-col">
                  <div className="flex flex-col items-start gap-6">
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_mdi_pool.svg"
                        alt="outdoor_pool"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p" className="self-end">
                        Outdoor pool
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_mdi_pool.svg"
                        alt="indoor_pool_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p" className="self-end">
                        Indoor pool
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_material_symbols_spa_rounded.svg"
                        alt="image"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p" className="self-end">
                        Spa and wellness center
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_ic_round_restaurant.svg"
                        alt="restaurant_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p">
                        Restaurant
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_material_symbol.svg"
                        alt="room_service"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p">
                        Room service
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-6">
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_maki_fitness_centre.svg"
                        alt="makifitness_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p">
                        Fitness center
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_ion_wine.svg"
                        alt="ionwine_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p" className="self-end">
                        Bar/Lounge
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_wifi.svg"
                        alt="wifi_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p">
                        Free Wi-Fi
                      </Text>
                    </div>
                    <div className="flex items-center gap-2">
                      <Img
                        src="images/img_cafe.svg"
                        alt="breakfast_one"
                        className="h-[24px] w-[24px]"
                      />
                      <Text size="md" as="p">
                        Tea/coffee machine
                      </Text>
                    </div>
                    <Text as="h3" className="!text-red-A100">
                      +24 more
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="mt-[50px]">
            <div className="rounded-[30px] shadow-sm">
              <div className="flex justify-center bg-teal-200 px-14 py-[63px] md:p-5">
                <div className="mx-auto mt-[153px] flex w-full max-w-[1232px] items-center justify-between gap-5 md:flex-col">
                  <div className="flex w-[10%] flex-col gap-6 md:w-full">
                    <Img
                      src="images/img_logo_white_a700.svg"
                      alt="logo_three"
                      className="h-[39px]"
                    />
                    <div className="flex gap-3 self-start">
                      <Img
                        src="images/img_akar_icons_facebook_fill.svg"
                        alt="akaricons_one"
                        className="h-[20px] w-[20px]"
                      />
                      <Img
                        src="images/img_akar_icons_twitter_fill_gray_900.svg"
                        alt="akaricons_three"
                        className="h-[20px] w-[20px]"
                      />
                      <Img
                        src="images/img_akar_icons_youtube_fill.svg"
                        alt="akaricons_five"
                        className="h-[20px] w-[20px]"
                      />
                      <Img
                        src="images/img_ant_design_instagram_filled_gray_900.svg"
                        alt="antdesign_one"
                        className="h-[20px] w-[20px]"
                      />
                    </div>
                  </div>
                  <div className="flex w-[79%] items-center justify-center gap-6 md:w-full md:flex-col">
                    <div className="flex w-full flex-col items-start gap-[15px]">
                      <Text
                        size="md"
                        as="p"
                        className="!font-abel !font-normal"
                      >
                        Our Destinations
                      </Text>
                      <ul className="flex flex-col items-start gap-2.5">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Canada
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Alaksa
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              France
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Iceland
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4">
                      <Text
                        size="md"
                        as="p"
                        className="!font-abel !font-normal"
                      >
                        Our Activities
                      </Text>
                      <ul className="flex flex-col items-start gap-[11px]">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Northern Lights
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Cruising & sailing
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Multi-activities
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Kayaing
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex w-full flex-col items-start gap-3.5">
                      <Text
                        size="md"
                        as="p"
                        className="!font-abel !font-normal"
                      >
                        Travel Blogs
                      </Text>
                      <ul className="flex flex-col items-start gap-[11px]">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Bali Travel Guide
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Sri Lanks Travel Guide
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Peru Travel Guide
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Bali Travel Guide
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4 self-start">
                      <Text
                        size="md"
                        as="p"
                        className="!font-abel !font-normal"
                      >
                        About Us
                      </Text>
                      <ul className="flex flex-col items-start gap-[9px]">
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Our Story
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Text as="p" className="!text-gray-900_b2">
                              Work with us
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start self-start">
                      <Text
                        size="md"
                        as="p"
                        className="!font-abel !font-normal"
                      >
                        Contact Us
                      </Text>
                      <a href="#" className="mt-[17px]">
                        <Text as="p" className="!text-gray-900_b2">
                          Our Story
                        </Text>
                      </a>
                      <a href="#" className="mt-[9px]">
                        <Text as="p" className="!text-gray-900_b2">
                          Work with us
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
        {/* ))} */}
      </div>
    </>
  );
}
