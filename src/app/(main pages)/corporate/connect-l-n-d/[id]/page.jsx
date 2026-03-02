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
import marketingIllus from "@/images/marketing-illus.svg";
import Link from "next/link";
import ConnectContact from "@/components/ConnectContact";
const page = () => {
  const { id } = useParams();
  const [escapeRooms, setEscapeRooms] = useState(null);
  const [activities, setActivities] = useState(null);
  console.log("sdfjkhskdfhksdhf",activities)

  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchEscapeRooms = async () => {
      const res = await api.get(`/escaperooms`);
      setEscapeRooms(res.data.data);
    };
    fetchEscapeRooms();

    const fetchEscapeRoom = async () => {
      const res = await api.get(`/corporate-ld-inner/${id}`);
      setRoom(res.data.data);
    };
    fetchEscapeRoom();

    const fetchActivities = async () => {
      const res = await api.get(`/activity-listing`);
      setActivities(res.data.data);
    };
    fetchActivities();
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
  return (
    <>
      <div className="black-gr-div">
        {room?.bannersection && <Banner corporate={true} room={room} />}

        {room?.contentsection && (
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="para"
                    dangerouslySetInnerHTML={{
                      __html: room?.contentsection?.content,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {room && room?.imagecardsection && (
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="sec-head sm-head medium"
                    dangerouslySetInnerHTML={{
                      __html: room?.imagecardsection?.heading,
                    }}
                  />
                  <div
                    className="para mt-4"
                    dangerouslySetInnerHTML={{
                      __html: room?.imagecardsection?.description,
                    }}
                  />
                </div>
              </div>
              <div className="row mt-4 row-gap-25">
                {/* {JSON.stringify(activities)} */}
                {activities &&
                  activities?.length > 0 &&
                  activities?.map((item, index) => {
                    return (
                      <div className="col-lg-4 col-12" key={index}>
                        <Link
                          href={`/activities/${item?.slug}`}
                          className="location-card text-sm"
                        >
                          <div className="location-card-img">
                            {item?.image && (
                              <Image
                                src={item?.image}
                                alt={item?.title}
                                width={500}
                                height={500}
                              />
                            )}
                          </div>
                          <div className="location-card-content">
                            <h3 className="sec-head sm-head medium">
                              {item?.title}
                            </h3>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        )}

        {room && room?.pointssection && (
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="sec-head sm-head medium"
                    dangerouslySetInnerHTML={{
                      __html: room?.pointssection?.heading,
                    }}
                  />
                  <div
                    className="para mt-4"
                    dangerouslySetInnerHTML={{
                      __html: room?.pointssection?.description,
                    }}
                  />
                </div>
              </div>
              <div className="row mt-4">
                {room?.pointssection?.points &&
                  room?.pointssection?.points?.length > 0 && (
                    <ul className="point-list-img">
                      {room?.pointssection?.points?.map((item, index) => {
                        return (
                          <li className="point-item" key={index}>
                            <div className="point-item-content d-flex align-items-center
                             gap-2 ">
                              {item?.image && (
                                <Image
                                  src={item?.image}
                                  alt={item?.heading}
                                  width={30}
                                  height={30}
                                />
                              )}
                              <h3 className="sec-head medium-20 mb-0">
                                <span>{item?.heading}</span>
                              </h3>
                            </div>
                            <p
                              className="para mt-3"
                              dangerouslySetInnerHTML={{
                                __html: item?.description,
                              }}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  )}
              </div>
            </div>
          </section>
        )}

        {/* <HomeContact
          noTextBottom={false}
          noTextTop={true}
          noImage={true}
          privacyLine={true}
        /> */}
        <ConnectContact
          noTextBottom={false}
          noTextTop={true}
          privacyLine={true}
          noImage={true}
        />

        {room && room?.keyresourcessection && (
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div
                    className="sec-head sm-head medium"
                    dangerouslySetInnerHTML={{
                      __html: room?.keyresourcessection?.heading,
                    }}
                  />
                </div>
              </div>
              <div className="row mt-4 row-gap-25">
                {room?.keyresourcessection?.images &&
                  room?.keyresourcessection?.images?.length > 0 &&
                  room?.keyresourcessection?.images?.map((item, index) => {
                    return (
                      <div className="col-lg-3 col-12" key={index}>
                        <div className="location-card text-sm">
                          <div className="location-card-img">
                            {item?.image && (
                              <Image
                                src={item?.image}
                                alt={item?.heading}
                                width={500}
                                height={500}
                              />
                            )}
                          </div>
                          <div className="location-card-content">
                            <h3 className="sec-head sm-head medium">
                              {item?.heading}
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        )}

        <Image src={marketingIllus} className="w-100 h-auto" alt="hm-text-bg" />
      </div>
    </>
  );
};

export default page;
