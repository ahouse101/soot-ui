<template>
	<div :id="name" class="modal" :style="style">
		<!-- Modal content -->
		<div class="modal-content">
			<div class="modal-header">
				<span class="close material-icons" @click="close">close</span>
				<h3 class="modal-title"><slot name="title"></slot></h3>
			</div>
			<div class="modal-body">
				<slot></slot>
			</div>
			<div class="modal-footer">
				<button class="btn btn-primary" @click="submit"><slot name="submit"></slot></button>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	name: 'modal',
	props: {
		name: {
			type: String
		},
		title: {
			type: String
		}
	},
	data: () => {
		return {
			isOpen: false
		};
	},
	computed: {
		style: function() {
			return {
				display: this.isOpen ? 'block' : 'none'
			};
		}
	},
	methods: {
		close: function() {
			this.isOpen = false;
		},
		open: function() {
			this.isOpen = true;
		},
		submit: function() {
			this.isOpen = false;
			this.$emit('submit');
		}
	},
	created: function() {
		
	}
}
</script>

<style>
.modal {
	position: fixed;
	z-index: 1;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.65);
}

/* Modal Content */
.modal-content {
	position: relative;
	background-color: var(--base-back-color);
	margin: auto;
	padding: 45px 60px;
	/*border: 1px solid rgba(255, 255, 255, 0.15);*/
	border-radius: 10px;
	max-width: 750px;
	width: 80%;
	box-shadow: 0 0 15px 0 rgba(0, 0, 0, 1), 0 0 25px rgba(0, 0, 0, 0.5) inset;
	animation-name: animatetop;
	animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
	from {top:-300px; opacity:0}
	to {top:0; opacity:1}
}

@keyframes animatetop {
	from {top:-300px; opacity:0}
	to {top:0; opacity:1}
}

/* The Close Button */
.close {
	color: white;
	float: right;
	font-size: 28px;
	position: absolute;
	padding: 15px;
	right: 0px;
	top: 0px;
}

.close:hover,
.close:focus {
	text-shadow: 0 0 10px rgba(255, 255, 255, 1);
	text-decoration: none;
	cursor: pointer;
}

.modal-header {
	/*padding: 1px 15px;*/
	/*background-color: rgba(0, 0, 0, 0.5);
	border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/
}

.modal-title {
	margin: 0 0;
	padding: 0;
	text-align: center;
}

.modal-body {
	padding: 30px 0px;
	/*box-shadow: 0 0 8px rgba(0, 0, 0, 0.5) inset;*/
}

.modal-footer {
	text-align: right;
	/*padding: 10px 15px;
	border-top: 1px solid rgba(255, 255, 255, 0.3);*/
}
</style>