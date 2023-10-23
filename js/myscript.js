
const { createApp } = Vue


const param = {
	data: function () {
		return {
			message: 'Hello Vue'
		}
	},
}

const title = createApp(param)
title.mount('#app')

