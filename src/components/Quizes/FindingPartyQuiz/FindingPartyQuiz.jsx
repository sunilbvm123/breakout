"use client";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import partyQuizIllus from "@/images/party-quiz-illus.png";
import Image from "next/image";
import Step5 from "./Step5";

const FindingPartyQuiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isResult, setIsResult] = useState(false);
  const totalSteps = 5; // Adjust based on your needs

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // const renderStep = (step) => {
  //   switch (step) {
  //     case 1:
  //       return <Step1 />;
  //     case 2:
  //       return <Step2 />;
  //     case 3:
  //       return <Step3 />;
  //     case 4:
  //       return <Step4 />;
  //     case 5:
  //       return <Step5 setIsResult={setIsResult} />;
  //     default:
  //       return <Step1 />;
  //   }
  // };
  const renderStep = (step) => {
    switch (step) {
      case 1:
        return <Step1 goToResult={() => setCurrentStep(2)} />;
      case 2:
        return <Step5 setIsResult={setIsResult} />;
      default:
        return <Step1 goToResult={() => setCurrentStep(2)} />;
    }
  };
  return (
    <div className="black-gr-div">
      <section className="party-finding-quiz section-padding">
        <div className="container">
          <div className="row pb-5">
            <div className="col-12 text-center">
              {currentStep === 5 ? (
                <>
                  {!isResult && (
                    <>
                      <h3 className="sec-head medium">
                        We’re doing the math for you
                      </h3>
                      <p className="sec-head medium-20 mt-3">
                        You’re just <span>1 step away</span>
                      </p>
                    </>
                  )}
                </>
              ) : (
                <h3 className="sec-head medium">
                  Finding <span>Party Venue Quiz</span>
                </h3>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="quiz-container">
                <div className="quiz-content">{renderStep(currentStep)}</div>
                {/* {currentStep < totalSteps && (
                  <div className="quiz-navigation">
                    <button
                      onClick={handlePrev}
                      disabled={currentStep === 1}
                      className="main-btn dark-btn wide-sm"
                    >
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={currentStep === totalSteps}
                      className="main-btn wide-sm"
                    >
                      <span>Next</span>
                    </button>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Image src={partyQuizIllus} alt="black-gr" className="w-100 h-auto" />
    </div>
  );
};

export default FindingPartyQuiz;
