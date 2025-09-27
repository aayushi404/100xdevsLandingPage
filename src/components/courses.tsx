import { type coursesTypes } from "../data/courses";

export default function Courses({ courses, heading }: {courses:coursesTypes[], heading:string}) {
    return (
        <div className="flex-col max-w-170 mx-auto px-15 sm:px-0 mt-50">
            <div className="text-2xl mx-auto w-90 mb-7 font-extrabold text-center">{heading}</div>
            <div className="flex shrink-2 flex-wrap gap-5 max-w-170">
                {courses.map((c, idx) => (
                    <div key={idx} className="max-w-70 shrink-4 flex-col justify-items-center mx-auto">
                        <img src={ c.image} />
                        <div className="text-center w-full mt-2">
                            <button className="border rounded-2xl px-1.5 py-0.5 bg-secondary/50 border-gray-800 cursor-pointer hover:border-gray-700">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
       </div> 
    )
}