import HeroSection from "../components/UI/hero/HeroSection"
import BlogRepeater from "../components/Page-section/BlogRepeater"
import TestimonialSlider from "../components/Page-section/TestimonialSlider";
export default function Blog()
{
    return(
        <>
        <HeroSection title="Blog" subtitle="" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."></HeroSection>
        <BlogRepeater></BlogRepeater>
        <TestimonialSlider></TestimonialSlider>
        </>
    )
}