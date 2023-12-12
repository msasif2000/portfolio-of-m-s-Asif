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
        className="scrollTop z-1000 text-red-800 text-3xl cursor-pointer fixed bottom-4 right-4"
        onClick={scrollTop}
        style={{ height: 50, display: showScroll ? 'flex' : 'none' }}
      />
    </div>
  );
};

export default ScrollTopArrow;
