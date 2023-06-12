import React from 'react'

interface BookingCardProps {
	price?: string
}

const BookingCard: React.FC<BookingCardProps> = ({ price }) => {
	return (
		<div className='mx-auto w-4/5 md:w-full lg:w-3/5 xl:w-full min-[1440px]:w-5/6 h-[350px]'>
			<div className='mx-10 rounded-xl h-full shadow-CooL'>
				<div className='flex flex-col justify-center w-full h-full p-5 gap-4'>
					<h4 className='text-[22px] font-medium'>
						${price} <span className='font-normal text-base'>night</span>
					</h4>
					<div className='w-full border-[#717171] border rounded-xl'>
						<div className='flex justify-around items-center'>
							<div className='w-full border-r border-[#717171] p-3'>
								<p>CHECK-IN</p>
								<span>2/6/2023</span>
							</div>
							<div className='w-full p-3'>
								<p>CHECK-OUT</p>
								<span>2/11/2023</span>
							</div>
						</div>
						<div className='w-full border-t border-[#717171] p-3'>
							<p>GUESTS</p>
							<span>1 guest</span>
						</div>
					</div>
					<div className='flex justify-center items-center'>
						<button
							onClick={() => alert('Booking now')}
							className='w-full bg-[#ce452a] text-white font-bold p-5 rounded-lg mt-5'
						>
							Booking now
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookingCard
