import { Link } from "react-router-dom"
export default function Button({link, bootstrapClass, children})
{
    return(
        <>
        <Link to={link} className={bootstrapClass}>{children}</Link>
        </>
    )
}