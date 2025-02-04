import React, { useRef } from 'react'
import { useOutsideAlerter } from '../../hooks/useOutside'

interface DropdownProps {
	button: JSX.Element
	children: JSX.Element
	classNames: string
	animation?: string
}

const Dropdown: React.FC<DropdownProps> = ({
	button,
	children,
	classNames,
	animation,
}) => {
	const wrapperRef = useRef(null)
	const [openWrapper, setOpenWrapper] = React.useState(false)
	useOutsideAlerter(wrapperRef, setOpenWrapper)

	return (
		<div ref={wrapperRef} className='relative flex'>
			<div className='flex' onMouseDown={() => setOpenWrapper(!openWrapper)}>
				{button}
			</div>
			<div
				className={`${classNames} absolute z-10 ${
					animation
						? animation
						: 'origin-bottom-left transition-all duration-300 ease-in-out'
				} ${openWrapper ? 'scale-100' : 'scale-0'}`}
			>
				{children}
			</div>
		</div>
	)
}

export default Dropdown
