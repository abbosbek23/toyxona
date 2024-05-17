import { default as Acardion } from '../../components/acordion';

function faqs() {
	return (
		<div>
			<section className="p-[64px]">
				<h1 className="text-[48px] pb-[24px] text-[#252A2E]">Frequently Asked Questions</h1>
				<p className="text-[18px] text-[#252A2E]">
					Find answers to common questions about Dream Days wedding planning services.
				</p>
			</section>
			<section className="px-16 pb-16 flex flex-col gap-20">
				<Acardion />
				<div className="">
					<span className="flex flex-col gap-4 items-baseline pb-6">
						<h3 className="text-[24px] font-semibold">Still have questions?</h3>
						<p className="text-[18px]">Contact us for more information.</p>
					</span>
					<button className="px-6 py-3 border border-[#D3874A] rounded-full text-[16px] hover:bg-[#D3874A] hover:text-white transition-all">
						Contact
					</button>
				</div>
			</section>
		</div>
	);
}

export default faqs;
