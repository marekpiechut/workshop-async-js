window.cb = (self =>
	Object.assign(self, {
		getHotels: onDone => d1.bg(Object.keys(data.hotels), onDone),

		getHotelsBroken: onDone =>
			d1.bg(new Error('Mainframe failure, nuclear attack detected!'), onDone),

		findSimilar: (hotel, onDone) => {
			const allHotels = Object.keys(data.hotels)
			const randomIdx = Math.floor(Math.random() * allHotels.length)
			const randomHotel = allHotels[randomIdx]
			return d1.bg(randomHotel, onDone)
		},

		getRoomTypes: (hotel, onDone) =>
			d1.bg(Object.keys(data.hotels[hotel]), onDone),

		getAllRoomTypes: onDone => d1.bg(data.roomTypes, onDone),

		getRooms: (hotel, onDone) => d1.bg(data.hotels[hotel], onDone),

		getPrice: (hotel, room, onDone) => d1.bg(data.hotels[hotel][room], onDone),

		book: (hotel, room, onDone) =>
			d1.bg(
				{ booked: true, hotel, room, price: data.hotels[hotel][room] },
				onDone
			),
	}))(window.cb || {})
