import React from 'react';
import zoom from '../assets/images/zoom.png';
import meet from '../assets/images/meet.png';
import teams from '../assets/images/teams.png';
import '../css/packageCard.css';
export default function PackageCard(props) {
	const imgArray = {
		zoom: zoom,
		meet: meet,
		teams: teams,
	};
	if (props.type == 'type1' && props.data.length > 0) {
		return (
			<div
				style={{
					width: '90%',
					backgroundColor: 'white',
					borderRadius: '20px',
					marginTop: '1%',
					boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
					marginLeft: '5%',
				}}
			>
				<div
					style={{
						width: '100%',
						height: '6vh',
						fontFamily: 'poppins-semibold',
						alignItems: 'center',
						display: 'flex',
					}}
				>
					<span style={{marginLeft: '4%', fontSize: '1.5em'}}>{props.title}</span>
				</div>
				<div
					style={{
						width: '100%',
						fontFamily: 'poppins-semibold',
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{props.data.length > 0 ? (
						props.data.map((item) => (
							<div
								style={{
									width: '96%',
									height: '120px',
									outline: '3px solid #c5cace',
									marginBottom: '1%',
									borderRadius: '8px',
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-evenly',
								}}
							>
								<div
									style={{
										width: '12%',
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<span
										style={{
											fontSize: '52px',
											height: '100%',
											display: 'flex',
											alignItems: 'center',
										}}
									>
										{item.quota}
									</span>
									<span
										style={{
											fontSize: '18px',
											height: '43%',
											display: 'flex',
											alignItems: 'flex-end',
										}}
									>
										GB
									</span>
								</div>
								<div
									style={{
										width: '12%',
										display: 'flex',
										alignItems: 'center',
										height: '100%',
									}}
								>
									<span
										style={{
											fontSize: '52px',
											height: '100%',
											display: 'flex',
											alignItems: 'center',
											textAlign: 'right',
											width: '30%',
											justifyContent: 'flex-end',
										}}
									>
										{item.duration}
									</span>
									<span
										style={{
											fontSize: '18px',
											height: '43%',
											display: 'flex',
											alignItems: 'flex-end',
											width: '20%',
											textAlign: 'left',
										}}
									>
										Days
									</span>
								</div>
								<div
									style={{
										width: '40%',
										display: 'flex',
										alignItems: 'center',
										height: '100%',
									}}
								>
									{item.platforms.map((platform) => (
										<div
											style={{
												width: '72px',
												height: '72px',
												marginRight: '20px',
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												backgroundImage: `url(${imgArray[platform]})`,
											}}
										></div>
									))}
								</div>
								<div
									style={{
										width: '10%',
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<span
										style={{
											fontSize: '52px',
											height: '100%',
											display: 'flex',
											alignItems: 'center',
											textAlign: 'right',
											width: '30%',
											justifyContent: 'flex-end',
										}}
									>
										{item.price}
									</span>
									<span
										style={{
											fontSize: '18px',
											height: '43%',
											display: 'flex',
											alignItems: 'flex-end',
											width: '20%',
											textAlign: 'left',
										}}
									>
										Rupees
									</span>
								</div>
								<div
									style={{
										width: '6%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<span style={{}} className='packageActivateButton'>
										Activate
									</span>
								</div>
							</div>
						))
					) : (
						<></>
					)}
				</div>
				<div
					style={{
						width: '100%',
						height: '6vh',
						fontFamily: 'poppins-semibold',
						alignItems: 'center',
						display: 'flex',
					}}
				></div>
			</div>
		);
	}
	else if (props.type == 'type2' && props.data.length > 0) {
		return (
			<div
				style={{
					width: '90%',
					backgroundColor: 'white',
					borderRadius: '20px',
					marginTop: '1%',
					boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
					marginLeft: '5%',
				}}
			>
				<div
					style={{
						width: '100%',
						height: '6vh',
						fontFamily: 'poppins-semibold',
						alignItems: 'center',
						display: 'flex',
					}}
				>
					<span style={{marginLeft: '4%', fontSize: '1.5em'}}>{props.title}</span>
				</div>
				<div
					style={{
						width: '100%',
						fontFamily: 'poppins-semibold',
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					{props.data.length > 0 ? (
						props.data.map((item) => (
							<div
								style={{
									width: '96%',
									height: '120px',
									outline: '3px solid #c5cace',
									marginBottom: '1%',
									borderRadius: '8px',
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-evenly',
								}}
							>
								<div
									style={{
										width: '12%',
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<span
										style={{
											fontSize: '52px',
											height: '100%',
											display: 'flex',
											alignItems: 'center',
										}}
									>
										{item.quota}
									</span>
									<span
										style={{
											fontSize: '18px',
											height: '43%',
											display: 'flex',
											alignItems: 'flex-end',
										}}
									>
										GB
									</span>
								</div>
								<div
									style={{
										width: '12%',
										display: 'flex',
										alignItems: 'center',
										height: '100%',
									}}
								>
									<span
										style={{
											fontSize: '52px',
											height: '100%',
											display: 'flex',
											alignItems: 'center',
											textAlign: 'right',
											width: '30%',
											justifyContent: 'flex-end',
										}}
									>
										{item.duration}
									</span>
									<span
										style={{
											fontSize: '18px',
											height: '43%',
											display: 'flex',
											alignItems: 'flex-end',
											width: '20%',
											textAlign: 'left',
										}}
									>
										Days
									</span>
								</div>
								<div
									style={{
										width: '40%',
										display: 'flex',
										alignItems: 'center',
										height: '100%',
									}}
								>
									{item.platforms.map((platform) => (
										<div
											style={{
												width: '72px',
												height: '72px',
												marginRight: '20px',
												backgroundSize: 'cover',
												backgroundRepeat: 'no-repeat',
												backgroundImage: `url(${imgArray[platform]})`,
											}}
										></div>
									))}
								</div>
								<div
									style={{
										width: '10%',
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<span
										style={{
											fontSize: '52px',
											height: '100%',
											display: 'flex',
											alignItems: 'center',
											textAlign: 'right',
											width: '30%',
											justifyContent: 'flex-end',
										}}
									>
										{item.price}
									</span>
									<span
										style={{
											fontSize: '18px',
											height: '43%',
											display: 'flex',
											alignItems: 'flex-end',
											width: '20%',
											textAlign: 'left',
										}}
									>
										Rupees
									</span>
								</div>
								<div
									style={{
										width: '6%',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<span style={{}} className='packageActivateButton'>
										Activate
									</span>
								</div>
							</div>
						))
					) : (
						<></>
					)}
				</div>
				<div
					style={{
						width: '100%',
						height: '6vh',
						fontFamily: 'poppins-semibold',
						alignItems: 'center',
						display: 'flex',
					}}
				></div>
			</div>
		);
	}
}
