import React from 'react';
import MenuItemIcon from './MenuItemIcon';

const MenuItem = (props) => {
	return (
		<div className={`menuItem ${props.active === props.index ? 'active' : ''}`} onClick={() => props.fun(props.link, props.index)} tabIndex={props.index} style={{width: '100%', height: '15%'}}>
			{/* style={props.style} */}
			{/* <div style={{backgroundColor: 'red', width: '100%', height: '50%'}}></div> */}
			{props.expanded ? (
				<div style={{height: '100%', display: 'flex', alignItems: 'center', marginLeft: '15%', justifyContent: 'center'}}>
					<MenuItemIcon icon={props.icon} color={props.active === props.index ? '#fff' : '#fff'} className='menuIcon' />
				</div>
			) : (
				<div style={{height: '100%', display: 'flex', alignItems: 'center', marginLeft: '15%', justifyContent: 'center'}}>
					<MenuItemIcon icon={props.icon} color={props.active === props.index ? '#fff' : '#fff'} className='menuIcon' />
				</div>
			)}
			{/* <div style={{height: '100%', display: 'flex', alignItems: 'center', width: '60%'}}>
				<MenuItemIcon icon={props.icon} color={props.active === props.index ? '#03C988' : '#6F767F'} className='menuIcon' />
			</div> */}

			{props.label && (
				<span className='menuLabel' style={props.labelMargin}>
					{props.label}
				</span>
			)}
		</div>
	);
};

export default MenuItem;
