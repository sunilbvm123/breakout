"use client";
import { createContext, useContext, useState, useEffect } from "react";
import api from "@/helpers/api";
import axios from "axios";
import { toast } from "react-toastify";
import test_api from "@/helpers/api/test_api";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export const GlobalProvider = ({ children }) => {
  // State for different API data
  const [escaperoomLocations, setEscaperoomLocations] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [newsLogo, setNewsLogo] = useState(null);
  const [thirdPartyLocations, setThirdPartyLocations] = useState(null);
  const [thirdPartyGames, setThirdPartyGames] = useState(null);
  const [availableSlots, setAvailableSlots] = useState(null);
  const [venueCategories, setVenueCategories] = useState(null);
  const [siteSettings, setSiteSettings] = useState(null);
  const [gettncs, setGettnc] = useState(null);
  const [getcareer, setCareer] = useState(null);
  const [getcontact, setContact] = useState(null);
  const [getprivacy, setPrivacy] = useState(null);
  const [getrefundpolicy, setRefundPolicy] = useState(null);
  const [gettermservies, setTermServies] = useState(null);
  const [venuefinderquiz, setVenueFinderquiz] = useState(null);
  const [finderQuizValues, setFinderQuizValues] = useState({
    step1: {
      value: null,
      error: null,
    },
    step2: {
      value: null,
      error: null,
    },
    step3: {
      value: null,
      error: null,
    },
    step4: {
      value: null,
      error: null,
    },
    step5: {
      value: null,
      error: null,
    },
  });
  const [quoteCalculatorValues, setQuoteCalculatorValues] = useState({
    step1: {
      value: [0, 5],
      error: null,
    },
    step2: {
      value: null,
      error: null,
    },
    step3: {
      value: null,
      error: null,
    },
  });
  const [costCalculatorValues, setCostCalculatorValues] = useState({
    step1: {
      value: null,
      error: null,
    },
    step2: {
      value: null,
      error: null,
    },
    step3: {
      value: null,
      error: null,
    },
    step4: {
      value: null,
      error: null,
    },
    step5: {
      value: null,
      error: null,
    },
  });
 const get_blog_id = localStorage.getItem("blog_slug")
  // Loading states
  const [loading, setLoading] = useState({
    escaperoomLocations: true,
    blogs: true,
    newsLogo: true,
    thirdPartyLocations: true,
    thirdPartyGames: true,
    venueCategories: true,
    siteSettings: true,
    gettncs:true,
    getcareer:true,
    getcontact:true,
    getprivacy:true,
    getrefundpolicy:true,
    gettermservies:true,
    venuefinderquiz:true
  });

  // Error states
  const [errors, setErrors] = useState({
    escaperoomLocations: null,
    blogs: null,
    newsLogo: null,
    thirdPartyLocations: null,
    thirdPartyGames: null,
    venueCategories: null,
    siteSettings: null,
    gettncs:null,
    getcareer:null,
    getcontact:null,
    getprivacy:null,
    getrefundpolicy:null,
    gettermservies:null,
    venuefinderquiz:null
  });

  const updateFinderQuizValue = (step, value, error) => {
    setFinderQuizValues((prev) => ({
      ...prev,
      [step]: { value, error },
    }));
  };

  const updateQuoteCalculatorValue = (step, value, error) => {
    setQuoteCalculatorValues((prev) => ({
      ...prev,
      [step]: { value, error },
    }));
  };

  const updateCostCalculatorValue = (step, value, error) => {
    setCostCalculatorValues((prev) => ({
      ...prev,
      [step]: { value, error },
    }));
  };

  // Fetch home page data
  const fetchEscaperoomLocations = async () => {
    try {
      setLoading((prev) => ({ ...prev, home: true }));
      const response = await api.get("/escaperoom-locations");
      setEscaperoomLocations(response.data.data);
      setErrors((prev) => ({ ...prev, escaperoomLocations: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, escaperoomLocations: error }));
    } finally {
      setLoading((prev) => ({ ...prev, escaperoomLocations: false }));
    }
  };

  const fetchPrivacyPolicy = async () => {
    try {
      setLoading((prev) => ({ ...prev, getprivacy: true }));
      const response = await api.get("/privacy-policy");
      setPrivacy(response.data.data);
      setErrors((prev) => ({ ...prev, getprivacy: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, getprivacy: error }));
    } finally {
      setLoading((prev) => ({ ...prev, getprivacy: false }));
    }
  };

  const fetchRefundPolicy = async () => {
    try {
      setLoading((prev) => ({ ...prev, getrefundpolicy: true }));
      const response = await api.get("/refund-policy");
      setRefundPolicy(response.data.data);
      setErrors((prev) => ({ ...prev, getrefundpolicy: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, getrefundpolicy: error }));
    } finally {
      setLoading((prev) => ({ ...prev, getrefundpolicy: false }));
    }
  };

  const fetchTermsServies = async () => {
    try {
      setLoading((prev) => ({ ...prev, gettermservies: true }));
      const response = await api.get("/terms-of-service");
      setTermServies(response.data.data);
      setErrors((prev) => ({ ...prev, gettermservies: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, gettermservies: error }));
    } finally {
      setLoading((prev) => ({ ...prev, gettermservies: false }));
    }
  };


  const fetchVenueCategories = async () => {
    try {
      setLoading((prev) => ({ ...prev, venueCategories: true }));
      const response = await api.get("/venues-categories");
      setVenueCategories(response.data.data);
      setErrors((prev) => ({ ...prev, venueCategories: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, venueCategories: error }));
    } finally {
      setLoading((prev) => ({ ...prev, venueCategories: false }));
    }
  };

  const fetchVenuefinderquiz = async () => {
    try {
      setLoading((prev) => ({ ...prev, venuefinderquiz: true }));
      const response = await api.get(`/quiz/${get_blog_id}/take`);
      setVenueFinderquiz(response.data.data);
      setErrors((prev) => ({ ...prev, venuefinderquiz: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, venuefinderquiz: error }));
    } finally {
      setLoading((prev) => ({ ...prev, venuefinderquiz: false }));
    }
  };

  const fetchThirdPartyLocations = async () => {
    try {
      setLoading((prev) => ({ ...prev, thirdPartyLocations: true }));
      const response = await axios.get("/api/locations");
      setThirdPartyLocations(response.data);
      setErrors((prev) => ({ ...prev, thirdPartyLocations: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, thirdPartyLocations: error }));
    } finally {
      setLoading((prev) => ({ ...prev, thirdPartyLocations: false }));
    }
  };

  const fetchThirdPartyGames = async (locId) => {
    try {
      setLoading((prev) => ({ ...prev, thirdPartyGames: true }));
      const response = await axios.get(`/api/games?locationId=${locId}`);
      setThirdPartyGames(response.data);
      setErrors((prev) => ({ ...prev, thirdPartyGames: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, thirdPartyGames: error }));
    } finally {
      setLoading((prev) => ({ ...prev, thirdPartyGames: false }));
    }
  };

  const fetchAvailableSlots = async (locId, gameIds, startDate) => {
    if (!locId || !gameIds || !startDate) {
      setErrors((prev) => ({ ...prev, availableSlots: "Invalid parameters" }));
      return;
    }
    try {
      setLoading((prev) => ({ ...prev, availableSlots: true }));
      const response = await axios.post(`/api/slots/`, {
        locationId: locId,
        gameIds: gameIds,
        startDate: startDate
        // endDate: endDate,
      });
      setAvailableSlots(response.data);
      setErrors((prev) => ({ ...prev, availableSlots: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, availableSlots: error }));
    } finally {
      setLoading((prev) => ({ ...prev, availableSlots: false }));
    }
  };

  const bookASlot = async (bookingData) => {
    try {
      const response = await axios.post(`/api/bookings`, bookingData);
      return response.data;
    } catch (error) {
      console.log("error", error);
      toast.error(
        error?.response?.data?.error || error?.message || "Something went wrong"
      );
      throw error;
    }
  };

  const fetchBlogs = async () => {
    try {
      setLoading((prev) => ({ ...prev, blogs: true }));
      const response = await api.get("/blogs");
      const res2 = await api.get("/birthday-blog");
      setBlogs([...response.data.data, ...res2.data.data]);
      setErrors((prev) => ({ ...prev, blogs: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, blogs: error }));
    } finally {
      setLoading((prev) => ({ ...prev, blogs: false }));
    }
  };

  const fetchNewsLogo = async () => {
    try {
      setLoading((prev) => ({ ...prev, newsLogo: true }));
      const response = await api.get("/logos/news");
      setNewsLogo(response.data.data);
      setErrors((prev) => ({ ...prev, newsLogo: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, newsLogo: error }));
    } finally {
      setLoading((prev) => ({ ...prev, newsLogo: false }));
    }
  };

  const fetchSiteSettings = async () => {
    try {
      setLoading((prev) => ({ ...prev, siteSettings: true }));
  
      const response = await test_api.get("/getsitesettings");
      setSiteSettings(response.data.data);
  
      setErrors((prev) => ({ ...prev, siteSettings: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, siteSettings: error }));
    } finally {
      setLoading((prev) => ({ ...prev, siteSettings: false }));
    }
  };

  const fetchgettnc = async () => {
    try {
      setLoading((prev) => ({ ...prev, gettncs: true }));
  
      const response = await test_api.get("/gettnc");
      console.log("jskdfjsdhfjsgfgsdfsdj",response)
      setGettnc(response.data.data);
  
      setErrors((prev) => ({ ...prev, gettncs: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, gettncs: error }));
    } finally {
      setLoading((prev) => ({ ...prev, gettncs: false }));
    }
  };
  
  
  const fetchcareer = async () => {
    try {
      setLoading((prev) => ({ ...prev, getcareer: true }));
  
      const response = await test_api.get("/career");
      console.log("jskdfjsdhfjsgfgsdfsdj",response)
      setCareer(response.data.data);
  
      setErrors((prev) => ({ ...prev, getcareer: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, getcareer: error }));
    } finally {
      setLoading((prev) => ({ ...prev, getcareer: false }));
    }
  };

  const fetchContact = async () => {
    try {
      setLoading((prev) => ({ ...prev, getcontact: true }));
  
      const response = await test_api.get("/contact");
      console.log("jskdfjsdhfjsgfgsdfsdj",response)
      setContact(response.data.data);
  
      setErrors((prev) => ({ ...prev, getcontact: null }));
    } catch (error) {
      setErrors((prev) => ({ ...prev, getcontact: error }));
    } finally {
      setLoading((prev) => ({ ...prev, getcontact: false }));
    }
  };
  
  

  // Initialize data on component mount
  useEffect(() => {
    fetchEscaperoomLocations();
    fetchBlogs();
    fetchNewsLogo();
    fetchThirdPartyLocations();
    fetchVenueCategories();
    fetchSiteSettings();
    fetchgettnc()
    fetchcareer()
    fetchContact()
    fetchPrivacyPolicy();
    fetchRefundPolicy();
    fetchTermsServies();
    fetchVenuefinderquiz();
  }, []);

  // Refresh functions for manual data updates
  const refreshData = {
    escaperoomLocations: fetchEscaperoomLocations,
    blogs: fetchBlogs,
    newsLogo: fetchNewsLogo,
    thirdPartyLocations: fetchThirdPartyLocations,
    venueCategories: fetchVenueCategories,
    siteSettings:fetchSiteSettings,
    gettncs:fetchgettnc,
    getcareer:fetchcareer,
    getcontact:fetchContact,
    getprivacy:fetchPrivacyPolicy,
    getrefundpolicy:fetchRefundPolicy,
    gettermservies:fetchTermsServies,
    venuefinderquiz:fetchVenuefinderquiz,
  };

  const value = {
    // Data
    escaperoomLocations,
    blogs,
    newsLogo,
    siteSettings,
    gettncs,
    getcareer,
    getcontact,
    getprivacy,
    getrefundpolicy,
    gettermservies,
    thirdPartyLocations,
    thirdPartyGames,
    availableSlots,
    venueCategories,
    venuefinderquiz,
    finderQuizValues,
    quoteCalculatorValues,
    costCalculatorValues,
    updateFinderQuizValue,
    updateQuoteCalculatorValue,
    updateCostCalculatorValue,
    bookASlot,
    fetchSiteSettings,
    // Loading states
    loading,

    // Error states
    errors,

    // Refresh functions
    refreshData,

    // Individual fetch functions
    fetchEscaperoomLocations,
    fetchBlogs,
    fetchNewsLogo,
    fetchThirdPartyLocations,
    fetchVenueCategories,
    fetchThirdPartyGames,
    fetchAvailableSlots,
    fetchSiteSettings,
    fetchgettnc,
    fetchcareer,
    fetchContact,
    fetchPrivacyPolicy,
    fetchRefundPolicy,
    fetchTermsServies,
    fetchVenuefinderquiz
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
