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

const ProductAndProjectManagement = () => {
    const proccessClick = () => {
    }

    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full max-w-[1200px] flex-col">
                <div className="flex flex-col">
                    <div className="flex w-full p-5 justify-center">
                        <div className="flex">
                            <span className="font-semibold text-base-burnished-brown text-3xl text-center">Product & Project Management</span>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex w-6/12 justify-center">
                            <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                                <div className="flex flex-col justify-center w-full py-5 mb-5">
                                    <span className="text-center">Course Related :</span>
                                    <span className="text-center">Project Management and Product Management</span>
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
                            <span className="font-semibold text-center text-xl">Pengembangan Perangkat Lunak Digitasi Koperasi</span>
                        </div>
                        <div className="flex justify-center py-10">
                            <span className="text-center font-medium">Pembuatan inovasi percepatan layanan reimbursement pada PT Manulife dengan predictive analytics AI</span>
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
            </div>
        </div>
    )
}

export default ProductAndProjectManagement