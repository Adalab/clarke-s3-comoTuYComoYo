'use strict';

var picSectionInfoPic = document.querySelectorAll ('.info-img');
var textSectionInfoPic = document.querySelectorAll ('.text-sec-info-pic');
var txtLeftInfo = document.querySelector('.text-left-section');
var txtRightInfo = document.querySelector('.text-right-section')

$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#fff', '#fff', '#fff', 'fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#261d1a'],
		scrollingSpeed: 1000,
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Portada', 'Introducción', 'De dónde vienen 1', 'De dónde vienen 2', 'Diques: Argelia y Marruecos 1', 'Diques: Argelia y Marruecos 2', 'Frontera Sur 1', 'Frontera Sur 2', 'España', 'Solicitudes pendientes de resolución', 'Fuentes'],

		//Animación cuando llegue a la página
		afterLoad: function(anchorLink, index){
			var loadedSection = $(this);
			if(index == 4){
				txtLeftInfo.classList.add('animation-info-left');
				txtRightInfo.classList.add('animation-info-right');
			}
			if(index == 6){
				picSectionInfoPic[0].classList.add('info-img-transition')
				textSectionInfoPic[0].classList.add('info-img-transition')
			}
			if(index == 8){
				picSectionInfoPic[1].classList.add('info-img-transition')
				textSectionInfoPic[1].classList.add('info-img-transition')
			}
		},
		onLeave: function(){
			const poppers = document.querySelectorAll('.has-tooltip')
			for (const popper of poppers) {
				const tooltip = popper._tippy
				if (tooltip.state.visible) {
					tooltip.popperInstance.disableEventListeners()
					tooltip.hide()
				}
			}
		}
	});
});

//JS para la flecha

var buttonScrollDown = document.querySelector('#button-scrolldown');
function scrollDown(event){
	$.fn.fullpage.moveSectionDown();
	event.preventDefault();
}

buttonScrollDown.addEventListener('click', scrollDown);

//Gráfico

var ctx = document.getElementById("myChart").getContext('2d');
var myBarChart = new Chart(ctx, {
	type: 'horizontalBar',
	data: {
		labels: ["Argelia", "Honduras", "El Salvador", "Nigeria", "Colombia", "Palestina", "Siria", "Venezuela", "Ucrania"],
		datasets: [{
			label: 'Solicitudes',
			data: [400, 535, 555, 705, 755, 825, 1600, 4435, 5555],
			backgroundColor: [
				'rgba(255, 51, 51,0.6)',
				'rgba(255, 51, 51,0.6)',
				'rgba(255, 51, 51,0.6)',
				'rgba(255, 51, 51,0.6)',
				'rgba(255, 51, 51,0.6)',
				'rgba(255, 51, 51,0.6)',
				'rgba(255, 51, 51,0.6)',
				'rgba(255, 51, 51,0.6)',
				'rgba(255, 51, 51,0.6)'
			],
			borderColor: [
				'rgb(255, 0, 0)',
				'rgb(255, 0, 0)',
				'rgb(255, 0, 0)',
				'rgb(255, 0, 0)',
				'rgb(255, 0, 0)',
				'rgb(255, 0, 0)',
				'rgb(255, 0, 0)',
				'rgb(255, 0, 0)',
				'rgb(255, 0, 0)',
				'rgb(255, 0, 0)',
			],
			borderWidth: 1
		}]
	},
	options: {
		maintainAspectRatio: false,
		legend: {
			display: false
		},
		scales: {
			xAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		}
	}
});

//MAP
//map1
tippy('.bi', {
	trigger: 'click',
	html: document.querySelector('.burundi'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})

tippy('.cf', {
	trigger: 'click',
	html: document.querySelector('.centroafrica'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})

tippy('.ss', {
	trigger: 'click',
	html: document.querySelector('.sudan'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})

tippy('.ng', {
	trigger: 'click',
	html: document.querySelector('.nigeria'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})

tippy('.cd', {
	trigger: 'click',
	html: document.querySelector('.congo'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})

//map 2
tippy('.dz', {
	trigger: 'click',
	html: document.querySelector('.argelia'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})

tippy('.ma', {
	trigger: 'click',
	html: document.querySelector('.marruecos'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})

//map 3
tippy('.me', {
	trigger: 'click',
	html: document.querySelector('.melilla'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})

tippy('.ce', {
	trigger: 'click',
	html: document.querySelector('.ceuta'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})

//map 4
tippy('.es', {
	trigger: 'click',
	html: document.querySelector('.espanha'),
	arrow: true,
	animation: 'fade',
	distance: 15,
	arrowTransform: 'scale(2)'
})
