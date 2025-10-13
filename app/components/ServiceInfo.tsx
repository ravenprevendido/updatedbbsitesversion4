// // components/ServicesDisplay.tsx

// import React, { useEffect, useState } from 'react'
// import ImageCard from './ImageCard'
// import ServiceDescription from './ServiceDescription'
// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/navigation';
// import { useHeaderContext } from '../context/HeaderContext';


// type Props = {
//   searchValue: string;
//   selectedServiceFromHeader: string | null;
// }

// const cards = [


  
//   {
//     id: '1',
//     title: 'Digital & Offset Printing',
//     frontImg: '/BOOK.png',
//     hoverImg: '/offset.png',
//     description: 'Digital and offset printing are two methods of producing printed materials: digital printing involves sending digital files directly to the printer without the need for plates, while offset printing is a traditional technique that uses plates to transfer ink onto a rubber blanket, then onto the printing surface.',
//     features: ['Business Cards', 'Flyers', 'Brochures', 'Invitations', 'Coupons', 'Corporate', 'Restaurant Menu', 'Posters', 'Official Receipt / Form', 'Souvenirs'] ,
//     relatedImages: [
//       {src: '/largformatpicture/xbanner.png', label: 'Large xbanner'},
//       {src: '/largformatimg.webp', label: 'Large Format'},
//       {src: '/largformatpicture/panaflex.png.png', label: 'Large Banner'},
//       {src: '/largformatpicture/tarpaulin.png', label: 'Large Banner'},
//       {src: '/largformatpicture/pullupbanner.png', label: 'Large Banner'}
      
//     ]
//   },

//   {
//     id: '2',
//     title: 'Forms & reciepts',
//     frontImg: '/BOOK.png',
//     hoverImg: '/offsetprinting.png',
//     description: 'Our Form & Receipt Printing Service is designed to streamline your documentation process, ensuring accuracy, consistency, and professionalism every step of the way.',
//     features: ['Offical Receipt', 'Job Order', 'Acknowledgement Receipt', 'Service Invoice', 'Billing Invoice', 'Other Receipt'],
//     relatedImages: [
//       {src: '/largformatpicture/xbanner.png', label: 'Large xbanner'},
//       {src: '/largformatimg.webp', label: 'Large Format'},
//       {src: '/largformatpicture/panaflex.png.png', label: 'Large Banner'},
//       {src: '/largformatpicture/tarpaulin.png', label: 'Large Banner'},
//       {src: '/largformatpicture/pullupbanner.png', label: 'Large Banner'}
      
//     ]
//   },
  
//   {
//     id: '3',
//     title: 'Panaflex-Signage',
//     frontImg: '/BOOK.png',
//     hoverImg: '/panaflex.png',
//     description: 'A transluscent canvas made with special substances that permit light to pass through it.',
//     features: ['Lighted', 'non-lighted'],
//     relatedImages: [
//       {src: '/boxclothing/image1.png', label: 'design Tshirt'},
//       {src: '/boxclothing/image2.png', label: 'design Tshirt2'},
//       {src: '/boxclothing/image3.png', label: 'design Tshirt3'},
//       {src: '/boxclothing/image4.png', label: 'design Tshirt4'},
//       {src: '/boxclothing/image5.png', label: 'design Tshirt5'},
//     ]
//   },

//   {
//     id: '4',
//     title: 'Large Format Services',
//     frontImg: '/BOOK.png',
//     hoverImg: '/largeformat.png',
//     description: 'Large format printing on different media such as Vinyl sticker, Photopaper, Duratrans ( Back-Litfilm ) , Panaflex and tarpaulins.',
//     features: ['Banners', 'Streamers', 'Billboards ', 'Sintra Boards', 'Vehicle wraps', 'Photo Canvas', 'Standees Wall', ' Murals Acrylic'],
//     relatedImages: [
//       {src: '/brandstickers/image1.png', label: 'label stickers1'},
//       {src: '/brandstickers/image2.png', label: 'label stickers2'},
//       {src: '/brandstickers/image2.png', label: 'label stickers3'},
//       {src: '/brandstickers/image2.png', label: 'label stickers4'}
//     ]
//   },

//   {
//     id: '5',
//     title: 'Sticker & Labels',
//     frontImg: '/BOOK.png',
//     hoverImg: '/sticker.png',
//     description: 'Label Stickers are indispensable tools that offer convenience, organization, customization, and versatility for a wide range of personal, professional, and creative applications.',
//     features: ['Product Labels','Computer Labels','Industrial Labels ','Bottle Labels','Cling Stickers & Decals','Advertising Labels','Other Sticker Labels'],
//     relatedImages: [
//       {src: '/callingcards/image1.png', label: 'calling cards1'},
//       {src: '/callingcards/image2.png', label: 'calling cards2'},
//       {src: '/callingcards/image3.png', label: 'calling cards3'},
//       {src: '/callingcards/image4.png', label: 'calling cards4'},
//       {src: '/callingcards/image4.png', label: 'calling cards5'},
//     ]
//   },
//   {
//     id: '6',
//     title: 'Acrylic Build-up',
//     frontImg: '/BOOK.png',
//     hoverImg: '/signage.png',
//     description: 'Acrylic signage refers to signs made using acrylic sheets as the primary material. These signs are popular for their sleek, modern appearance and versatility in design',
//     features: ['Material','Design Options ','Printing And Graphics ','Mounting And Installation','Durability And Maintenance','Applications'],
//     relatedImages: [
//       {src: '/giveaways/image1.png', label: 'giveaways design1'},
//       {src: '/giveaways/image2.png', label: 'giveaways design2'},
//       {src: '/giveaways/image3.png', label: 'giveaways design3'},
//       {src: '/giveaways/image4.png', label: 'giveaways design4'},
//       {src: '/giveaways/image5.png', label: 'giveaways design5'}
//     ]
//   },


//   {
//     id: '7',
//     title: 'Standee Signage',
//     frontImg: '/BOOK.png',
//     hoverImg: '/standee.png',
//     description: 'We offer a range of innovative and eye-catching standee designs to help you effectively communicate your message, promote your brand, and enhance your visibility at events, exhibitions, trade shows, retail spaces, and more.',
//     features: ['Custom Design','High-Quality Materials','Versatility','Easy Assembly','Portability','Custom Printing'],
//     relatedImages: [
//       {src: '/BOOK.png', label: 'sample1'},
//       {src: '/BOOK.png', label: 'sample1'},
//       {src: '/BOOK.png', label: 'sample1'},
//       {src: '/BOOK.png', label: 'sample1'},
//       {src: '/BOOK.png', label: 'sample1'}
//     ]
//   },

//   {
//     id: '8',
//     title: 'Wall Mural',
//     frontImg: '/BOOK.png',
//     hoverImg: '/wallmural.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
//     features: ['Custom Design','High-Quality Materials','Easy Installation','Versatility','Durable Construction'],
//     relatedImages: [
//       {src: '/eventcards/image1.png', label: 'event cards1'},
//       {src: '/eventcards/image1.png', label: 'event cards2'},
//       {src: '/eventcards/image1.png', label: 'event cards3'},
//       {src: '/eventcards/image1.png', label: 'event cards4'},
//       {src: '/eventcards/image1.png', label: 'event cards5'}
//     ]
//   },

//   {
//     id: '9',
//     title: 'Glass Frosted Sticker',
//     frontImg: '/BOOK.png',
//     hoverImg: '/glassfrosted.png',
//     description: 'Frosted glass stickers provide privacy, aesthetics, and branding opportunities for windows, glass partitions, doors, and more, creating a stylish and professional atmosphere in any environment.',
//     features: ['Privacy and Design','Custom Design Options','Premium Quality Materials','Easy Installation and Removal','Versatility','Customer Satisfaction'],
//     relatedImages: [
//       {src: '/idlanyard/image1.png', label: 'idlanyard design1'},
//       {src: '/idlanyard/image2.png', label: 'idlanyard design2'},
//       {src: '/idlanyard/image3.png', label: 'idlanyard design3'},
//       {src: '/idlanyard/image4.png', label: 'idlanyard design4'},
//       {src: '/idlanyard/image5.png', label: 'idlanyard design5'}
//     ]
//   },
//   {
//     id: '10',
//     title: 'Sticker On Sintra',
//     frontImg: '/BOOK.png',
//     hoverImg: '/sintra.png',
//     description: 'Sintra board, also known as PVC foam board, is a lightweight yet durable material widely used for various signage and display purposes, including stickers.',
//     features: ['Custom Design','Eye-Catching Visuals','Versatility'],
//     relatedImages: [
//       {src: '/marketingcoll/image1.png', label: 'collateral sample1'},
//       {src: '/marketingcoll/image2.png', label: 'collateral sample2'},
//       {src: '/marketingcoll/image3.png', label: 'collateral sample3'},
//       {src: '/marketingcoll/image4.png', label: 'collateral sample4'},
//       {src: '/marketingcoll/image5.png', label: 'collateral sample5'},
//       {src: '/marketingcoll/image6.png', label: 'collateral sample6'}
//     ]
//   },
//   {
//     id: '11',
//     title: 'Graphic design',
//     frontImg: '/BOOK.png',
//     hoverImg: '/graphicdesign.png',
//     description: 'Aside from printing and installation, we also offer Graphic Design.',
//     features: ['Logo Design','Brochures','Menu Designs','Catalogue Design','Flyers','Service Board','Header','Event Design'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },
//   {
//     id: '14',
//     title: 'Flyer Design',
//     frontImg: '/BOOK.png',
//     hoverImg: '/flyer.png',
//     description: 'Flyers are versatile promotional materials designed to catch the eye and deliver a concise message.',
//     features: ['Eye-catching Design','Clear Message','Informative Content','Call to Action','Contact Information','Branding','White Space','Printing Specifications'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },
//   {
//     id: '15',
//     title: 'Logo Design',
//     frontImg: '/BOOK.png',
//     hoverImg: '/logo.png',
//     description: 'Logo design is the process of creating a unique visual symbol that represents a brand, business, organization, or individual.',
//     features: ['Consultation','Research and Concept Development','Design Execution','File Formats and Deliverables','Brand Guidelines','Optional Add-Ons','Timelines and Deadlines','Quality Assurance'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },
//   {
//     id: '16',
//     title: 'X-Banner & Portable Booth',
//     frontImg: '/BOOK.png',
//     hoverImg: '/xbanner.png',
//     description: 'Customized X-Booth & Portable Booth services provide tailored solutions for businesses and organizations looking to create unique and branded booth experiences for trade shows, exhibitions, and events.',
//     features: ['Custom Design','High-Quality Printing','Durable Construction','Portability','Versatility','Quick Assembly'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },
//    {
//     id: '17',
//     title: 'Brochures / Company Profile',
//     frontImg: '/BOOK.png',
//     hoverImg: '/brochure.png',
//     description: 'A brochure and company profile printing service offers professional printing solutions for businesses looking to create high-quality marketing materials.',
//     features: ['Eye-catching Design','Clear Message','Informative Content','Call to Action','Contact Information','Branding','White Space','Printing Specifications'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },

//    {
//     id: '19',
//     title: 'Photo Canvas',
//     frontImg: '/BOOK.png',
//     hoverImg: '/photocanvas.png',
//     description: 'Transform your memories into timeless works of art with our Personalized Photo Canvas Printing Service. Whether it’s a cherished family portrait, a breathtaking landscape, or a special moment captured in time, our high-quality canvas prints bring your favorite photos to life in stunning detail and vibrant color.',
//     features: ['Premium Quality Materials','Custom Sizing Options','Gallery-Wrapped Edges','Ready-to-Hang Convenience','Versatile Decor','Customization Options'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },

//   {
//     id: '20',
//     title: 'Signage & Wall Mural Installation',
//     frontImg: '/BOOK.png',
//     hoverImg: '/installation.png',
//     description: 'Specialize in expert installation of a wide range of signage and wall murals, helping businesses and individuals bring their visuals to life with precision, efficiency, and attention to detail.',
//     features: ['Expert','Comprehensive Services', 'Professional Equipment','Attention to Detail','Custome Solutions','Customer Satisfaction'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },

//     {
//     id: '21',
//     title: 'Backlit FIlm',
//     frontImg: '/BOOK.png',
//     hoverImg: '/backlitfilm.png',
//     description: 'Backlit film is a versatile and effective medium for showcasing vibrant graphics and captivating visuals in illuminated displays, lightboxes, and signage.',
//     features: ['Vivid Colors','Translucent Materials','Durability','Custom Sizes','Easy Installation','Versatility'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },

  
//     {
//     id: '22',
//     title: 'Vehicle Wrap',
//     frontImg: '/BOOK.png',
//     hoverImg: '/vehicle.png',
//     description: 'We specialize in transforming vehicles into powerful advertising tools, showcasing your brand, message, and style, with eye-catching and durable wraps that demand attention on the road.',
//     features: ['Professional Installation', 'Brand Visibility and Marketing Impact','Protection and Resale Value','Custom Design','High-Quality Materials','Full Coverage or Partial Wraps'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },

  
//     {
//     id: '23',
//     title: 'Neon lights',
//     frontImg: '/BOOK.png',
//     hoverImg: '/neon.png',
//     description: 'Illuminate your brand and make a lasting impression with our Neon Lights Signage Solutions. We specialize in creating captivating and vibrant neon signs that stand out in any settings, from storefronts and restaurants to events and exhibitions.',
//     features: ['Custom Design','Eye-Catching Visuals','Versatility','Durability','Easy Installation','Custom Printing'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   },
//     {
//     id: '24',
//     title: 'Roll-up Banner',
//     frontImg: '/BOOK.png',
//     hoverImg: '/banner.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
//     features: ['Custom Design','High-Quality Printing','Durable Construction','Portability','Versatility','Quick Assembly'],
//     relatedImages: [
//       {src: '/wallmural/image1.png', label: 'wallmural sample1'},
//       {src: '/wallmural/image2.png', label: 'wallmural sample2'},
//       {src: '/wallmural/image3.png', label: 'wallmural sample3'},
//       {src: '/wallmural/image4.png', label: 'wallmural sample4'},
//       {src: '/wallmural/image5.png', label: 'wallmural sample5'},
//     ]
//   }
// ]




// const ServicesInfo: React.FC<Props> = ({
//   searchValue,
// }) => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
//   const [selectedDescription, setSelectedDescription] = useState<string | null>(
//     null
//   );
//   const [selectedFeatures, setSelectedFeatures] = useState<string[] | null>(
//     null
//   );
//   const [selectedRelatedImages, setSelectedRelatedImages] = useState<
//     { src: string; label: string }[] | null
//   >(null);

//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const handleCardClick = (
//     image: string,
//     title: string,
//     description: string,
//     features: string[],
//     relatedImages: { src: string; label: string }[]
//   ) => {
//     setSelectedImage(image);
//     setSelectedTitle(title);
//     setSelectedDescription(description);
//     setSelectedFeatures(features);
//     setSelectedRelatedImages(relatedImages);
//   };

//   const handleRelatedImageClick = (image: string, label: string) => {
//     setSelectedImage(image);
//     setSelectedTitle(label);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     setSelectedTitle(null);
//     setSelectedDescription(null);
//     setSelectedFeatures(null);
//   };

//   //  Effect to handle both header selection & query param
//   const { selectedServiceFromHeader, setSelectedServiceFromHeader } = useHeaderContext();


// useEffect(() => {
//   if (selectedServiceFromHeader) {
//     const matchedCard = cards.find(
//       (c) => c.title.toLowerCase().includes(selectedServiceFromHeader.toLowerCase())
//     );

//     if (matchedCard) {
//       handleCardClick(
//         matchedCard.hoverImg,
//         matchedCard.title,
//         matchedCard.description,
//         matchedCard.features,
//         matchedCard.relatedImages
//       );
//     }
//     //  clear context after opening so you can trigger again
//     setSelectedServiceFromHeader(null);
//   }
// }, [selectedServiceFromHeader]);
//   // Filter cards
//   const filterCards = cards.filter((card) =>
//     card.title.toLowerCase().includes(searchValue.toLowerCase())
//   );
//   return (
//     <section
//       id="gallery"
//       className="custom-gallery-bg min-h-screen w-full bg-white px-4 py-20 flex flex-col items-center"
//     >
//       <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-pink mb-12">
//         Services
//       </h1>
    
//       <div className="md:w-4/5 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {filterCards.map((card, index) => (
//           <motion.div
//             key={card.id}
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 1,
//               delay: index * 0.1,
//               type: "tween",
//               stiffness: 100,
//             }}
//             viewport={{ once: false }}
//           >
//             <ImageCard
//               frontImg={card.frontImg}
//               hoverImg={card.hoverImg}
//               title={card.title}
//               description={card.description}
//               features={card.features}
//               relatedImages={card.relatedImages || []}
//               onClick={handleCardClick}
//               isHovered
//             />
//           </motion.div>
//         ))}
//         {filterCards.length === 0 && (
//           <p className="text-center text-gray-500">
//             No results found for {searchValue}
//           </p>
//         )}
//       </div>
//       {/* Modal */}
//       {selectedImage && (
//         <div
//           onClick={closeModal}
//           className="fixed inset-0 z-50 backdrop-blur-md mt-20 bg-white/50 bg-opacity-80 flex items-center justify-center"
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="relative bg-gradient-to-tr scrollbar-hide from-neutral-500 via-neutral-300 to-neutral-300 p-6 rounded-lg max-w-4xl max-h-[85vh] overflow-auto flex flex-col items-center"
//           >
//             <ServiceDescription
//               image={selectedImage}
//               title={selectedTitle ?? ""}
//               description={selectedDescription ?? ""}
//               features={selectedFeatures ?? []}
//               relatedImages={selectedRelatedImages ?? []}
//               onRelatedImageClick={handleRelatedImageClick}
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ServicesInfo;