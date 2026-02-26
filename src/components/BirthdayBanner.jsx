// import React from "react";
// import Image from "next/image";
// import bannerStars from "@/images/banner-star.svg";

// const BirthdayBanner = ({
//   title,
//   subTitle,
//   img,
//   data,
//   hasBannerStars = false,
// }) => {
//   const renderImageOrVideo = (image) => {
//     if (typeof image === "string" && image) {
//       if (
//         image.includes(".mp4") ||
//         image.includes(".webm") ||
//         image.includes(".mov") ||
//         image.includes(".avi") ||
//         image.includes(".mkv")
//       ) {
//         return <video src={image} autoPlay muted loop playsInline />;
//       } else {
//         return (
//           <Image src={image} width={1920} height={1080} alt="banner-image" />
//         );
//       }
//     }
//     return null;
//   };

//   const description = hasBannerStars
//     ? `<img src="${
//         bannerStars.src
//       }" width="20" height="20" alt="banner-stars" style="vertical-align:middle;margin-right:4px;" />${
//         data?.description || ""
//       }<img src="${
//         bannerStars.src
//       }" width="20" height="20" alt="banner-stars" style="vertical-align:middle;margin-left:4px;" />`
//     : data?.description;

//   return (
//     <header className="bday-page-banner">
//       {renderImageOrVideo(data?.image)}
//       {/* {data?.image && (
//           <Image src={data?.image} width={1920} height={1080} alt="bday-banner" />
//         )} */}
//       <div className="bday-ban-con">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 text-center">
//               <h1
//                 className="sec-head"
//                 dangerouslySetInnerHTML={{
//                   __html: data?.heading || title || "",
//                 }}
//               ></h1>

//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: description || "",
//                 }}
//               ></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default BirthdayBanner;

"use client";
import React from "react";
import Image from "next/image";
import bannerStars from "@/images/banner-star.svg";

const BirthdayBanner = ({
  title,
  subTitle,
  img,
  data,
  hasBannerStars = false,
}) => {
  const renderImageOrVideo = (media) => {
    if (!media || typeof media !== "string") return null;

    const isVideo = /\.(mp4|webm|mov|avi|mkv)$/i.test(media);

    if (isVideo) {
      return (
        <video
          className="banner-media"
          // src="/videos/founder-video.mp4"
          src={media}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      );
    }

    // Image fallback
    return (
      <Image
        src={media}
        width={1920}
        height={1080}
        alt="banner"
        priority
        className="banner-media"
      />
    );
  };

  const description = hasBannerStars
    ? `<img src="${bannerStars.src}" width="20" height="20" alt="banner-stars" style="vertical-align:middle;margin-right:4px;" />
       ${data?.description || ""}
       <img src="${bannerStars.src}" width="20" height="20" alt="banner-stars" style="vertical-align:middle;margin-left:4px;" />`
    : data?.description;

  return (
    <header className="bday-page-banner">
      {renderImageOrVideo(data?.image)}

      <div className="bday-ban-con">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1
                className="sec-head"
                dangerouslySetInnerHTML={{
                  __html: data?.heading || title || "",
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: description || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BirthdayBanner;
