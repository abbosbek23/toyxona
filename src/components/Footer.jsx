// import React from 'react'
import { useNavigate } from 'react-router-dom';
import TopFooter from '../assets/top-footer-bg.png';
import logo from '../assets/Logo.png';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaYoutube } from 'react-icons/fa';

function Footer() {
	const navigate = useNavigate;
	return (
		<div>
			<section className="relative px-16 py-28 text-center flex flex-col items-center gap-[80px] justify-center">
				<img className="-z-10 w-full absolute" src={TopFooter} alt="" />
				<div className="">
					<h1 className="text-[40px] text-[#252A2E]">Plan Your Dream Wedding Today</h1>
					<p className="text-[18px] py-[24px] text-[#252A2E]">
						Get in touch with us to learn more about our services.
					</p>
					<button
						className="bg-[#D3874A] px-8 py-4 text-white rounded-full border-[2px] border-[#D3874A] hover:bg-transparent hover:text-[#D3874A] transition-all"
						onClick={() => navigate('/contact-us')}
					>
						Contact Us
					</button>
				</div>
			</section>
			<footer className="relative px-16 py-20 text-center flex flex-col items-center gap-[50px] justify-center bg-[#757B67]">
				<div className="flex items-center justify-between w-full">
					<img className="pr-28" src={logo} alt="" />
					<ul className="flex gap-8">
						<li>
							<a href="/about-us" className="text-[#fff] font-normal text-[16px]">
								About Us
							</a>
						</li>
						<li>
							<a href="/service" className="text-[#fff] font-normal text-[16px]">
								Services
							</a>
						</li>
						<li>
							<a href="/faqs" className="text-[#fff] font-normal text-[16px]">
								FAQs
							</a>
						</li>
						<li>
							<a href="/contact-us" className="text-[#fff] font-normal text-[16px]">
								Contact Us
							</a>
						</li>
					</ul>
					<span className="flex gap-3 text-white">
						<FaFacebook size={24} color="white" />
						<FaInstagram size={24} color="#fff" />
						<BsTwitterX size={24} color="#fff" />
						<IoLogoLinkedin size={24} color="#fff" />
						<FaYoutube size={24} color="#fff" />
					</span>
				</div>
				<div className="w-full text-center border-t border-t-white pt-8">
					<ul className="flex justify-center gap-6">
						<li>
							<p className="underline text-white text-[14px]">Privacy Policy</p>
						</li>
						<li>
							<p className="underline text-white text-[14px]">Terms of Service</p>
						</li>
						<li>
							<p className="underline text-white text-[14px]">Cookie Policy</p>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
