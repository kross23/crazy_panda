var _ = require('lodash');


const paraM = {
	searchh: ['name','email']
};

export const getData = {
	//url: `https://jsonplaceholder.typicode.com/comments?_limit=${this.numcount}`,
	get(process) {
		fetch(this.url)
			.then(res => res.json())
			.then(process)
			.catch(error =>
				console.log('err', error));
	},
//.........................................//
objeckts(callback) {
    this.get(data => {
        const result = data.reduce((arr, item) => {
            if (!arr.includes(item)) {
                arr.push(item);
            }
            return arr;
        }, []);
        callback(result);
    });
},
search(value, callback) {
	this.get(data => {
		let result=[];
		data.forEach(item => {
			for (const prop in item) {
				if (paraM.searchh.includes(prop) &&item[prop].toLowerCase().includes(value.toLowerCase())) {
			result	= [...result, ...item[prop].split(' ').filter(e => e.toLowerCase().startsWith(value.toLowerCase()))];
				}
			}
		});
		result =_.uniq(result);
		callback(result);
	});
},

searchitem(value, callback) {
	this.get(data => {
		const result = data.filter(item => {
			for (const prop in item) {
				if (paraM.searchh.includes(prop) &&
					item[prop].toLowerCase().includes(value.toLowerCase())) {
					return true;
				}
			}
		});
		callback(result);
	});
},
//.........................................//
	
};