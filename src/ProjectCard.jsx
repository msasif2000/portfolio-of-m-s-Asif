import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjectCard = ({ project }) => {
    const { title, name, live_link, image1, image2, image3, image4, image5, image6, image7, github_link, features } = project;
    return (
        <div className="items-center border-blue-600  border-2  pb-2 rounded relative">
            <Carousel data-aos="fade-down" data-aos-duration="3000" autoPlay={true} axis={"horizontal"} dynamicHeight={400} showThumbs={false} infiniteLoop={true} interval={3000} className="w-full mx-auto rounded-lg md:rounded-none hover:border-red-800">
                <div>
                    <img src={image1} className="w-full lg:h-[300px] md:h-[320px] h-[250px] rounded" />
                </div>
                <div>
                    <img src={image2} className="w-full lg:h-[300px] md:h-[320px] h-[250px] rounded" />
                </div>
                <div>
                    <img src={image3} className="w-full lg:h-[300px] md:h-[320px] h-[250px] rounded" />
                </div>
                <div>
                    <img src={image4} className="w-full lg:h-[300px] md:h-[320px] h-[250px] rounded" />
                </div>
                <div>
                    <img src={image5} className="w-full lg:h-[300px] md:h-[320px] h-[250px] rounded" />
                </div>
                <div>
                    <img src={image6} className="w-full lg:h-[300px] md:h-[320px] h-[250px] rounded" />
                </div>
                <div>
                    <img src={image7} className="w-full lg:h-[300px] md:h-[320px] h-[250px] rounded" />
                </div>

            </Carousel>
            <div className="text-slate-400 flex flex-col items-center justify-center p-4 gap-6 rounded-lg mt-2 mb-12">
                <h2 data-aos="fade-up" data-aos-duration="2000" className="text-[#615CD4] font-bold text-xl">{name}</h2>
                <p data-aos="fade-up" data-aos-duration="2000" className="h-28">{title}</p>

                <div className="h-full">
                    <h2 className="font-bold  text-xl">Features</h2>
                    <div data-aos="fade-left" data-aos-duration="2000" className="flex-grow">
                        {
                            features?.map((feature, index) => <li key={index}>{feature}</li>)
                        }
                    </div>
                </div>

            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="flex justify-center gap-6 absolute bottom-2 left-0 right-0">
                <a href={live_link}><button className="btn text-xl bg-[#615CD4] text-white hover:bg-white hover:text-[#615CD4] hover:translate-x-2">Live Link</button></a>
                <a href={github_link}><button className="btn text-xl bg-white border-2 border-[#615CD4] text-[#615CD4] hover:bg-[#615CD4] hover:text-white hover:-translate-x-2">Github Link</button></a>
            </div>

        </div>
    );
};

export default ProjectCard;