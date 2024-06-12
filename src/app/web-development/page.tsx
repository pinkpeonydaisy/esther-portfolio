"use client";

import React from "react";
import Components from "@/components";
import { Steps } from "rsuite";
import Image from "next/image";
import "rsuite/dist/rsuite.min.css"; // Ensure rsuite styles are imported correctly
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Assets from "@/assets";
import Slider from "react-slick";

const styles = {
  display: "inline-table",
  verticalAlign: "top",
};

const PictureSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-4">
        <span className="font-semibold text-2xl text-center text-black">
          Pages
        </span>
      </div>
      <div className="flex p-5 flex-col">
        <Slider {...settings}>
          {[
            Assets.RPL1,
            Assets.RPL2,
            Assets.RPL3,
            Assets.RPL4,
            Assets.RPL5,
            Assets.RPL6,
          ].map((src, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-center"
              style={{ height: "300px" }} // Ensure container height is set for vertical centering
            >
              <Image
                src={src}
                alt={`porto ${index + 1}`}
                className="p-1"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const WebDevelopment = () => {
  const proccessClick = () => {};

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[1200px] flex-col">
        <div className="flex flex-col">
          <div className="flex w-full p-5 justify-center">
            <div className="flex">
              <span className="font-semibold text-base-burnished-brown text-3xl text-center">
                Website Development
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
                    Rekayasa Perangkat Lunak
                  </span>
                </div>
                <div className="flex flex-col justify-center w-full pb-5">
                  <span className="text-center text-black">
                    Additional course :
                  </span>
                  <span className="text-center text-black">Udemy Courses</span>
                </div>
              </div>
            </div>
            <div className="flex w-6/12 justify-center">
              <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col items-center justify-center py-5">
                <div className="flex justify-center text-black">
                  <span>More than</span>
                </div>
                <div className="flex justify-center h-full items-center">
                  <span className="text-4xl font-semibold text-center text-black">
                    5
                  </span>
                </div>
                <div className="flex justify-center text-black">
                  <span>projects in 1 year</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
            <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
              <span className="font-semibold text-center text-xl text-black">
                Kursus Mengemudi Website
              </span>
            </div>
            <div className="flex p-5">
              <Steps vertical style={styles}>
                <Steps.Item
                  status="finish"
                  title="Membuat SKPL"
                  description="Membuat Context Diagram, Use Case Diagram, Class Diagram"
                />
                <Steps.Item
                  status="finish"
                  title="Membuat DPPL"
                  description="Membuat Sequence Diagram, Interface, dan Entity Relationship Diagram"
                />
                <Steps.Item
                  status="finish"
                  title="Melakukan coding back-end (fitur log in dan akun admin kursus)"
                  description="Set up MongoDB, membuat back end untuk authorize dan authenticate pengguna"
                />
                <Steps.Item
                  status="finish"
                  title="Melakukan coding front-end (fitur log in dan akun admin kursus)"
                  description="Membuat halaman log in  dan halaman membuat akun admin kursus"
                />
                <Steps.Item
                  status="finish"
                  title="Melakukan pengetesan pada fitur menggunakan JEST"
                  description="Membuat halaman log in  dan halaman membuat akun admin kursus"
                />
                <Steps.Item
                  status="finish"
                  title="Membuat Dokumen Hasil Pengujian"
                />
              </Steps>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See Backend Code"
                  showArrow={false}
                  href="https://github.com/pinkpeonydaisy/kursusmengemudi-backend" // Replace with your URL
                />
              </div>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See Frontend Code"
                  showArrow={false}
                  href="https://github.com/pinkpeonydaisy/kursusmengemudi-frontend" // Replace with your URL
                />
              </div>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="Document"
                  showArrow={false}
                  href="https://drive.google.com/file/d/1nxGdiM7Eyr-PgehKc09LWt6rqupafIQm/view?usp=sharing" // Replace with your URL
                />
              </div>
            </div>

            <PictureSlide />

            <div className="flex border-t border-t-base-burnished-brown p-5 items-center flex-col md:flex-row">
              <div className="flex w-full justify-center md:justify-start md:w-4/12">
                <span className="font-semibold text-black">Tools</span>
              </div>
              <div className="flex w-full md:w-6/12 justify-center flex-wrap">
                <Image
                  src={Assets.IconTs}
                  alt="ts"
                  width={40}
                  height={40}
                  className="m-2"
                />
                <Image
                  src={Assets.IconNext}
                  alt="next"
                  width={100}
                  height={100}
                  className="m-2"
                />
                <Image
                  src={Assets.IconReact}
                  alt="react"
                  width={40}
                  height={40}
                  className="m-2"
                />
                <Image
                  src={Assets.IconMongo}
                  alt="mongo"
                  width={40}
                  height={40}
                  className="m-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
            <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
              <span className="font-semibold text-center text-xl">
                Virtual Coffee Consultation
              </span>
            </div>
            <div className="flex justify-center py-10">
              <span className="text-center font-medium text-black">
                Virtual Coffee Consultation adalah website yang mewadahi
                konsultasi kopi dengan memberikan saran rekomendasi pada Virtual
                Hotel Tour.
              </span>
            </div>
            <div className="flex p-5 flex-col">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full p-1 justify-center items-center">
                  <Image
                    src={Assets.ImagePorto4One}
                    alt="porto one"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col w-full p-1 justify-center items-center">
                  <Image
                    src={Assets.ImagePorto4Two}
                    alt="porto one"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row p-1">
                <div className="flex flex-col w-full p-1 justify-center items-center">
                  <Image
                    src={Assets.ImagePorto4Three}
                    alt="porto four"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col w-full p-1 justify-center items-center">
                  <Image
                    src={Assets.ImagePorto4Four}
                    alt="porto three"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex border-t border-t-base-burnished-brown p-5 items-center flex-col md:flex-row">
              <div className="flex w-full justify-center md:justify-start md:w-4/12">
                <span className="font-semibold text-black">Tools</span>
              </div>
              <div className="flex w-full justify-center md:w-8/12 flex-wrap">
                <Image
                  src={Assets.IconTs}
                  alt="ts"
                  width={40}
                  height={40}
                  className="m-2"
                />
                <Image
                  src={Assets.IconNext}
                  alt="next"
                  width={100}
                  height={100}
                  className="m-2"
                />
                <Image
                  src={Assets.IconReact}
                  alt="react"
                  width={40}
                  height={40}
                  className="m-2"
                />
                <Image
                  src={Assets.IconMongo}
                  alt="mongo"
                  width={40}
                  height={40}
                  className="m-2"
                />
                <Image
                  src={Assets.IconFastapi}
                  alt="fastapi"
                  width={100}
                  height={100}
                  className="m-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
