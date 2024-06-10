import React from "react";
import Button from "../components/Button";

function TuitionSection() {
  return (
    <div className="pb-[56px] lg:pb-[80px]">
      <div className="px-[24px] lg:px-[0] container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-center gap-[32px] lg:gap-[48px]">
          <div className="w-full lg:w-[50%]">
            <div className="flex flex-col items-center gap-[32px]">
              <div className="text-center lg:text-left has-bar">
                <span className="hidden text-[#00467f] inline-block text-[20px] mb-[16px] font-[600]">
                  Online Tuition
                </span>
                <h1 className="text-[48px] leading-[48px] tracking-[-0.093rem] lg:text-[61.04px] lg:leading-[64px] mb-[16px] font-[800] text-[#00467f] has-bar">
                  Convenient and <span className="bar">Affordable</span>
                  <span className="dot">.</span>
                </h1>
                <p className="text-[20px] leading-[28px] lg:text-[20px] leading-[32px] text-[#00467f]">
                  KCTCS Online is convenient and affordable. Our tuition rates
                  are the lowest in the state. KCTCS makes it easy to enroll in
                  over{" "}
                  <a className="border-b-[1px] border-[#00467f]" href="">
                    100 online programs
                  </a>{" "}
                  without breaking the bank. 
                </p>
              </div>
              <div className="w-full lg:w-[40%] lg:hidden">
                <div className="flex w-full justify-center items-center relative">
                  <div className="w-[320px] h-[320px] overflow-hidden rounded-full">
                    <div className="w-full lg:w-[60%] h-full absolute left-1/2 -translate-x-1/2">
                      <div className="flex flex-col w-full h-full justify-between">
                        <div className="flex flex-row items-start w-full justify-between">
                          <div className="p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[white] group transition ease-in-out duration-[250ms]">
                            <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                              Tuition
                              <br />
                              $186/credit hour
                            </span>
                          </div>
                          <div className="mt-[48px] p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[white] group transition ease-in-out duration-[250ms]">
                            <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                              Tuition
                              <br />
                              $186/credit hour
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-row">
                          <div className="ml-[48px] p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 hover:bg-[white] group transition ease-in-out duration-[250ms]">
                            <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                              Tuition
                              <br />
                              $186/credit hour
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-full h-full object-cover"
                      src="/src/assets/admissions.jpeg"
                      alt="tuition"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center lg:justify-start">
                <Button
                  label="Learn About Paying for College"
                  href="/tuition-and-costs.html"
                  type="primary"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] hidden lg:block">
            <div className="flex w-full justify-center items-center relative">
              <div className="w-[400px] h-[400px] overflow-hidden rounded-full">
                <div className="w-full lg:w-[90%] h-full absolute left-1/2 -translate-x-1/2">
                  <div className="flex flex-col w-full h-full justify-between">
                    <div className="flex flex-row items-start w-full justify-between">
                      <div className="p-[12px] bg-[white] text-center bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 group transition ease-in-out duration-[250ms]">
                        <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                          Tuition
                          <br />
                          $186/credit hour
                        </span>
                      </div>
                      <div className="mt-[48px] p-[12px] text-center  bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 group transition ease-in-out duration-[250ms]">
                        <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                          Tuition
                          <br />
                          $186/credit hour
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="ml-[48px] text-center p-[12px] bg-[white] bg-opacity-[25%] backdrop-filter backdrop-blur-[20px] rounded-[12px] shadow-[0px_4px_8px_rgba(0,0,0,0.15)] cursor-pointer hover:bg-opacity-100 group transition ease-in-out duration-[250ms]">
                        <span className="text-center text-[#00467F] font-[600] group-hover:text-[#00467f] transition ease-in-out duration-[250ms]">
                          Tuition
                          <br />
                          $186/credit hour
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="w-full h-full object-cover"
                  src="/src/assets/admissions.jpeg"
                  alt="tuition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TuitionSection;
