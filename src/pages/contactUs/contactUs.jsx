import { MdMailOutline } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const ContactUs = () => {
	return (
		<div>
			<section className="px-16 py-28 flex gap-20 w-full justify-between">
				<div className="w-2/5">
					<div className="">
						<p className="text-[#D3874A]">Unforgettable</p>
						<h1 className="text-[40px] pb-[24px] pt-[16px] text-[#252A2E]">Get in Touch</h1>
						<p className="text-[18px] text-[#252A2E]">
							Have a question or need assistance? Contact us today!
						</p>
					</div>
					<div className="flex flex-col gap-4 pt-6">
						<span className="flex items-center gap-4">
							<MdMailOutline size={24} />
							<p>hello@dreamday.com</p>
						</span>
						<span className="flex items-center gap-4">
							<FiPhone size={24} />
							<p>+1 (555) 123-4567</p>
						</span>
						<span className="flex items-center gap-4">
							<IoLocationOutline size={24} />
							<p>4939 Wellington Street, Toronto, Canada</p>
						</span>
					</div>
				</div>
				<div className="flex w-2/5">
					<div className="flex flex-col gap-6 w-full">
						<div className="flex flex-col gap-2">
							<p>Name</p>
							<input
								type="text"
								className="p-3 border border-[#000] w-full rounded-md outline-[#D3874A]"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<p>Email</p>
							<input
								type="email"
								className="p-3 border border-[#000] w-full rounded-md outline-[#D3874A]"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<p>Message</p>
							<input
								type="text"
								placeholder="Write your message here"
								className="p-3 border border-[#000] w-full rounded-md outline-[#D3874A]"
							/>
						</div>
						<button className="px-6 py-3 border border-[#D3874A] rounded-full text-[16px] bg-[#D3874A] text-white transition-all hover:bg-transparent hover:text-black">
							Contact
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactUs;
