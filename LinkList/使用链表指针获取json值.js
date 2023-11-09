const json = {
	a: {
		b: {
			c: 1
		}
	}
}

let p = json

const path = ['a', 'b']
// const path = ['a', 'b', 'c']
path.forEach(key => {
	p = p[key]
})

console.log(p)
