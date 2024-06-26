"use client";

import Assets from "@/assets";
import Components from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const router = useRouter();
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);

  const goToAbout = () => {
    router.push("/about");
  };

  return (
    <div className={`flex flex-col w-full ${slideIn ? "animate-slideIn" : ""}`}>
      <div className="flex bg-base-cornsilk w-full justify-center flex-col items-center">
        <div className="flex w-full max-w-[1200px] px-5 py-10 items-center flex-col-reverse md:flex-row">
          <div className="flex w-full md:w-5/12 flex-col mt-[50px] md:mt-0">
            <div className="typewriter-container">
              <div className="typewriter">
                <span className="text-4xl text-base-black">My name is </span>
                <span className="text-4xl text-base-parrot-pink">
                  Esther Regina
                </span>
              </div>
            </div>
            <div className="flex my-3">
              <span className="text-base-black">
                I am a final year student in Bandung Institute of Technology,
                aiming to learn new things every single day. I am driven to
                expand my skills in the UI/UX field in order to create a great
                experience for users. My background as an Information System and
                Technology equipped me with so many areas to explore, which
                currently I am still developing my skills in App Development and
                IT Security.
              </span>
            </div>
            <div className="flex">
              <Components.Button
                label="More about me"
                showArrow={true}
                onClick={goToAbout}
              />
            </div>
          </div>
          <div className="flex w-full md:w-6/12 justify-end relative">
            <div className="flex">
              <Image
                src={Assets.PasFoto}
                alt="Pas Foto Esther Regina"
                className="w-[250px] rounded-md"
              />
            </div>
            <Image
              src={Assets.ImageLavender}
              alt="lavender"
              className="w-[150px] absolute bottom-[-50px] right-[-50px]"
            />
          </div>
        </div>
        <Image src={Assets.ImageTopOne} alt="top image" className="w-full" />
      </div>

      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-[1200px] px-5 py-10 items-center flex-col justify-center">
          <div className="flex justify-center w-full">
            <span className="font-semibold text-base-burnished-brown text-3xl text-center">
              Interests
            </span>
          </div>
          <div className="flex mt-7 w-full flex-col md:flex-row">
            <div className="flex w-full flex-col px-2">
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  UI/UX Design
                </span>
              </div>
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  App Development
                </span>
              </div>
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  System Analysis
                </span>
              </div>
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  UX Research
                </span>
              </div>
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  Project Management
                </span>
              </div>
            </div>
            <div className="flex w-full px-2 flex-col">
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  Website Development
                </span>
              </div>
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  Internet of Things
                </span>
              </div>
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  UX Research
                </span>
              </div>
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  IT Governance & Security
                </span>
              </div>
              <div className="flex border-2 border-base-baby-pink rounded-lg shadow-sm px-4 min-h-[45px] items-center justify-center w-full my-3">
                <span className="font-medium text-base-parrot-pink">
                  Product Management
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
