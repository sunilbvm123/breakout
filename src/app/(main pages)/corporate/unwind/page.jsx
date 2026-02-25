"use client";
import React, { useState, useEffect } from "react";
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
// import bdayIllus from "@/images/bday-illus.svg";
import bdayIllus from "@/images/illus-home.svg";

import whicon from "@/images/wh-icon.svg";
import phicon from "@/images/phone.svg";
import mailicon from "@/images/mail-icon.svg";

import corpIllus from "@/images/corp-illus.svg";

import c1 from "@/images/c1.jpg";
import c2 from "@/images/c2.jpg";
import c3 from "@/images/c3.jpg";
import c4 from "@/images/c4.jpg";
import c5 from "@/images/c5.jpg";
import c6 from "@/images/c6.jpg";
import partyillus from "@/images/party-illus.svg";
import BirthdayGetInTouch from "@/components/BirthdayGetInTouch";
import PartySlider from "@/components/PartySlider";
import ReadyToGoPlans from "@/components/ReadyToGoPlans";
import Videotestimonials from "@/components/Videotestimonials";
import FaqSection from "@/components/FaqSection";

import nightIllus from "@/images/night-illus.svg";

import bdayBanner from "@/images/kid-banner.jpg";

import cic1 from "@/images/cic1.svg";
import cic2 from "@/images/cic2.svg";
import cic3 from "@/images/cic3.svg";
import cic4 from "@/images/cic4.svg";
import cic5 from "@/images/cic5.svg";

import cx1 from "@/images/xc1.svg";
import cx2 from "@/images/xc2.svg";
import cx3 from "@/images/xc3.svg";
import cx4 from "@/images/xc4.svg";
import cx5 from "@/images/xc5.svg";

import Packages from "@/components/Packages";

import PartyExpertCon from "@/components/PartyExpertCon";

import movieIllus from "@/images/movie-illus.svg";
import OurLocationSec from "@/components/OurLocationSec";
import coupleIllus from "@/images/couple-illus.svg";
import loveIllus from "@/images/love-illus.svg";
import AddOnsSlider from "@/components/AddOnsSlider";
import BreakoutXForm from "@/components/BreakoutXForm";
import peopleIllus from "@/images/people-illus.svg";
import trophyIllus from "@/images/trophy-illus.svg";
import api from "@/helpers/api";
import GReviewCard from "@/components/GReviewCard";
import GReviewSlider from "@/components/GReviewSlider";
import TrustedSection from "@/components/TrustedSection";
import PhotographicStyledImage from "@/components/PhotographicStyledImage";
import WordByWordAnimation from "@/helpers/WordByWordAnimation";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";

const page = () => {
  const [corporate, setCorporate] = useState([]);
  console.log("corporate_corporate_corporate", corporate)
  const [brandLogos, setBrandLogos] = useState(null);
  const [loading, setLoading] = useState(true);
  const { gettncs } = useGlobalContext();
  const corporateTnc = gettncs?.find(
    (item) => item.reference == "corporate"
  );
  
  console.log("Birthday T&C:", corporateTnc);

  // useEffect(() => {
  //   const fetchCorporate = async () => {
  //     const response = await api.get("corporate-unwind-archive");
  //     setCorporate(response.data.data);
  //   };
  //   fetchCorporate();
  //   const fetchBrandLogos = async () => {
  //     const response = await api.get("logos/brands");
  //     setBrandLogos(response.data.data);
  //   };
  //   fetchBrandLogos();
  // }, []);

  useEffect(() => {
    const fetchCorporate = async () => {
      try {
        setLoading(true);

        // Call both APIs in parallel
        const [corporateRes, brandRes] = await Promise.all([
          api.get("corporate-unwind-archive"),
          api.get("logos/brands"),
        ]);

        setCorporate(corporateRes?.data?.data || []);
        setBrandLogos(brandRes?.data?.data || []);
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCorporate();
  }, []);

  const headingTemplate =
    corporate?.contentsection?.heading ||
    "Unwind, Collaborate, and Elevate: <span>Corporate Retreats</span>";
  const router = useRouter();

  // const animatedHeading = WordByWordAnimation(headingTemplate);

  return (
    <>
      {
        loading ? (
          <div id="preloader">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {corporate && corporate?.bannersection && (
              <InnerPageBanner banner={corporate?.bannersection} bdayInner={true} />
            )}

            <div className="black-gr-div">
              {corporate && corporate?.contentsection && (
                <section className="pt-80">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        {/* <h3
                    className="sec-head"
                    dangerouslySetInnerHTML={{
                      __html: corporate?.contentsection?.heading,
                    }}
                  >
                    {animatedHeading}
                   
                  </h3> */}
                        <WordByWordAnimation className="sec-head mb-0" headingTemplate={headingTemplate} />
                      </div>
                    </div>
                  </div>
                </section>
              )}
              {corporate && corporate?.googlereviews && (
                <div className="pt-80">
                  <GReviewSlider commonStars={false} data={corporate?.googlereviews} />
                </div>
              )}
              {corporate?.contentsection?.content && (
                <HmTextSec className="pt-80" text={corporate?.contentsection?.content} />
              )}

              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 ">
                      <div className="bday-text-wrap">
                        <p
                          className="underline-big-text"
                          dangerouslySetInnerHTML={{
                            __html: corporate?.contentsection?.note,
                          }}
                          onClick={() =>
                            router.push("/founder-message/corporate-page")
                          }
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <p
                        className="sec-head medium-20 pt-80"
                        dangerouslySetInnerHTML={{
                          __html: corporate?.contentsection?.footer,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </section>
              {corporate && corporate?.countersection && (
                <TrustedSection className="pb-0" data={corporate?.countersection} />
              )}
              {/* 
        <section className="section-padding bday-count-sec pb-0">
          <div className="container">
            <div className="row row-gap-25">
              {[...Array(4)].map((_, index) => (
                <div className="col-lg-3 col-6" key={index}>
                  <CounterBox key={index} bday={false} />
                </div>
              ))}
            </div>
          </div>
        </section> */}

              <LogoSec
                className="pb-0 pt-80"
                title="Brands <span>Hosted</span>"
                link={false}
                logos={brandLogos}
              />

              <PartyExpertCon className="pt-80" data="corporate_unwind" />

              <Image src={bdayIllus} className={"illus-image"} alt="bday" />
            </div>

            <div className="black-gr-div">
              {corporate && corporate?.imagecardsection && (
                <section className="sec-padding-top bday-sec">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h3
                          className="sec-head medium sm-head"
                          dangerouslySetInnerHTML={{
                            __html: corporate?.imagecardsection?.heading,
                          }}
                        />
                      </div>
                    </div>
                    <div className="row row-gap-25">
                      {corporate?.imagecardsection?.images &&
                        corporate?.imagecardsection?.images?.length > 0 &&
                        corporate?.imagecardsection?.images?.map((bd, index) => (
                          <Link href={bd.game_link} target="_blank" className="col-lg-4 col-12" key={index}>
                          <div  >
                            <div className="location-card">
                              <div className="location-card-img">
                                {bd.image && (
                                  <Image
                                    src={bd.image}
                                    width={800}
                                    height={800}
                                    alt={bd.heading}
                                  />
                                )}
                              </div>
                              <div className="location-card-content">
                                <h3
                                  dangerouslySetInnerHTML={{ __html: bd.heading }}
                                />
                              </div>
                            </div>
                          </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </section>
              )}
              {corporate && corporate?.addonssection && (
                <AddOnsSlider className="pt-80" data={corporate?.addonssection} />
              )}
              {corporate && corporate?.packagesection && (
                <Packages className="pb-0" packages={corporate?.packagesection} data={corporateTnc} category="corporate"/>
              )}
              {/* <BreakoutXForm className="pb-0"/> */}
              <div id="breakout-form">
                <BreakoutXForm className="pb-0" />
              </div>

              <Image src={corpIllus} alt="illus3" className="illus-image" />
            </div>
            <div className="black-gr-div">
              {corporate && corporate?.whyussection && (
                <section className="why-us sec-padding-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h3
                          className="sec-head medium sm-head"
                          dangerouslySetInnerHTML={{
                            __html: corporate?.whyussection?.heading,
                          }}
                        />
                      </div>
                    </div>
                    <div className="why-choose-grid grid-5">
                      {corporate?.whyussection?.images &&
                        corporate?.whyussection?.images?.length > 0 &&
                        corporate?.whyussection?.images?.map((item, index) => (
                          <div className="why-card" key={index}>
                            {item.image && (
                              <Image
                                src={item.image}
                                width={100}
                                height={100}
                                alt={item.heading}
                              />
                            )}
                            <h3 dangerouslySetInnerHTML={{ __html: item.heading }} />
                          </div>
                        ))}
                    </div>
                  </div>
                </section>
              )}

              {corporate && corporate?.comparesection && (
                <section className="section-padding compare-section pb-0">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h3
                          className="sec-head medium sm-head"
                          dangerouslySetInnerHTML={{
                            __html: corporate?.comparesection?.heading,
                          }}
                        />
                      </div>
                    </div>
                    <div className="row row-gap-25">
                      <div className="col-lg-6 col-12">
                        <div className="vs-col">
                          <div className="vs-col-card">
                            <h3>
                              {corporate?.comparesection?.left_heading ||
                                "Any Other Place"}
                            </h3>
                          </div>
                          <div className="vs-col-card">
                            <ul>
                              {corporate?.comparesection?.content &&
                                corporate?.comparesection?.content.map(
                                  (item, idx) => <li key={idx}>{item.left_point}</li>
                                )}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="vs-col break">
                          <div className="vs-col-card">
                            <h3>
                              {corporate?.comparesection?.right_heading ||
                                "At Breakout"}
                            </h3>
                          </div>
                          <div className="vs-col-card">
                            <ul>
                              {corporate?.comparesection?.content &&
                                corporate?.comparesection?.content.map(
                                  (item, idx) => (
                                    <li key={idx}>
                                      {item.right_image && (
                                        <Image
                                          src={item.right_image}
                                          alt="compare-right-img"
                                          width={40}
                                          height={40}
                                          style={{
                                            marginRight: 12,
                                            verticalAlign: "middle",
                                          }}
                                        />
                                      )}
                                      <span>{item.right_point}</span>
                                    </li>
                                  )
                                )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* <PartyExpertCon /> */}

              {corporate && corporate?.imagesection && (
                <>
                  <section className="section-padding capture-sec pb-0">
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
                          {corporate?.imagesection?.image1 && (
                            <PhotographicStyledImage
                              image={corporate?.imagesection?.image1}
                            />
                          )}
                          {corporate?.imagesection?.image2 && (
                            <PhotographicStyledImage
                              image={corporate?.imagesection?.image2}
                            />
                          )}
                          {corporate?.imagesection?.image3 && (
                            <PhotographicStyledImage
                              image={corporate?.imagesection?.image3}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              )}

              {corporate && corporate?.videotestimonials && (
                <Videotestimonials data={corporate?.videotestimonials} />
              )}
              <Image src={corpIllus} className={"illus-image"} alt="bday" />
            </div>
            <div className="black-gr-div">
              <OurLocationSec className="sec-padding-top" title="About Our <span>Our Location</span>" />
              {corporate && corporate?.faqsection && (
                <FaqSection className="pb-0 section-padding" data={corporate?.faqsection} />
              )}

              <BlogSlider className="pb-0" />
              <LogoSec className="pt-80 pb-0" title="In the <span>News</span>" />

              <BirthdayGetInTouch
                img={trophyIllus}
                privacyLine={true}
                noTextBottom={true}
                textData={corporate?.footersection}
              />
            </div>
          </>
        )
      }

    </>
  );
};

export default page;
