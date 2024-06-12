"use client";

import Assets from "@/assets";
import Components from "@/components";
import Image from "next/image";
import { Steps } from 'rsuite';
import 'rsuite/Steps/styles/index.css';

const styles = {
    display: 'inline-table',
    verticalAlign: 'top'
};

const About = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex bg-base-cornsilk w-full justify-center flex-col items-center">
                <div className="flex w-full max-w-[1200px] px-5 py-10 items-center flex-col md:flex-row">

                    <div className="flex w-12/12 md:w-6/12 justify-center">
                        <div className="flex w-[250px] relative">
                            <Image src={Assets.ImageElipseTop} alt="top elipse" className="absolute top-[-20px] right-[-20px] w-[50px] h-[50px] z-20"/>
                            <Image src={Assets.PasFoto} alt="cat" className="w-[250px] rounded-lg z-10"/>
                            <Image src={Assets.ImageElipseBottom} alt="bottom elipse" className="absolute left-[-50px] bottom-[-50px] w-[100px] h-[100px]"/>
                        </div>
                    </div>
                    <div className="flex w-12/12 md:w-6/12 flex-col mt-[50px] md:mt-0 relative">
                        <div className="flex flex-col">
                            <span className="text-4xl text-black">Esther Regina</span>
                        </div>
                        <div className="flex mt-7">
                            <Steps vertical style={styles}>
                                <Steps.Item 
                                    status="finish"
                                    title="Institut Teknologi Bandung (2021 - present)" 
                                    description="Sistem dan Teknologi Informasi"
                                    className="text-black"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Universitas Padjadjaran (2020-2021)" 
                                    description="Manajemen"
                                    className="text-black"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="SMAK 1 BPK PENABUR (2017-2020)" 
                                    description="IPA"
                                    className="text-black"
                                />
                            </Steps>
                        </div>
                        <Image src={Assets.ImageLavender} alt="lavender" className="w-[150px] absolute bottom-[-20px] right-[-20px]"/>
                    </div>

                </div>
                <Image src={Assets.ImageTopTwo} alt="top image" className="w-full"/>
            </div>

            <div className="flex w-full justify-center">
                <div className="flex w-full max-w-[1200px] px-5 py-10 items-center flex-col justify-center">
                    <div className="flex justify-center w-full">
                        <span className="font-semibold text-base-burnished-brown text-3xl text-center">Organizational Experience</span>
                    </div>
                    <div className="flex mt-7 w-full flex-wrap">
                        <div className="flex w-full md:w-6/12">
                            <div className="flex m-4 border border-base-burnished-brown rounded-lg w-full justify-center flex-col">
                                <div className="flex items-center w-full border-b border-b-base-burnished-brown h-[65px] px-5 justify-center">
                                    <div className="flex py-5">
                                        <Image src={Assets.IconInkubator} alt="inkubator" width={55} height={55}/>
                                    </div>
                                    <div className="flex py-5 flex-col">
                                        <div className="flex">
                                            <span className="text-lg font-medium text-black">Inkubator IT</span>
                                        </div>
                                        <div className="flex">
                                            <span className="text-xs text-black">Your IT-Based Solution</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex py-4 flex-col h-full">
                                    <div className="flex w-full justify-center">
                                        <span className="font-semibold text-sm text-center text-black">Marketing Staff (2023-2024)</span>
                                    </div>
                                    <div className="flex justify-start mt-3 px-5 flex-col">
                                        <div className="flex my-2">
                                            <li className="text-sm text-black">
                                                Copywriting
                                            </li>
                                        </div>
                                        <div className="flex my-2">
                                            <li className="text-sm text-black">
                                                Scheduling post content
                                            </li>
                                        </div>
                                        <div className="flex my-2">
                                            <li className="text-sm text-black">
                                                Designing posts
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex h-[65px] border-t border-t-base-burnished-brown px-5">
                                    <div className="flex w-full border-r border-r-base-burnished-brown py-5">
                                        <span className="font-semibold text-black">Tools</span>
                                    </div>
                                    <div className="flex w-full py-5 justify-center">
                                        <Image src={Assets.IconFigma} width={40} height={40} alt="figma"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full md:w-6/12">
                            <div className="flex m-4 border border-base-burnished-brown rounded-lg w-full justify-center flex-col">
                                <div className="flex items-center w-full border-b border-b-base-burnished-brown h-[65px] px-5 justify-center">
                                    <div className="flex py-5">
                                        <Image src={Assets.IconDagozila} alt="inkubator" width={55} height={55}/>
                                    </div>
                                </div>
                                <div className="flex py-4 flex-col h-full">
                                    <div className="flex w-full justify-center">
                                        <span className="font-semibold text-sm text-center text-black">Officials Staff and Intern (2023-present)</span>
                                    </div>
                                    <div className="flex justify-start items-end mt-3 px-5 flex-col">
                                        <span className="text-center text-black">Coordinated and tracked progress across mechanical, electrical, and programming divisions using Trello.</span>
                                    </div>
                                </div>
                                <div className="flex h-[65px] border-t border-t-base-burnished-brown px-5">
                                    <div className="flex w-full border-r border-r-base-burnished-brown py-5">
                                        <span className="font-semibold text-black">Tools</span>
                                    </div>
                                    <div className="flex w-full py-5 justify-center">
                                        <Image src={Assets.IconTrello} width={40} height={40} alt="trello"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full md:w-6/12">
                            <div className="flex m-4 border border-base-burnished-brown rounded-lg w-full justify-center flex-col">
                                <div className="flex items-center w-full border-b border-b-base-burnished-brown h-[65px] px-5 justify-center">
                                    <div className="flex py-5">
                                        <Image src={Assets.IconIF} alt="inkubator" width={55} height={55}/>
                                    </div>
                                </div>
                                <div className="flex h-full py-4 flex-col">
                                    <div className="flex w-full justify-center">
                                        <span className="font-semibold text-sm text-center text-black">Culture Intern and Staff (2022-2023)</span>
                                    </div>
                                    <div className="flex justify-start items-end mt-3 px-5 flex-col">
                                        <span className="text-center text-black">Supervised other divisions to ensure regular and effective division meetings were conducted, maintaining organizational efficiency and communication</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full md:w-6/12">
                            <div className="flex m-4 border border-base-burnished-brown rounded-lg w-full justify-center flex-col">
                                <div className="flex items-center w-full border-b border-b-base-burnished-brown px-5 justify-center h-[65px]">
                                    <div className="flex py-5">
                                        <Image src={Assets.IconExperience} alt="experience" width={55} height={55}/>
                                    </div>
                                </div>
                                <div className="flex h-full py-4 flex-col">
                                    <div className="flex w-full justify-center">
                                        <span className="font-semibold text-sm text-center text-black">Organizational Intelligence Manager (2021)</span>
                                    </div>
                                    <div className="flex justify-start mt-3 px-5 flex-col">
                                        <span className="text-center text-black">Developed Organization’s Website to ensure a better awareness and engagement, resulting increased in partnership</span>
                                    </div>
                                </div>
                                <div className="flex h-[65px] border-t border-t-base-burnished-brown px-5">
                                    <div className="flex w-full border-r border-r-base-burnished-brown py-5">
                                        <span className="font-semibold text-black">Tools</span>
                                    </div>
                                    <div className="flex w-full py-5 justify-center">
                                        <Image src={Assets.IconWordpress} width={40} height={40} alt="wordpress"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-center">
                <div className="flex w-full max-w-[1200px] px-5 py-10 items-center flex-col justify-center">
                    <div className="flex justify-center w-full">
                        <span className="font-semibold text-base-burnished-brown text-3xl text-center">Achievements</span>
                    </div>
                    <div className="flex mt-7 w-full flex-col">

                        <div className="flex my-3 border border-base-parrot-pink rounded-lg w-full flex-col">
                            <div className="flex p-4 border-b border-b-base-burnished-brown w-full">
                                <span className="font-medium text-black">1st place of IDSC International Company Case Competition 2023 by Airlangga University</span>
                            </div>
                            <div className="flex flex-col p-4 text-xs text-black">
                                <div className="flex my-2">
                                    <li>
                                        Proposed a solution to implement feasible renewable hybrid power plants in Pulau Telo
                                    </li>
                                </div>

                                <div className="flex my-2">
                                    <li>
                                        Identify the main problem, explore various solutions, and utilize PVSyst to simulate and determine if the proposed strategies can effectively meet the demand of the case.
                                    </li>
                                </div>

                                <div className="flex my-2">
                                    <li>
                                        My team solution is to periodically reducing the use of Dieser Power Plants (PLTD) by using Solar Power Plants (PLTS) and Biomass Power Plants (PLTBM) . 
                                    </li>
                                </div>

                                <div className="flex my-2">
                                    <li>
                                        Moreover, our solution successfully reduces emissions by an average of 1,674.985 metric tons of CO2.
                                    </li>
                                </div>
                            </div>
                            <div className="flex border-t border-t-base-burnished-brown items-center">
                                <div className="flex w-2/12 p-4 border-r border-r-base-burnished-brown">
                                    <span className="font-semibold text-xs text-black">Skills</span>
                                </div>
                                <div className="flex w-10/12 p-4">
                                    <span className="font-semibold text-xs text-black">Problem Solving, Critical Thinking, Presentation Skills, Communication Skills</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex my-3 border border-base-parrot-pink rounded-lg w-full flex-col">
                            <div className="flex p-4 border-b border-b-base-burnished-brown w-full">
                                <span className="font-medium text-black"> 2nd place of IAF Business Case Competition 2023 by IPB University</span>
                            </div>
                            <div className="flex flex-col p-4 text-xs text-black">
                                <div className="flex my-2">
                                    <li>
                                        Analyze the case given using several tools such as SWOT, PESTLE, Porter’s Five Forces, Competitor Analysis
                                    </li>
                                </div>

                                <div className="flex my-2">
                                    <li>
                                        Developed a solution to overcome issues with Sayurbox supplier, mismatch between consumer and producer demand, and packaging waste
                                    </li>
                                </div>

                                <div className="flex my-2">
                                    <li>
                                        We proposed the CASE strategies : Collaborate with Partners, Adjust Technology, Sustainable Packaging, dan Educate Farmers
                                    </li>
                                </div>

                                <div className="flex my-2">
                                    <li>
                                        We also overcome the risks with risk mitigation plan for each solution
                                    </li>
                                </div>
                            </div>
                            <div className="flex border-t border-t-base-burnished-brown items-center">
                                <div className="flex w-2/12 p-4 border-r border-r-base-burnished-brown">
                                    <span className="font-semibold text-xs text-black">Skills</span>
                                </div>
                                <div className="flex w-10/12 p-4">
                                    <span className="font-semibold text-xs text-black">Problem Solving, Critical Thinking, Presentation Skills, Communication Skills</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex my-3 border border-base-parrot-pink rounded-lg w-full flex-col">
                            <div className="flex p-4 border-b border-b-base-burnished-brown w-full">
                                <span className="font-medium text-black">Best Social Project Team in Digistar Class 2023 by PT Telkom</span>
                            </div>
                            <div className="flex flex-col p-4 text-xs text-black">
                                <div className="flex my-2">
                                    <li>
                                        Conducted an in-depth analysis of sanitation challenges in Indonesia.
                                    </li>
                                </div>

                                <div className="flex my-2">
                                    <li>
                                        Pioneered a cutting-edge web-based solution, integrating IoT technology with a microbubble generator and sensors to revolutionize water purification and real-time quality monitoring.
                                    </li>
                                </div>

                                <div className="flex my-2">
                                    <li>
                                        Designed and developed a dynamic prototype website, the central hub for our innovative project.
                                    </li>
                                </div>

                                <div className="flex my-2">
                                    <li>
                                        Delivered engaging presentations of our groundbreaking work to mentors, highlighting our achievements and vision.
                                    </li>
                                </div>
                            </div>
                            <div className="flex border-t border-t-base-burnished-brown items-center">
                                <div className="flex w-2/12 p-4 border-r border-r-base-burnished-brown">
                                    <span className="font-semibold text-xs text-black">Skills</span>
                                </div>
                                <div className="flex w-10/12 p-4">
                                    <span className="font-semibold text-xs text-black">Problem Solving, Critical Thinking, Presentation Skills, Communication Skills</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex border border-base-burnished-brown rounded-lg shadow-sm px-4 min-h-[40px] items-center justify-center w-full my-3">
                            <span className="font-medium text-xs text-base-burnished-brown">
                                See more achievements in my LinkedIn
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
