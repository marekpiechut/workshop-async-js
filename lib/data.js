window.data = (data => {
	const hotels = {
		Hliton: {
			single: 150,
			double: 190,
			royal: 280,
		},
		Mattiorr: {
			single: 70,
			double: 99,
			presidential: 750,
			studio: 220,
		},
		TrippleTree: {
			single: 48,
			double: 77,
		},
		Granb: {
			presidential: 1120,
			studio: 450,
		},
	}

	const roomTypes = Array.from(
		Object.keys(hotels).reduce((acc, h) => {
			Object.keys(hotels[h]).forEach(t => acc.add(t))
			return acc
		}, new Set())
	)

	const getRooms = hotel => {
		const rooms = hotels[hotel]
		return Object.keys(rooms).map(room => ({
			hotel,
			room,
			price: rooms[room],
		}))
	}

	return Object.assign(data, {
		hotels,
		roomTypes,
		getRooms,
	})
})(window.data || {})
