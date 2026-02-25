"use client";
import React from "react";
import Image from "next/image";
import Banner from "@/components/escape-room/Banner";
import BigVideoPlayer from "@/components/BigVideoPlayer";
import hmIllus from "@/images/bottom-illus.svg";
import illus2 from "@/images/contact-bottom-illus.svg";
import illus3 from "@/images/illus3.svg";
import ReserveASlot from "@/components/ReserveASlot";
import FaqSection from "@/components/FaqSection";
import EscapeRoomCard from "@/components/EscapeRoomCard";
import loc1 from "@/images/koramangala.jpg";
import loc2 from "@/images/jp-nagar.jpg";
import loc3 from "@/images/whitefield.jpg";
import LocationCard from "@/components/LocationCard";
import HomeContact from "@/components/home/HomeContact";
import VisitLocations from "@/components/VisitLocations";
import { CommonModal } from "@/components/CommonModal";
import GlobalReviewWidget from "@/components/GlobalReviewWidget";
import api from "@/app/helpers/api";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";

const page = () => {
  const { id } = useParams();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [escapeRooms, setEscapeRooms] = useState(null);
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const { gettncs } = useGlobalContext();

  const escaperoomsTnc = gettncs?.find(
    (item) => item.reference == "escaperooms"
  );

  console.log("Birthday T&C:", escaperoomsTnc);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [roomsRes, roomRes] = await Promise.all([
          api.get(`/escaperooms`),
          api.get(`/escaperoom/${id}`)
        ]);
        setEscapeRooms(roomsRes?.data?.data);
        setRoom(roomRes?.data?.data);
        console.log("Room Data:", roomRes?.data?.data);
      } catch (err) {
        setLoading(false);
        console.error("Error fetching escape room data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);


  const locations = [
    {
      name: "Koramangala",
      image: loc1,
    },
    {
      name: "JP Nagar",
      image: loc2,
    },
    {
      name: "Whitefield",
      image: loc3,
    },
  ];

  // useEffect(() => {
  //   const shouldScroll = sessionStorage.getItem("scrollToEscapeRooms");

  //   if (shouldScroll === "true" && escapeRooms?.length > 0) {
  //     // wait for DOM paint
  //     setTimeout(() => {
  //       const section = document.getElementById("escape-rooms-section");

  //       if (section) {
  //         section.scrollIntoView({
  //           behavior: "auto", // use "smooth" if you want animation
  //           block: "start",
  //         });
  //       }

  //       // remove key so it doesn't auto-scroll again
  //       sessionStorage.removeItem("scrollToEscapeRooms");
  //     }, 500);
  //   }
  // }, [escapeRooms]);

  return (
    <>
      {
        loading ? (
          <div id="preloader">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <div className="black-gr-div">
              {room?.bannersection && <Banner room={room} />}
              {room?.bannersection?.video_trailer != "" && (
                <section className="section-padding pb-0">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <BigVideoPlayer
                          room={room}
                          video={room?.bannersection?.video_trailer}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              )}
              <Image src={hmIllus} className="illus-image" alt="hm-text-bg" />
            </div>
            <div className="black-gr-div">
              <ReserveASlot className="sec-padding-top"
                page_name={id == "prison-break"}
                onOpenFaq={(index) => setOpenFaqIndex(index)}
                room={room?.pricingsection} data={escaperoomsTnc} />
              {room?.imagesection && (
                <GlobalReviewWidget
                  data={room?.imagesection}
                  reviews={room?.googlereviews}
                />
              )}
              <Image src={illus3} className="illus-image" alt="illus3" />
            </div>
            {room?.faqsection && <FaqSection className="sec-padding-top"
              data={room?.faqsection}
              openIndex={openFaqIndex}
              onFaqChange={(index) => {
                // Same FAQ again → close
                setOpenFaqIndex((prev) => (prev === index ? null : index));
              }}
            />}
            {/* <FaqSection /> */}
            <div className="black-gr-div">
              <section className="section-padding esc-section" id="escape-rooms-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 text-center col-12">
                      <h2 className="sec-head sm-head medium">
                        Other <span>Escape Rooms</span>
                      </h2>
                    </div>
                  </div>
                  <div className="row mt-5 row-gap-25" id="escape-rooms-section">
                    {escapeRooms &&
                      escapeRooms.map((room, index) => (
                        <div className="col-lg-4 col-12"
                          // onClick={()=> sessionStorage.setItem("scrollToEscapeRooms", true)}
                          key={index}>
                          <EscapeRoomCard room={room} />
                        </div>
                      ))}
                  </div>
                </div>
              </section>
              <VisitLocations />
              <HomeContact noTextBottom={false} />
            </div>
          </>
        )
      }

    </>
  );
};

export default page;
