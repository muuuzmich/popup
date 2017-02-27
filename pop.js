function initModal(arg) {
	if(!arg) arg = {}
	w = arg.w || 600;
	h = arg.h || 400;
	tC = arg.textColor || 'black'
	t = arg.text || 'Hey I\'m popup';
	ff = arg.ff || 'inherit';
	fz = arg.size || 16;
	oBg = arg.overlayBg || 'rgba(0,0,0,0.3)';
	mBg = arg.modalBg || '#eaeaea';
	$("<div>", {
		class : 'modalOverlay',
		css : {
			position : 'fixed',
			height : '100%',
			width : '100%',
			top : 0,opacity : 0,
			transition : 'all ease 300ms',
			visibility : 'hidden',
			left : 0,
			background : oBg
		}
	}).appendTo('body');
	$("<div>",{
		class : 'modalWindow',
		css : {
			height: h,
			width: w,
			position : 'absolute',
			transition : 'all ease 300ms',
			left : 0,
			right : 0,
			bottom : 0,
			top: 0,
			margin : 'auto',
			background: mBg,
			opacity : 0,
			visibility : 'hidden'
		}
	}).appendTo('.modalOverlay');
	$('<div>',{
		text :  t,
		css : {
			'font-family' : ff,
			'font-size' : fz,
			margin : 'auto',
			color : tC,
			height : 'inherit',
			'line-height' : h + 'px',
			'text-align' : 'center'
		}
	}).appendTo('.modalWindow');
	function openModal(){
		$('.modalOverlay').css({
			opacity : 1,
			visibility : 'visible'
		});
		$('.modalWindow').css({
			opacity : 1,
			visibility : 'visible'
		});
	}
	function closeModal(){
		$('.modalOverlay').css({
			opacity : 0,
			visibility : 'hidden'
		});
		$('.modalWindow').css({
			opacity : 0,
			visibility : 'hidden'
		});
	}
	$('.modalOverlay').on('click', function(e) {
		if (e.target !== this){
			return;
		}
		closeModal();
	});

	$('.modalOpen').click(function() {
		openModal();
	});
}
