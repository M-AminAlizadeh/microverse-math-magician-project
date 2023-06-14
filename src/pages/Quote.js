import Navbar from "../components/Navbar";
import QuoteComponent from "../components/Quote";

const Quote = () => {
  return (
    <div className="quote-page-container">
      <Navbar />
      <div className="quote-page-content-container">
        <QuoteComponent />
      </div>
    </div>
  );
};

export default Quote;
