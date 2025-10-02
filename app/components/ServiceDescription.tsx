// components/ServiceDetail.tsx
import { motion } from 'framer-motion';
import React, { useState, useRef, use, useEffect } from 'react';
import { FaArrowCircleRight, FaArrowLeft, FaFacebook } from 'react-icons/fa';


type Props = {
  image: string;
  title: string;
  description: string;
  features: string[];
  relatedImages: { src: string, label: string }[];
  onRelatedImageClick: (image: string, label: string) => void
};

type Contact = {
    name: string
    email: string;
}

const ServiceDescription: React.FC<Props> = ({ image, title, description, features, relatedImages }) => {
  const [selectedImage, setSelectedImage] = useState(image);
  const [selectedTitle, setSelectedTitle] = useState(title);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [formStep, setFormStep] = useState<'contact' | 'otp' | 'inquiry' | 'success'>('contact');
  const [otp, setOtp] = useState('');
  const [productName, setProductName] = useState('')
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [isMockupOpen, SetIsMockupOpen] = useState(false);
 
  useEffect(() => {
    setSelectedImage(image);
    setSelectedTitle(title);
  }, [image, title])


  const handleImageClick = (newImage: string, label: string) => {
    setSelectedImage(newImage);
    setSelectedTitle(label);
  };


  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;


  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current?.classList.remove('cursor-grabbing');
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current?.classList.remove('cursor-grabbing');
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fastness factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleContactSelect = (contact: Contact) => {
    setSelectedContact(contact)
  }

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
  <div className="max-w-4xl  w-full max-h-[100vh]  from-neutral-500 via-neutral-300 to-neutral-300  rounded">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
  {/* Left: Image */}
  <div className="w-full md:w-1/2 flex justify-center relative">
    <img
      src={selectedImage} // Replace with your new image
      alt={selectedTitle}  // Update this if necessary
      className="w-[300px] h-[300px] object-contain" // Maintain responsiveness
    />
  </div>
  {/* Right: Content */}
  <div className="w-full md:w-1/2 text-center md:text-left space-y-2">
    <h2 className="text-3xl md:text-4xl font-bold w-full text-center text-black">
      {selectedTitle}  {/* Replace with the new title */}
    </h2>
    <p className="text-gray-700 text-[17px]">
      {description}  {/* Update with the new description */}
    </p>
    <p className="text-pink-600 font-medium text-[21px]">Key Features</p>
    <ul className="text-left text-[15px] font-semibold text-gray-600">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>  
      ))}
    </ul>

    <div className='flex gap-3 md:gap-22 mt-4 w-full justify-center'>
    <button
      onClick={openModal}
      className="flex-1 max-w-[160px] max-[350px]:max-w-[140px] 
               px-4 py-2 bg-pink-500 text-white rounded-2xl 
               hover:bg-transparent hover:text-black hover:border border-pink-500
               flex items-center justify-center text-center leading-normal">
      Inquire Now
    </button>
    <button
      className='flex-1 max-w-[160px] max-[350px]:max-w-[140px] 
               border border-pink-500 rounded-2xl px-4 py-2 
               hover:bg-pink-500 hover:text-white
               flex items-center justify-center text-center leading-normal'
    >
      Try your Design
    </button>
    </div>

  </div>
</div>

{/* Image Slider */}
<div className='-mt-20'>
<p className="text-black font-regular text-center  lg:mt-10 mt-30 md:py-16 text-2xl font-bold">
  You might want also like this
</p>
</div>
<div
  ref={scrollRef}
  className="w-full bg-black p-4 rounded-lg mt-4 overflow-x-auto scrollbar-hide cursor-grab"
  onMouseDown={handleMouseDown}
  onMouseLeave={handleMouseLeave}
  onMouseUp={handleMouseUp}
  onMouseMove={handleMouseMove}
>
  <div className="flex gap-10 w-max px-8">
    {relatedImages.map((item, index) => (
      <div
        key={index}
        className="relative group w-40 h-40 bg-gradient-to-br from-neutral-700 to-neutral-500 rounded-lg overflow-hidden flex items-center justify-center"
      >
        <img
          key={index}
          src={item.src}
          alt={item.label}
          onClick={() => handleImageClick(item.src, item.label)}
          draggable="false"
          className="w-60 h-auto  object-contain rounded shadow cursor-pointer"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center text-xs py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.label}
        </div>
      </div>
    ))}
  </div>
</div>
      {/* Modal for "Inquire Now" */}

{isModalOpen && (
  <div onClick={(e) => e.stopPropagation()} className="fixed inset-0 z-50 bg-opacity-0 flex justify-center items-center  py-4 px-2 sm:px-4">
    <motion.div 
      initial={{opacity: 0, scale: 0.8}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.2, ease: 'easeOut'}}
      className='w-full max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl'
    >
    <div onClick={(e) => e.stopPropagation()} className="bg-[#1a1a1a] text-white p-6 md:p-8 rounded-lg w-full max-w-6xl max-h-[100vh] overflow-y-auto  flex flex-col md:flex-row gap-8">
      {/* Left: Product Details */}
        <div className="w-full md:w-1/2 p-4 rounded-md bg-[#262626] flex flex-col">
        <div className="w-full aspect-square overflow-hidden flex justify-center">
          <motion.img
            src={selectedImage}
            alt={title}
            className="w-full max-w-[250px] sm:max-w-xs object-contain"
            animate={{rotateY: 360}}
            transition={{duration: 0.8, ease: 'easeInOut'}}
          />
        </div>
        <h2 className="mt-3 text-lg sm:text-xl md:text-2xl text-center font-bold opacity-90">
          {selectedTitle}
        </h2>
        <p className="text-xs sm:text-sm text-center text-gray-400 mt-2">{description}</p>
        <p className="text-pink-400 font-medium text-xs sm:text-sm text-center mt-3">Key Features</p>
        <ul className="text-left text-xs sm:text-sm pl-4 text-gray-300 mt-2 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col gap-4  p-4">
        <h3 className="text-center font-semibold text-gray-200 mb-4  sm:text-lg ">
          {formStep === 'contact' && 'Fill Out this form'}
          {formStep === 'otp' && 'Enter OTP sent to your email'}
          {formStep === 'inquiry' && 'Send Product Inquiry'}
          {formStep === 'success' && '✅ Inquiry Sent!'}
        </h3>
      <div className="space-y-6">
        {formStep === 'contact' && (
          <>
            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                placeholder="Enter your name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Contact</label>
              <input
                onKeyDown={(e) => {
                  const allowedKeys =[
                    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
                    'ArrowLeft', 'ArrowRight', 'Home','End'
                  ]
                  if(
                    (e.ctrlKey || e.metaKey) &&
                    ['a','c','v','x'].includes(e.key.toLowerCase())
                  ) {
                    return;
                  }
                  if(
                    allowedKeys.includes(e.key) ||
                     /^[0-9]$/.test(e.key)
                  ) {
                    return;
                  }
                    e.preventDefault();
                }}

                type="tel"
                pattern="^\+63[0-9]{10}$"
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                placeholder="Contact person"
                value={contactPhone}
                required
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </>
        )}
        {formStep === 'otp' && (
          <div>
            <label className="text-sm text-gray-400">OTP Code</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}
        {formStep === 'inquiry' && (
          <>
            <div>
              <label className="text-sm text-gray-400">Product Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                placeholder="Product you're inquiring about"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
                rows={4}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </>
        )}
        {formStep === 'success' && (
          <div className="flex justify-center">
            <div className="text-green-400 text-5xl animate-ping">✔</div>
          </div>
        )}
         {/* Arrow Button */}
        <div className="flex justify-end mt-2">
          <button
            onClick={async () => {
              try {
                let res, data;
                // Step 1: Contact - Send OTP Email
                if (formStep === 'contact') {
                  res = await fetch('https://updatedbbwebsites.vercel.app/api/email-verification', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: contactName, contact: contactPhone, email }),
                  });

                  if (!res.ok) throw new Error('Failed to send OTP');
                  data = await res.json();

                  if (data.success) {
                    setFormStep('otp');
                  } else {
                    alert(data.message || 'Failed to send OTP');
                  }
                }
                // Step 2: OTP Verification
                else if (formStep === 'otp') {
                  res = await fetch('https://updatedbbwebsites.vercel.app/api/verify-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, otp }),
                  });

                  if (!res.ok) throw new Error('Failed to verify OTP');
                  data = await res.json();

                  if (data.success) {
                    setFormStep('inquiry');
                  } else {
                    alert(data.message || 'OTP verification failed');
                  }
                }
                // Step 3: Inquiry Submission
                else if (formStep === 'inquiry') {
                  res = await fetch('https://updatedbbwebsites.vercel.app/api/product-inquiry', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, productName, message }),
                  });

                  if (!res.ok) throw new Error('Failed to send inquiry');
                  data = await res.json();
                  if (data.success) {
                    setFormStep('success');
                    setTimeout(() => {
                      setContactName('');
                      setContactPhone('');
                      setEmail('');
                      setOtp('');
                      setProductName('');
                      setMessage('');
                      setFormStep('contact');
                    }, 3000);
                  } else {
                    alert(data.message || 'Failed to send inquiry');
                  }
                }
              } catch (error: any) {
                alert(error.message || 'Something went wrong');
              }
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-4 py-2 rounded-full"
            aria-label="Next step"
          >
            <FaArrowCircleRight />
          </button>
        </div>

        </div>
        {/* Other ways to contact */}
        <div className="mt-6 md:mt-30 text-center text-xl  text-gray-400">Other ways to contact</div>
       <div className="flex justify-between text-xs text-gray-500 mt-4 px-2 md:px-4">
        <div className="space-y-4 text-left text-sm">
          <p>+63 917 700 8364</p>
          <p className="flex items-center gap-1">
            <a href="https://facebook.com/burnboxprinting" className="flex items-center gap-1">
               <FaFacebook />burnboxprinting
            </a>
          </p>
        </div>
        <div className="space-y-4 text-right text-sm">
          <p>+63 977 247 3179</p>
          <p><a href="https://burnboxprinting.com">burnboxprinting.com</a></p>
        </div>
      </div>
        <div className="w-full flex justify-end mt-4 mb-2">
        <FaArrowLeft 
          onClick={closeModal} 
          className="text-pink-500 cursor-pointer text-2xl"
        />
      </div>
    </div>
      {/* Close Button (top-right) */}
    </div>
      </motion.div>
  </div>
)}
    </div>
  ) ;
};
export default ServiceDescription;