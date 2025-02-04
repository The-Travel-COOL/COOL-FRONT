import { useSelector } from 'react-redux'
import Avatar from '../Avatar'
import { selectUserById } from '../../features/userByIdSlice'

const ProfileUserCard = () => {
	const user = useSelector(selectUserById)

	return (
		<>
			<div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg'>
				<div className='px-6 mt-8'>
					<div className='flex flex-wrap justify-center'>
						<div className='w-full px-4 flex justify-center'>
							<div className='relative'>
								<Avatar avatar={user.avatar} />
							</div>
						</div>
						<div className='w-full px-4 text-center mt-20'>
							<div className='flex justify-center py-4 lg:pt-4 pt-8'>
								<div className='mr-4 p-3 text-center'>
									<span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
										@{user.username}
									</span>
									<span className='text-sm text-blueGray-400'>{user.email}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='text-center mt-12'>
						<h3 className='text-xl font-semibold leading-normal text-blueGray-700 mb-2'>
							{`${user.firstName} ${user.lastname}`}
						</h3>
						<div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
							<i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
							{user.location}
						</div>
						<div className='mb-2 text-blueGray-600 mt-10'>
							<i className='fas fa-briefcase mr-2 text-lg text-blueGray-400'></i>
							Solution Manager - Creative Tim Officer
						</div>
						<div className='mb-2 text-blueGray-600'>
							<i className='fas fa-university mr-2 text-lg text-blueGray-400'></i>
							University of Computer Science
						</div>
					</div>
					<div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
						<div className='flex flex-wrap justify-center'>
							<div className='w-full lg:w-9/12 px-4'>
								<p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
									{user.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProfileUserCard
