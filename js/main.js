'use strict';

$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#fff', '#fff', '#fff', 'fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#261d1a'],
				scrollingSpeed: 1000,
        navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['First page', 'Second page', 'Third and last page']
			});
		});
