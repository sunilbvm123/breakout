"use client";
import React, { useEffect, useState } from "react";
import InnerPageBanner from "@/components/InnerPageBanner";
import Image from "next/image";

import HmTextSec from "@/components/home/HmTextSec";

import LogoSec from "@/components/LogoSec";

import BlogSlider from "@/components/BlogSlider";

import bdayIllus from "@/images/bday-illus.svg";

import ReadyToGoPlans from "@/components/ReadyToGoPlans";
import Videotestimonials from "@/components/Videotestimonials";
import FaqSection from "@/components/FaqSection";

import nightIllus from "@/images/night-illus.svg";

import Packages from "@/components/Packages";

import PartyExpertCon from "@/components/PartyExpertCon";

import OurLocationSec from "@/components/OurLocationSec";
import coupleIllus from "@/images/couple-illus.svg";
import loveIllus from "@/images/love-illus.svg";

import api from "@/helpers/api";
import TrustedSection from "@/components/TrustedSection";
import GReviewSlider from "@/components/GReviewSlider";
import PhotographicStyledImage from "@/components/PhotographicStyledImage";
import bachelorIllus from "@/images/bachelor-illus.png";
import PartyGetInTouch from "@/components/PartyGetInTouch";
import WordByWordAnimation from "@/helpers/WordByWordAnimation";
import useScrollToTop from "@/helpers/useScrollToTop";
import HomeContact from "@/components/home/HomeContact";
import { useGlobalContext } from "@/context/GlobalContext";

const page = () => {
  // Remove scrollTo(0,0) on mount to avoid scroll jump issue
  const [party, setParty] = useState(null);
  console.log("ksdlfgdjkshgjkdfhgkhdf",party)
  const [pageLoading, setPageLoading] = useState(true);
  const { gettncs } = useGlobalContext();

  const birthdayTnc = gettncs?.find(
    (item) => item.reference == "birthdays"
  );

  console.log("Birthday T&C:", birthdayTnc);
  useScrollToTop();

  useEffect(() => {
    const fetchParty = async () => {
      const response = await api.get(`party/bachelor-archive`);
      setParty(response.data.data);
      setPageLoading(false);
    };
    fetchParty();
  }, []);

  const hmText =
    "At Breakout®, you can...<br />have crazy fun in our <span>cinematic escape room</span>, <br />create lifelong memories with unique <span>party celebrations</span>,<br />enhance <span>team bonding</span>, <span>engagement</span>, & <span>productivity</span> <br/>through our gamified corporate programs.<br /><br />So, do yourself a favour and breakout from the ordinary!";

  const headingTemplate =
    party?.countersection?.heading ||
    "Make ‘your love’ feel<br /><span>special! | Farewell | One-of-a-kind? | Memories | Memories Last Forever</span>";

  // const animatedHeading = WordByWordAnimation(headingTemplate);

  if (pageLoading) {
    return <div className="loading-container"></div>;
  }

  return (
    <>
      {party && party?.bannersection && (
        <InnerPageBanner banner={party?.bannersection} bdayInner={true} />
      )}

      <div className="black-gr-div">
        {party && party?.countersection && (
          <section className="section-padding pb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  {/* <h3
                    className="sec-head"
                    dangerouslySetInnerHTML={{
                      __html:
                        party?.countersection?.heading ||
                        "Make ‘your love’ feel <span>special!</span>",
                    }}
                  >
                    {animatedHeading}
                  </h3> */}
                  <WordByWordAnimation headingTemplate={headingTemplate} />
                </div>
              </div>
            </div>
          </section>
        )}
        {/* <br />
        <br />
        <br />
        <br />
        <br /> */}
        {party && party?.countersection && (
          <HmTextSec text={party?.countersection?.content} />
        )}
        {/* <HmTextSec text={hmText} /> */}
        {party && party?.countersection && party?.countersection?.note && (
          <div className="container">
            <div className="bday-text-wrap">
              <p
                className="underline-big-text"
                dangerouslySetInnerHTML={{
                  __html: party?.countersection?.note,
                }}
              ></p>
            </div>
          </div>
        )}

        {party && party?.countersection && (
          <TrustedSection data={party?.countersection} removeHeading={true} />
        )}

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

        {party && party?.imagecardsection && (
          <section className="bday-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3
                    className="sec-head medium sm-head"
                    dangerouslySetInnerHTML={{
                      __html:
                        party?.imagecardsection?.heading || "Is it party for a",
                    }}
                  />
                </div>
              </div>
              <div className="row row-gap-25 justify-content-center">
                {party?.imagecardsection?.images &&
                  party?.imagecardsection?.images?.length > 0 &&
                  party?.imagecardsection?.images?.map((item, index) => (
                    <div className="col-lg-4 col-12" key={index}>
                      <div className="location-card">
                        <div className="location-card-img">
                          {item.image && (
                            <Image
                              src={item.image}
                              width={500}
                              height={500}
                              alt={item.heading}
                            />
                          )}
                        </div>
                        <div className="location-card-content">
                          <h3
                            dangerouslySetInnerHTML={{ __html: item.heading }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}

        <Image src={bachelorIllus} className={"illus-image"} alt="bday" />
      </div>

      <div className="black-gr-div">
        {party && party?.partyinclusions && (
          <section className="sec-padding-top bday-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3
                    className="sec-head medium sm-head"
                    dangerouslySetInnerHTML={{
                      __html:
                        party?.partyinclusions?.heading ||
                        "Your Party <span>Inclusions</span>",
                    }}
                  />
                </div>
              </div>
              <div className="row row-gap-25">
                {party?.partyinclusions?.images &&
                  party?.partyinclusions?.images?.length > 0 &&
                  party?.partyinclusions?.images?.map((bd, index) => (
                    <div className="col-lg-4 col-12" key={index}>
                      <div className="location-card">
                        <div className="location-card-img">
                          {bd.image && (
                            <Image
                              src={bd.image}
                              width={50}
                              height={50}
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
                  ))}
              </div>
            </div>
          </section>
        )}

        <section className="theme-sec d-none">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3
                  className="sec-head medium sm-head"
                  dangerouslySetInnerHTML={{
                    __html: "Add a <span>Theme Décor</span>",
                  }}
                />
              </div>
            </div>
            <div className="row row-gap-25">
              {[...Array(4)].map((_, index) => (
                <div className="col-lg-3 col-12" key={index}>
                  <div className="location-card">
                    <div className="location-card-img">
                      {/* {bd.image && (
                            <Image
                              src={bd.image}
                              width={50}
                              height={50}
                              alt={bd.heading}
                            />
                          )} */}
                    </div>
                    <div className="location-card-content">
                      <h3 dangerouslySetInnerHTML={{ __html: "Classic" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {party &&
          party?.packagesection &&
          party?.packagesection?.pricing?.columns?.length > 0 && (
            <Packages packages={party?.packagesection}  data={birthdayTnc}/>
          )}

        {party && party?.googlereviews && (
          <GReviewSlider commonStars={false} data={party?.googlereviews} />
        )}

        <Image src={bdayIllus} alt="illus3" className="illus-image" />
      </div>
      <div className="black-gr-div">
        <PartyExpertCon className="sec-padding-top" data="party_bachelor"/>
        {party && party?.slidersection && (
          <ReadyToGoPlans data={party?.slidersection} />
        )}
        {party && party?.imagesection && (
          <>
            <section className="Capturing-section">
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
                    {party?.imagesection?.image1 && (
                      <PhotographicStyledImage
                        image={party?.imagesection?.image1}
                      />
                    )}
                    {party?.imagesection?.image2 && (
                      <PhotographicStyledImage
                        image={party?.imagesection?.image2}
                      />
                    )}
                    {party?.imagesection?.image3 && (
                      <PhotographicStyledImage
                        image={party?.imagesection?.image3}
                      />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
        {party && party?.videotestimonials && (
          <Videotestimonials className="pb-0" data={party?.videotestimonials} />
        )}
        <Image src={loveIllus} className={"illus-image"} alt="bday" />
      </div>
      <div className="black-gr-div">
        <OurLocationSec className="sec-padding-top" title="About Our <span>Our Location</span>" />
        {party && party?.faqsection && <FaqSection className="section-padding pb-0" data={party?.faqsection} />}
        <BlogSlider className="pb-0"/>
        <LogoSec className="pt-80 pb-0"/>
        {party && party?.footersection && (
          <PartyGetInTouch
            img={nightIllus}
            noTextBottom={true}
            data={party?.footersection}
          />
        )}
          <HomeContact textData={location?.footersection} />
        {/* {party && party?.footersection && (
          <BirthdayGetInTouch
            img={nightIllus}
            noTextBottom={true}
            textData={party?.footersection}
          />
        )} */}
      </div>
    </>
  );
};

export default page;
