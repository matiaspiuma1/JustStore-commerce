import stock from './data.json';

export const RequestData = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve(stock);
		}, 1500);
	});
};
