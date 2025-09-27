export default function Testimonials({links}:{links:string[]}) {
    return (
        <div className="mt-50 flex-col max-w-170 mx-auto px-15 sm:px-0">
            <div className="text-2xl mx-auto w-90 mb-7 font-extrabold text-center">Testimonials</div>
            <div className="flex shrink-2 flex-wrap gap-2 max-w-170">
            {links.map((l, idx) => (
                <div key={idx} className="max-w-70 shrink-4 justify-items-center mx-auto">
                    <blockquote className="twitter-tweet" data-theme="dark">
                        <a href={l}></a>
                    </blockquote>
                </div>
            ))}
            </div>
        </div>
    )
}