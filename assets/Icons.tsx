import { twMerge } from "tailwind-merge"
import { Variants, motion} from "framer-motion"


export const Star:React.FC<{style:string}> = ({style}) => (
  
<svg xmlns="http://www.w3.org/2000/svg" width="107" height="129" viewBox="0 0 107 129" fill="none" className={twMerge(" animate-bounce   ",style)} >
<g filter="url(#filter0_d_380_1930)">
  <path d="M53.5 19L55.1712 32.6916C57.1575 48.9656 69.3622 61.9613 85.1629 64.6268L89 65.2741L85.1629 65.9214C69.3622 68.5869 57.1575 81.5825 55.1712 97.8566L53.5 111.548L51.8288 97.8566C49.8425 81.5825 37.6378 68.5869 21.8371 65.9214L18 65.2741L21.8371 64.6268C37.6378 61.9613 49.8425 48.9657 51.8288 32.6916L53.5 19Z" fill="#EEBBC3"/>
</g>
<defs>
  <filter id="filter0_d_380_1930" x="0" y="0" width="107" height="128.548" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="-1"/>
    <feGaussianBlur stdDeviation="9"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.933333 0 0 0 0 0.733333 0 0 0 0 0.764706 0 0 0 0.61 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_380_1930"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_380_1930" result="shape"/>
  </filter>
</defs>
</svg>
    
)


export const Company:React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="218" height="40" viewBox="0 0 218 40" fill="none">
  <g clip-path="url(#clip0_125_4293)">
    <path d="M122.355 29.5238H127.018V11.9352H122.355V29.5238ZM122.355 9.19238H127.018V5.00952H122.355V9.19238Z" fill="white" fill-opacity="0.57"/>
    <path d="M130.023 35.2837H134.686V27.5351H134.754C135.748 29.0437 137.36 30.038 139.828 30.038C144.354 30.038 147.44 26.438 147.44 20.7466C147.44 15.2608 144.457 11.4551 139.794 11.4551C137.394 11.4551 135.748 12.5866 134.617 14.1294H134.514V11.9351H130.023V35.2837ZM138.834 26.1637C136.057 26.1637 134.583 24.0723 134.583 20.8837C134.583 17.7294 135.748 15.2266 138.663 15.2266C141.543 15.2266 142.708 17.558 142.708 20.8837C142.708 24.2094 141.2 26.1637 138.834 26.1637Z" fill="white" fill-opacity="0.57"/>
    <path d="M156.741 30.038C161.13 30.038 164.147 27.9123 164.147 24.3808C164.147 20.2666 160.89 19.4437 157.941 18.8266C155.438 18.3123 153.107 18.1751 153.107 16.6666C153.107 15.398 154.307 14.7123 156.124 14.7123C158.113 14.7123 159.313 15.398 159.518 17.2837H163.735C163.393 13.7523 160.821 11.4551 156.193 11.4551C152.181 11.4551 149.027 13.2723 149.027 17.078C149.027 20.918 152.113 21.7751 155.267 22.3923C157.667 22.8723 159.895 23.0437 159.895 24.7237C159.895 25.958 158.73 26.7466 156.673 26.7466C154.581 26.7466 153.141 25.8551 152.833 23.8323H148.513C148.787 27.5694 151.633 30.038 156.741 30.038Z" fill="white" fill-opacity="0.57"/>
    <path d="M181.85 29.5239V11.9353H177.187V22.0839C177.187 24.4153 175.85 26.061 173.656 26.061C171.667 26.061 170.742 24.9296 170.742 22.8725V11.9353H166.113V23.661C166.113 27.501 168.307 30.0039 172.216 30.0039C174.685 30.0039 176.056 29.0782 177.256 27.4668H177.359V29.5239H181.85Z" fill="white" fill-opacity="0.57"/>
    <path d="M184.866 29.5237H189.529V19.3066C189.529 16.9751 190.798 15.4666 192.684 15.4666C194.398 15.4666 195.392 16.4951 195.392 18.4837V29.5237H200.055V19.3066C200.055 16.9751 201.255 15.4666 203.209 15.4666C204.924 15.4666 205.918 16.4951 205.918 18.4837V29.5237H210.581V17.6951C210.581 13.8551 208.489 11.4551 204.786 11.4551C202.558 11.4551 200.706 12.6208 199.506 14.5408H199.438C198.581 12.6894 196.798 11.4551 194.569 11.4551C192.135 11.4551 190.421 12.6894 189.461 14.3008H189.358V11.9351H184.866V29.5237Z" fill="white" fill-opacity="0.57"/>
    <path d="M0.824219 29.5238H5.48707V5.00952H0.824219V29.5238Z" fill="white" fill-opacity="0.57"/>
    <path d="M16.8888 30.038C22.3402 30.038 26.0773 25.9923 26.0773 20.7466C26.0773 15.5008 22.3402 11.4551 16.8888 11.4551C11.4373 11.4551 7.7002 15.5008 7.7002 20.7466C7.7002 25.9923 11.4373 30.038 16.8888 30.038ZM16.8888 26.4723C14.0088 26.4723 12.4316 24.1751 12.4316 20.7466C12.4316 17.318 14.0088 14.9866 16.8888 14.9866C19.7345 14.9866 21.3459 17.318 21.3459 20.7466C21.3459 24.1751 19.7345 26.4723 16.8888 26.4723Z" fill="white" fill-opacity="0.57"/>
    <path d="M35.9934 35.5237C38.5991 35.5237 40.862 34.9066 42.3362 33.5351C43.6391 32.3351 44.4277 30.6551 44.4277 28.1866V11.9351H39.9363V13.7866H39.8677C38.8048 12.3123 37.1934 11.4551 34.9991 11.4551C30.542 11.4551 27.3877 14.8151 27.3877 20.0608C27.3877 25.3751 31.2277 28.4608 35.1363 28.4608C37.3648 28.4608 38.702 27.5694 39.7305 26.4037H39.8334V28.3237C39.8334 30.7237 38.5648 31.9923 35.9248 31.9923C33.7648 31.9923 32.7705 31.1351 32.3934 30.038H27.7648C28.2448 33.4666 31.1934 35.5237 35.9934 35.5237ZM35.9248 24.7237C33.5248 24.7237 31.9477 22.9751 31.9477 19.9923C31.9477 17.0437 33.5248 15.1923 35.8905 15.1923C38.702 15.1923 40.0734 17.3866 40.0734 19.958C40.0734 22.5637 38.8734 24.7237 35.9248 24.7237Z" fill="white" fill-opacity="0.57"/>
    <path d="M55.7609 30.038C61.2123 30.038 64.9495 25.9923 64.9495 20.7466C64.9495 15.5008 61.2123 11.4551 55.7609 11.4551C50.3095 11.4551 46.5723 15.5008 46.5723 20.7466C46.5723 25.9923 50.3095 30.038 55.7609 30.038ZM55.7609 26.4723C52.8809 26.4723 51.3038 24.1751 51.3038 20.7466C51.3038 17.318 52.8809 14.9866 55.7609 14.9866C58.6066 14.9866 60.2181 17.318 60.2181 20.7466C60.2181 24.1751 58.6066 26.4723 55.7609 26.4723Z" fill="white" fill-opacity="0.57"/>
    <path d="M212.275 9.04771C212.275 8.25873 212.915 7.61914 213.704 7.61914H216.561C217.35 7.61914 217.99 8.25873 217.99 9.04771C217.99 9.83669 217.35 10.4763 216.561 10.4763H213.704C212.915 10.4763 212.275 9.83669 212.275 9.04771Z" fill="white" fill-opacity="0.57"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M93.2275 0C104.273 0 113.228 8.95431 113.228 20C113.228 31.0457 104.273 40 93.2275 40C82.1818 40 73.2275 31.0457 73.2275 20C73.2275 8.95431 82.1818 0 93.2275 0ZM92.5046 1.49659C90.2229 1.81769 88.0503 3.65108 86.3638 6.7174C85.8746 7.60683 85.4332 8.58946 85.0486 9.65044C87.3418 9.07417 89.8609 8.73442 92.5046 8.68187V1.49659ZM83.3582 10.1308C83.8366 8.62958 84.4217 7.2484 85.097 6.02065C85.933 4.50059 86.9252 3.18795 88.0431 2.17977C81.9642 3.94523 77.1727 8.73679 75.4072 14.8157C76.4154 13.6978 77.728 12.7056 79.2481 11.8696C80.4759 11.1943 81.857 10.6091 83.3582 10.1308ZM82.8779 11.8211C82.3016 14.1143 81.9619 16.6334 81.9093 19.2771H74.724C75.0451 16.9954 76.8785 14.8228 79.9449 13.1364C80.8343 12.6472 81.8169 12.2058 82.8779 11.8211ZM83.3554 19.2771C83.4151 16.392 83.8305 13.6834 84.5177 11.2902C86.9109 10.603 89.6195 10.1876 92.5046 10.1279V13.2508C91.4283 16.0062 89.2331 18.2012 86.4776 19.2771H83.3554ZM81.9093 20.7229H74.724C75.0451 23.0046 76.8785 25.1771 79.9449 26.8636C80.8343 27.3528 81.8169 27.7942 82.8779 28.1789C82.3016 25.8857 81.9619 23.3666 81.9093 20.7229ZM84.5177 28.7098C83.8305 26.3166 83.4151 23.608 83.3554 20.7229H86.4776C89.2331 21.7988 91.4283 23.9938 92.5046 26.7492V29.8721C89.6195 29.8124 86.9109 29.397 84.5177 28.7098ZM83.3582 29.8692C81.857 29.3909 80.4759 28.8057 79.2481 28.1304C77.728 27.2944 76.4154 26.3022 75.4072 25.1843C77.1727 31.2632 81.9642 36.0548 88.0431 37.8202C86.9252 36.812 85.933 35.4994 85.097 33.9793C84.4217 32.7516 83.8366 31.3704 83.3582 29.8692ZM92.5046 38.5034C90.2229 38.1823 88.0503 36.3489 86.3638 33.2826C85.8746 32.3932 85.4332 31.4105 85.0486 30.3496C87.3418 30.9258 89.8609 31.2656 92.5046 31.3181V38.5034ZM98.4118 37.8202C99.5297 36.812 100.522 35.4994 101.358 33.9793C102.033 32.7516 102.619 31.3704 103.097 29.8692C104.598 29.3909 105.979 28.8057 107.207 28.1304C108.727 27.2944 110.04 26.3022 111.048 25.1843C109.282 31.2632 104.491 36.0548 98.4118 37.8202ZM101.407 30.3496C101.022 31.4105 100.58 32.3932 100.091 33.2826C98.4046 36.3489 96.232 38.1823 93.9503 38.5034V31.3181C96.594 31.2656 99.1131 30.9258 101.407 30.3496ZM103.577 28.1789C104.638 27.7942 105.621 27.3528 106.51 26.8636C109.577 25.1772 111.41 23.0046 111.731 20.7229H104.546C104.493 23.3666 104.153 25.8857 103.577 28.1789ZM103.1 20.7229C103.04 23.608 102.625 26.3166 101.937 28.7098C99.544 29.397 96.8354 29.8124 93.9503 29.8721V26.7515C95.0263 23.9951 97.222 21.7991 99.9782 20.7229H103.1ZM104.546 19.2771H111.731C111.41 16.9954 109.577 14.8228 106.51 13.1364C105.621 12.6472 104.638 12.2058 103.577 11.8211C104.153 14.1143 104.493 16.6334 104.546 19.2771ZM101.937 11.2902C102.625 13.6834 103.04 16.392 103.1 19.2771H99.9783C97.222 18.2009 95.0263 16.0049 93.9503 13.2485V10.1279C96.8354 10.1876 99.544 10.603 101.937 11.2902ZM103.097 10.1308C104.598 10.6091 105.979 11.1943 107.207 11.8696C108.727 12.7056 110.04 13.6978 111.048 14.8157C109.282 8.73679 104.491 3.94523 98.4118 2.17977C99.5297 3.18795 100.522 4.50059 101.358 6.02065C102.033 7.2484 102.619 8.62958 103.097 10.1308ZM93.9503 1.49659C96.232 1.81769 98.4046 3.65108 100.091 6.7174C100.58 7.60684 101.022 8.58946 101.407 9.65044C99.1131 9.07417 96.594 8.73442 93.9503 8.68187V1.49659Z" fill="white" fill-opacity="0.57"/>
  </g>
  <defs>
    <clipPath id="clip0_125_4293">
      <rect width="218" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>
)


export const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<path d="M31 20.5833L22.6667 28.9167L18.5 24.75M24.75 43.5C14.3947 43.5 6 35.1053 6 24.75C6 14.3947 14.3947 6 24.75 6C35.1053 6 43.5 14.3947 43.5 24.75C43.5 35.1053 35.1053 43.5 24.75 43.5Z" stroke="#0F2C59" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
)


export const ArrowDown:React.FC<{variants:Variants | undefined,style?:string}> = ({variants,style}) => (
  <motion.svg variants={variants}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={twMerge("w-6 h-6 ",style)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
</motion.svg>

)