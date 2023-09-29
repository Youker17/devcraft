import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    "Campaigns",
    "Email Marketing",
    "Branding",
    "Offline",
    "Contact",
    "FAQs",
  ];

  return (
    <div className="flex justify-center  items-center flex-col lg:py-[100px]">
      <Link href={"#"} className="">
        <div className="">
          <h1 className="text-5xl  font-bold drop-shadow-lg ">
            <span className=" text-tertinary ">Dev</span>Craft
          </h1>
          <p className="text-sm leading-normal tracking-[7.75px]">
            Devcraft studio
          </p>
        </div>
      </Link>
      <p className="text-white  text-[17px] font-normal tracking-[-0.232px] opacity-50 text-center w-full  lg:w-[382px] pt-[23px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-y-[18px]  lg:grid-cols-6 gap-x-[59px] py-[60px]">
        {footerLinks.map((e: string, i: number) => (
          <Link key={i} href={"#"} className="justify-self-center">
            {e}
          </Link>
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="134"
        height="22"
        viewBox="0 0 134 22"
        fill="none"
      >
        <path
          d="M8.14971 4.29509H9.96139V1.13974C9.64884 1.09674 8.5739 1 7.32201 1C4.70992 1 2.92057 2.643 2.92057 5.66274V8.44186H0.0380859V11.9693H2.92057V20.845H6.45462V11.9701H9.22052L9.65958 8.44269H6.4538V6.01251C6.45462 4.99297 6.72915 4.29509 8.14971 4.29509Z"
          fill="white"
        />
        <path
          d="M72 4.11613C71.1819 4.475 70.3101 4.71288 69.4013 4.82838C70.3363 4.27013 71.0499 3.39287 71.3854 2.3355C70.5136 2.85525 69.5511 3.22238 68.5254 3.42725C67.6976 2.54588 66.5179 2 65.2309 2C62.7339 2 60.7236 4.02675 60.7236 6.51137C60.7236 6.86888 60.7539 7.21263 60.8281 7.53988C57.0785 7.357 53.7606 5.55988 51.5317 2.82225C51.1426 3.49738 50.9144 4.27012 50.9144 5.102C50.9144 6.664 51.7187 8.04862 52.9177 8.85025C52.1931 8.8365 51.4822 8.62613 50.88 8.29475C50.88 8.3085 50.88 8.32638 50.88 8.34425C50.88 10.536 52.4434 12.3565 54.4935 12.7759C54.1264 12.8763 53.7263 12.9244 53.311 12.9244C53.0223 12.9244 52.7307 12.9079 52.4571 12.8474C53.0415 14.6335 54.6997 15.9466 56.6715 15.9893C55.137 17.1896 53.1886 17.9129 51.0794 17.9129C50.7095 17.9129 50.3548 17.8964 50 17.851C51.9979 19.1394 54.3656 19.875 56.919 19.875C65.2185 19.875 69.756 13 69.756 7.04075C69.756 6.84137 69.7491 6.64887 69.7395 6.45775C70.6346 5.8225 71.3867 5.02913 72 4.11613Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M118.875 0H127.125C130.921 0 134 3.07862 134 6.875V15.125C134 18.9214 130.921 22 127.125 22H118.875C115.079 22 112 18.9214 112 15.125V6.875C112 3.07862 115.079 0 118.875 0ZM127.125 19.9375C129.779 19.9375 131.938 17.7787 131.938 15.125V6.875C131.938 4.22125 129.779 2.0625 127.125 2.0625H118.875C116.221 2.0625 114.062 4.22125 114.062 6.875V15.125C114.062 17.7787 116.221 19.9375 118.875 19.9375H127.125Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M117.5 11C117.5 7.96263 119.963 5.5 123 5.5C126.037 5.5 128.5 7.96263 128.5 11C128.5 14.0374 126.037 16.5 123 16.5C119.963 16.5 117.5 14.0374 117.5 11ZM119.562 11C119.562 12.8948 121.105 14.4375 123 14.4375C124.895 14.4375 126.438 12.8948 126.438 11C126.438 9.10388 124.895 7.5625 123 7.5625C121.105 7.5625 119.562 9.10388 119.562 11Z"
          fill="white"
        />
        <circle cx="128.913" cy="5.08761" r="0.732875" fill="white" />
      </svg>
    </div>
  );
}
