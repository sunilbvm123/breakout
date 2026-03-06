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

import bdayImg1 from "@/images/bday1.jpg";
import bdayImg2 from "@/images/bday2.jpg";
import bdayImg3 from "@/images/bday3.jpg";
import bdayImg4 from "@/images/bday4.jpg";
import bdayImg5 from "@/images/bday5.jpg";
import bdayImg6 from "@/images/bday6.jpg";

import partyillus from "@/images/party-illus.svg";
import BirthdayGetInTouch from "@/components/BirthdayGetInTouch";
import PartySlider from "@/components/PartySlider";
import ReadyToGoPlans from "@/components/ReadyToGoPlans";
import Videotestimonials from "@/components/Videotestimonials";
import FaqSection from "@/components/FaqSection";

import nightIllus from "@/images/night-illus.svg";

import bdayBanner from "@/images/bday-banner1.jpg";
import PartyExpertCon from "@/components/PartyExpertCon";

import api from "@/helpers/api";
import TrustedSection from "@/components/TrustedSection";
import GReviewSlider from "@/components/GReviewSlider";
import PhotographicStyledImage from "@/components/PhotographicStyledImage";

import { useParams } from "next/navigation";

import linkIcon from "@/images/link-icon.svg";
import whatsappIcon from "@/images/whatsapp-icon.svg";
import instaIcon from "@/images/insta-icon.svg";
import xIcon from "@/images/x-ixon.svg";
import gmail from "@/images/gmail.svg";
import linkedin from "@/images/linkedin.svg";
import FullSliderSec from "@/components/FullSliderSec";
import toolIllus from "@/images/tool-illus.svg";
import BirthdayVenueWidget from "@/components/BirthdayVenueWidget";
import bdayblogIllus from "@/images/bdayblog-illus.svg";
import LocationCard from "@/components/LocationCard";
import OurLocationSec from "@/components/OurLocationSec";
import PartyGetInTouch from "@/components/PartyGetInTouch";

const BirthdayBlog = ({ blogData,id= ""}) => {
  // Share functionality
  const handleShare = (platform) => {
    const currentUrl = window.location.href;
    const title = blogData?.heading || "Check out this blog post";
    const text =
      blogData?.description || "Interesting read! Have a look.";

    let shareUrl = "";
console.log("BirthdayBlog_BirthdayBlog",id)
    switch (platform) {
      case "copy":
        navigator.clipboard.writeText(currentUrl).then(() => {
          alert("Link copied to clipboard!");
        });
        return;

      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(
          `${title} - ${currentUrl}`
        )}`;
        break;

      case "instagram":
        // Instagram does not support direct URL sharing
        navigator.clipboard.writeText(currentUrl).then(() => {
          alert("Link copied! Paste it in Instagram.");
        });
        return;

      case "twitter": // X
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(currentUrl)}`;
        break;

      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          currentUrl
        )}`;
        break;

      case "gmail":
        shareUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(`${text}\n\n${currentUrl}`)}`;
        break;



      default:
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };


  const hmtext =
    "Explore <span>a curated-list</span> of best party places in Bangalore to celebrate birthdays. Estimate a budget with Party Budget Calculator or discover venues with a simple discovery quiz.";

  return (
    <>
      {blogData && <BirthdayBanner data={blogData?.bannersection} />}
      <div className="black-gr-div">
        <div className="blog-top">
          <div className="container">
            <div className="blog-top-inner">
              <p className="sec-head medium-20 mb-0 d-flex align-items-center gap-2">
                Last updated on  <span className="yellow-text">{blogData?.post_date}  </span>
              </p>
              <div className="sec-head medium-20 d-flex align-items-center gap-3">
                Share blog
                <ul className="bl-soc-list">
                  <li>
                    <button onClick={() => handleShare("copy")}>
                      <Image
                        src={linkIcon}
                        alt="copy link"
                        width={35}
                        height={35}
                      />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleShare("whatsapp")}>
                      <Image
                        src={whatsappIcon}
                        alt="share on whatsapp"
                        width={35}
                        height={35}
                      />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleShare("instagram")}>
                      <Image
                        src={instaIcon}
                        alt="share on instagram"
                        width={35}
                        height={35}
                      />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleShare("twitter")}>
                      <Image
                        src={xIcon}
                        alt="share on twitter"
                        width={35}
                        height={35}
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {blogData?.bannersection && (
          <HmTextSec text={blogData?.bannersection?.content} />
        )}

        <PartyExpertCon className="pt-80" data="blog_birthday_blog" />

        {blogData?.iconsection && (
          <FullSliderSec data={blogData?.iconsection} hasCardLinks={true} />
        )}

        <Image src={toolIllus} className="illus-image" alt="tool-illus" />
      </div>

      <BirthdayVenueWidget id={id}/>

      <GReviewSlider commonStars={false} />

      {/* <OurLocationSec
        className="sec-padding-top"
        // title={`About Our Breakout®  <span>${blogData?.title} Location</span>`}
        slug="koramangala"
      /> */}

      {blogData?.footersection && (
        <PartyGetInTouch data={blogData?.footersection} noImage={true}/>
      )}

      {/* {blogData?.footersection && (
        <section className="section-padding Conclusion-sec pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12 text-center">
                <h3
                  className="sec-head sm-head medium yellow-text"
                  dangerouslySetInnerHTML={{
                    __html: blogData?.footersection?.heading,
                  }}
                />
                <div
                  className="para"
                  dangerouslySetInnerHTML={{
                    __html: blogData?.footersection?.content,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )} */}
      <div className="black-gr-div">
        <section className="found-sec pt-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: blogData?.content }}
                />
              </div>
            </div>
            <div className="sec-head mb-0 medium-20 d-flex w-100 flex-column justify-content-center align-items-center gap-3">
              <h3>
                Found it useful? <span>Spread the word</span>
              </h3>
              <ul className="bl-soc-list">

                <li>
                  <button onClick={() => handleShare("whatsapp")}>
                    <Image
                      src={whatsappIcon}
                      alt="share on whatsapp"
                      width={65}
                      height={65}
                    />
                  </button>
                </li>
                <li>
                  <button onClick={() => handleShare("instagram")}>
                    <Image
                      src={instaIcon}
                      alt="share on instagram"
                      width={65}
                      height={65}
                    />
                  </button>
                </li>
                <li>
                  <button onClick={() => handleShare("twitter")}>
                    <Image
                      src={xIcon}
                      alt="share on twitter"
                      width={65}
                      height={65}
                    />
                  </button>
                </li>
                <li>
                  <button onClick={() => handleShare("linkedin")}>
                    <Image
                      src={linkedin}
                      alt="copy link"
                      width={65}
                      height={65}
                    />
                  </button>
                </li>
                <li>
                  <button onClick={() => handleShare("gmail")}>
                    <Image
                      src={gmail}
                      alt="copy link"
                      width={65}
                      height={65}
                    />
                  </button>
                </li>
                <li>
                  <button onClick={() => handleShare("copy")}>
                    <Image
                      src={linkIcon}
                      alt="copy link"
                      width={65}
                      height={65}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Image src={bdayblogIllus} className="illus-image" alt="hm-illus" />
      </div>
    </>
  );
};

export default BirthdayBlog;
