import { type coursesTypes } from "../data/courses";

export default function Courses({ courses, heading }: {courses:coursesTypes[], heading:string}) {
    return (
        <div>
            <div>{heading}</div>
            <div>
                {courses.map((c, idx) => (
                    <div key={idx}>
                        <img src={ c.image} />
                        <a>Buy Now</a>
                    </div>
                ))}
            </div>
       </div> 
    )
}