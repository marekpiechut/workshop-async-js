window.d1 = (self => {
	const formatTime = (date = new Date()) =>
		`${date.getHours()}:${
			date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
		}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}.${
			date.getMilliseconds() < 100
				? '' + date.getMilliseconds() + '0'
				: date.getMilliseconds()
		}`

	const appendMsg = (cls, ...msg) => {
		const span = document.createElement('li')
		if (cls) {
			span.className = cls
		}
		span.innerText = formatTime() + ' ' + msg.map(JSON.stringify).join(', ')
		document.getElementById('output').appendChild(span)
	}

	const identity = a => a
	const first = arr => (arr && arr.length ? arr[0] : undefined)
	const getter = field => obj => obj[field]

	const min = (arr, by = identity) => {
		by = typeof by === 'string' ? getter(by) : by
		return arr.reduce((acc, v) => (by(v) < by(acc) ? v : acc))
	}
	const max = (arr, by = identity) => {
		by = typeof by === 'string' ? getter(by) : by
		return arr.reduce((acc, v) => (by(v) > by(acc) ? v : acc))
	}

	const pushAll = (arr, ...stuff) => {
		stuff.forEach(i => (Array.isArray(i) ? pushAll(arr, ...i) : arr.push(i)))
		return arr
	}

	const flatten = (...stuff) => pushAll([], ...stuff)

	const getRandomTime = () => Math.floor(Math.random() * (1000 - 300) + 300)
	const bg = (dataOrError, cb, time) => {
		time = typeof time === 'number' ? time : getRandomTime()
		const isError = dataOrError instanceof Error
		if (cb) {
			const first = isError ? dataOrError : undefined
			const second = isError ? undefined : dataOrError
			setTimeout(cb, time, first, second)
		} else {
			return new Promise((resolve, reject) => {
				if (isError) {
					setTimeout(reject, time, dataOrError)
				} else {
					setTimeout(resolve, time, dataOrError)
				}
			})
		}
	}

	const println = (...msg) => appendMsg(undefined, ...msg)
	const error = e => appendMsg('error', e.message)
	const fail = e => {
		self.error(e)
		throw e
	}

	return Object.assign(self, {
		bg,
		error,
		fail,
		first,
		flatten,
		identity,
		max,
		min,
		println,
		pushAll,
	})
})(window.d1 || {})
