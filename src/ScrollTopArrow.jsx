import { BiArrowFromBottom } from "react-icons/bi";
import { useState, useEffect } from 'react';
import './App.css';

const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      
      <BiArrowFromBottom
        className="scrollTop z-1000 text-blue-600 bg-white rounded py-1/2 text-3xl cursor-pointer fixed bottom-2 right-2"
        onClick={scrollTop}
        style={{ height: 50, display: showScroll ? 'flex' : 'none' }}
      />
    </div>
  );
};

export default ScrollTopArrow;
