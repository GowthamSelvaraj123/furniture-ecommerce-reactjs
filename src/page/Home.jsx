import HeroSection from "../components/UI/hero/HeroSection";
import ThreeColumn from "../components/Page-section/ThreeColumn";
import WhyChooseUs from "../components/Page-section/WhyChooseus";
import TwoColumn from "../components/Page-section/TwoColumn";
import CardRepeater from "../components/Page-section/CardRepeater";
import TestimonialSlider from "../components/Page-section/TestimonialSlider";
import RecentBlog from "../components/Page-section/RecentBlog";
export default function Home()
{
    return(<>
    <HeroSection title="Modern Interior" subtitle="Design Studio" description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."></HeroSection>
    <ThreeColumn></ThreeColumn>
    <WhyChooseUs></WhyChooseUs>
    <TwoColumn></TwoColumn>
    <CardRepeater></CardRepeater>
    <TestimonialSlider></TestimonialSlider>
    <RecentBlog></RecentBlog>
    </>);
}