import { heroSectionImage } from "../data/extra_links"
export default function Hero() {
    return (
        <div className="flex-col mt-20 items-center mx-auto sm:max-w-170 px-10 sm:px-0 text-wrap text-center mb-50">
            <div className="sm:w-70 py-1.5 w-50 mx-auto h-9 rounded-3xl border-dashed border-1 border-purple-600 mb-5 mt-7 cursor-pointer">
                Book Your Slots now
            </div>
            <div className="text-4xl font-bold my-5" >
                Start Your Web and Web3 Journey with us
            </div>
            <div className="text-gray-400 my-5">
                Join Our courses and get the firsthand knowledge about web and web3
            </div>
                <button className="h-9 rounded-3xl cursor-pointer bg-gradient-to-r from-purple-400 to-blue-500 w-30 my-5">View Courses</button>
            <div className="h-80 flex justify-center mt-8">
                <img src={heroSectionImage} />
            </div>
        </div>
    )
}