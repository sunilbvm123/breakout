// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import qIcon from "@/images/q-icon.svg";
// import { useGlobalContext } from "@/context/GlobalContext";

// const options = [
//   { id: "quiz-option-1", label: "1 - 25", value: "1-25" },
//   { id: "quiz-option-2", label: "26 - 50", value: "26-50" },
//   { id: "quiz-option-3", label: "51 - 100", value: "51-100" },
//   { id: "quiz-option-4", label: "100+", value: "100+" },
// ];

// const Step1 = () => {
//   const { updateFinderQuizValue, finderQuizValues, venuefinderquiz} = useGlobalContext();
//   console.log("venuefinderquiz_venuefinderquiz_venuefinderquiz",venuefinderquiz?.questions)

//   // Get current value for step1 (may be null)
//   const selectedValue = finderQuizValues?.step1?.value || null;

//   const handleChange = (e) => {
//     updateFinderQuizValue("step1", e.target.value, null);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="quiz-step"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <motion.h2 className="sec-head medium" variants={itemVariants}>
//         <span>Q{venuefinderquiz?.questions[0]?.id}:</span> {venuefinderquiz?.questions[0]?.text}
//       </motion.h2>
//       <div className="quiz-options">
//         <motion.div className="row row-gap-25" variants={containerVariants}>
//           {options.map((opt) => (
//             <motion.div
//               className="col-lg-6 col-12"
//               variants={itemVariants}
//               key={opt.id}
//             >
//               <div className="quiz-option">
//                 <input
//                   type="radio"
//                   name="quiz-option"
//                   id={opt.id}
//                   value={opt.value}
//                   checked={selectedValue === opt.value}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor={opt.id}>
//                   <span>{opt.label}</span>
//                 </label>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Step1;


"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "@/context/GlobalContext";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Step1 = ({ goToResult }) => {
  const { updateFinderQuizValue, finderQuizValues, venuefinderquiz } =
    useGlobalContext();

  const questions = venuefinderquiz?.questions || [];
  const [currentStep, setCurrentStep] = useState(0);

  const question = questions[currentStep];
  console.log("sdbfgsdjfgsdhfjsdgf", venuefinderquiz)
  const options = question?.options || [];
  const type = question?.type;
  const range = question?.range;

  const totalSteps = questions.length;

  const [checkboxValues, setCheckboxValues] = useState([]);
  const [rangeValue, setRangeValue] = useState(range?.min || 0);

  const selectedValue =
    finderQuizValues?.[`step${question?.id}`]?.value || null;


  const sliderStyles = `
  .custom-range-slider {
    --slider-bg: #2D3030;
    --slider-track-bg: #474A4A;
    --slider-thumb-bg: #ffb32c;
    --slider-thumb-border: #ffb32c;
    --slider-thumb-size: 24px;
    --slider-thumb-shadow: 0 2px 8px rgba(0,0,0,0.15);
    --slider-track-height: 8px;
    width: 100%;
    padding: 0;
    margin-bottom: 8px;
  }

  .range-slider {
    background: #2D3030;
    padding: 10px 0;
    border-radius: 10px !important;
  }

  .range-slider__range {
    background: transparent !important;
    height: var(--slider-track-height);
    border-radius: 6px;
    border: 1px solid #ffb32c;
  }

  .range-slider__thumb {
    background: #ffb32c !important;
    border: 2px solid var(--slider-thumb-border);
    box-shadow: var(--slider-thumb-shadow);
    width: var(--slider-thumb-size);
    height: var(--slider-thumb-size);
    top: 50%;
    transform: translateY(-50%);
  }

  .range-slider__thumb[data-active="true"] {
    box-shadow: 0 0 0 4px rgba(255,179,44,0.2);
  }
`;

  /* ---------------- RESET RANGE WHEN QUESTION CHANGES ---------------- */

  useEffect(() => {
    if (type === "range") {
      setRangeValue(range?.min || 0);
    }
  }, [question]);

  /* ---------------- NEXT / PREV ---------------- */

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // last question finished
      if (goToResult) {
        goToResult();
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  /* ---------------- RADIO ---------------- */

  const handleRadioChange = (e) => {
    updateFinderQuizValue(`step${question?.id}`, e.target.value, null);
  };

  /* ---------------- CHECKBOX ---------------- */

  const handleCheckboxChange = (e) => {
    const value = e.target.value;

    const updated = checkboxValues.includes(value)
      ? checkboxValues.filter((v) => v !== value)
      : [...checkboxValues, value];

    setCheckboxValues(updated);

    updateFinderQuizValue(`step${question?.id}`, updated, null);
  };

  /* ---------------- DATE ---------------- */

  const handleDateChange = (e) => {
    updateFinderQuizValue(`step${question?.id}`, e.target.value, null);
  };

  /* ---------------- RANGE ---------------- */

  const handleSliderInput = (value) => {
    const val = value[1];
    setRangeValue(val);

    updateFinderQuizValue(`step${question?.id}`, val, null);
  };

  /* ---------------- FIX STEP IF API STEP IS INVALID ---------------- */

  const stepValue =
    range?.step > range?.max - range?.min
      ? Math.ceil((range?.max - range?.min) / 5)
      : range?.step || 1;

  /* ---------------- DYNAMIC LABELS ---------------- */

  const labels = range
    ? [
      range.min,
      Math.round(range.max * 0.25),
      Math.round(range.max * 0.5),
      Math.round(range.max * 0.75),
      range.max,
    ]
    : [];

  /* ---------------- ANIMATION ---------------- */

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="quiz-step"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* QUESTION */}

      <motion.h2 className="sec-head medium" variants={itemVariants}>
        <span>Q{question?.id}:</span> {question?.text}
      </motion.h2>

      <div className="quiz-options">
        <motion.div className="row row-gap-25" variants={containerVariants}>

          {/* RADIO */}

          {type === "radio" &&
            options.map((opt) => (
              <motion.div
                className="col-lg-6 col-12"
                variants={itemVariants}
                key={opt.id}
              >
                <div className="quiz-option">
                  <input
                    type="radio"
                    name={`quiz-${question?.id}`}
                    id={opt.id}
                    value={opt.value}
                    checked={selectedValue === opt.value}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor={opt.id}>
                    <span>{opt.label || opt.value}</span>
                  </label>
                </div>
              </motion.div>
            ))}

          {/* CHECKBOX */}

          {type === "checkbox" &&
            options.map((opt) => (
              <motion.div
                className="col-lg-6 col-12"
                variants={itemVariants}
                key={opt.id}
              >
                <div className="quiz-option">
                  <input
                    type="checkbox"
                    id={opt.id}
                    value={opt.value}
                    checked={checkboxValues.includes(opt.value)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={opt.id}>
                    <span>{opt.label || opt.value}</span>
                  </label>
                </div>
              </motion.div>
            ))}

          {/* DATE */}

          {type === "date" && (
            <motion.div variants={itemVariants} className="col-lg-6 col-12">
              <input
                type="date"
                className="form-control"
                placeholder={question?.placeholder}
                onChange={handleDateChange}
              />
            </motion.div>
          )}

          {/* RANGE */}

          {type === "range" && (
            <>
              <style>{sliderStyles}</style>
              <motion.div
                className="range-selector-wrapper custom-range-slider col-lg-12"
                variants={itemVariants}
              >
                <div style={{ width: "100%", margin: "20px 0" }}>
                  <RangeSlider
                    className="single-thumb"
                    min={range?.min || 0}
                    max={range?.max || 100}
                    step={stepValue}
                    value={[range?.min || 0, rangeValue]}
                    thumbsDisabled={[true, false]}
                    rangeSlideDisabled={true}
                    onInput={handleSliderInput}
                  />
                </div>

                {/* RANGE LABELS */}

                <div
                  className="range-values"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  {labels.map((label) => {
                    const isActive = rangeValue === label;

                    return (
                      <span
                        key={label}
                        style={{
                          fontWeight: isActive ? "bold" : "normal",
                          color: isActive ? "#000" : "#888",
                        }}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>

                {/* CURRENT VALUE */}

                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.2em",
                    marginTop: "10px",
                    display: "block",
                  }}
                >
                  {range?.prefix} {rangeValue} {range?.suffix}
                </span>
              </motion.div>
            </>
          )}

          {/* CHECKBOX */}

          {type === "select" &&
            options.map((opt) => (
              <motion.div
                className="col-lg-6 col-12"
                variants={itemVariants}
                key={opt.id}
              >
                <div className="quiz-option">
                  <input
                    type="checkbox"
                    id={opt.id}
                    value={opt.value}
                    checked={checkboxValues.includes(opt.value)}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={opt.id}>
                    <span>{opt.label || opt.value}</span>
                  </label>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* NAVIGATION */}

      <div className="quiz-navigation" style={{ marginTop: "30px" }}>
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="main-btn dark-btn wide-sm"
        >
          <span>Previous</span>
        </button>

        <button
          onClick={handleNext}
          className="main-btn wide-sm"
        >
          <span>{currentStep === totalSteps - 1 ? "Finish" : "Next"}</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Step1;