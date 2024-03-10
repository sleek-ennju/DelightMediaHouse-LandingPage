import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Button from "../ui/button/Button";

const Contact = () => {
  // options for radio input
  const options = ['General enquiry', 'Service enquiry', "Delivery Enquiry"];

  // form data states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    phoneNumber: "",
    selectedOption: options[0],
    message:""
  })

  // form error states
  const [errors, setErrors] = useState({
    firstName:"",
    lastName:"",
    email: "",
    phoneNumber:"",
    message:""
  });

  // function for handling change in input state
  const handleChange = e => {
    const { name, value } = e.target
    console.log("name:", name, "value:", value);

    setFormData({
      ...formData,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: ''
    })

    console.log("formData:",formData);
  }

  // email checker
  const checkEmail = (email)=>{
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  // Validation function
  const validateForm = ()=>{
    const newErrors = {}
    
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First Name is required!'
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required!'
    }
    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone number is required!'
    }
    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required'
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required!'
    }else {
      // check email format if the email field is not empty
      const emailValidity = checkEmail(formData.email);
      if (!emailValidity) {
        newErrors.email = "Email is in a wrong format!";
      }
    }
    
    //check for errors
    if (Object.values(newErrors).some(error => error !== '')) {
      setErrors(newErrors);
      return false;
    } else{
      return true;
    }
  }
  const scrollToHeader = () => {
    const headerSection = document.getElementById('header');
    if (headerSection) {
       headerSection.scrollIntoView({ behavior: 'smooth' });
    }
   };
  
  const handleFormSubmission = (e)=>{
    e.preventDefault();

    if(validateForm()){
      alert('Your form was submitted successfully!');
      scrollToHeader();
    }
  }

 


  return (
    <div id="contact" className="px-4 md:px-12 py-24 bg-white rounded-[0.625rem]">
      <div className="flex flex-col lg:flex-row justify-between mt-4 gap-16 md:gap-8">
        <div className="lg:flex-[1] flex flex-col items-center lg:items-start gap-8  rounded-[0.625rem] text-black ">
          <div>
            <h3 className="font-body font-medium text-base text-center uppercase lg:text-start">Embark On The Digital Expressway To</h3>
            <h4 className="font-header font-semibold text-[2rem] text-[#3A86FF] drop-shadow-sm text-center lg:text-start">Accelerating Your Brand&#39;s Evolution</h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-[#3A86FF] rounded-[0.625rem]"></div>
            <p className="text-base font-normal font-body">Follow Us</p>
          </div>
          <div className="flex items-center gap-4">
            
            <div className="bg-black p-1 text-white rounded-full cursor-pointer  hover:bg-[#181819] transition-colors duration-300"><a href="/"><FaFacebook size={16}/></a></div>
            <div className="bg-black p-1 text-white rounded-full cursor-pointer  hover:bg-[#181819] transition-colors duration-300"><a href="/"><FaInstagram size={16}/></a></div>
            <div className="bg-black p-1 text-white rounded-full cursor-pointer  hover:bg-[#181819] transition-colors duration-300"><a href="/"><FaTwitter size={16}/></a></div>
            <div className="bg-black p-1 text-white rounded-full cursor-pointer  hover:bg-[#181819] transition-colors duration-300"><a href="/"><FaWhatsapp size={16}/></a></div>
          </div>
        </div>
        <div className="lg:flex-[2] px-2 md:px-8">
            <form action="#" method="post" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2 md:col-auto">
                <label htmlFor="firstName" className="font-poppins font-medium mb-4 flex items-center gap-1">First Name <span className="text-blossom">*</span></label>
                <input type="text" onChange={handleChange} value={formData.firstName} name="firstName" id="firstName" className="block border-b border-solid border-black bg-transparent p-2 outline-none w-full"/>
                {errors.firstName && <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>}
                </div>
                <div className="col-span-2 md:col-auto">
                <label htmlFor="lastName" className="font-poppins font-medium mb-4 flex items-center gap-1">Last Name <span className="text-blossom">*</span></label>
                <input type="text" name="lastName" id="lastName" onChange={handleChange} value={formData.lastName} className="block border-b border-solid border-black bg-transparent p-2 outline-none w-full"/>
                {errors.lastName && <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>}
                </div>
                <div className="col-span-2 md:col-auto">
                <label htmlFor="email" className="font-poppins font-medium mb-4 flex items-center gap-1">Email <span className="text-blossom">*</span></label>
                <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} className="block border-b border-solid border-black bg-transparent p-2 outline-none w-full" />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                </div>
                <div className="col-span-2 md:col-auto">
                <label htmlFor="phone" className="font-poppins font-medium mb-4 flex items-center gap-1">Phone Number <span className="text-blossom">*</span></label>
                <input type="number" name="phoneNumber" id="phone" onChange={handleChange} value={formData.phoneNumber} className="block border-b border-solid border-black bg-transparent p-2 outline-none w-full" />
                {errors.phoneNumber && <p className="text-red-500 text-sm mt-2">{errors.phoneNumber}</p>}
                </div>
                <div className="col-span-2">
                <h3 className="font-medium font-poppins mb-2">Select Subject?</h3>
                <div className="flex gap-4 flex-wrap">
                    {options.map((option, index)=> (
                    <div key={index} className="flex gap-2">
                        <input 
                        key={index} 
                        type="radio" 
                        id={`option ${index}`} 
                        value={option} 
                        name={`selectedOption`}
                        onChange={handleChange}
                        checked={formData.selectedOption === option}
                        className="cursor-pointer"
                        />
                        <label htmlFor={`option ${index}`}>{option}</label>
                    </div>
                    ))}
                </div>
                </div>
                <div className="col-span-2">
                <label htmlFor="message" className="font-poppins font-medium">Message <span className="text-blossom">*</span></label>
                <textarea name="message" onChange={handleChange} value={formData.message} id="message" cols="25" rows="1" autoCorrect="true" className="block resize-none border-b border-solid border-black bg-transparent p-2 outline-none w-full mt-4"></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
                </div>
                <div className="justify-self-end col-span-2">
                <Button title="Send Message" type="submit" action={handleFormSubmission} />
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
