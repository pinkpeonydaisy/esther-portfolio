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

const ProductAndProjectManagement = () => {
  const proccessClick = () => {};

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-[1200px] flex-col">
        <div className="flex flex-col">
          <div className="flex w-full p-5 justify-center">
            <div className="flex">
              <span className="font-semibold text-base-burnished-brown text-3xl text-center">
                Product & Project Management
              </span>
            </div>
          </div>

          <div className="flex w-full">
            <div className="flex w-6/12 justify-center">
              <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                <div className="flex flex-col justify-center w-full py-5 mb-5">
                  <span className="text-center">Course Related :</span>
                  <span className="text-center">
                    Project Management and Product Management
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-6/12 justify-center">
              <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col items-center justify-center py-5">
                <div className="flex justify-center">
                  <span>With</span>
                </div>
                <div className="flex justify-center h-full items-center">
                  <span className="text-4xl font-semibold text-center">2</span>
                </div>
                <div className="flex justify-center">
                  <span>projects in 6 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
            <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
              <span className="font-semibold text-center text-xl">
                Pengembangan Perangkat Lunak Digitasi Koperasi
              </span>
            </div>
            <div className="flex justify-center py-10">
              <span className="text-center font-medium">
                Pengembangan Perangkat Lunak Digitasi Koperasi oleh PT
                Mitsubishi Tanabe Pharma
              </span>
            </div>
            <div className="flex p-5">
              <Steps vertical style={styles}>
                <Steps.Item
                  status="finish"
                  title="Business Case dan Project Charter"
                  description="Mendefinisikan proyek,  menguraikan manfaat dari proyek,  mendefinisikan ruang lingkup proyek dengan jelas"
                />
                <Steps.Item
                  status="finish"
                  title="Project Scope dan Work Breakdown Structure"
                  description="Mendefinisikan batasan dan deliverable secara jelas, memecah proyek menjadi aktivitas aktivitas yang lebih kecil"
                />
                <Steps.Item
                  status="finish"
                  title="Resource Allocation, Scheduling, and Costing"
                  description="Membuat Gannt Chart, cost estimate and baseline, dan project cost baseline"
                />
                <Steps.Item
                  status="finish"
                  title="Project Management Plan"
                  description="Membuat risiko dan cara memitigasinya"
                />
                <Steps.Item
                  status="finish"
                  title="Sprint Executing and Planning"
                  description="Mengubah pendekatan menjadi sprint, membuat roadmap, membuat sprint backlog, product backlog, kanban board, dan burndown chart"
                />
              </Steps>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See Waterfall Document"
                  showArrow={false}
                  href="https://drive.google.com/file/d/1EexhiZ5pile3X1mfuwiW40D-nAPGG2AR/view?usp=sharing" // Replace with your URL
                />
              </div>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See Agile Document for Planning"
                  showArrow={false}
                  href="https://drive.google.com/file/d/1B-HJSql1Ed6ptlhkafh5odf4PKQHb-GJ/view?usp=sharing" // Replace with your URL
                />
              </div>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See Agile Document for Executing"
                  showArrow={false}
                  href="https://drive.google.com/file/d/1Zg65iXnpJZnn8q7R5ImWT0IBHJjUa-W-/view?usp=sharing" // Replace with your URL
                />
              </div>
            </div>
            <div className="flex border-t border-t-base-burnished-brown p-5 items-center">
              <div className="flex w-4/12">
                <span className="font-semibold">Tools</span>
              </div>
              <div className="flex w-8/12">
                <Image
                  src={Assets.Microsoft365}
                  alt="trello"
                  width={40}
                  height={40}
                  className="m-2"
                />
                <Image
                  src={Assets.Jira}
                  alt="trello"
                  width={100}
                  height={100}
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
                HomeAid: Aplikasi Pencari ART sesuai kebutuhan
              </span>
            </div>
            <div className="flex p-5">
              <Steps vertical style={styles}>
                <Steps.Item
                  status="finish"
                  title="Melakukan interview dengan target user"
                  description="Memvalidasi masalah di lingkungan sekitar, membuat user persona, user need statement"
                />
                <Steps.Item
                  status="finish"
                  title="Ideation"
                  description="Membuat Lean Canvas, SWOT, SCAMPER"
                />
                <Steps.Item
                  status="finish"
                  title="Validate Ideas"
                  description="Membuat hipotesis, melakukan wawancara, mengambil kesimpulan dari wawancara"
                />
                <Steps.Item
                  status="finish"
                  title="Prototyping"
                  description="Membuat feature prioritization dengan MoSCOW dan ICE Method, membuat prototype dengan Figma"
                />
              </Steps>
            </div>
            <div className="flex mb-5 flex-col md:flex-row">
              <div className="flex w-full justify-center">
                <Components.Button
                  label="See Documentation"
                  showArrow={false}
                  href="https://drive.google.com/file/d/1xB4ZdqqoIvTn4VDj75toEqyfDDe0_0g_/view?usp=sharing" // Replace with your URL
                />
              </div>
            </div>
            <div className="flex border-t border-t-base-burnished-brown p-5 items-center">
              <div className="flex w-4/12">
                <span className="font-semibold">Tools</span>
              </div>
              <div className="flex w-8/12">
                <Image
                  src={Assets.IconFigma}
                  alt="figma"
                  width={40}
                  height={40}
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

export default ProductAndProjectManagement;
