"use client";
import React, { useState, useEffect, useRef } from "react";
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
import mummyIllus from "@/images/mummy-illus.svg";

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
import movieIllus1 from "@/images/movie-illus1.svg";
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
import TeamCard from "@/components/TeamCard";
import card1 from "@/images/es-main-img.jpg";
import card2 from "@/images/pr-main-img.jpg";
import card3 from "@/images/cr-main-img.jpg";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/context/GlobalContext";
import whArrow from "@/images/wh-arrow.svg";
import StripGallery from "@/components/StripGallery";
import abImg1 from "@/images/gal1.png";
import abImg2 from "@/images/gal2.png";
import abImg3 from "@/images/gal3.png";

const AboutPage = () => {
  const [corporate, setCorporate] = useState(null);

  const [brandLogos, setBrandLogos] = useState(null);
  const [collapse, setCollapse] = useState("desktop");
  const { escaperoomLocations, loading, errors } = useGlobalContext();
  const [isFounderMuted, setIsFounderMuted] = useState(true);
  const founderVideoRef = useRef(null);
  const [abImages, setAbImages] = useState([
    abImg1,
    abImg2,
    abImg3,
    abImg1,
    abImg2,
    abImg3,
  ]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const handleCollapse = (key) => {
    if (typeof window !== "undefined" && window.innerWidth <= 767) {
      setCollapse((prev) => (prev === key ? "desktop" : key));
    }
  };
  useEffect(() => {
    const fetchCorporate = async () => {
      const response = await api.get("about-us-page");
      setCorporate(response.data.data);
      console.log("corporate_about_page", response?.data?.data)
    };
    fetchCorporate();
    const fetchBrandLogos = async () => {
      const response = await api.get("logos/brands");
      setBrandLogos(response.data.data);
    };
    fetchBrandLogos();
  }, []);

  const banner = {
    title: "Fun. Bond. Unwind",
    subTitle: "<span>Most Unique Corporate Outing Destination</span>",
    para: "Koramangala | JP Nagar | Whitefield | Virtual | Resorts",
  };

  const hmText =
    "<span>Looking for</span> a break? We’ve <span>got you</span> covered!It’s time to <span>recharge. Get ready</span> for an unforgettable time!";

  const escRooms = [
    {
      image: c1,
      title: "Escape Rooms",
    },
    {
      image: c2,
      title: "Detective Job",
    },
    {
      image: c3,
      title: "Let Loose",
    },
    {
      image: c4,
      title: "Unwind",
    },
    {
      image: c5,
      title: "Scavenger Treasure",
    },
    {
      image: c6,
      title: "Bomb Defusal",
    },
  ];

  const whyChoose = [
    {
      icon: cic1,
      title: "Engages all Hierarchies",
    },
    {
      icon: cic2,
      title: "Unique Experiences",
    },
    {
      icon: cic3,
      title: "Premium Offerings",
    },
    {
      icon: cic4,
      title: "Breakout® X Guarantees ",
    },
    {
      icon: cic5,
      title: "Seamless Execution",
    },
  ];

  return (
    <>
      {corporate && corporate?.bannersection && (
        <InnerPageBanner banner={corporate?.bannersection} bdayInner={true} />
      )}

      <div className="black-gr-div">
        <section className="pt-80 vision-mission-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <div className="vis-img">

                  {/* {corporate?.visionsection?.image && (
                    <Image
                      src={corporate?.visionsection?.image}
                      alt="vis-img"
                      width={500}
                      height={500}
                      className="w-100 h-auto"
                    />
                  )} */}
                  {/* <video
                    className="w-100 h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  >
                    <source src="/videos/founder-video.mp4" type="video/mp4" />
                  </video> */}
                  <div className="founder-video-wrapper">
                    <video
                      ref={founderVideoRef}
                      className="w-100 h-auto"
                      autoPlay
                      loop
                      playsInline
                      muted={isFounderMuted}
                    >
                      <source src="/videos/founder-video.mp4" type="video/mp4" />
                    </video>

                    {/* Button INSIDE video at bottom */}
                    <button
                      className="founder-video-mute-btn"
                      onClick={() => {
                        const video = founderVideoRef.current;
                        if (!video) return;

                        const newMuteState = !isFounderMuted;
                        video.muted = newMuteState;
                        setIsFounderMuted(newMuteState);
                      }}
                    >
                      {isFounderMuted ? "🔇" : "🔊"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12">
                <div className="vis-con ms-4">
                  <div className="text-box mb-40">
                    <h3
                      className="sec-head sm-head medium yellow-text mb-3"
                      dangerouslySetInnerHTML={{
                        __html: corporate?.visionsection?.heading1,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: corporate?.visionsection?.description1,
                      }}
                    />
                  </div>
                  <div className="text-box mb-40">
                    <h3
                      className="sec-head sm-head medium yellow-text mb-3"
                      dangerouslySetInnerHTML={{
                        __html: corporate?.visionsection?.heading2,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: corporate?.visionsection?.description2,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {corporate && corporate?.countersection && (
          <TrustedSection data={corporate?.countersection} />
        )}
        {corporate && corporate?.contentsection && (
          <section className="content-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 ">
                  <h3
                    className="sec-head medium sm-head"
                    dangerouslySetInnerHTML={{
                      __html: corporate?.contentsection?.heading,
                    }}
                  />
                  <p
                    className="para mt-4"
                    dangerouslySetInnerHTML={{
                      __html: corporate?.contentsection?.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        <Image src={movieIllus1} className={"illus-image"} alt="bday" />
      </div>

      <div className="black-gr-div">
        <section className="movement-sec sec-padding-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3 className="sec-head medium sm-head">
                  {
                    corporate?.cardssection?.heading
                  }
                  {/* Every Moment We Create <span>Follows the FBI Standards</span> */}
                </h3>
              </div>
            </div>
            <div className="row row-gap-25">
              {
                corporate?.cardssection?.cards?.map((about_card_fun_result, id) => {
                  return (
                    <div className="col-lg-4 col-12" key={id}>
                      <div className="ab-card">
                        <img src={about_card_fun_result?.image} alt="icon1" />
                        <h3>
                          {/* <span>F</span>un */}
                          {about_card_fun_result?.heading}
                        </h3>
                        <p className="para">
                          {about_card_fun_result?.description}
                        </p>
                      </div>
                    </div>

                  )
                })
              }

              {/* <div className="col-lg-4 col-12">
                <div className="ab-card">
                  <Image src={icon2} alt="icon2" />
                  <h3>
                    <span>F</span>un
                  </h3>
                  <p className="para">
                    An uplifting, immersive, and meaningful experience for
                    everyone.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="ab-card">
                  <Image src={icon3} alt="icon3" />
                  <h3>
                    <span>F</span>un
                  </h3>
                  <p className="para">
                    An uplifting, immersive, and meaningful experience for
                    everyone.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {corporate && corporate?.ourstorysection && (
          <section className="section-padding our-story-sec">
            <div className="container">
              <div className="row  align-items-center">
                <div className="col-lg-5 col-12">
                  <div className="vis-img">
                    {corporate?.ourstorysection?.image && (
                      <img
                        src={corporate?.ourstorysection?.image}
                        alt="vis-img"
                        className="w-100 h-auto"
                      />
                    )}
                  </div>
                </div>
                <div className="col-lg-7 col-12">
                  <div className="vis-con ms-4">
                    <h3
                      className="sec-head  medium"
                      dangerouslySetInnerHTML={{
                        __html: corporate?.ourstorysection?.heading,
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: corporate?.ourstorysection?.description,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {corporate && corporate?.ourfounderssection && (
          <section className="founder-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3
                    className="sec-head medium sm-head"
                    dangerouslySetInnerHTML={{
                      __html: corporate?.ourfounderssection?.heading,
                    }}
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12">
                  <TeamCard
                    type="founder"
                    data={corporate?.ourfounderssection}
                  />
                </div>
              </div>
            </div>
          </section>
        )}
        {corporate && corporate?.ourleaderssection && (
          <section className="leader-sec section-padding pb-0">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                  <h3
                    className="sec-head medium sm-head"
                    dangerouslySetInnerHTML={{
                      __html: corporate?.ourleaderssection?.heading,
                    }}
                  />
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    {corporate?.ourleaderssection?.ourleaders?.length > 0 &&
                      corporate?.ourleaderssection?.ourleaders?.map(
                        (item, index) => (
                          <div className="col-lg-6 col-12" key={index}>
                            <TeamCard type="leader" data={item} />
                          </div>
                        )
                      )}
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}
        {corporate && corporate?.ouradvisorssection && (
          <section className="section-padding pb-0 advisor-sec">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                  <h3
                    className="sec-head medium sm-head"
                    dangerouslySetInnerHTML={{
                      __html: corporate?.ouradvisorssection?.heading,
                    }}
                  />
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    {corporate?.ouradvisorssection?.ouradvisors?.length > 0 &&
                      corporate?.ouradvisorssection?.ouradvisors?.map(
                        (item, index) => (
                          <div className="col-12" key={index}>
                            <TeamCard type="advisor" data={item} />
                          </div>
                        )
                      )}
                  </div>
                </div>
              </div>

            </div>
          </section>
        )}
        <Image
          src={mummyIllus}
          alt="partyillus"
          className="illus-image"
          style={{ marginBottom: "-1px" }}
        />
      </div>
      <div className="black-gr-div">
        <header className="hm-header section-padding pb-0">
          <div className="container">
            <motion.div
              className="row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            >
              <div className="col-lg-12 col-12 text-center mb-40">
                {/* <Revolvingtext text="Set Your" /> */}
                <h2 className="sec-head sm medium text-center mb-3">
                  <span>Experience the Moment</span> with Breakout®!
                </h2>
                <p className="para big">
                  Break free from the ordinary and{" "}
                  <span>dive into the legendery.</span>
                </p>
              </div>
            </motion.div>
            <motion.div
              className="row row-gap-25"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="col-lg-4 col-12" variants={fadeInUp}>
                <div className="hm-card">
                  <div className="hm-card-img">
                    <Image src={card1} alt={"Escape Room"} />
                  </div>
                  <div className="details">
                    <h3
                      className="sec-head h3"
                      onClick={() => handleCollapse("escape-room")}
                    >
                      {"Escape Room"}
                    </h3>
                    <ul className={collapse === "escape-room" ? "active" : ""}>
                      {escaperoomLocations &&
                        escaperoomLocations?.map((link, index) => (
                          <li key={index}>
                            <Link href={`/${link.slug}`}>
                              <span>{link.title}</span>
                              <Image src={whArrow} alt={link.title} />
                            </Link>
                          </li>
                        ))}
                      <li>
                        <Link href={`/virtual`}>
                          <span>Virtual Rooms</span>
                          <Image src={whArrow} alt={"Virtual Rooms"} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-4 col-12" variants={fadeInUp}>
                <div className="hm-card">
                  <div className="hm-card-img">
                    <Image src={card2} alt={""} />
                  </div>
                  <div className="details">
                    <h3
                      className="sec-head h3"
                      onClick={() => handleCollapse("parties")}
                    >
                      {"Parties"}
                    </h3>
                    <ul className={collapse === "parties" ? "active" : ""}>
                      <li>
                        <Link href={`/parties/birthday`}>
                          <span>Birthday</span>
                          <Image src={whArrow} alt={"Birthday"} />
                        </Link>
                      </li>
                      <li>
                        <Link href={`/parties/bachelor`}>
                          <span>Bachelor(ette)</span>
                          <Image src={whArrow} alt={"Bachelor(ette)"} />
                        </Link>
                      </li>
                      <li>
                        <Link href={`/parties/farewell`}>
                          <span>Farewell</span>
                          <Image src={whArrow} alt={"Farewell"} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-lg-4 col-12" variants={fadeInUp}>
                <div className="hm-card">
                  <div className="hm-card-img">
                    <Image src={card2} alt={""} />
                  </div>
                  <div className="details">
                    <h3
                      className="sec-head h3"
                      onClick={() => handleCollapse("corporate")}
                    >
                      {"Corporate"}
                    </h3>
                    <ul className={collapse === "corporate" ? "active" : ""}>
                      <li>
                        <Link href={`/corporate/unwind`}>
                          <span>Unwind</span>
                          <Image src={whArrow} alt={"Unwind"} />
                        </Link>
                      </li>
                      <li>
                        <Link href={`/corporate/retreat`}>
                          <span>Retreat</span>
                          <Image src={whArrow} alt={"Retreat"} />
                        </Link>
                      </li>
                      <li>
                        <Link href={`/corporate/connect-l-n-d`}>
                          <span>Connect L&D</span>
                          <Image src={whArrow} alt={"Connect L&D"} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </header>

        <section className="section-padding gallery-sec pb-0">
          <StripGallery images={abImages} />
        </section>

        <HomeContact noTextBottom={false} privacyLine={false} noImage={true} />

        <section className="overlay-sec pt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="sec-head medium">Freethinkers and  <span>Affiliates</span></h2>
              </div>
              <div className="col-12">
                <div className="overlay-box">
                  <div className="row main-row">
                    <div className="col-12" >
                      <div className="overlay-box-item mb-40">
                        <h3 className="sec-head mb-3 h3">
                          1. M/s. Breakfree Cafe
                        </h3>
                        <p>
                          <strong>Address :- </strong>unit 304, No.7, Prime Square, 3rd floor, Block 4, Whitefield Main Rd, Bengaluru, Karnataka 560066
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="overlay-box-item mb-40">
                        <h3 className="sec-head mb-3 h3">
                          2. M/s. Escape Ventures
                        </h3>
                        <p>
                          <strong>Address :- </strong>unit 306, No.7, Prime Square, 3rd floor, Block 4, Whitefield Main Rd, Bengaluru, Karnataka 560066
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="overlay-box-item mb-40">
                        <h3 className="sec-head mb-3 h3">
                          3. M/s. Breakfree Ventures
                        </h3>
                        <p>
                          <strong>Address :- </strong>unit, 305, No.7, Prime Square, 3rd floor, Block 4, Whitefield Main Rd, Bengaluru, Karnataka 560066
                        </p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="overlay-box-item mb-40">
                        <h3 className="sec-head mb-3 h3">
                          4. M/s. Free Thinker Experience
                        </h3>
                        <p>
                          <strong>Address :- </strong>27, NMR Building, 1st floor, Intermediate Ring Road, 100 Feet Rd, Koramangala, Bengaluru, Karnataka 560047
                        </p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="overlay-box-item mb-40">
                        <h3 className="sec-head mb-3 h3">
                          5. M/s. Free Thinker Services
                        </h3>
                        <p>
                          <strong>Address :- </strong>2nd Floor, No. 13, 6th Cross, 100 Feet Road, Srinivagilu, Bangalore - 560 047
                        </p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="overlay-box-item mb-40">
                        <h3 className="sec-head mb-3 h3">
                          6. M/s. Breakout Ventures
                        </h3>
                        <p>
                          <strong>Address :- </strong>2nd Floor, No 8, 24th Main Rd, 5th Phase, Ayodya Nagar, J P Nagar Phase 5, J. P. Nagar, Bengaluru, Karnataka 560078
                        </p>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="overlay-box-item mb-40">
                        <h3 className="sec-head mb-3 h3">
                          7. M/s. The Escapist Registered and Managed by its Karta Mothi G. Venkatesan HUF
                        </h3>
                        <p>
                          <strong>Address :- </strong>27, NMR Building, 2nd floor, Intermediate Ring Road, 100 Feet Rd, Koramangala, Bengaluru, Karnataka 560047
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Image src={corpIllus} alt="illus3" className="illus-image" />
      </div>
    </>
  );
};

export default AboutPage;
