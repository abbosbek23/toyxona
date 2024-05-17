/* eslint-disable react-hooks/rules-of-hooks */
// import React from 'react
// import { Grid } from '@mui/material';
import Sec2Img from '../../assets/service-sec2-img.png';
import Sec3Img1 from '../../assets/service-sec3-img1.png';
import Sec3Img2 from '../../assets/service-sec3-img2.png';
import Sec3Img3 from '../../assets/service-sec3-img3.png';
import Sec3Img4 from '../../assets/service-sec3-img4.png';
import Sec3Img5 from '../../assets/service-sec3-img5.png';
import Sec3Img6 from '../../assets/service-sec3-img6.png';
import Sec4Stars from '../../assets/service-sec4-stars.png';
import Sec4Liam from '../../assets/service-sec4-liam.png';
import Sec4Hasan from '../../assets/service-sec4-hasan.png';

const service = () => {
	return (
		<div>
			
			<section className="px-16 py-24 flex items-center justify-between">
				<div className="">
					<p className="text-[#D3874A]">SEAMLESS</p>
					<h1 className="text-[40px] pb-[24px] pt-[16px] text-[#252A2E]">
						Comprehensive Wedding Planning <br /> Services for Your Dream Day
					</h1>
					<p className="text-[18px] text-[#252A2E]">
						Our Full Wedding Planning service offers comprehensive assistance to couples, <br />{' '}
						ensuring every detail is taken care of. From venue selection to vendor coordination,{' '}
						<br />
						well make your dream wedding a reality.
					</p>
				</div>
				{/* <Sec2Img /> */}
				<img src={Sec2Img} alt="" />
			</section>
			<section className="px-16 py-28 text-center flex flex-col items-center gap-[80px]">
				<div className="">
					<p className="text-[#D3874A]">SERVICES</p>
					<h1 className="text-[40px] pb-[24px] pt-[16px] text-[#252A2E]">The services we offer</h1>
				</div>
				<div className="grid grid-cols-3 gap-12">
					<div className="bg-[#DBDBDB] px-[30px] py-[30px] flex flex-col items-center rounded">
						<img src={Sec3Img1} alt="" />
						<h3 className="font-semibold text-[24px] py-4">Wedding Ceremony</h3>
						<p className="text-[16px]">
							{' '}
							From breathtaking venues to seamless coordination, we make sure your ceremony is a
							dream come true.
						</p>
					</div>
					<div className="bg-[#DBDBDB] px-[30px] py-[30px] flex flex-col items-center rounded">
						<img src={Sec3Img2} alt="" />
						<h3 className="font-semibold text-[24px] py-4">Photography</h3>
						<p>
							Capture every moment beautifully with our expert photographers, ensuring your memories
							last a lifetime.
						</p>
					</div>
					<div className="bg-[#DBDBDB] px-[30px] py-[30px] flex flex-col items-center rounded">
						<img src={Sec3Img3} alt="" />
						<h3 className="font-semibold text-[24px] py-4">Decoration</h3>
						<p>
							Transform your venue into a breathtaking paradise, meticulously reflecting your unique
							style and vision.
						</p>
					</div>
					<div className="bg-[#DBDBDB] px-[30px] py-[30px] flex flex-col items-center rounded">
						<img src={Sec3Img4} alt="" />
						<h3 className="font-semibold text-[24px] py-4">Cosmetic</h3>
						<p>
							Enhance your natural beauty flawlessly, ensuring you radiate confidence on your
							special and unique day.
						</p>
					</div>
					<div className="bg-[#DBDBDB] px-[30px] py-[30px] flex flex-col items-center rounded">
						<img src={Sec3Img5} alt="" />
						<h3 className="font-semibold text-[24px] py-4">Music & DJ</h3>
						<p>
							Set the perfect mood with our talented musicians and DJs, expertly keeping the
							celebration alive and vibrant.
						</p>
					</div>
					<div className="bg-[#DBDBDB] px-[30px] py-[30px] flex flex-col items-center rounded">
						<img src={Sec3Img6} alt="" />
						<h3 className="font-semibold text-[24px] py-4">Fine Dining</h3>
						<p>
							Elevate your reception with an array of exquisite culinary delights, meticulously
							crafted to tantalize every palate.
						</p>
					</div>
				</div>
				<button className="px-6 py-3 border border-[#D3874A] rounded-full text-[16px] hover:bg-[#D3874A] hover:text-white transition-all">
					To Learn More Contact Us
				</button>
			</section>
			<section className="px-16 py-28 flex flex-col gap-[80px]">
				<div className="">
					<h1 className="text-[40px] pb-[24px] text-[#252A2E]">Happy Couples</h1>
					<p className="text-[18px] text-[#252A2E]">
						Read what our clients have to say about our services.
					</p>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col gap-8">
						<img className="w-[115px] h-[18px]" src={Sec4Stars} alt="" />
						<p>
							Dream Day made our wedding day absolutely perfect. They took care of every detail{' '}
							<br />
							and made sure everything ran smoothly. We couldnt be happier!
						</p>
						<span className="flex gap-5 items-center">
							<img className="w-[112px] h-[56px] rounded" src={Sec4Liam} alt="" />
							<p>Liam Martinez & Mia Rodriguez</p>
						</span>
					</div>
					<div className="flex flex-col gap-8">
						<img className="w-[115px] h-[18px]" src={Sec4Stars} alt="" />
						<p>
							Dream Day exceeded our expectations. Their team went above and beyond to create <br />
							the wedding of our dreams. We highly recommend their services!
						</p>
						<span className="flex gap-5 items-center">
							<img className="w-[112px] h-[56px]" src={Sec4Hasan} alt="" />
							<p>Hasan Ali & Dania Saad</p>
						</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default service;
