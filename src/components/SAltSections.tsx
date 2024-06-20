import { useState, React } from "react";
import Button from "../components/Button";

function Section({
  title,
  heading,
  headingHighlight,
  description,
  imgSrc,
  imgAlt,
  imgTitle,
  buttonLabel,
  buttonHref,
  buttonType,
  buttonStyle,
  buttonIcon,
  reverse,
  youtubeId,
}) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const isArray = Array.isArray(youtubeId);
  const currentYoutubeId = isArray ? youtubeId[currentVideoIndex] : youtubeId;

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };
  return (
    <div
      className={`flex pt-[16px] flex-col mx-auto lg:justify-center lg:items-center  ${reverse ? "lg:flex-row" : "lg:flex-row "} gap-[32px] lg:gap-[72px]`}
    >
      <div className="w-full lg:w-[50%]">
        <div className="flex flex-col items-center gap-[32px]">
          <div className="text-center lg:text-left has-bar">
            <span className="hidden text-[#00467f] inline-block text-[20px] mb-[16px] font-[600]">
              {title}
            </span>
            <h1 className="text-[39px] leading-[44px] lg:text-[48px] lg:leading-[56px] mb-[24px] lg:mb-[24px] font-[800] text-[#00467f] has-bar">
              {heading}&nbsp;
              {headingHighlight && (
                <>
                  <span className="bar">{headingHighlight}</span>
                  <span className="dot">.</span>
                </>
              )}
            </h1>
            <div className="flex w-full justify-center items-center relative mb-[32px] lg:hidden">
              <div className="overflow-hidden w-full">
                {youtubeId && !isArray && (
                  <div className="aspect-video relative w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                {isArray && youtubeId.length > 1 && (
                  <>
                    <div className="aspect-video relative w-full h-full ">
                      <div className="absolute top-0 left-0 w-full h-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${currentYoutubeId.id}`}
                          title="YouTube video player"
                          frameBorder="0"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="flex gap-[12px] mt-[32px] ">
                      {youtubeId.map((id, index) => (
                        <div
                          key={index}
                          className="cursor-pointer w-[50%] lg:max-w-[220px] lg:w-auto"
                          onClick={() => handleVideoClick(index)}
                        >
                          <div
                            className={`flex flex-col transition ease-in-out duration-[200ms] gap-[8px] ${
                              currentVideoIndex === index
                                ? "bg-[white] hover:bg-[white]"
                                : "shadow-[0]"
                            }`}
                          >
                            <div
                              className={`overflow-hidden aspect-video w-full bg-[#f5f5f5] ${
                                currentVideoIndex === index
                                  ? "border-[#FBBF24] border-[6px]"
                                  : "shadow-[0] border-[0]"
                              }`}
                            >
                              <img
                                src={`https://img.youtube.com/vi/${id.id}/hqdefault.jpg`}
                                alt={`Thumbnail for video ${index + 1}`}
                                className="object-cover w-full h-full object-center"
                              />
                            </div>
                            <div className="text-[16px] font-[600] leading-[20px] text-left">
                              {id.title}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {imgSrc && !youtubeId && (
                  <>
                    <img src={imgSrc} title={imgTitle} alt={imgAlt} />
                  </>
                )}
              </div>
            </div>
            <p className="text-[17.5px] leading-[24px] lg:text-[20px] lg:leading-[32px] text-[#00467f]">
              {description}
            </p>
          </div>

          <div className="w-full flex justify-center lg:justify-start">
            <Button
              label={buttonLabel}
              size="large"
              type="primary"
              href={buttonHref}
              buttonLabel={buttonLabel}
              buttonHref={buttonHref}
              buttonType={buttonLabel}
              buttonIcon={buttonHref}
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] hidden lg:block">
        <div className="flex w-full justify-center items-center relative">
          <div className="w-full overflow-hidden">
            {youtubeId && !isArray && (
              <div className="aspect-video relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            {isArray && youtubeId.length > 1 && (
              <>
                <div className="aspect-video relative w-full h-full">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${currentYoutubeId.id}`}
                      title="YouTube video player"
                      frameBorder="0"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="flex gap-[12px] mt-[32px]">
                  {youtubeId.map((id, index) => (
                    <div
                      key={index}
                      className="cursor-pointer w-full lg:max-w-[220px] lg:w-auto"
                      onClick={() => handleVideoClick(index)}
                    >
                      <div
                        className={`flex flex-col transition ease-in-out duration-[200ms] gap-[8px] ${
                          currentVideoIndex === index
                            ? "bg-[white] hover:bg-[white]"
                            : "shadow-[0]"
                        }`}
                      >
                        <div
                          className={`overflow-hidden aspect-video w-full bg-[#f5f5f5] ${
                            currentVideoIndex === index
                              ? "border-[#FBBF24] border-[6px]"
                              : "shadow-[0] border-[0]"
                          }`}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${id.id}/hqdefault.jpg`}
                            alt={`Thumbnail for video ${index + 1}`}
                            className="object-cover w-full h-full object-center"
                          />
                        </div>
                        <div className="text-[20px] font-[600] leading-[24px] text-left">
                          {id.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {imgSrc && !youtubeId && (
              <>
                <img src={imgSrc} title={imgTitle} alt={imgAlt} />
              </>
            )}
            <div className="w-full hidden lg:w-[90%] h-full absolute left-1/2 -translate-x-1/2">
              <div className="flex flex-col w-full h-full justify-between">
                <div className="flex flex-row items-start w-full justify-between">
                  <div className="p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[#FBBF24] group transition ease-in-out duration-[250ms]">
                    <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                      Tuition
                      <br />
                      $186/credit hour
                    </span>
                  </div>
                  <div className="mt-[48px] p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[#47C8FF] group transition ease-in-out duration-[250ms]">
                    <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                      Tuition
                      <br />
                      $186/credit hour
                    </span>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="ml-[48px] p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[#47C8FF] group transition ease-in-out duration-[250ms]">
                    <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                      Tuition
                      <br />
                      $186/credit hour
                    </span>
                  </div>
                </div>
                {imgSrc && (
                  <>
                    <img src={imgSrc} title={imgTitle} alt={imgAlt} />
                  </>
                )}
                <div className="w-full h-full overflow-hidden">
                  {youtubeId && (
                    <div className="aspect-video w-full relative">
                      <div className="absolute top-0 left-0 w-full h-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}`}
                          title="YouTube video player"
                          frameBorder="0"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AltSections({ sections }) {
  return (
    <div className="flex flex-col gap-[48px] lg:gap-[56px]">
      {sections.map((section, index) => (
        <div
          key={index}
          className="px-[24px] lg:px-[0] container mx-auto pb-[64px] lg:pb-[96px] border-b-[1px]  border-[rgba(0,0,0,0.1)]"
        >
          <Section
            title={section.title}
            heading={section.heading}
            headingHighlight={section.headingHighlight}
            description={section.description}
            imgSrc={section.imgSrc}
            imgAlt={section.imgAlt}
            buttonLabel={section.buttonLabel}
            buttonHref={section.buttonHref}
            buttonType={section.buttonLabel}
            buttonIcon={section.buttonHref}
            reverse={index % 2 === 1}
            youtubeId={section.youtubeId}
          />
        </div>
      ))}
    </div>
  );
}

export default AltSections;
