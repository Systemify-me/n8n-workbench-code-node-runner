export function UnwrapInput(input) {
	var data = [];
	for (var item of input) {
		data.push(item.json);
	}
	return data;
}

// return items[0].json.map(i => ({json:i}));
