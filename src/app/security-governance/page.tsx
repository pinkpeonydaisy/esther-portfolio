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

const SecurityGovernance = () => {
  const proccessClick = () => {};

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[1200px] flex-col">
        <div className="flex flex-col">
          <div className="flex w-full p-5 justify-center">
            <div className="flex">
              <span className="font-semibold text-base-burnished-brown text-3xl text-center ">
                Security and Governance
              </span>
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex w-6/12 justify-center">
              <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                <div className="flex flex-col justify-center w-full border-b border-b-base-burnished-brown py-5 mb-5">
                  <span className="text-center text-black">Course Related :</span>
                  <span className="text-center text-black">
                    Keamanan Informasi, Manajemen Sumber Daya STI, Keamanan
                    Enterprise
                  </span>
                </div>
                <div className="flex flex-col justify-center w-full pb-5">
                  <span className="text-center text-black">Knowledge :</span>
                  <span className="text-center text-black">
                    ISO27000 Series, COBIT, Pentesting
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-6/12 justify-center">
              <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col items-center justify-center py-5">
                <div className="flex justify-center text-black">
                  <span>Approximately</span>
                </div>
                <div className="flex justify-center h-full items-center">
                  <span className="text-4xl font-semibold text-center text-black">2</span>
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
                Designing Security Architecture for Improving Reimbursement
                Service
              </span>
            </div>
            <div className="flex p-5">
              <Steps vertical style={styles}>
                <Steps.Item
                  status="finish"
                  title="Tabel Kebijakan Keamanan"
                  description="Memetakan peraturan-peraturan atau undang-undang yang berkaitan dengan keamanan pengembangan percepatan layanan reimbursement"
                />
                <Steps.Item
                  status="finish"
                  title="Tabel Standar Keamanan"
                  description="Memetakan standar-standar yang berkaitan dengan pengembangan percepatan layanan reimbursement"
                />
                <Steps.Item
                  status="finish"
                  title="Penerapan Keamanan"
                  description="Membuat penerapan keamanan dan memetakannya pada standar dan kebijakan keamanan yang harus dipatuhi oleh perusahaaan"
                />
                <Steps.Item
                  status="finish"
                  title="Kelaikan Keamanan"
                  description="Mendefinisikan audit yang harus dilakukan untuk menjamin keamanan layanan perusahaan"
                />
                <Steps.Item
                  status="finish"
                  title="Pemetaan Domain Keamanan"
                  description="Membuat diagram pemetaan domain keamanan dan menentukan komponen yang sudah didukung belum didukung"
                />
                <Steps.Item
                  status="finish"
                  title="Tabel Area Keamanan Data dan Informasi"
                  description="Membuat keterangan mengenai data/informasi dan kaitannya dengan standar atau kebijakan yang ada"
                />
                <Steps.Item
                  status="finish"
                  title="Tabel Area Keamanan Data dan Informasi"
                  description="Membuat keterangan mengenai data/informasi dan kaitannya dengan standar atau kebijakan yang ada"
                />
              </Steps>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See Document"
                  showArrow={false}
                  href="https://drive.google.com/file/d/1iZYikjhfSMsis8NBEUOJ9gBN6UYdNFiF/view?usp=sharing" // Replace with your URL
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center my-4">
                <span className="font-semibold text-2xl text-center">
                  Pages
                </span>
              </div>
              <div className="flex p-5 flex-col">
                <div className="flex flex-col md:flex-row">
                  <div className="flex flex-col w-full">
                    <Image
                      src={Assets.Security1}
                      alt="porto one"
                      className="w-full p-1"
                    />
                    <Image
                      src={Assets.Security2}
                      alt="porto one"
                      className="w-full p-1"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <Image
                      src={Assets.Security3}
                      alt="porto four"
                      className="w-full p-1"
                    />
                    <Image
                      src={Assets.Security4}
                      alt="porto three"
                      className="w-full p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex border-t border-t-base-burnished-brown p-5 items-center flex-col md:flex-row">
              <div className="flex w-full justify-center md:justify-start md:w-4/12">
                <span className="font-semibold text-black">Tools</span>
              </div>
              <div className="flex w-full md:w-8/12 justify-center flex-wrap">
                <Image
                  src={Assets.IconArchi}
                  alt="ts"
                  width={40}
                  height={40}
                  className="m-2"
                />
                <Image
                  src={Assets.IconDrawio}
                  alt="next"
                  width={30}
                  height={30}
                  className="m-2"
                />
                {/* <Image
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
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
            <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
              <span className="font-semibold text-center text-xl text-black">
                Penetration Testing
              </span>
            </div>
            <div className="flex justify-center py-10">
              <span className="text-center font-medium text-black">
                Penetration Testing pada VM Vulnhub
              </span>
            </div>
            <div className="flex p-5">
              <Steps vertical style={styles}>
                <Steps.Item
                  status="finish"
                  title="Pentest untuk DriftingBlues: 9"
                />
                <Steps.Item
                  status="finish"
                  title="Pentest untuk DriftingBlues: 6"
                />
                <Steps.Item
                  status="finish"
                  title="Pentest untuk doubletrouble"
                />
              </Steps>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See Document"
                  showArrow={false}
                  href="https://drive.google.com/file/d/1HJ0bE_3IBCoNYHteJBdZEfz1YezoiFGD/view?usp=sharing" // Replace with your URL
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
                  <div className="flex flex-col w-full p-1">
                    <Image
                      src={Assets.Pentest1}
                      alt="porto one"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full p-1">
                    <Image
                      src={Assets.Pentest2}
                      alt="porto one"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row p-1">
                  <div className="flex flex-col w-full p-1">
                    <Image
                      src={Assets.Pentest3}
                      alt="porto four"
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col w-full p-1">
                    <Image
                      src={Assets.Pentest4}
                      alt="porto three"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex border-t border-t-base-burnished-brown p-5 items-center flex-col md:flex-row">
              <div className="flex w-full justify-center md:justify-start md:w-4/12">
                <span className="font-semibold text-black">Tools</span>
              </div>
              <div className="flex w-full justify-center md:w-8/12 flex-wrap">
                <Image
                  src={Assets.VBox}
                  alt="ts"
                  width={40}
                  height={40}
                  className="m-2"
                />
                {/* <Image
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
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityGovernance;
