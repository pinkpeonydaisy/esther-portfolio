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

const SystemAnalysis = () => {
    const proccessClick = () => {
    }

    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full max-w-[1200px] flex-col">
                <div className="flex flex-col">
                    <div className="flex w-full p-5 justify-center">
                        <div className="flex">
                            <span className="font-semibold text-base-burnished-brown text-3xl text-center">System Analysis</span>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex w-6/12 justify-center">
                            <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                                <div className="flex flex-col justify-center w-full py-5 mb-5">
                                    <span className="text-center">Course Related :</span>
                                    <span className="text-center">Analisis Kebutuhan Sistem, Analisis Enterprise, Analisis Kebutuhan Enterprise, Manajemen Sumber Daya STI</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-6/12 justify-center">
                            <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col items-center justify-center py-5">
                                <div className="flex justify-center">
                                    <span>With</span>
                                </div>
                                <div className="flex justify-center h-full items-center">
                                    <span className="text-4xl font-semibold text-center">3+</span>
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
                            <span className="font-semibold text-center text-xl">Percepatan Layanan Reimbursement PT Manulife</span>
                        </div>
                        <div className="flex justify-center py-10">
                            <span className="text-center font-medium">Pembuatan inovasi percepatan layanan reimbursement pada PT Manulife dengan predictive analytics AI</span>
                        </div>
                        <div className="flex p-5">
                            <Steps vertical style={styles}>
                                <Steps.Item 
                                    status="finish"
                                    title="Business Architecture"
                                    description="Membuat Stakeholder Mapping, Value Chain, Value Stream, BPMN Inovasi" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Data Architecture" 
                                    description="Membuat Data Component Catalog, Business Function Matric, ERD, Data Architecture"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Application Architecture" 
                                    description="Membuat Application Portfolio Catalog, Relasi antar Aplikasi"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Technology Architecture" 
                                    description="Membuat technology portofolio catalog, environment location diagram, networked diagram"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Security Architecture" 
                                    description="Membuat tabel kebijakan keamanan, tabel standar keamanan, kelaikan keamanan, pemetaan domain keamanan"
                                />
                            </Steps>
                        </div>
                        <div className="flex mb-5 flex-col md:flex-row">
                            <div className="flex w-full justify-center mt-2 md:mt-0">
                                <Components.Button
                                    label="See Document"
                                    showArrow={false}
                                    onClick={proccessClick}
                                />
                            </div>
                        </div>
                        <div className="flex border-t border-t-base-burnished-brown p-5 items-center">
                            <div className="flex w-4/12">
                                <span className="font-semibold">Tools</span>
                            </div>
                            <div className="flex w-8/12">
                                <Image src={Assets.IconDrawio} alt='trello' width={40} height={40} className='m-2'/>
                                <Image src={Assets.IconArchi} alt='trello' width={100} height={100} className='m-2'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                        <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
                            <span className="font-semibold text-center text-xl">Analisis Kebutuhan Enterprise dari OKEGarden</span>
                        </div>
                        <div className="flex p-5">
                            <Steps vertical style={styles}>
                                <Steps.Item 
                                    status="finish"
                                    title="Wawancara CEO OKEGarden"
                                    description="Melakukan wawancara dengan CEO untuk mengetahui kebutuhan" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Analisis Kondisi Bisnis" 
                                    description="Membuat PESTEL, BCG Growth Matrix, dan Porter Five Forces"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Inisiatif untuk mencapai Goals Berdasarkan Misi" 
                                    description="Membuat Business Strategy Mapping dan tabel strategi yang berdasarkan perspektif"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Analisis aktivitas inti perusahaan" 
                                    description="Membuat value chain, capability mapping, dan value stream capability"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Analisis stakeholder" 
                                    description="Membuat stakeholder wheels, initiative mapping dengan Honshin Kanri"
                                />
                            </Steps>
                        </div>
                        <div className="flex mb-5 flex-col md:flex-row">
                            <div className="flex w-full justify-center mt-2 md:mt-0">
                                <Components.Button
                                    label="See Document"
                                    showArrow={false}
                                    onClick={proccessClick}
                                />
                            </div>
                        </div>
                        <div className="flex border-t border-t-base-burnished-brown p-5 items-center">
                            <div className="flex w-4/12">
                                <span className="font-semibold">Tools</span>
                            </div>
                            <div className="flex w-8/12">
                                <Image src={Assets.IconDrawio} alt='trello' width={40} height={40} className='m-2'/>
                                <Image src={Assets.IconArchi} alt='trello' width={100} height={100} className='m-2'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                        <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
                            <span className="font-semibold text-center text-xl">Analisis Kebutuhan Sistem Centro Trading</span>
                        </div>
                        <div className="flex p-5">
                            <Steps vertical style={styles}>
                                <Steps.Item 
                                    status="finish"
                                    title="Wawancara Pemilik Toko Centro Trading"
                                    description="Melakukan wawancara dengan Pemilik Centro Trading untuk mengetahui kebutuhan" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Requirement Analysis Document" 
                                    description="Membuat context diagram, skala prioritas kebutuhan, pemetaan fitur, dan gap analysis "
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Company Eligibility Document" 
                                    description="Membuat  SWOT, activity diagram, class diagram, dan state diagram"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Requirement Analysis" 
                                    description="Membuat stakeholder wheel, system capabilities, dan kelompok dan deskripsi kebutuhan"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="System Requirement" 
                                    description="Membuat functional requirement dan nonfunctional requirement"
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Requirement Traceability" 
                                    description="Membuat usecase diagram, sequence diagram dan mekanisme testing"
                                />
                            </Steps>
                        </div>
                        <div className="flex mb-5 flex-col md:flex-row">
                            <div className="flex w-full justify-center mt-2 md:mt-0">
                                <Components.Button
                                    label="See Document"
                                    showArrow={false}
                                    onClick={proccessClick}
                                />
                            </div>
                        </div>
                        <div className="flex border-t border-t-base-burnished-brown p-5 items-center">
                            <div className="flex w-4/12">
                                <span className="font-semibold">Tools</span>
                            </div>
                            <div className="flex w-8/12">
                                <Image src={Assets.IconDrawio} alt='trello' width={40} height={40} className='m-2'/>
                            </div>
                        </div>
                        <div className="flex px-5 pb-5">
                            <span>Notable awards : Best Project Team in Analisis Kebutuhan Sistem Class</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemAnalysis