"use client";

import Components from "@/components";
import { Steps } from "rsuite";
import Image from "next/image";
import "rsuite/Steps/styles/index.css";
import Assets from "@/assets";

const styles = {
  display: "inline-table",
  verticalAlign: "top",
};

const UiUxDesign = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[1200px] flex-col">
        <div className="flex flex-col">
          <div className="flex w-full p-5 justify-center">
            <div className="flex">
              <span className="font-semibold text-base-burnished-brown text-3xl text-center">
                UI/UX Design
              </span>
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex w-6/12 justify-center">
              <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                <div className="flex flex-col justify-center w-full border-b border-b-base-burnished-brown py-5 mb-5">
                  <span className="text-center text-black">
                    Course Related :
                  </span>
                  <span className="text-center text-black">
                    Interaksi Manusia Komputer
                  </span>
                </div>
                <div className="flex flex-col justify-center w-full pb-5">
                  <span className="text-center text-black">
                    Additional course :
                  </span>
                  <span className="text-center text-black">
                    Digistar Class UI/UX
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-6/12 justify-center">
              <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col items-center justify-center py-5">
                <div className="flex justify-center">
                  <span className="text-black">More than</span>
                </div>
                <div className="flex justify-center h-full items-center">
                  <span className="text-4xl font-semibold text-center text-black">
                    5+
                  </span>
                </div>
                <div className="flex justify-center">
                  <span className="text-black">projects in 1 year</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
            <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
              <span className="font-semibold text-center text-xl text-black">
                Tirtaswara Website UI/UX
              </span>
            </div>
            <div className="flex p-5">
              <Steps vertical style={styles}>
                <Steps.Item
                  status="finish"
                  title="Created a list of hypothesis for the research"
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Created survey using Google Form"
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Conducted interview"
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Make two user persona"
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Choose the style, font, color palette, etc."
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Create the website prototype"
                  className="text-black"
                />
              </Steps>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See prototype"
                  showArrow={false}
                  href="https://www.figma.com/proto/C7i83Lz6wefCbO0cgOcHmT/UIUX5_TIRTASWARA_ESTHER-REGINA?node-id=34-29&t=iXo6R5FQXogCHPvs-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A29" // Replace with your URL
                />
              </div>
              <div className="flex w-full justify-center mt-2 md:mt-0">
                <Components.Button
                  label="See Documentation"
                  showArrow={false}
                  href="https://linktr.ee/tirtaswara" // Replace with your URL
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center my-4">
                <span className="font-semibold text-2xl text-center text-black">
                  Pages
                </span>
              </div>
              <div className="flex p-5 flex-col">
                <div className="flex flex-col md:flex-row">
                  <div className="flex flex-col w-full">
                    <Image
                      src={Assets.UI3}
                      alt="porto one"
                      className="w-full p-1"
                    />
                    <Image
                      src={Assets.UI4}
                      alt="porto one"
                      className="w-full p-1"
                    />
                  </div>
                  <div className="flex w-full items-start">
                    <Image
                      src={Assets.UI1}
                      alt="porto four"
                      className="w-full p-1"
                    />
                  </div>
                </div>
                <div className="flex">
                  <Image
                    src={Assets.UI5}
                    alt="porto three"
                    className="w-full p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
            <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
              <span className="font-semibold text-center text-xl text-black">
                EcoEats App
              </span>
            </div>
            <div className="flex p-5">
              <Steps vertical style={styles}>
                <Steps.Item
                  status="finish"
                  title="Created a list of hypothesis for the research"
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Created survey using Google Form"
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Conducted interview"
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Make two user persona"
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Choose the style, font, color palette, etc."
                  className="text-black"
                />
                <Steps.Item
                  status="finish"
                  title="Create the website prototype"
                  className="text-black"
                />
              </Steps>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See prototype"
                  showArrow={false}
                  href="https://www.figma.com/proto/2zTfNW8piQ7bG07NDWdX5N/EcoEats?node-id=728-1596&t=GEeyYgcICnZYHCvs-1&scaling=scale-down&page-id=21%3A6&starting-point-node-id=728%3A1596" // Replace with your URL
                />
              </div>
              <div className="flex w-full justify-center mt-2 md:mt-0">
                <Components.Button
                  label="See Documentation"
                  showArrow={false}
                  href="https://example.com/documentation2" // Replace with your URL
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center my-4">
                <span className="font-semibold text-2xl text-center text-black">
                  Pages
                </span>
              </div>
              <div className="flex p-5 flex-col md:flex-row justify-center">
                <div className="flex flex-col">
                  <Image
                    src={Assets.ImagePorto2One}
                    alt="porto one"
                    className="w-48 h-auto p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <Image
                    src={Assets.ImagePorto2Two}
                    alt="porto one"
                    className="w-48 h-auto p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <Image
                    src={Assets.ImagePorto2Three}
                    alt="porto four"
                    className="w-48 h-auto p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <Image
                    src={Assets.ImagePorto2Four}
                    alt="porto three"
                    className="w-48 h-auto p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUxDesign;
