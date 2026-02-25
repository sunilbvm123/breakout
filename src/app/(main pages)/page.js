"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import HomePageData from "@/data/HomePageData";
import LogoSec from "@/components/LogoSec";
import HmTextSec from "@/components/home/HmTextSec";
import arrowRight from "@/images/arrow-right-yellow.svg";
import HomeContact from "@/components/home/HomeContact";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import whArrow from "@/images/wh-arrow.svg";
import TrustedSection from "@/components/TrustedSection";
import IllusHome from "@/images/illus-home.svg";
import FaqSection from "@/components/FaqSection";
import starIcon from "@/images/star-icon.svg";
import PartyIcon from "@/images/party-icon.svg";
import handshake from "@/images/handshake.svg";
import VisitLocations from "@/components/VisitLocations";
import { useGlobalContext } from "@/context/GlobalContext";
import homePageIllus from "@/images/home-page-illus.svg";
import api from "@/app/helpers/api";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const hasScrolledRef = useRef(false); // Define the ref here
  const scrollTimeoutRef = useRef(null);
  const cards = HomePageData.cards;
  const lookingFor = HomePageData.lookingFor;
  const scoreCard = HomePageData.scoreCard;

  const { escaperoomLocations, errors } = useGlobalContext();
  useEffect(() => {
    if (escaperoomLocations) {
      console.log(escaperoomLocations);
    }
  }, [escaperoomLocations]);

  const handleCollapse = useCallback((key) => {
    if (typeof window !== "undefined" && window.innerWidth <= 767) {
      setCollapse((prev) => (prev === key ? "desktop" : key));
    } else {
      // For desktop, always expand
      setCollapse(key);
    }
  }, []);

  // Main scrolling logic
  // const scrollToHomeSection = useCallback(() => {
  //   if (hasScrolledRef.current) return; // Already scrolled on this page load

  //   const key = sessionStorage.getItem("home_set_yourself_free_key");
  //   const hash = window.location.hash;

  //   if (key || hash === "#home_set_yourself_free") {
  //     hasScrolledRef.current = true;

  //     // Clear any existing timeout
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }

  //     scrollTimeoutRef.current = setTimeout(() => {
  //       const el = document.getElementById("home_set_yourself_free");
  //       if (el) {
  //         // Get current scroll position
  //         const currentScroll = window.pageYOffset;

  //         // Scroll to section
  //         el.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start"
  //         });

  //         // Expand the escape-room section
  //         handleCollapse("escape-room");

  //         // Clear the session storage
  //         if (key) {
  //           sessionStorage.removeItem("home_set_yourself_free_key");
  //         }

  //         // Update URL hash without triggering scroll
  //         if (key && window.location.hash !== "#home_set_yourself_free") {
  //           history.replaceState(
  //             { ...history.state, scrollPosition: currentScroll },
  //             "",
  //             "#home_set_yourself_free"
  //           );
  //         }
  //       }
  //     }, 1500); // Wait for page to fully load
  //   }
  // }, [handleCollapse]);

  // // Single useEffect for all scroll-related logic
  // useEffect(() => {
  //   // Reset scroll flag on component mount
  //   hasScrolledRef.current = false;

  //   // Initial scroll check
  //   scrollToHomeSection();

  //   // Also check when page finishes loading
  //   if (document.readyState === 'complete') {
  //     scrollToHomeSection();
  //   } else {
  //     window.addEventListener('load', scrollToHomeSection);
  //   }

  //   // Cleanup
  //   return () => {
  //     if (scrollTimeoutRef.current) {
  //       clearTimeout(scrollTimeoutRef.current);
  //     }
  //     window.removeEventListener('load', scrollToHomeSection);
  //   };
  // }, [scrollToHomeSection]);

  // // Only for navigation - separate from initial load
  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     // Reset the flag when navigating
  //     hasScrolledRef.current = false;
  //     // Scroll after navigation
  //     setTimeout(scrollToHomeSection, 100);
  //   };

  //   router.events?.on('routeChangeComplete', handleRouteChange);

  //   return () => {
  //     router.events?.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router, scrollToHomeSection]);




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

  const TiltCard = ({ children }) => {
    const defaultOptions = {
      reverse: false,
      max: 17.5,
      perspective: 1000,
      scale: 1,
      speed: 1000,
      transition: true,
      axis: null,
      reset: true,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      glare: true,
      maxGlare: 0.5,
    };

    return <Tilt options={defaultOptions}>{children}</Tilt>;
  };

  const trustedData = [
    {
      title: " Joyful reviews",
      icon: starIcon,
      number: "10.5k +",
    },
    {
      title: "Parties Hosted",
      icon: PartyIcon,
      number: "1657 +",
    },
    {
      title: "Companies Served",
      icon: handshake,
      number: "850 +",
    },
  ];

  const hmText =
    "At Breakout®, you can...have crazy fun in our <span>cinematic escape room</span>, <br />create lifelong memories with unique <span>party celebrations</span>,<br />enhance <span>team bonding</span>, <span>engagement</span>, & <span>productivity</span> <br/>through our gamified corporate programs.<br /><br />So, do yourself a favour and breakout from the ordinary!";

  const [collapse, setCollapse] = useState("desktop");



  const [data, setData] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("home_about_us_heading_key");

    if (shouldScroll === "true" && data?.bannersection?.content) {
      // wait for DOM paint
      setTimeout(() => {
        const section = document.getElementById("home-about-us-heading");

        if (section) {
          section.scrollIntoView({
            behavior: "auto", // use "smooth" if you want animation
            block: "start",
          });
        }

        // remove key so it doesn't auto-scroll again
        sessionStorage.removeItem("home_about_us_heading_key");
      }, 1000);
    }
  }, [data]);

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("home_set_yourself_free_key");

    if (shouldScroll === "true") {
      // wait for DOM paint
      setTimeout(() => {
        const section = document.getElementById("home_set_yourself_free");

        if (section) {
          section.scrollIntoView({
            behavior: "auto", // use "smooth" if you want animation
            block: "start",
          });
        }

        // remove key so it doesn't auto-scroll again
        sessionStorage.removeItem("home_set_yourself_free_key");
      }, 1000);
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPageLoading(true);
        const response = await api.get("/home-page");
        const homeData = response?.data?.data;
        setData(homeData);
      } catch (err) {
        console.error("Error fetching home page:", err);
      } finally {
        setPageLoading(false);
      }
    };
    fetchData();
  }, []);


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 2000); // 1000ms = 1 second

  //   return () => clearTimeout(timer); // cleanup
  // }, []);


  // if (pageLoading) {
  //   return <div className="loading-container"></div>;
  // }

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("visit_location_key");

    if (shouldScroll == "true") {
      // wait for DOM paint
      setTimeout(() => {
        const section = document.getElementById("visit-location-section");

        if (section) {
          section.scrollIntoView({
            behavior: "auto", // use "smooth" if you want animation
            block: "start",
          });
        }

        // remove key so it doesn't auto-scroll again
        sessionStorage.removeItem("visit_location_key");
      }, 1000);
    }
  }, [data]);

  return (
    <>
      {
        pageLoading ? (
          <div id="preloader">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {data && data?.bannersection && (
              <header className="hm-header">
                <div className="container">
                  <motion.div
                    className="row"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    id="home_set_yourself_free"
                  >
                    <div className="col-lg-12 col-12 text-center">
                      {/* <Revolvingtext text="Set Your" /> */}
                      <h1
                        className="sec-head mb-3 text-center"
                        dangerouslySetInnerHTML={{
                          __html: data?.bannersection?.heading,
                        }}
                      />
                      <p
                        className="para big"
                        dangerouslySetInnerHTML={{
                          __html: data?.bannersection?.description,
                        }}
                      />
                    </div>
                  </motion.div>
                  <motion.div
                    className="row row-gap-25 hm-card-row"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    id="home_set_yourself_free"
                  >
                    <motion.div className="col-lg-4 col-12" variants={fadeInUp} >
                      <div className="hm-card">
                        <div className="hm-card-img">
                          {data?.bannersection?.image1 && (
                            <Image
                              src={data?.bannersection?.image1}
                              width={500}
                              height={500}
                              alt={"Escape Room"}
                            />
                          )}
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
                                <li key={index}
                                  onClick={() => { sessionStorage.setItem("home_set_yourself_free_key", true) }
                                  }>
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
                          {data?.bannersection?.image2 && (
                            <Image
                              src={data?.bannersection?.image2}
                              width={500}
                              height={500}
                              alt={"Parties"}
                            />
                          )}
                        </div>
                        <div className="details">
                          <h3
                            className="sec-head h3"
                            onClick={() => handleCollapse("parties")}
                          >
                            {"Parties"}
                          </h3>
                          <ul className={collapse === "parties" ? "active" : ""}>
                            <li onClick={() => { sessionStorage.setItem("home_set_yourself_free_key", true) }
                            }>
                              <Link href={`/parties/birthday`}>
                                <span>Birthday</span>
                                <Image src={whArrow} alt={"Birthday"} />
                              </Link>
                            </li>
                            <li onClick={() => { sessionStorage.setItem("home_set_yourself_free_key", true) }
                            }>
                              <Link href={`/parties/bachelor`}>
                                <span>Bachelor(ette)</span>
                                <Image src={whArrow} alt={"Bachelor(ette)"} />
                              </Link>
                            </li>
                            <li onClick={() => { sessionStorage.setItem("home_set_yourself_free_key", true) }
                            }>
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
                          {data?.bannersection?.image3 && (
                            <Image
                              src={data?.bannersection?.image3}
                              width={500}
                              height={500}
                              alt={"Corporate"}
                            />
                          )}
                        </div>
                        <div className="details">
                          <h3
                            className="sec-head h3"
                            onClick={() => handleCollapse("corporate")}
                          >
                            {"Corporate"}
                          </h3>
                          <ul className={collapse === "corporate" ? "active" : ""}>
                            <li onClick={() => { sessionStorage.setItem("home_set_yourself_free_key", true) }
                            }>
                              <Link href={`/corporate/unwind`}>
                                <span>Unwind</span>
                                <Image src={whArrow} alt={"Unwind"} />
                              </Link>
                            </li>
                            <li onClick={() => { sessionStorage.setItem("home_set_yourself_free_key", true) }
                            }>
                              <Link href={`/corporate/retreat`}>
                                <span>Retreat</span>
                                <Image src={whArrow} alt={"Retreat"} />
                              </Link>
                            </li>
                            <li onClick={() => { sessionStorage.setItem("home_set_yourself_free_key", true) }
                            }>
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
            )}
            <HmTextSec home={true} text={data?.bannersection?.content || hmText} />
            <div className="container" >
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12" id="home-about-us-heading">
                  <div className="cus-card" >
                    <p
                      onClick={() => sessionStorage.setItem("home_about_us_heading_key", true)}
                      className="para mb-0"
                      style={{ fontStyle: "italic", cursor: "pointer" }}
                    >
                      <Link
                        href="/about"
                        className="yellow-text"
                        style={{ textDecoration: "underline", cursor: "pointer" }}
                      >
                        What is Breakout? How did it begin? Learn more about us!
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="black-gr-div" id="kuch-bhi" >
              {data && data?.countersection && (
                <TrustedSection className="pb-0" data={data?.countersection} />
              )}
              <LogoSec className="pb-0 pt-80" title={"In the <span>News</span>"} />
              <Image
                style={{ marginBottom: "-1px" }}
                src={IllusHome}
                className="illus-image"
                alt="illus-home"
              />
            </div>
            <div className="black-gr-div" >
              <VisitLocations title="Visit <span>a Location</span>" onClick={() => { sessionStorage.setItem("home_visit_location_key", true) }} page_name="home" id="visit-location-section" />
              <div className="home-faq">
                {data && data?.faqsection &&
                  <FaqSection className="sec-padding-top" data={data?.faqsection} />}
              </div>
              <section className="looking-sec section-padding d-none">
                <div className="container">
                  <motion.div
                    className="row"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <div className="col-lg-12 col-12 text-center">
                      <h2 className="sec-head medium sm-head">
                        Looking <span>For</span>
                      </h2>
                    </div>
                  </motion.div>
                  <motion.div
                    className="row row-gap-25 mt-5 looking-row"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {lookingFor.map((item, index) => (
                      <motion.div
                        className="col-lg-4 col-12"
                        key={index}
                        variants={fadeInUp}
                      >
                        <div className="looking-card">
                          <h3 className="sec-head h3">{item.title}</h3>
                          <ul>
                            {item.links.map((link, index) => (
                              <li key={index}>
                                <Link href={link.link}>
                                  <span>{link.title}</span>
                                  <Image src={arrowRight} alt={link.title} />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>
              <section className="score-sec section-padding d-none">
                <div className="container">
                  <motion.div
                    className="row row-gap-25"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    {scoreCard.map((item, index) => (
                      <motion.div
                        className="col-lg-6 col-12"
                        key={index}
                        variants={fadeInUp}
                      >
                        <div className="score-card">
                          <div className="score-card-img">
                            <Image src={item.img} alt={item.title} />
                          </div>
                          <div className="score-card-content">
                            <h3 className="sec-head sm">{item.score}</h3>
                            <h4 className="sec-head title">{item.title}</h4>
                            <p className="para regular">{item.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>
              {data && data?.footersection && (
                <HomeContact page_name="home" textData={data?.footersection} img={homePageIllus} />
              )}
            </div>
          </>
        )}



    </>
  );
}
