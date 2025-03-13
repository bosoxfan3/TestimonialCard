import Header from './components/Header';
import Info from './components/Info';

const logo = require('./profile-thumbnail.png');

const TestimonialCard = () => {
    return (
        <div className="bg-white p-6 rounded-lg mt-[200px] w-[340px] mx-auto flex flex-col gap-4">
            <Header pictureUrl={String(logo)} name="Sarah Dole" username="sarahdole" />
            <Info infoText="I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!" />
        </div>
    );
};

export default TestimonialCard;
