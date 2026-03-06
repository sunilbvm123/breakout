import React from "react";
import Image from "next/image";
import search from "@/images/search.svg";
import info from "@/images/info.svg";
import selectDrop from "@/images/select-drop.svg";
import linkIcon from "@/images/link-icon.svg";
import whatsappIcon from "@/images/whatsapp-icon.svg";
import instaIcon from "@/images/insta-icon.svg";
import xIcon from "@/images/x-ixon.svg";

const ResourcesSidebar = ({
  handleSearchChange,
  handleSortChange,
  totalResources,
  searchRef,
}) => {
  return (
    <div className="resource-sidebar">
      <h3 className="sec-head medium-20 text-center">Find Resources</h3>
      <div className="form-group search-group style-2 mt-4">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search..."
            onKeyDown={handleSearchChange}
            ref={searchRef}
          />
          <Image src={search} alt="search" />
        </div>
      </div>
      <p className="para text-center mb-0">{totalResources} resources found!</p>
      <div className="filter-head">
        <h3 className="sec-head medium-20 mb-0">Filter</h3>
        <button className="border-0">
          <Image src={info} alt="info" />

        </button>
      </div>
      <div className="form-group search-group style-2 mt-4">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search..."
            onKeyDown={handleSearchChange}
            ref={searchRef}
          />
          <Image src={search} alt="search" />
        </div>
      </div>
      <p className="para text-center mb-0">{totalResources} resources found!</p>
      {/* <div className="form-group mt-5 style-2">
        <div className="input-group">
          <p className="sec-head book-20">
            <span>Filter</span>
          </p>
        </div>
      </div> */}
      <h3 className="sec-head mt-5 medium-20 text-center">Sort By</h3>
      <div className="filter-head">
        <h3 className="sec-head medium-20 mb-0">Location</h3>
        <button className="border-0">
          <Image src={info} alt="info" />

        </button>
      </div>
      <div className="form-group mt-4 style-2">
        <div className="input-group">
          {/* <p className="sec-head book-20">
            <span>Sort by</span>
          </p> */}
          <div className="select-group">
            <select name="sort" id="sort" onChange={handleSortChange}>
              {/* <option value="">Sort by</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Most Popular</option> */}
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
            <Image src={selectDrop} alt="select" />
          </div>
        </div>
      </div>
      <div className="form-group mt-4 style-2">
        <div className="input-group">
        <div className="filter-head">
        <h3 className="sec-head medium-20">Resource Type</h3>
        <button className="border-0">
          <Image src={info} alt="info" />
        </button>
      </div>
          <div className="select-group">
            <select name="" id="">
              <option value="">Select Type</option>
              <option value="">All</option>
              <option value="">All</option>
              <option value="">All</option>
              <option value="">All</option>
            </select>
            <Image src={selectDrop} alt="select" />
          </div>
        </div>
      </div>
      <div className="form-group mt-4 style-2">
        <div className="input-group">
        <div className="filter-head">
        <h3 className="sec-head medium-20">Looking For?</h3>
        <button className="border-0">
          <Image src={info} alt="info" />
        </button>
      </div>
          <div className="select-group">
            <select name="" id="">
              <option value="">Select Option</option>
              <option value="">All</option>
              <option value="">All</option>
              <option value="">All</option>
              <option value="">All</option>
            </select>
            <Image src={selectDrop} alt="select" />
          </div>
        </div>
      </div>

      <div className="share-blog-list">
      <h3 className="sec-head pt-80 mb-3 medium-20 text-center">Share Blog</h3>
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
  );
};

export default ResourcesSidebar;
