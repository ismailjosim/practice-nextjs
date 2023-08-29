import RootLayout from '@/components/Layouts/RootLayout';


const About = () => {
    return (
        <div>
            This is about page
        </div>
    );
};

export default About;

About.getLayout = function getLayout(page) {
    return <RootLayout>{ page }</RootLayout>
}
