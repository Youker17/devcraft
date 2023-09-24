import Link from "next/link";



export default function Header() {
    return (
        <div className=" flex fixed w-full z-[100] ">
            <nav className="mx-[37px] my-[23px] h-[132px] w-full bg-primary/25 backdrop-blur-sm rounded-lg">
                <ul className="flex justify-around flex-row items-center  text-2xl h-full">
                   <Link href={"#"}><li className="tracking-[4.41px]">About</li></Link>
                   <Link href={"#"}><li className="tracking-[4.41px]">Our Work</li></Link>
                   <Link href={"#"}><li className="">
                    <h1 className="text-5xl  font-bold drop-shadow-lg "><span className=" text-tertinary ">Dev</span>Craft</h1>
                    <p className="text-sm leading-normal tracking-[7.75px]">Devcraft studio</p>
                    </li></Link>
                   <Link href={"#"}><li className="tracking-[4.41px]">Pricing</li></Link>
                   <Link href={"#"}>
                       <button className=" bg-tertinary px-[32px] py-[10px] text-black   font-semibold leading-normal text-lg  rounded-[4px] ">Book a call</button>      
                   </Link>
                </ul>
            </nav>
        </div>
    )
}