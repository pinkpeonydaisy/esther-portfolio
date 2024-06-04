"use client"

import Components from '@/components';
import { Steps } from 'rsuite';
import Image from 'next/image';
import 'rsuite/Steps/styles/index.css';
import Assets from '@/assets';

const styles = {
    display: 'inline-table',
    verticalAlign: 'top'
};

const WebDevelopment = () => {
    const proccessClick = () => {
    }

    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full max-w-[1200px] flex-col">
                <div className="flex flex-col">
                    <div className="flex w-full p-5 justify-center">
                        <div className="flex">
                            <span className="font-semibold text-base-burnished-brown text-3xl text-center">Website Development</span>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex w-6/12 justify-center">
                            <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                                <div className="flex flex-col justify-center w-full border-b border-b-base-burnished-brown py-5 mb-5">
                                    <span className="text-center">Course Related :</span>
                                    <span className="text-center">RPL Kursus Mengemudi</span>
                                </div>
                                <div className="flex flex-col justify-center w-full pb-5">
                                    <span className="text-center">Additional course :</span>
                                    <span className="text-center">Udemy Courses</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-6/12 justify-center">
                            <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col items-center justify-center py-5">
                                <div className="flex justify-center">
                                    <span>More than</span>
                                </div>
                                <div className="flex justify-center h-full items-center">
                                    <span className="text-4xl font-semibold text-center">5</span>
                                </div>
                                <div className="flex justify-center">
                                    <span>projects in 1 year</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                        <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
                            <span className="font-semibold text-center text-xl">Kursus Mengemudi Website</span>
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
                                    label="See prototype"
                                    showArrow={false}
                                    onClick={proccessClick}
                                />
                            </div>
                            <div className="flex w-full justify-center mt-2 md:mt-0">
                                <Components.Button
                                    label="See Documentation"
                                    showArrow={false}
                                    onClick={proccessClick}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-center my-4">
                                <span className="font-semibold text-2xl text-center">Pages</span>
                            </div>
                            <div className="flex p-5 flex-col">
                                <div className="flex flex-col md:flex-row">
                                    <div className="flex flex-col w-full">
                                        <Image src={Assets.ImagePorto3One} alt='porto one' className='w-full p-1'/>
                                        <Image src={Assets.ImagePorto3Two} alt='porto one' className='w-full p-1'/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <Image src={Assets.ImagePorto3Three} alt='porto four' className='w-full p-1'/>
                                        <Image src={Assets.ImagePorto3Four} alt='porto three' className='w-full p-1'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t border-t-base-burnished-brown p-5 items-center flex-col md:flex-row">
                            <div className="flex w-full justify-center md:justify-start md:w-4/12">
                                <span className="font-semibold">Tools</span>
                            </div>
                            <div className="flex w-full md:w-8/12 justify-center flex-wrap">
                                <Image src={Assets.IconTs} alt='ts' width={40} height={40} className='m-2'/>
                                <Image src={Assets.IconNext} alt='next' width={100} height={100} className='m-2'/>
                                <Image src={Assets.IconReact} alt='react' width={40} height={40} className='m-2'/>
                                <Image src={Assets.IconMongo} alt='mongo' width={40} height={40} className='m-2'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                        <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
                            <span className="font-semibold text-center text-xl">Virtual Coffee Consultation</span>
                        </div>
                        <div className="flex justify-center py-10">
                            <span className="text-center font-medium">Virtual Coffee Consultation adalah website yang mewadahi konsultasi kopi dengan memberikan saran rekomendasi pada Virtual Hotel Tour.</span>
                        </div>
                        <div className="flex p-5">
                            <Steps vertical style={styles}>
                                <Steps.Item 
                                    status="finish"
                                    title="Membuat layanan yang dikembangkan" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Membuat ide integrasi dengan layanan lain" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Membuat back-end menggunakan FastAPI" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Membuat front-end dengan NextJS" 
                                />
                            </Steps>
                        </div>
                        <div className="flex mb-5 flex-col md:flex-row">
                            <div className="flex w-full justify-center">
                                <Components.Button
                                    label="See prototype"
                                    showArrow={false}
                                    onClick={proccessClick}
                                />
                            </div>
                            <div className="flex w-full justify-center mt-2 md:mt-0">
                                <Components.Button
                                    label="See Documentation"
                                    showArrow={false}
                                    onClick={proccessClick}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-center my-4">
                                <span className="font-semibold text-2xl text-center">Pages</span>
                            </div>
                            <div className="flex p-5 flex-col">
                                <div className="flex flex-col md:flex-row">
                                    <div className="flex flex-col w-full p-1">
                                        <Image src={Assets.ImagePorto4One} alt='porto one' className='w-full'/>
                                    </div>
                                    <div className="flex flex-col w-full p-1">
                                        <Image src={Assets.ImagePorto4Two} alt='porto one' className='w-full'/>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row p-1">
                                    <div className="flex flex-col w-full p-1">
                                        <Image src={Assets.ImagePorto4Three} alt='porto four' className='w-full'/>
                                    </div>
                                    <div className="flex flex-col w-full p-1">
                                        <Image src={Assets.ImagePorto4Four} alt='porto three' className='w-full'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex border-t border-t-base-burnished-brown p-5 items-center flex-col md:flex-row">
                            <div className="flex w-full justify-center md:justify-start md:w-4/12">
                                <span className="font-semibold">Tools</span>
                            </div>
                            <div className="flex w-full justify-center md:w-8/12 flex-wrap">
                                <Image src={Assets.IconTs} alt='ts' width={40} height={40} className='m-2'/>
                                <Image src={Assets.IconNext} alt='next' width={100} height={100} className='m-2'/>
                                <Image src={Assets.IconReact} alt='react' width={40} height={40} className='m-2'/>
                                <Image src={Assets.IconMongo} alt='mongo' width={40} height={40} className='m-2'/>
                                <Image src={Assets.IconFastapi} alt='fastapi' width={100} height={100} className='m-2'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebDevelopment