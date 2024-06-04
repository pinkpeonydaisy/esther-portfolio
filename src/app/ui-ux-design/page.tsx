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

const UiUxDesign = () => {

    const proccessClick = () => {
    }

    return (
        <div className="flex w-full justify-center">
            <div className="flex w-full max-w-[1200px] flex-col">
                <div className="flex flex-col">
                    <div className="flex w-full p-5 justify-center">
                        <div className="flex">
                            <span className="font-semibold text-base-burnished-brown text-3xl text-center">UI/UX Design</span>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <div className="flex w-6/12 justify-center">
                            <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                                <div className="flex flex-col justify-center w-full border-b border-b-base-burnished-brown py-5 mb-5">
                                    <span className="text-center">Course Related :</span>
                                    <span className="text-center">Interaksi Manusia Komputer</span>
                                </div>
                                <div className="flex flex-col justify-center w-full pb-5">
                                    <span className="text-center">Additional course :</span>
                                    <span className="text-center">Digistar Class UI/UX</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-6/12 justify-center">
                            <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col items-center justify-center py-5">
                                <div className="flex justify-center">
                                    <span>More than</span>
                                </div>
                                <div className="flex justify-center h-full items-center">
                                    <span className="text-4xl font-semibold text-center">5+</span>
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
                            <span className="font-semibold text-center text-xl">Tirtaswara Website UI/UX</span>
                        </div>
                        <div className="flex p-5">
                            <Steps vertical style={styles}>
                                <Steps.Item 
                                    status="finish"
                                    title="Created a list of hypothesis for the research" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Created survey using Google Form" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Conducted interview" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Make two user persona" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Choose the style, font, color palette, etc." 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Create the website prototype" 
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
                                        <Image src={Assets.ImagePortoOne} alt='porto one' className='w-full p-1'/>
                                        <Image src={Assets.ImagePortoTwo} alt='porto one' className='w-full p-1'/>
                                    </div>
                                    <div className="flex w-full items-start">
                                        <Image src={Assets.ImagePortoFour} alt='porto four' className='w-full p-1'/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <Image src={Assets.ImagePortoThree} alt='porto three' className='w-full p-1'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex m-5 border border-base-burnished-brown rounded-lg w-full flex-col">
                        <div className="flex p-5 border-b border-b-base-burnished-brown justify-center">
                            <span className="font-semibold text-center text-xl">EcoEats App</span>
                        </div>
                        <div className="flex p-5">
                            <Steps vertical style={styles}>
                                <Steps.Item 
                                    status="finish"
                                    title="Created a list of hypothesis for the research" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Created survey using Google Form" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Conducted interview" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Make two user persona" 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Choose the style, font, color palette, etc." 
                                />
                                <Steps.Item 
                                    status="finish"
                                    title="Create the website prototype" 
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
                                        <Image src={Assets.ImagePorto2One} alt='porto one' className='w-full p-1'/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <Image src={Assets.ImagePorto2Two} alt='porto one' className='w-full p-1'/>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row">
                                    <div className="flex flex-col w-full">
                                        <Image src={Assets.ImagePorto2Three} alt='porto four' className='w-full p-1'/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <Image src={Assets.ImagePorto2Four} alt='porto three' className='w-full p-1'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UiUxDesign