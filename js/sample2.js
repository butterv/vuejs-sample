var app2_1 = new Vue({
	el: '#app2_1',
	data: {
		message: {
			value: 'Hello Vue.js!'
		},
		list: ['りんご','ばなな','いちご'],
		num: 1
	}
})

var app2_2 = new Vue({
	el: '#app2_2',
	data: {
		message: 'Hello Vue.js!',
		scroll: 0
	},
	mounted: function() {
		this.scroll = 100
	}
})

var app2_3 = new Vue({
	el: '#app2_3',
	data: {
		count: 0
	},
	methods: {
		increment: function() {
			this.count++
		},
		decrement() { // 省略できる
			if (this.count > 0) {
				this.count--
			}
		}
	}
})

var app2_4 = new Vue({
	el: '#app2_4',
	data: {
		isChild: true,
		isActive: true,
		textColor: 'red',
		bgColor: 'lightgray'
	}
})

var app2_5 = new Vue({
	el: '#app2_5',
	data: {
		classObject: {
			child: true,
			'is-active': false
		},
		styleObject: {
			color: 'blue',
			backgroundColor: 'lightgray'
		}
	}
})

var app2_6 = new Vue({
	el: '#app2_6',
	data: {
		item: {
			id: 1,
			src: '../img/sample2.png',
			alt: 'Sample画像',
			width: 200,
			height: 200
		}
	}
})

var app2_7 = new Vue({
	el: '#app2_7',
	data: {
		radius: 50
	}
})

var app2_8 = new Vue({
	el: '#app2_8',
	data: {
		ok: true
	}
})

var app2_9 = new Vue({
	el: '#app2_9',
	data: {
		type: 'B'
	}
})

var app2_10 = new Vue({
	el: '#app2_10',
	data: {
		list: [
			{id:1, name:'スライム', hp:100},
			{id:2, name:'ゴブリン', hp:200},
			{id:3, name:'ドラゴン', hp:300}
		]
	}
})