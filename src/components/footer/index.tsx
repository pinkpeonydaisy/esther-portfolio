import Assets from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex bg-base-cornsilk relative h-[200px] md:h-[350px] flex-col">
      <a href="/" className="w-full relative top-[-10px]">
        <Image
          src={Assets.ImageFooter}
          alt="gmail"
          width={20}
          height={20}
          className="w-full"
        />
      </a>
      <div className="flex flex-col p-5">
        <div className="flex">
          <span className="text-xl text-base-burnished-brown font-semibold">
            Contact me :
          </span>
        </div>
        <div className="flex mt-3 flex-col md:flex-row">
          <div className="flex items-center mr-2">
            <a href="mailto:sthrregina@gmail.com" className="flex px-2">
              <div className="flex w-[20px] h-[20px]">
                <Image
                  src={Assets.IconGmail}
                  alt="gmail"
                  width={20}
                  height={20}
                />
              </div>
            </a>
            <div className="flex">
              <a
                href="mailto:sthrregina@gmail.com"
                className="text-blue-500 hover:underline"
              >
                sthrregina@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center mt-3 md:mt-0">
            <a
              href="https://linkedin.com/in/esther-reginaa"
              className="flex px-2"
            >
              <Image
                src={Assets.IconLinkedin}
                alt="linkedin"
                width={20}
                height={20}
              />
            </a>
            <div className="flex">
              <a
                href="https://linkedin.com/in/esther-reginaa"
                className="text-blue-500 hover:underline"
              >
                linkedin.com/in/esther-reginaa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
