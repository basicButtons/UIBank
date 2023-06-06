/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";

export const useDevice = ({
  tabletAndMobileMaxW,
  deskOrLaptopMinW,
  tabletMinW,
  tabletMaxW,
  mobileMaxW,
}: any) => {
  const [detectTouchscreen, setDetectTouchscreen] = useState(false);

  const isTabletAndMobile = useMediaQuery({ maxWidth: tabletAndMobileMaxW });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: deskOrLaptopMinW });
  const isTablet = useMediaQuery({
    minWidth: tabletMinW,
    maxWidth: tabletMaxW,
  });
  const isMobile = useMediaQuery({ maxWidth: mobileMaxW });

  const TabletAndMobile = ({ children }: any) =>
    isTabletAndMobile ? children : null;
  const DesktopOrLaptop = ({ children }: any) =>
    isDesktopOrLaptop ? children : null;
  const Tablet = ({ children }: any) => (isTablet ? children : null);
  const Mobile = ({ children }: any) => (isMobile ? children : null);

  function detectTouchscreenHandler() {
    let hasTouchScreen = false;

    // if Pointer Events are supported, just check maxTouchPoints
    if (window.PointerEvent && "maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    }
    if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = (navigator as any).msMaxTouchPoints > 0;
    }

    // no Pointer Events...
    if (
      window.matchMedia &&
      window.matchMedia("(any-pointer:coarse)").matches
    ) {
      // check for any-pointer:coarse which mostly means touchscreen
      const mQ = (window as any).matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
      } else if ("orientation" in window) {
        hasTouchScreen = true; // deprecated, but good fallback
      } else {
        let UA = navigator.userAgent;
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
      }
    }

    return setDetectTouchscreen(hasTouchScreen);
  }

  useEffect(() => {
    detectTouchscreenHandler();
  }, []);

  return {
    TabletAndMobile,
    DesktopOrLaptop,
    Tablet,
    Mobile,
    detectTouchscreen,
    isDesktopOrLaptop,
    isTabletAndMobile,
    isTablet,
    isMobile,
  };
};

export default useDevice;

useDevice.propTypes = {
  tabletAndMobileMaxW: PropTypes.number,
  deskOrLaptopMinW: PropTypes.number,
  tabletMinW: PropTypes.number,
  tabletMaxW: PropTypes.number,
  mobileMaxW: PropTypes.number,
};

useDevice.defaultProps = {
  tabletAndMobileMaxW: 1279,
  deskOrLaptopMinW: 1280,
  tabletMinW: 768,
  tabletMaxW: 1279,
  mobileMaxW: 767,
};
