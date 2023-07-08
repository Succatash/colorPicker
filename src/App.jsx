import {useState} from 'react';
/* eslint-disable react/prop-types */

const App = () => {
	const [selectedColor, setSelectedColor] = useState('');
	console.log(selectedColor);

	return (
		<div id='container'>
			<div id='navbar'>
				<div>Currently selected:</div>
				<div className={selectedColor}>{selectedColor}</div>
			</div>
			<div id='colors-list'>
				<Color
					color={'red'}
					setSelectedColor={setSelectedColor}
					classes={`${
						selectedColor == 'red' ? `${selectedColor} selected` : 'red'
					}`}
				/>
				<Color
					color={'blue'}
					setSelectedColor={setSelectedColor}
					classes={`${
						selectedColor == 'blue' ? `${selectedColor} selected` : 'blue'
					}`}
				/>
				<Color
					color={'green'}
					setSelectedColor={setSelectedColor}
					classes={`${
						selectedColor == 'green' ? `${selectedColor} selected` : 'green'
					}`}
				/>

				<Color color={`blue`} setSelectedColor={setSelectedColor} />
				<Color color={`green`} setSelectedColor={setSelectedColor} />
			</div>
		</div>
	);
};

const Color = ({color, setSelectedColor, classes}) => {
	return (
		<div
			className={classes}
			onClick={() => {
				setSelectedColor(color);
			}}
		></div>
	);
};

export default App;
