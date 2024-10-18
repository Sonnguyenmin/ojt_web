import React from "react";
import SearchHomeContent from "./components/HomeContent/searchContent/SearchHomeContent";
import HomeMainContent from "./components/HomeContent/mainContent/HomeMainContent";
import SpecialUserContent from "./components/HomeContent/specialUserContent/SpecialUserContent";
import WhyYouChoseUsContent from "./components/HomeContent/whyYouChoseUs/WhyYouChoseUsContent";
import RecruitmentPartner from "./components/HomeContent/recruitmentPartner/RecruitmentPartner";

export default function HomeContent() {
  return (
    <div>
      <SearchHomeContent />
      <HomeMainContent />
      <SpecialUserContent />
      <WhyYouChoseUsContent />
      <RecruitmentPartner />
    </div>
  );
}
