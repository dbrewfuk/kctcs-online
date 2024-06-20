import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Rfi from "./Rfi";

const Header = ({ showModal, setShowModal, isActive }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleRequestButtonClick = () => {
    setShowModal(true);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        triggerButtonRef.current.focus(); // Return focus to the trigger button
      }
    };

    const trapFocus = (e) => {
      if (isMobileMenuOpen && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll("a, button");
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keydown", trapFocus);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", trapFocus);
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={`flex flex-col fixed w-full z-[100] transition ease-in-out duration-[250ms] ${scrolled ? "fixed top-0 shadow-sm" : "relative"}`}
    >
      <header
        className={`w-full fixed z-[100] bg-[#005cb8] relative lg:top-0 border-[#00467F]  flex justify-between w-full h-[64px] lg:h-[auto] lg:px-[32px] lg:h-[auto] 
        }`}
        style={{ background: scrolled ? "" : "" }}
      >
        <div className="px-[0px] flex justify-between w-full z-[50] bg-[#005cb8] border-b border-[#00467F]">
          <div className="flex items-center w-full pl-[24px] pr-0 lg:pl-0 justify-between relative">
            <div>
              <a
                className="flex gap-[8px] items-end"
                href="./index.html"
                aria-label="Home"
              >
                <svg
                  className="h-[32px] lg:h-[36px] w-auto"
                  width="431"
                  height="59"
                  viewBox="0 0 431 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_8_265)">
                    <mask
                      id="mask0_8_265"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="309"
                      height="59"
                    >
                      <path d="M309 0H0V59H309V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_8_265)">
                      <mask
                        id="mask1_8_265"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="309"
                        height="59"
                      >
                        <path
                          d="M308.17 0.366272H0V58.6339H308.17V0.366272Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask1_8_265)">
                        <path
                          d="M128.435 36.1503C128.447 35.9461 128.447 35.7411 128.435 35.5369C128.405 35.3728 128.365 35.2105 128.317 35.0508C128.232 34.7615 128.064 34.5034 127.833 34.3091C127.604 34.0473 127.391 33.7724 127.193 33.4859C126.782 32.9371 126.378 32.3771 125.935 31.8574L120.598 25.5987C119.93 24.7107 119.627 23.6012 119.753 22.4979L120.606 17.4033C120.668 16.8663 120.615 16.3224 120.452 15.8071C120.287 15.2919 120.016 14.8171 119.655 14.414L115.07 9.90654C114.721 9.57877 114.267 9.38313 113.788 9.35334C113.309 9.32359 112.835 9.46161 112.447 9.74359L111.253 10.6679C110.34 11.312 109.28 11.7179 108.17 11.8489H108.114C107.598 11.8507 107.09 11.7216 106.637 11.4736C106.184 11.2255 105.803 10.8667 105.528 10.431L105.441 10.2802C105.202 9.86253 104.864 9.50909 104.457 9.25035C104.05 8.99161 103.586 8.83532 103.106 8.79489C102.707 8.81386 102.324 8.95358 102.008 9.19539C101.69 9.43717 101.455 9.76953 101.333 10.1482C101.267 10.4808 101.081 10.7772 100.808 10.9798C100.535 11.1823 100.197 11.2765 99.8587 11.2439C99.5112 11.1459 99.2012 10.945 98.9702 10.6678C98.7391 10.3905 98.5982 10.05 98.5663 9.69115C98.4639 9.27357 98.2329 8.89877 97.9042 8.62014C97.5764 8.34151 97.1678 8.17325 96.7386 8.13934L93.33 7.71884C92.3964 7.60365 89.0519 6.84976 88.7467 5.91794L87.7943 3.01476C87.6182 2.523 87.3131 2.08737 86.9105 1.75329C86.6522 1.473 86.3346 1.25355 85.9807 1.11084C85.5137 1.09088 85.0462 1.13787 84.5926 1.25038C84.1102 1.31269 83.6214 1.30701 83.1405 1.23353C82.6503 1.11553 82.1422 1.07432 81.6491 0.95632C81.3125 0.832999 80.99 0.674138 80.6873 0.48245C79.7735 0.0347991 78.7582 0.961939 78.6737 1.91718L78.3215 5.90483C78.236 6.88629 76.3416 8.60103 75.5123 9.06742L73.6047 10.6024C72.7754 11.0706 71.0576 9.08427 70.1193 9.02059L68.9688 8.94286C68.4964 8.92885 68.0358 9.09123 67.6772 9.39821C67.3186 9.7052 67.0879 10.1346 67.0303 10.6024L66.9044 11.5679C66.7776 12.5409 66.9655 14.7417 66.2395 15.3664L65.5604 15.9498C64.8224 16.5857 64.1944 17.3384 63.7017 18.1778C63.4068 18.7781 63.6576 19.4889 63.5702 19.7446C63.2997 20.5556 63.4134 21.0313 62.7738 21.272C62.6822 21.306 62.5879 21.3326 62.492 21.3516C61.6724 21.5354 60.8869 21.847 60.1647 22.275C59.9532 22.3835 59.758 22.5206 59.5842 22.6824C59.4193 22.8687 59.2848 23.0797 59.186 23.308C58.6929 24.3157 58.3726 26.6878 57.1319 27.054C56.6877 27.1611 56.2234 27.1527 55.7832 27.0297C54.8197 26.8051 53.9289 26.3409 53.1938 25.6801C52.854 25.3087 52.4563 24.9944 52.0161 24.7493C51.5821 24.6061 51.1148 24.5962 50.6751 24.721C50.2353 24.8457 49.8433 25.0993 49.5497 25.4488C48.9759 26.159 48.5502 26.9763 48.2977 27.8528C48.0526 28.5271 47.5764 30.299 46.6626 30.2269C46.1422 30.1816 45.6391 30.0177 45.1922 29.7479C44.7455 29.478 44.3668 29.1094 44.0854 28.6704C43.9167 28.3196 43.6914 27.9988 43.4185 27.7208C43.2363 27.5883 43.0273 27.497 42.806 27.4533C42.5848 27.4097 42.3566 27.4147 42.1375 27.4679C41.7002 27.5779 41.2846 27.7606 40.908 28.0083C39.8074 28.5278 38.9503 29.4512 38.5159 30.5856C38.0096 32.5017 36.7314 31.8227 35.4165 30.9602C34.5728 30.3068 33.678 29.7217 32.7407 29.2108C32.2674 28.9604 31.7365 28.8379 31.2009 28.8557C30.6654 28.8734 30.1438 29.0307 29.6882 29.3119C29.1848 29.6865 28.8279 30.2999 28.2212 30.4657C27.451 30.6745 26.7307 30.0714 26.0094 29.7305C25.2373 29.3676 24.3606 29.2919 23.5374 29.517C22.4864 29.8073 22.4347 31.5773 21.4711 32.2188C20.9329 32.5766 20.3328 32.8416 19.8303 33.249C19.5656 33.4357 19.3491 33.6824 19.1986 33.9688C19.048 34.2551 18.9678 34.573 18.9643 34.8963C18.9989 35.1717 19.0745 35.4402 19.1888 35.6933C19.5816 36.4821 19.9067 37.3026 20.1609 38.146C20.2783 38.766 19.9007 38.8793 19.372 39.1574C18.3904 39.6502 17.3484 40.0132 16.2726 40.2372C14.9633 40.5341 12.6096 40.2691 12.1241 41.849C11.9165 42.4194 11.7655 43.0088 11.6733 43.6087C11.6293 44.0945 11.7 44.584 11.8799 45.0378C12.1504 45.7027 12.6613 46.2711 12.8736 46.9482C12.9826 47.3444 12.9737 47.7637 12.8477 48.1547C12.7218 48.5459 12.4844 48.8921 12.1645 49.1509C11.9342 49.3573 11.6474 49.4907 11.3408 49.5338C11.0341 49.5771 10.7216 49.5282 10.4429 49.3935L6.6579 48.0692C5.98571 47.9824 5.30556 48.1534 4.75507 48.5478L1.93932 51.1063C1.37963 51.8454 1.02173 52.7167 0.900547 53.6349C0.68265 54.4843 0.606574 55.3768 0.337021 56.2094C0.125699 56.8499 -0.403077 58.5282 0.580276 58.6312H52.5768C52.5364 58.2116 52.512 57.7883 52.512 57.3585C52.4971 55.5896 52.8337 53.8352 53.5024 52.1967C54.171 50.5582 55.1584 49.0679 56.4076 47.8119C57.6568 46.5558 59.1431 45.5588 60.7807 44.8785C62.4182 44.1981 64.1747 43.8478 65.9488 43.8478C67.7228 43.8478 69.4794 44.1981 71.117 44.8785C72.7546 45.5588 74.2408 46.5558 75.49 47.8119C76.7392 49.0679 77.7266 50.5582 78.3952 52.1967C79.0638 53.8352 79.4004 55.5896 79.3856 57.3585C79.3856 57.7874 79.3612 58.2116 79.3217 58.6312H106.935C108.025 58.5607 109.054 58.1017 109.835 57.3379L118.288 48.0215C119.086 47.1773 119.932 46.3803 120.824 45.6343L124.813 42.3846C125.555 41.7797 126.914 40.6418 127.024 39.6631C127.038 39.5451 127.251 39.3251 127.312 39.2342C127.592 38.9233 127.828 38.5758 128.014 38.2013C128.026 38.0066 128.053 37.813 128.095 37.6225C128.157 37.4764 128.175 37.3415 128.224 37.2029C128.305 37.0625 128.379 36.9173 128.444 36.7684C128.459 36.5626 128.457 36.3556 128.435 36.1503Z"
                          fill="#E3B000"
                        />
                        <path
                          d="M82.0551 52.9596L101.301 43.6067L80.6266 49.7605L117.182 23.7115L78.5622 46.9266L109.768 14.4139L75.9521 44.5825L87.5589 21.4826L72.9072 42.835L83.7119 3.64404L69.5693 41.7496L71.4251 14.6283L66.0763 41.3853L62.5271 24.1339L62.5825 41.7496L56.596 29.4074L59.2417 42.8322L49.8073 30.4806L56.2005 44.5825L41.3629 29.9852L53.5895 46.9266L29.0564 30.4712L51.5252 49.7633L28.4478 41.4602L50.0966 52.9596L13.1678 45.6801L49.4692 55.8216L5.45688 53.0317L49.2363 58.6339H52.5771C52.5367 58.2144 52.5123 57.791 52.5123 57.3612C52.4974 55.5923 52.834 53.838 53.5026 52.1994C54.1712 50.5609 55.1586 49.0707 56.4078 47.8146C57.657 46.5586 59.1433 45.5616 60.7809 44.8812C62.4185 44.2008 64.175 43.8506 65.9491 43.8506C67.723 43.8506 69.4796 44.2008 71.1172 44.8812C72.7548 45.5616 74.2411 46.5586 75.4902 47.8146C76.7395 49.0707 77.7269 50.5609 78.3955 52.1994C79.0641 53.838 79.4007 55.5923 79.3859 57.3612C79.3859 57.7901 79.3615 58.2144 79.322 58.6339H83.2808L110.096 54.8879L82.814 55.8178L113.886 48.3155L82.0551 52.9596Z"
                          fill="white"
                        />
                        <path
                          d="M160.591 53.9196L147.536 36.7291V54.4197C147.526 54.8047 147.368 55.1711 147.092 55.4407C146.815 55.7104 146.445 55.8622 146.059 55.8638H138.862C138.67 55.8683 138.477 55.8342 138.298 55.7637C138.118 55.6931 137.956 55.5872 137.818 55.4527C137.68 55.3181 137.571 55.1573 137.497 54.9799C137.422 54.8025 137.384 54.612 137.385 54.4197V15.1884C137.384 14.9962 137.422 14.8057 137.497 14.6282C137.571 14.4509 137.68 14.2901 137.818 14.1555C137.956 14.0209 138.118 13.9152 138.298 13.8446C138.477 13.7739 138.67 13.7399 138.862 13.7444H146.063C146.449 13.7459 146.819 13.8978 147.095 14.1675C147.371 14.4371 147.53 14.8034 147.54 15.1884V31.2542L161.203 14.3456C161.505 14.0083 161.922 13.7942 162.372 13.7444H170.127C170.386 13.7445 170.639 13.8168 170.859 13.953C171.079 14.0892 171.256 14.2839 171.372 14.5151C171.488 14.7464 171.535 15.0052 171.511 15.2622C171.487 15.5194 171.391 15.7646 171.235 15.9704L156.833 33.8409L170.495 51.1335C170.495 51.1335 175.003 56.8312 180.826 57.2639C180.823 57.2639 166.961 61.9071 160.591 53.9196Z"
                          fill="white"
                        />
                        <path
                          d="M191.772 13.1421C197.282 12.9758 202.635 14.9875 206.666 18.7386C206.792 18.8376 206.896 18.9631 206.969 19.1062C207.042 19.2493 207.084 19.4067 207.089 19.5672C207.095 19.7277 207.066 19.8877 207.004 20.0357C206.941 20.1838 206.847 20.3164 206.728 20.4244L201.93 25.297C201.725 25.4996 201.449 25.6133 201.161 25.6133C200.873 25.6133 200.596 25.4996 200.392 25.297C198.103 23.2768 195.14 22.1822 192.083 22.2281C190.471 22.2367 188.875 22.5659 187.392 23.1964C185.908 23.827 184.565 24.7462 183.442 25.9002C182.318 27.0544 181.437 28.4202 180.85 29.9178C180.263 31.4156 179.981 33.0151 180.02 34.6228C179.996 36.2231 180.292 37.8122 180.891 39.2971C181.489 40.7819 182.38 42.1326 183.508 43.2702C184.637 44.4078 185.983 45.3093 187.466 45.9221C188.948 46.5348 190.539 46.8464 192.144 46.8386C195.157 46.9229 198.094 45.8938 200.392 43.9494C200.622 43.7694 200.908 43.6766 201.201 43.6878C201.493 43.6989 201.772 43.8133 201.988 44.0103L206.789 49.0038C206.988 49.2314 207.092 49.5264 207.081 49.8283C207.069 50.1302 206.944 50.4165 206.728 50.6286C202.694 54.4402 197.328 56.5333 191.772 56.4631C179.462 56.4631 169.554 46.8957 169.554 34.8616C169.576 31.9791 170.17 29.1294 171.3 26.4762C172.43 23.8229 174.074 21.4183 176.138 19.4002C178.203 17.3822 180.646 15.7905 183.329 14.7166C186.011 13.6427 188.881 13.1076 191.772 13.1421Z"
                          fill="white"
                        />
                        <path
                          d="M219.755 22.5895H210.483C210.33 22.5911 210.179 22.5628 210.038 22.5061C209.897 22.4496 209.769 22.3658 209.66 22.2596C209.552 22.1534 209.464 22.0268 209.405 21.8872C209.346 21.7477 209.314 21.5977 209.313 21.446V14.8905C209.314 14.7388 209.346 14.5889 209.405 14.4493C209.464 14.3097 209.552 14.1832 209.66 14.077C209.769 13.9708 209.897 13.887 210.038 13.8303C210.179 13.7737 210.33 13.7454 210.483 13.747H238.753C238.905 13.7454 239.056 13.7737 239.197 13.8303C239.338 13.887 239.467 13.9708 239.576 14.077C239.684 14.1832 239.77 14.3097 239.83 14.4493C239.889 14.5889 239.92 14.7388 239.922 14.8905V21.446C239.92 21.5977 239.889 21.7477 239.83 21.8872C239.77 22.0268 239.684 22.1534 239.576 22.2596C239.467 22.3658 239.338 22.4496 239.197 22.5061C239.056 22.5628 238.905 22.5911 238.753 22.5895H229.481V54.7201C229.468 55.023 229.339 55.3096 229.122 55.5219C228.905 55.7342 228.615 55.8563 228.312 55.8636H220.926C220.621 55.8563 220.332 55.7342 220.114 55.5219C219.897 55.3096 219.769 55.023 219.756 54.7201L219.755 22.5895Z"
                          fill="white"
                        />
                        <path
                          d="M260.935 13.1421C266.445 12.976 271.798 14.9875 275.828 18.7387C275.955 18.8377 276.059 18.9632 276.131 19.1062C276.205 19.2493 276.246 19.4067 276.252 19.5672C276.258 19.7277 276.228 19.8877 276.166 20.0357C276.103 20.1838 276.009 20.3164 275.89 20.4244L271.09 25.2942C270.885 25.4966 270.608 25.6102 270.32 25.6102C270.032 25.6102 269.755 25.4966 269.55 25.2942C267.262 23.274 264.298 22.1794 261.242 22.2253C259.63 22.2339 258.035 22.5631 256.551 23.1936C255.067 23.8241 253.724 24.7434 252.6 25.8974C251.478 27.0515 250.596 28.4174 250.009 29.915C249.421 31.4128 249.139 33.0123 249.179 34.62C249.155 36.2203 249.45 37.8093 250.05 39.2943C250.649 40.7791 251.538 42.1298 252.667 43.2674C253.797 44.405 255.142 45.3066 256.625 45.9193C258.108 46.532 259.698 46.8436 261.303 46.8358C264.316 46.9221 267.255 45.894 269.553 43.9495C269.783 43.7694 270.071 43.6767 270.363 43.6878C270.655 43.699 270.934 43.8133 271.15 44.0103L275.951 49.0038C276.15 49.2317 276.254 49.5267 276.243 49.8285C276.231 50.1303 276.105 50.4165 275.889 50.6286C271.856 54.4398 266.491 56.5328 260.935 56.4631C248.625 56.4631 238.716 46.8957 238.716 34.8616C238.739 31.9791 239.332 29.1294 240.462 26.4761C241.593 23.8228 243.237 21.4182 245.301 19.4002C247.365 17.3821 249.809 15.7905 252.492 14.7166C255.175 13.6427 258.044 13.1076 260.935 13.1421Z"
                          fill="white"
                        />
                        <path
                          d="M279.797 51.832C279.535 51.6181 279.363 51.3129 279.318 50.978C279.272 50.6431 279.356 50.3034 279.551 50.0274L282.382 45.1575C282.493 44.9932 282.635 44.8529 282.802 44.7452C282.969 44.6375 283.155 44.5646 283.351 44.5309C283.547 44.4972 283.747 44.5034 283.94 44.5491C284.133 44.5949 284.315 44.6792 284.474 44.797C286.198 45.9405 289.337 48.1066 293.215 48.1066C295.676 48.1066 297.461 46.6026 297.461 44.4964C297.461 41.9678 294.1 40.3448 290.041 38.4194C284.072 35.5911 278.101 32.3414 278.101 25.1209C278.101 19.1638 282.84 13.1468 292.319 13.1468C297.069 13.2685 301.668 14.8441 305.489 17.6598C305.772 17.8836 305.964 18.201 306.032 18.5542C306.1 18.9076 306.038 19.2734 305.858 19.5853L302.72 24.2182C302.57 24.4245 302.382 24.5992 302.164 24.7322C301.947 24.8653 301.706 24.954 301.454 24.9932C301.202 25.0324 300.945 25.0213 300.697 24.9606C300.449 24.8999 300.217 24.7908 300.012 24.6396C298.596 23.6769 294.964 21.3908 291.703 21.3908C289.118 21.3908 287.946 22.9548 287.946 24.6995C287.946 26.6859 291.429 28.2498 295.741 30.2961C301.158 32.8827 308.174 35.8309 308.174 44.015C308.174 50.2119 302.696 56.4706 293.649 56.4706C285.644 56.4631 281.213 53.2162 279.797 51.832Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M324 59L324 0H325L325 59H324Z"
                    fill="#E3B000"
                  />
                  <path
                    d="M428.665 3.40633L425.69 6.03654C424.646 4.58011 423.582 3.85189 422.499 3.85189C421.972 3.85189 421.541 3.99562 421.206 4.28307C420.87 4.56094 420.703 4.87714 420.703 5.23167C420.703 5.5862 420.823 5.92156 421.062 6.23776C421.388 6.65936 422.37 7.56484 424.009 8.9542C425.542 10.2382 426.471 11.0478 426.797 11.3832C427.611 12.2072 428.186 12.9977 428.522 13.7547C428.866 14.5021 429.039 15.3213 429.039 16.2124C429.039 17.9467 428.44 19.3792 427.242 20.5099C426.045 21.6405 424.483 22.2058 422.557 22.2058C421.053 22.2058 419.74 21.8369 418.619 21.0991C417.507 20.3613 416.554 19.2019 415.759 17.621L419.136 15.58C420.152 17.4485 421.321 18.3827 422.643 18.3827C423.333 18.3827 423.913 18.1815 424.382 17.779C424.852 17.3766 425.086 16.9119 425.086 16.3849C425.086 15.9058 424.909 15.4267 424.555 14.9476C424.2 14.4685 423.419 13.7355 422.212 12.7486C419.912 10.8706 418.427 9.42371 417.756 8.40804C417.086 7.38279 416.75 6.36232 416.75 5.34665C416.75 3.88063 417.306 2.62542 418.418 1.581C419.539 0.527 420.918 0 422.557 0C423.611 0 424.612 0.244336 425.561 0.733009C426.519 1.22168 427.554 2.11279 428.665 3.40633Z"
                    fill="white"
                  />
                  <path
                    d="M414.048 4.25432L411.231 6.94202C409.315 4.92026 407.159 3.90938 404.763 3.90938C402.742 3.90938 401.036 4.59927 399.647 5.97905C398.267 7.35883 397.577 9.0596 397.577 11.0814C397.577 12.4899 397.884 13.7403 398.497 14.8326C399.11 15.925 399.977 16.7825 401.098 17.4054C402.219 18.0282 403.465 18.3396 404.835 18.3396C406.004 18.3396 407.073 18.124 408.04 17.6928C409.008 17.2521 410.072 16.4568 411.231 15.3069L413.962 18.1527C412.4 19.6762 410.925 20.735 409.535 21.3291C408.146 21.9136 406.56 22.2058 404.778 22.2058C401.491 22.2058 398.799 21.1662 396.7 19.087C394.612 16.9981 393.567 14.3248 393.567 11.067C393.567 8.95899 394.041 7.08575 394.99 5.44726C395.948 3.80877 397.314 2.49127 399.086 1.49476C400.868 0.498254 402.785 0 404.835 0C406.579 0 408.256 0.3689 409.866 1.1067C411.485 1.8445 412.879 2.89371 414.048 4.25432Z"
                    fill="white"
                  />
                  <path
                    d="M380.172 0.531799H391.857V4.49867H388.005V21.6741H383.923V4.49867H380.172V0.531799Z"
                    fill="white"
                  />
                  <path
                    d="M378.72 4.25432L375.903 6.94202C373.987 4.92026 371.831 3.90938 369.435 3.90938C367.414 3.90938 365.708 4.59927 364.319 5.97905C362.939 7.35883 362.249 9.0596 362.249 11.0814C362.249 12.4899 362.556 13.7403 363.169 14.8326C363.782 15.925 364.649 16.7825 365.77 17.4054C366.891 18.0282 368.137 18.3396 369.507 18.3396C370.676 18.3396 371.745 18.124 372.712 17.6928C373.68 17.2521 374.744 16.4568 375.903 15.3069L378.634 18.1527C377.072 19.6762 375.596 20.735 374.207 21.3291C372.818 21.9136 371.232 22.2058 369.45 22.2058C366.163 22.2058 363.471 21.1662 361.372 19.087C359.283 16.9981 358.239 14.3248 358.239 11.067C358.239 8.95899 358.713 7.08575 359.662 5.44726C360.62 3.80877 361.985 2.49127 363.758 1.49476C365.54 0.498254 367.457 0 369.507 0C371.251 0 372.928 0.3689 374.538 1.1067C376.157 1.8445 377.551 2.89371 378.72 4.25432Z"
                    fill="white"
                  />
                  <path
                    d="M341.064 0.531799H345.131V7.80439L350.866 0.531799H355.709L348.322 9.9603L356.428 21.6741H351.656L345.131 12.2887V21.6741H341.064V0.531799Z"
                    fill="white"
                  />
                  <path
                    d="M430.491 51.7849H417.886C418.068 52.8964 418.552 53.7827 419.337 54.4438C420.133 55.0954 421.144 55.4212 422.37 55.4212C423.836 55.4212 425.096 54.9086 426.15 53.8833L429.456 55.4356C428.632 56.6045 427.645 57.4717 426.495 58.037C425.345 58.5928 423.98 58.8706 422.399 58.8706C419.946 58.8706 417.948 58.0993 416.405 56.5566C414.863 55.0044 414.091 53.0641 414.091 50.7357C414.091 48.3498 414.858 46.3712 416.391 44.7998C417.934 43.2188 419.864 42.4283 422.183 42.4283C424.646 42.4283 426.648 43.2188 428.191 44.7998C429.734 46.3712 430.505 48.4504 430.505 51.0375L430.491 51.7849ZM426.552 48.6948C426.294 47.8228 425.781 47.1138 425.015 46.5676C424.258 46.0214 423.376 45.7484 422.37 45.7484C421.278 45.7484 420.32 46.055 419.495 46.6682C418.978 47.0515 418.499 47.727 418.058 48.6948H426.552Z"
                    fill="white"
                  />
                  <path
                    d="M397.146 42.8307H401.055V44.4261C401.946 43.6787 402.751 43.1613 403.47 42.8738C404.198 42.5768 404.941 42.4283 405.698 42.4283C407.25 42.4283 408.567 42.9696 409.65 44.0524C410.56 44.9722 411.016 46.3328 411.016 48.1342V58.4682H407.135V51.6124C407.135 49.744 407.049 48.5031 406.876 47.8899C406.713 47.2766 406.421 46.8119 406 46.4957C405.587 46.17 405.075 46.0071 404.462 46.0071C403.666 46.0071 402.981 46.2754 402.406 46.8119C401.841 47.3389 401.448 48.0719 401.228 49.011C401.113 49.4996 401.055 50.5584 401.055 52.1873V58.4682H397.146V42.8307Z"
                    fill="white"
                  />
                  <path
                    d="M391.612 36.3917C392.302 36.3917 392.892 36.6409 393.38 37.1391C393.879 37.6374 394.128 38.241 394.128 38.9501C394.128 39.6495 393.883 40.2484 393.395 40.7467C392.906 41.2353 392.321 41.4797 391.641 41.4797C390.942 41.4797 390.343 41.2305 389.845 40.7323C389.356 40.2244 389.112 39.6112 389.112 38.8926C389.112 38.2027 389.356 37.6134 389.845 37.1247C390.333 36.6361 390.923 36.3917 391.612 36.3917ZM389.643 42.8307H393.581V58.4682H389.643V42.8307Z"
                    fill="white"
                  />
                  <path
                    d="M382.586 36.7942H386.51V58.4682H382.586V36.7942Z"
                    fill="white"
                  />
                  <path
                    d="M365.325 42.8307H369.234V44.4261C370.125 43.6787 370.93 43.1613 371.649 42.8738C372.377 42.5768 373.12 42.4283 373.876 42.4283C375.429 42.4283 376.746 42.9696 377.829 44.0524C378.739 44.9722 379.194 46.3328 379.194 48.1342V58.4682H375.314V51.6124C375.314 49.744 375.228 48.5031 375.055 47.8899C374.892 47.2766 374.6 46.8119 374.178 46.4957C373.766 46.17 373.254 46.0071 372.64 46.0071C371.845 46.0071 371.16 46.2754 370.585 46.8119C370.02 47.3389 369.627 48.0719 369.407 49.011C369.292 49.4996 369.234 50.5584 369.234 52.1873V58.4682H365.325V42.8307Z"
                    fill="white"
                  />
                  <path
                    d="M351.024 36.7942C354.013 36.7942 356.581 37.8769 358.728 40.0424C360.884 42.2079 361.962 44.8477 361.962 47.9618C361.962 51.0471 360.898 53.6581 358.771 55.7949C356.653 57.9316 354.08 59 351.053 59C347.881 59 345.246 57.9029 343.148 55.7087C341.049 53.5144 340 50.9082 340 47.8899C340 45.8681 340.489 44.0093 341.466 42.3133C342.443 40.6173 343.785 39.2758 345.49 38.2889C347.206 37.2924 349.05 36.7942 351.024 36.7942ZM350.981 40.7323C349.026 40.7323 347.383 41.4126 346.051 42.7732C344.719 44.1338 344.053 45.8633 344.053 47.9618C344.053 50.2997 344.892 52.149 346.568 53.5096C347.871 54.5732 349.366 55.105 351.053 55.105C352.959 55.105 354.584 54.4151 355.925 53.0353C357.266 51.6555 357.937 49.9548 357.937 47.933C357.937 45.9208 357.262 44.2201 355.911 42.8307C354.56 41.4318 352.916 40.7323 350.981 40.7323Z"
                    fill="white"
                  />
                  <defs>
                    <clipPath id="clip0_8_265">
                      <rect width="309" height="59" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            {isMobileMenuOpen && (
              <div className="overflow-hidden h-full">
                <div
                  className="w-[64px] overflow-hidden h-[64px] bg-[#00467F] flex items-center justify-center cursor-pointer"
                  onClick={handleToggleMobileMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="none"
                    aria-hidden="true"
                  >
                    <g clipPath="url(#clip0_211_408)">
                      <path
                        d="M1.64922 0L0 1.65155L14.3496 16.0012L0 30.3508L1.64922 32L15.9988 17.6504L30.3508 32L32 30.3484L17.6504 15.9988L32 1.64922L30.3508 0.0023327L16.0023 14.3519L1.64922 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_211_408">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
            {!isMobileMenuOpen && (
              <div
                className={`cursor-pointer text-[16px] font-semibold xl:hidden flex bg-[#00467F] items-centered items-center justify-center w-[64px] h-[64px] ${
                  scrolled ? "text-blue-900" : "text-white"
                }`}
                onClick={handleToggleMobileMenu}
                role="button"
                tabIndex={0}
                onKeyPress={handleToggleMobileMenu}
                aria-label="Open Menu"
              >
                <svg
                  className="w-[24px] h-[24px] "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  fill="white"
                  aria-hidden="true"
                >
                  <path
                    d="M14.286 18.75v1.786H0V18.75zM25 11.607v1.786H0v-1.786zm0-7.142v2H0v-2z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center relative z-[-1]">
          <div className="w-full">
            <motion.div
              className={`lg:hidden fixed bg-[#005cb8] text-white top-[64px] left-0 right-0 z-[-1]`}
              initial={{ opacity: 1, transform: "translateY(-100%)" }}
              tabIndex={-1}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 1,
                transform: isMobileMenuOpen
                  ? "translateY(0%)"
                  : "translateY(-100%)",
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
              aria-hidden={!isMobileMenuOpen}
              role="dialog" // Define as dialog when open
              aria-modal="true" // Mark as a modal
              aria-labelledby="mobile-menu-title" // Associate with a heading
            >
              <motion.div
                ref={menuRef}
                className="flex flex-col"
                style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
                role="navigation"
                aria-label="Mobile Menu"
                tabIndex={-1}
              >
                <h2 id="mobile-menu-title" className="sr-only">
                  Mobile Menu
                </h2>{" "}
                {/* Screen reader only heading */}
                {[
                  "Admissions",
                  "Tuition & Cost",
                  "Explore Programs",
                  "Student Support Services",
                  "Success Stories",
                ].map((item) => (
                  <motion.a
                    key={item}
                    className="text-white font-[600] leading-[24px] text-[20px] px-[24px] py-[16px] border-b border-[#00467F]"
                    href={`./${item.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}.html`}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate={isMobileMenuOpen ? "visible" : "hidden"}
                    tabIndex={isMobileMenuOpen ? 0 : -1} // Focusable only when open
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <nav
            className="hidden mr-[32px] items-center group text-center whitespace-nowrap xl:flex gap-[32px] text-[17.5px] leading-[20px] font-[600] text-white"
            aria-label="Main Navigation"
          >
            {[
              "Admissions",
              "Tuition & Cost",
              "Student Support Services",
              "Success Stories",
              "Explore Programs",
            ].map((item) => (
              <a
                key={item}
                className={`pt-[24px] pb-[18px]  border-b-[6px] text-[16px] transition ease-in-out duration-[250ms] hover:border-[#00467F] ${
                  scrolled ? "" : "text-white"
                } ${
                  isActive ===
                  item.toLowerCase().replace(/\s+/g, "-").replace("&", "and")
                    ? "border-[#FBBF24]"
                    : "border-transparent "
                }`}
                href={`./${item
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace("&", "and")}.html`}
                tabIndex={0}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-[24px]">
            <div className="hidden md:inline-block">
              <Button
                size="small"
                label="Request Information"
                type="primary-dark"
                href="https://kctcs.edu/admissions/request-information/index.aspx"
                aria-label="Request Information"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
