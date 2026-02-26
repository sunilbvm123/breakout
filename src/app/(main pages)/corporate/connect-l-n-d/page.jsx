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
import bdayIllus from "@/images/bday-illus.svg";
import connectIllus from "@/images/connect-illus.svg";

import whicon from "@/images/wh-icon.svg";
import phicon from "@/images/phone.svg";
import mailicon from "@/images/mail-icon.svg";

import corpIllus from "@/images/money-illus.svg";

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
import peopleIllus from "@/images/contact-bottom-illus.svg";
import trophyIllus from "@/images/trophy-illus.svg";
import api from "@/helpers/api";
import GReviewCard from "@/components/GReviewCard";
import GReviewSlider from "@/components/GReviewSlider";
import TrustedSection from "@/components/TrustedSection";
import PhotographicStyledImage from "@/components/PhotographicStyledImage";
import ConnectContact from "@/components/ConnectContact";

const page = () => {
  const [corporate, setCorporate] = useState(null);
  console.log("sdjkfsdfhjdsf", corporate)
  const [brandLogos, setBrandLogos] = useState(null);
  const [innerList, setInnerList] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCorporate = async () => {
      try {
        setLoading(true);
        // All APIs run together (faster)
        const [corporateRes, brandRes, innerRes] = await Promise.all([
          api.get("corporate-ld-archive"),
          api.get("logos/brands"),
          api.get("corporate-ld-inner-list"),
        ]);

        setCorporate(corporateRes?.data?.data || []);
        setBrandLogos(brandRes?.data?.data || []);
        setInnerList(innerRes?.data?.data || []);
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCorporate();
  }, []);



  const handleFreeConsultationCardClick = (item) => {
    if (item.heading === "Free Consultation with Expert") {
      const section = document.getElementById("get-in-touch");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };


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
            <LogoSec
              className="pt-80"
              title="Brands that <span>loved M.A.G.I.C</span>"
              logos={brandLogos}
              link={false}
            />
            {corporate && corporate?.contentsection && (
              <HmTextSec text={corporate?.contentsection?.content} />
            )}

            <section className="">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="bday-text-wrap">
                      <p
                        className="underline-big-text"
                        dangerouslySetInnerHTML={{
                          __html: corporate?.contentsection?.note,
                        }}
                      />

                    </div>
                    {corporate?.contentsection?.footer && (
                      <p
                        className="sec-head medium-20 mt-5  "
                        dangerouslySetInnerHTML={{
                          __html: corporate.contentsection.footer,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>

            <div className="black-gr-div">
              {/* {corporate && corporate?.contentsection && (
          <section className="section-padding pb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3
                    className="sec-head"
                    dangerouslySetInnerHTML={{
                      __html: corporate?.contentsection?.heading,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        )} */}

              {corporate &&
                corporate?.googlereviews &&
                corporate?.googlereviews?.length > 0 && (
                  <div className="section-padding pb-0">
                  <GReviewSlider
                    commonStars={false}
                    data={corporate?.googlereviews}
                  />
                  </div>
                )}

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

              {/* <PartyExpertCon /> */}

              <Image src={connectIllus} className={"illus-image"} alt="bday" />
            </div>

            <div className="black-gr-div">
              {innerList && innerList?.length > 0 && (
                <section className="sec-padding-top bday-sec">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h3
                          className="sec-head medium sm-head"
                          dangerouslySetInnerHTML={{
                            __html:
                              "<span>What problem</span> would you like to solve?",
                          }}
                        />
                      </div>
                    </div>
                    <div className="row row-gap-25">
                      {/* {JSON.stringify(innerList)} */}
                      {innerList &&
                        innerList?.length > 0 &&
                        innerList?.map((bd, index) => (
                          <div className="col-lg-4 col-12" key={index}>
                            <Link
                              href={`/corporate/connect-l-n-d/${bd?.slug}`}
                              className="location-card"
                            >
                              <div className="location-card-img">
                                {bd?.bannersection?.image && (
                                  <Image
                                    src={bd?.bannersection?.image}
                                    alt={bd?.bannersection?.heading}
                                    width={700}
                                    height={700}
                                  />
                                )}
                              </div>
                              <div className="location-card-content">
                                <h3 dangerouslySetInnerHTML={{ __html: bd.title }} />
                              </div>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </section>
              )}
              {corporate && corporate?.slidersection && (
                <AddOnsSlider className="pb-0 section-padding" data={corporate?.slidersection} />
              )}
              <PartyExpertCon title="<span>Add MAGIC</span> to your workplace" />

              <Image src={corpIllus} alt="illus3" className="illus-image" />
            </div>
            <div className="black-gr-div">
              {corporate?.keyresourcessection && (
                <section className="sec-padding-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h3
                          className="sec-head sm-head medium"
                          dangerouslySetInnerHTML={{
                            __html: corporate?.keyresourcessection?.heading,
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row row-gap-25">
                          {corporate?.keyresourcessection?.images &&
                            corporate?.keyresourcessection?.images?.length > 0 &&
                            corporate?.keyresourcessection?.images?.map(
                              (item, index) => (
                                <div className="col-lg-3 col-12" key={index}>
                                  <div className="blog-card" onClick={() => handleFreeConsultationCardClick(item)}>
                                    <div className="blog-card-img">
                                      {item.image && (
                                        <Image
                                          src={item.image}
                                          alt={item.heading}
                                          width={500}
                                          height={500}
                                        />
                                      )}
                                    </div>
                                    <div className="blog-card-content">
                                      <h3 style={{ fontSize: "16px", }}
                                        dangerouslySetInnerHTML={{
                                          __html: item.heading,
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* <PartyExpertCon /> */}

              {corporate && corporate?.imagesection && (
                <>
                  <section className="section-padding pb-0">
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

              {corporate &&
                corporate?.videotestimonials &&
                corporate?.videotestimonials?.length > 0 && (
                  <Videotestimonials data={corporate?.videotestimonials} />
                )}
              <OurLocationSec className="section-padding" title="Our <span>Locations</span>" />
              <FaqSection data={corporate?.faqsection} />
              <div id="get-in-touch">
                <ConnectContact
                  noTextBottom={false}
                  privacyLine={true}
                  noImage={true}
                />
              </div>

              <BlogSlider className="pb-0" />
              <LogoSec className="pb-0 pt-80" title="In The <span>News</span>" />
              {corporate && corporate?.footersection && (
                <section className="section-padding pb-0">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h3
                          className="sec-head medium sm-head"
                          dangerouslySetInnerHTML={{
                            __html: corporate?.footersection?.heading,
                          }}
                        />
                        <div
                          className="para medium-20 mt-3"
                          dangerouslySetInnerHTML={{
                            __html: corporate?.footersection?.content,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              )}
              <Image src={peopleIllus} className={"illus-image"} alt="bday" />
            </div>
          </>
        )
      }

    </>
  );
};

export default page;
