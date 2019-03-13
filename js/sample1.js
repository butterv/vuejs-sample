var app1_1 = new Vue({
	el: '#app1_1',
	data: {
		message: 'Hello Vue.js!'
	}
})

var app1_2 = new Vue({
	el: '#app1_2',
	data: {
		list: ['りんご', 'ばなな', 'いちご']
	}
})

var app1_3 = new Vue({
	el: '#app1_3',
	methods: {
		handleClick: function(event) {
			alert(event.target) // [object HTMLButtonElement]
		}
	}
})

var app1_4 = new Vue({
	el: '#app1_4',
	data: {
		message: 'Default message'
	}
})

var app1_5 = new Vue({
	el: '#app1_5',
	data: {
		show: false
	}
})

var app1_6 = new Vue({
	el: '#app1_6',
	data: {
		show: true
	}
})