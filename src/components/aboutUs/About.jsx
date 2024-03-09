

const About = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-12 my-24">
        <div className="flex-[1] flex flex-col gap-8">
            <div>
                <h3 className="text-[2rem] font-header font-semibold mb-4">About Us</h3>
                <p className="text-[#77808B] text-base md:text-lg font-body font-normal tracking-wide">Delight Media House excels in transforming public spaces and digital 
                    realms into dynamic stages for brand storytelling and audience engagement. Through our innovative blend of digital 
                    signage and social media strategies, we ensure brands not only gain visibility but also forge meaningful connections, 
                    propelling growth in the digital age.
                </p>
            </div>
            <div>
                <h3 className="text-[2rem] font-header font-semibold mb-4">Our Mission</h3>
                <p className="text-[#77808B] text-base md:text-lg font-body font-normal">Delight Media House boosts business visibility via strategic digital 
                    signage and targeted social media efforts, merging cutting-edge technology with compelling content to engage and connect. 
                    We&#39;re committed to redefining business-community engagement, leaving enduring impacts both online and offline.
                </p>
            </div>
        </div>
        <div className="flex-[1] overflow-hidden rounded-[0.625rem] group">
            <img 
                src="https://images.unsplash.com/photo-1582530239825-1878a59deeb1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                // src="https://images.unsplash.com/photo-1582879154558-197ea4b24417?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="rounded-[0.625rem] w-full h-full scale-[1.03] group-hover:scale-100 transform transition-all duration-300"
                alt="people walking in a pedestrian" 
                loading="lazy"
            />
        </div>
    </div>
  )
}

export default About;