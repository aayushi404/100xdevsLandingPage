export default function Testimonials({links}:{links:string[]}) {
    return (
        <div>
            {links.map((l, idx) => (
                <div key={idx}>
                    <blockquote className="twitter-tweet" data-theme="dark">
                        <a href={l}></a>
                    </blockquote>
                </div>
            ))}
        </div>
    )
}