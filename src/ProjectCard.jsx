import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjectCard = ({ project }) => {
    const { title, name, live_link, image1, image2, image3, image4, image5, image6, image7, github_link, features } = project;
    return (
        <div className="flex gap-4">
            <Carousel autoPlay={true} axis={"horizontal"} dynamicHeight={400} showThumbs={false} infiniteLoop={true} interval={3000} className="w-full mx-auto rounded-lg md:rounded-none p-2 border-2 border-blue-600 hover:border-red-800">
                <div>
                    <img src={image1} className="w-full lg:h-[400px] md:h-[450px] h-[280px] rounded-lg" />
                </div>
                <div>
                    <img src={image2} className="w-full lg:h-[400px] md:h-[450px] h-[280px] rounded-lg" />
                </div>
                <div>
                    <img src={image3} className="w-full lg:h-[400px] md:h-[450px] h-[280px] rounded-lg" />
                </div>
                <div>
                    <img src={image4} className="w-full lg:h-[400px] md:h-[450px] h-[280px] rounded-lg" />
                </div>
                <div>
                    <img src={image5} className="w-full lg:h-[400px] md:h-[450px] h-[280px] rounded-lg" />
                </div>
                <div>
                    <img src={image6} className="w-full lg:h-[400px] md:h-[450px] h-[280px] rounded-lg" />
                </div>
                <div>
                    <img src={image7} className="w-full lg:h-[400px] md:h-[450px] h-[280px] rounded-lg" />
                </div>

            </Carousel>
            <div className="bg-white w-2/3 flex flex-col items-center justify-center p-4 gap-6 rounded-lg">
                <h2 className="text-[#615CD4] font-bold text-2xl">{name}</h2>
                <p>{title}</p>
                <div className="flex gap-6">
                    <a href={live_link}><button className="btn text-xl bg-[#615CD4] text-white hover:bg-white hover:text-[#615CD4] hover:translate-x-2">Live Link</button></a>
                    <a href={github_link}><button className="btn text-xl bg-white border-2 border-[#615CD4] text-[#615CD4] hover:bg-[#615CD4] hover:text-white hover:-translate-x-2">Github Link</button></a>
                </div>
                <div>
                    <h2 className="font-bold  text-xl">Features</h2>
                    {
                        features?.map((feature, index) => <li key={index}>{feature}</li>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ProjectCard;