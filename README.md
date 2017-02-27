# Ease in use, simple in costumization

Just add "modalOpen" class to element which should open it. And include this script into your html file.

````html
<button class="modalOpen">Click</button>
<script src='jquery.min.js'></script>
<script src='pop.min.js'></script>
````
# And then init it with your settings!

````html
<script>
	initModal({
		h : 200, //default 400
		w : 400, //default 600
		text : 'Congratulation, user! You won', //default Hey! I'm popup
		ff : 'sans-serif', //default inherit
		size : 25, //default 16
		textColor : 'purple', //default black
		overlayBg: 'skyblue', //default rgba(0,0,0,0.3)
		modalBg : 'orange' //default #eaeaea
	})
</script>
````

