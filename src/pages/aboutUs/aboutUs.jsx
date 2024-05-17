import Sec2Img from '../../assets/aboutus-sec2-img.png';

const aboutUs = () => {
	return (
		<div>
			<section className="p-[64px]">
				<h1 className="text-[48px] pb-[24px] text-[#252A2E]">Creating Dream Weddings</h1>
				<p className="text-[18px] text-[#252A2E]">
					Welcome to Dream Day, where we turn your wedding dreams into reality.
				</p>
			</section>
			<section className="px-16 py-28 flex items-center justify-between">
				<div className="">
					<p className="text-[#D3874A]">Experienced</p>
					<h1 className="text-[40px] pb-[24px] pt-[16px] text-[#252A2E]">
						Creating Memorable Weddings That <br /> Last a Lifetime
					</h1>
					<p className="text-[18px] text-[#252A2E]">
						Dream Day is a wedding planner company dedicated to making your special day truly <br />
						unforgettable. With our passion for creating memorable weddings, we strive to bring{' '}
						<br /> your vision to life and exceed your expectations. From the smallest details to
						the <br /> grandest gestures, we are committed to making every moment magical.
					</p>
				</div>
				{/* <Sec2Img /> */}
				<img src={Sec2Img} alt="" />
			</section>
		</div>
	);
};

export default aboutUs;
