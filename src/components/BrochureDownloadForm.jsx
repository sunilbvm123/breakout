"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import selectDrop from "@/images/select-drop.svg";
import arrowPrev from "@/images/chev-left.svg";
import arrowNext from "@/images/chev-right.svg";
import calenderIcon from "@/images/calendar-btn.svg";

const BrochureDownloadForm = () => {
  /* ================= CALENDAR LOGIC ================= */
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [startIndex, setStartIndex] = useState(0);
  const [days, setDays] = useState([]);
  const [showMonthYear, setShowMonthYear] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const totalDays = new Date(year, month + 1, 0).getDate();
    const arr = Array.from({ length: totalDays }, (_, i) => i + 1);
    setDays(arr);

    if (
      year === today.getFullYear() &&
      month === today.getMonth()
    ) {
      setStartIndex(today.getDate() - 1);
    } else {
      setStartIndex(0);
    }
  }, [year, month]);

  const daysToShow = isMobile ? 5 : 7;

  const visibleDays = days.slice(startIndex, startIndex + daysToShow);

  const nextDays = () => {
    if (startIndex + 7 < days.length) {
      setStartIndex(startIndex + daysToShow);
    }
  };

  const prevDays = () => {
    if (startIndex - 7 >= 0) {
      setStartIndex(startIndex - daysToShow);
    }
  };

  const handleDateSelect = (day) => {
    const dateObj = new Date(year, month, day);

    setSelectedDate(dateObj);

    // 🔥 Console test
    console.log("Selected Date Object:", dateObj);
    console.log("Formatted Date:", dateObj.toISOString().split("T")[0]);
  };

  /* ================= UI ================= */
  return (
    <section className="brochure-download-form section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="sec-head medium">
              Get <span>Brochure</span>
            </h3>
          </div>
        </div>

        <div className="download-form-div mt-5">
          <div className="row ">



            {/* ================= FORM (UNCHANGED) ================= */}
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <div className="input-group">
                  <input type="text" placeholder="Name" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="form-group">
                <div className="input-group">
                  <input type="text" placeholder="Phone" />
                </div>
              </div>
            </div>
            {/* ================= CALENDAR ================= */}
            <div className="col-12 mb-4 mt-3">
              <div className="calendar-wrapper">
                <div className="calendar-header">
                  <div
                    className="month-year-select mb-3"
                    // onClick={() => setShowMonthYear(!showMonthYear)}
                  >
                    <span>
                      {new Date(year, month).toLocaleString("default", { month: "long" })} {year}
                    </span>
                    <span>
                        {isMobile && (
                          <div
                          className="calender-btn"
                          onClick={() => setShowMonthYear(!showMonthYear)}
                        >
                          {/* › */}
                          <Image src={calenderIcon} alt="Calender Icon" />
                        </div>
                        )

                        }
                        </span>
                    {/* <Image src={selectDrop} alt="arrow" /> */}
                  </div>

                  
                </div>


                <div className="calendar-days-outer">
                  <div className="calendar-days">
                    <button className="arrow" onClick={prevDays} disabled={startIndex === 0}>
                      {/* ‹ */}
                      <Image src={arrowPrev} alt="Previous" />
                    </button>

                    {visibleDays.map((day) => {
                      const isToday =
                        day === today.getDate() &&
                        month === today.getMonth() &&
                        year === today.getFullYear();

                      return (
                        <div
                          key={day}
                          onClick={() => handleDateSelect(day)}
                          className={`day ${selectedDate &&
                              selectedDate.getDate() === day &&
                              selectedDate.getMonth() === month &&
                              selectedDate.getFullYear() === year
                              ? "active"
                              : ""
                            }`}
                        >
                          {day}
                        </div>

                      );
                    })}

                    <button
                      className="arrow"
                      onClick={nextDays}
                      disabled={startIndex + 7 >= days.length}
                    >
                      {/* › */}
                      <Image src={arrowNext} alt="Next" />
                    </button>
                    {!isMobile && (
                          <div
                          className="calender-btn"
                          onClick={() => setShowMonthYear(!showMonthYear)}
                        >
                          {/* › */}
                          <Image src={calenderIcon} alt="Calender Icon" />
                        </div>
                        )

                        }
                    <button
                      className="calender-btn"
                      onClick={() => setShowMonthYear(!showMonthYear)}
                    >
                      {/* › */}
                      <Image src={calenderIcon} alt="Calender Icon" />
                    </button>
                  </div>

                  {showMonthYear && (
                    <div className="month-year-dropdown">
                      <div className="months">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className={`option ${month === i ? "active" : ""}`}
                            onClick={() => {
                              setMonth(i);
                              setShowMonthYear(false);
                            }}
                          >
                            {new Date(0, i).toLocaleString("default", { month: "long" })}
                          </div>
                        ))}
                      </div>

                      <div className="years">
                        {[2024, 2025, 2026, 2027].map((y) => (
                          <div
                            key={y}
                            className={`option ${year === y ? "active" : ""}`}
                            onClick={() => {
                              setYear(y);
                              setShowMonthYear(false);
                            }}
                          >
                            {y}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="form-group style-2">
                <label className="label-text">I’m looking for</label>
                <div className="input-group">
                  <div className="select-group">
                    <select>
                      <option>Select event type</option>
                    </select>
                    <Image src={selectDrop} alt="select" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="form-group style-2">
                <label className="label-text">For</label>
                <div className="input-group">
                  <div className="select-group">
                    <select>
                      <option>Select age range</option>
                    </select>
                    <Image src={selectDrop} alt="select" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="form-group style-2">
                <label className="label-text">Attendees Count</label>
                <div className="input-group">
                  <div className="select-group">
                    <select>
                      <option>Select number of attendees</option>
                    </select>
                    <Image src={selectDrop} alt="select" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-4">
              <button className="main-btn">
                <span>Download Brochure</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownloadForm;
