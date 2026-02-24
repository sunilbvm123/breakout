"use client";

import React, { useEffect, useState } from "react";
import InnerPageBanner from "@/components/InnerPageBanner";
import Image from "next/image";
import enc from "@/images/enc.svg";
import mBox from "@/images/m-box.png";
import HmTextSec from "@/components/home/HmTextSec";
import icon1 from "@/images/icon1.svg";
import icon2 from "@/images/icon2.svg";
import icon3 from "@/images/icon3.svg";
import icon4 from "@/images/icon4.svg";
import illus3 from "@/images/illus3.svg";
import hmIllus from "@/images/bottom-illus.svg";
import LogoSec from "@/components/LogoSec";
import EscapeRoomCard from "@/components/EscapeRoomCard";
import CounterBox from "@/components/CounterBox";
import VisitLocations from "@/components/VisitLocations";
import PeakExpSec from "@/components/PeakExpSec";
import BlogSlider from "@/components/BlogSlider";
import HomeContact from "@/components/home/HomeContact";
import locIcon from "@/images/loc-icon.svg";
import ReserveASlot from "@/components/ReserveASlot";
import fdImg1 from "@/images/fd-img1.png";
import Link from "next/link";
import wh from "@/images/wh.svg";
import locPlace from "@/images/loc-place.svg";
import BirthdayBanner from "@/components/BirthdayBanner";
import bdayIllus from "@/images/bday-illus.svg";

import whicon from "@/images/wh-icon.svg";
import phicon from "@/images/phone.svg";
import mailicon from "@/images/mail-icon.svg";

import bdayImg1 from "@/images/kid1.jpg";
import bdayImg2 from "@/images/kid2.jpg";
import bdayImg3 from "@/images/kid3.jpg";
import bdayImg4 from "@/images/kid4.jpg";
import bdayImg5 from "@/images/kid5.jpg";
import bdayImg6 from "@/images/kid6.jpg";
import bdayImg7 from "@/images/kid7.jpg";
import partyillus from "@/images/party-illus.svg";
import BirthdayGetInTouch from "@/components/BirthdayGetInTouch";
import PartySlider from "@/components/PartySlider";
import ReadyToGoPlans from "@/components/ReadyToGoPlans";
import Videotestimonials from "@/components/Videotestimonials";
import FaqSection from "@/components/FaqSection";

import nightIllus from "@/images/night-illus.svg";

import bdayBanner from "@/images/kid-banner.jpg";

import theme1 from "@/images/theme1.jpg";
import theme2 from "@/images/theme2.jpg";
import theme3 from "@/images/theme3.jpg";
import theme4 from "@/images/theme4.jpg";

import Packages from "@/components/Packages";

import PartyExpertCon from "@/components/PartyExpertCon";

import movieIllus from "@/images/movie-illus.svg";
import OurLocationSec from "@/components/OurLocationSec";
import TrustedSection from "@/components/TrustedSection";

import star from "@/images/star.svg";
// import party from "@/images/party.svg";
import happy from "@/images/happy.svg";

import PartyInclutions from "@/components/PartyInclutions";
import api from "@/app/helpers/api";
import GReviewSlider from "@/components/GReviewSlider";
import PhotographicStyledImage from "@/components/PhotographicStyledImage";
import PartyGetInTouch from "@/components/PartyGetInTouch";


const page = () => {
  const [loading, setLoading] = useState(true);
  const hmText =
    "At our one-of-a-kind birthday parties, your <span>loved one…Enjoys surprises,</span> gets crazy, has fun, creates memories.In short, they <span>feel truly</span> special – and so do you.Let’s make this birthday unforgettable—together!";

  const bdays = [
    {
      image: bdayImg1,
      title: "Party Fun",
    },
    {
      image: bdayImg2,
      title: "Surprises",
    },
    {
      image: bdayImg3,
      title: "Mysteries",
    },
    {
      image: bdayImg4,
      title: "Cakes",
    },
    {
      image: bdayImg5,
      title: "Delectable Treats",
    },
    {
      image: bdayImg6,
      title: "Photos & Videos",
    },
    {
      image: bdayImg7,
      title: "Return Gifts",
    },
  ];

  const themes = [
    {
      image: theme1,
      title: "Keep it simple - Classic",
    },
    {
      image: theme2,
      title: "<span>Go Premium</span> - Wizard",
    },
    {
      image: theme3,
      title: "<span>Go Premium</span> - Mystery",
    },
    {
      image: theme4,
      title: "<span>Go Premium</span> - Your Theme",
    },
  ];

  const trustedCon = [
    {
      title: "Joyful Reviews",
      number: "7.5k +",
      icon: star,
    },
    {
      title: "Parties Hosted",
      number: "1.6k +",
      icon: star,
    },
    {
      title: "Happy Faces",
      number: "50k +",
      icon: happy,
    },
  ];

  const [data, setData] = useState(null);
  console.log("party_inclustion_data", data)
  const [birthdayList, setBirthdayList] = useState(null);




  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("brithday_party_birthday_of_my");

    if (shouldScroll === "true" && data) {
      // wait for DOM paint
      setTimeout(() => {
        const section = document.getElementById("brithday-party-birthday-of-my-section");

        if (section) {
          section.scrollIntoView({
            behavior: "auto", // use "smooth" if you want animation
            block: "start",
          });
        }

        // remove key so it doesn't auto-scroll again
        sessionStorage.removeItem("brithday_party_birthday_of_my");
      }, 1000);
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Run both APIs in parallel
        const [archiveRes, listRes] = await Promise.all([
          api.get("/birthday-archive"),
          api.get("/birthday-listing"),
        ]);

        setData(archiveRes?.data?.data || []);
        setBirthdayList(listRes?.data?.data || []);
      } catch (err) {
        console.error("Birthday API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {
        loading ? (
          <div id="preloader">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {data?.bannersection && (
              <BirthdayBanner hasBannerStars={true} data={data?.bannersection} />
            )}

            <div className="black-gr-div">
              {/* <section className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3 className="sec-head">
                  Want to make your kids birthday <span>special?</span>
                </h3>
              </div>
            </div>
          </div>
        </section> */}

              {data?.bannersection?.content && (
                <HmTextSec className="pt-80" text={data?.bannersection?.content} />
              )}
              {data?.bannersection?.note && (
                <div className="container">
                  <div className="bday-text-wrap">
                    <Link
                      href={`/founder-message/birthday-party`}
                      className="underline-big-text"
                    >
                      {data?.bannersection?.note}
                    </Link>
                  </div>
                </div>
              )}
              {data?.countersection && <TrustedSection className="pb-0" data={data?.countersection} />}

              {/* <section className="section-padding bday-count-sec pb-0">
          <div className="container">
            <div className="row row-gap-25">
              {[...Array(4)].map((_, index) => (
                <div className="col-lg-3 col-6" key={index}>
                  <CounterBox key={index} bday={true} />
                </div>
              ))}
            </div>
          </div>
        </section> */}

              <PartyExpertCon className="pt-80" data="birthday" />

              <Image src={bdayIllus} className={"illus-image"} alt="bday" />
            </div>

            <section className="pt-80 bday-sec" id="brithday-party-birthday-of-my-section">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h3 className="sec-head medium sm-head">
                      It’s a <span>birthday of my…</span>
                    </h3>
                  </div>
                </div>
                <div className="row row-gap-25">
                  {birthdayList?.length > 0 &&
                    birthdayList?.map((bd, index) => (
                      <div className="col-lg-4 col-12"
                        onClick={() => sessionStorage.setItem("brithday_party_birthday_of_my", true)} key={index}>
                        <Link
                          href={`/parties/birthday/${bd.slug}`}
                          className="location-card"
                        >
                          <div className="location-card-img">
                            {bd.image && (
                              <Image
                                src={bd.image}
                                alt={bd.title}
                                width={500}
                                height={500}
                              />
                            )}
                          </div>
                          <div className="location-card-content">
                            <h3>{bd.title}</h3>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </section>
            <div className="black-gr-div">
              {/* <BirthdayGetInTouch privacyLine={true} /> */}

              {/* <PartyGetInTouch noImage={true} privacyLine={true} /> */}

              {data?.partyinclusions && (
                <section
                  className="section-padding bday-sec pb-0"
                  style={{ overflow: "hidden" }}
                >
                  <div className="blog-slider-sec">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h3
                          className="sec-head medium sm-head"
                          dangerouslySetInnerHTML={{
                            __html: data?.partyinclusions?.heading,
                          }}
                        ></h3>
                      </div>
                    </div>

                    <PartyInclutions data={data?.partyinclusions} />
                  </div>
                </section>
              )}

              <Image src={bdayIllus} alt="illus3" className="illus-image" />
            </div>
            <div className="black-gr-div">
              {/* <PartyExpertCon /> */}
              {data?.slidersection && <ReadyToGoPlans
                className="sec-padding-top pb-0" data={data?.slidersection} />}
              {data?.googlereviews && (
                <div className="pt-80">
                  <GReviewSlider commonStars={false} data={data?.googlereviews} />
                </div>
              )}
              {data?.imagesection && (
                <>
                  <section className="section-padding">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12 text-center">
                          <h3
                            className="sec-head sm-head medium"
                            dangerouslySetInnerHTML={{
                              __html: "<span>Capturing</span> Happiness",
                            }}
                          ></h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="photographic-styled-image-container">
                          {data?.imagesection?.image1 && (
                            <PhotographicStyledImage
                              image={data?.imagesection?.image1}
                            />
                          )}
                          {data?.imagesection?.image2 && (
                            <PhotographicStyledImage
                              image={data?.imagesection?.image2}
                            />
                          )}
                          {data?.imagesection?.image3 && (
                            <PhotographicStyledImage
                              image={data?.imagesection?.image3}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              )}
              {data?.videotestimonials && (
                <Videotestimonials className="pt-0" data={data?.videotestimonials} />
              )}

              <Image src={movieIllus} className={"illus-image"} alt="bday" />
            </div>
            <div className="black-gr-div">
              {data?.faqsection && <FaqSection className="pt-80" data={data?.faqsection} />}
              <OurLocationSec className="sec-padding-top" title="About Our <span>Our Location</span>" />
              <BlogSlider className="pb-0" />
              <LogoSec className="pt-80 pb-0" title={"In the <span>News</span>"} />
              {data?.footersection && (
                <PartyGetInTouch
                  img={nightIllus}
                  data={data?.footersection}
                  noTextBottom={true}
                  privacyLine={true}
                />
              )}
            </div>
          </>
        )
      }

    </>
  );
};

export default page;
