import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
const data = [
	{
		name: '10/17',
		Data: 1459870,
		Voice: 996450,
	},
	{
		name: '10/18',
		Data: 986560,
		Voice: 1045805,
	},
	{
		name: '10/19',
		Data: 1135690,
		Voice: 1034770,
	},
	{
		name: '10/20',
		Data: 1257450,
		Voice: 845580,
	},
	{
		name: '10/21',
		Data: 1087770,
		Voice: 970470,
	},
	{
		name: '10/22',
		Data: 1135660,
		Voice: 1032880,
	},
	{
		name: '10/23',
		Data: 1645760,
		Voice: 1276450,
	},
];
export default function AdminDashboard() {
	return (
		<div style={{
      width:'100%',
      height:'50%'
    }}>
			<div
				style={{
					width: '50%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<div style={{width: '100%', height: '10%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'poppins-bold'}}>Revenue (Last 7 days)</div>
				<div style={{width: '100%', height: '90%'}}>
					<ResponsiveContainer>
						<LineChart
							width={50}
							height={200}
							data={data}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='name' />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type='monotone' dataKey='Voice' stroke='#8884d8' activeDot={{r: 8}} />
							<Line type='monotone' dataKey='Data' stroke='#82ca9d' />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
      <div>
        
      </div>
		</div>
	);
}
