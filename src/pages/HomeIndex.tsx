import AboutUs from "@Components/Sections/AboutUs";
import HomePage from "./HomePage";
import SchoolLife from "@Components/Sections/SchoolLife";
import Services from "@Components/Sections/Services";
import ContactUs from "@Components/Sections/ContactUs";

const HomeIndex = () => {
  return (
    <>
      <HomePage />
      <AboutUs />
      <SchoolLife />
      <Services />
      <ContactUs />
    </>
  );
};

export default HomeIndex;
