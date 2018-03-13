window.p = (self =>
	Object.assign(self, {
		getHotels: () => d1.bg(Object.keys(data.hotels)),

		getHotelsBroken: () =>
			d1.bg(new Error('Mainframe failure, nuclear attack detected!')),

		findSimilar: hotel => {
			const allHotels = Object.keys(data.hotels)
			const randomIdx = Math.floor(Math.random() * allHotels.length)
			const randomHotel = allHotels[randomIdx]
			return d1.bg(randomHotel)
		},

		getRoomTypes: hotel => d1.bg(Object.keys(data.hotels[hotel])),

		getAllRoomTypes: () => d1.bg(data.roomTypes),

		getRooms: hotel => d1.bg(data.getRooms(hotel)),

		getPrice: (hotel, room) => d1.bg(data.hotels[hotel][room]),

		book: (hotel, room) =>
			d1.bg({ booked: true, hotel, room, price: data.hotels[hotel][room] }),
	}))(window.p || {})
