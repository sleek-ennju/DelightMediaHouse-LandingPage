import { useState } from "react";


const Services = () => {
    const servicesData = [
        {
            id: 1,
            title: "Digital Signage Solutions",
            // banner: "https://i.pinimg.com/564x/bc/a9/4f/bca94f8c48ecf06835b6e2a45356ee23.jpg",
            banner: "https://i.pinimg.com/564x/1b/7e/2b/1b7e2b7c8c396413647f0cec7b6e6e13.jpg",
            // banner: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063134.jpg?w=826&t=st=1709224691~exp=1709225291~hmac=2bc7873d03df4bad390b77e08ac44fc97d6faf0625fff87ed5650506bd5e75bc",
            description: "Elevate brand awareness through engaging digital signage displays, transforming physical spaces into dynamic advertising platforms. Captivate your audience with visually stunning content that tells your brand's story effectively."
        },
        {
            id: 2,
            title: "Social Media & Google Advertising",
            // banner: "https://img.freepik.com/free-psd/street-food-fest-square-flyer-template_23-2150544635.jpg?w=740&t=st=1709758497~exp=1709759097~hmac=818cfadd55da44b7eded44df815df47158ae6736a4da6f86054290613c41b28f",
            banner: "https://i.pinimg.com/564x/f3/a9/97/f3a9976e6e15537513924c18c6683e4b.jpg",
            // banner: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063150.jpg?w=826&t=st=1709226355~exp=1709226955~hmac=11561c90a5eeee05d42cea739773ae521dfe849c977ab08c145ec12fc6b8a321",
            description: "Boost your online presence with targeted advertisements on social media and Google, maximizing reach and engagement with precision-targeted ad campaigns. Leverage advanced analytics to fine-tune strategies and achieve superior ROI."
        },
        {
            id: 3,
            title: "Business Strategy Consulting",
            banner: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODl8ODc0MDM1N3x8ZW58MHx8fHx8",
            // banner: "https://i.pinimg.com/564x/87/55/b9/8755b9fa07ff903b5252cc32be49ff12.jpg",
            // banner: "https://i.pinimg.com/564x/1d/59/d0/1d59d0e52e46eb59ca8aee51c635d7af.jpg",
            // banner: "https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063172.jpg?w=740&t=st=1709226357~exp=1709226957~hmac=e6f0807e42ea6d6509d06545d5680ac881d0861fd7c4db4744d8dd0ea3fda772",
            description: "Enhance your business performance with expert analysis and strategic consultation, driving growth and innovation with tailored business solutions. Collaborate with our seasoned consultants to navigate market challenges and seize new opportunities."
        }
    ];
    // const [updatedServicesData, setUpdatedServicesData] = [];
    const [serviceCategory, setServiceCategory] = useState(servicesData[0]);
    

  return (
    <div id="services" className="flex flex-col gap-12 sm:flex-row sm:gap-4 mx-4 md:mx-12 my-24">
        <div className="flex-[1] flex flex-col gap-4">
            <h2 className="text-[#77808B] text-base font-medium font-body">Our Services</h2>
            <div className="flex flex-col gap-10 sm:gap-8">
                {servicesData.map((service) => (
                    <h3 key={service.title} onClick={()=> setServiceCategory(service)} className={`min-[250px]:text-[2.5rem] sm:text-5xl md:text-[3.5rem] text-[#3A86FF] font-bold text-left cursor-pointer  ${service.id === serviceCategory.id ? "opacity-80" : "opacity-20"}  transition-all duration-300`}>{service.title}</h3>
                ))}
            </div>
        </div>
        <div className="flex-[1]">
            <div>
                <div className="w-full max-w-[40.5rem] h-[20.5rem] rounded-[0.625rem] mb-4 overflow-hidden group">
                    <img 
                        src={serviceCategory.banner} 
                        className="w-full h-full object-cover rounded-[0.625rem] transform scale-105 group-hover:scale-100 transition-all duration-300" 
                        alt={`${serviceCategory.title} banner`} 
                        loading="lazy"
                    />
                </div>
                <h3 className="text-base leading-8">{serviceCategory.description}</h3>
            </div>
        </div>
    </div>
  )
}

export default Services;