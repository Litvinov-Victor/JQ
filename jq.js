$(function(){

	/* Поиск и клонирование */
	var JqNavigation = $('[data-jq]');
	var JqBtn = $('[data-jq--button]');
	var JqNavTop = $('[data-jq--top]').clone();
	var JqNavBot = $('[data-jq--bot]').clone();
	var JqNavigationClone = JqNavigation.clone();
	/* Поиск и клонирование */

	/* Настройки */
	var JqPanel = $('\
		<div class="jq-nav">\
			<div class="jq-nav__navigation">\
				<div class="jq-nav__close">\
					<svg fill="#111" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">\
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\
						<path d="M0 0h24v24H0z" fill="none"></path>\
					</svg>\
				</div>\
				<div class="jq-nav__scroller">\
					<div class="jq-nav__top"></div>\
					<div class="jq-nav__content"></div>\
					<div class="jq-nav__bot"></div>\
				</div>\
			</div>\
		</div>\
	');

	var JqNavigationClass = 'jq-navigation--list';
	var JqNavigationTop   = 'jq-navigation--top';
	var JqNavigationBot   = 'jq-navigation--bot';
	/* Настройки */

	/* Очистка тега */
	JqNavigationClone.removeAttr('class');
	JqNavigationClone.removeAttr('style');
	JqNavigationClone.removeAttr('data-jq');
	JqNavigationClone.removeAttr('data-jq--style');
	JqNavTop.removeAttr('class');
	JqNavTop.removeAttr('style');
	JqNavBot.removeAttr('class');
	JqNavBot.removeAttr('style');
	/* Очистка тега */

	JqNavigationClone.attr('class', JqNavigationClass);
	JqNavTop.attr('class', JqNavigationTop);
	JqNavBot.attr('class', JqNavigationBot);


	if(JqNavigation.length) {
		$('body').append(JqPanel);
		$('body').append(JqBtn);

		var JqNav        = $('.jq-nav');
		var JqNavOverlay = $('<div class="jq-nav__overlay"></div>');

		JqNav.append(JqNavOverlay);

		function showJqMenu() {

			var self = JqBtn;

			if (self.hasClass('opened')) {
				self.removeClass('opened');
				JqNav.removeClass('animated');
				setTimeout(function() {
					JqNav.removeClass('opened');
				}, 200);

			} else {
				self.addClass('opened');
				JqNav.addClass('opened');
				JqNav.addClass('animated');
			}

		}

		JqNav.on('click', function() {
			showJqMenu();
		});

		JqBtn.on('click', function() {
			showJqMenu();
		});
		
	}

	/* Строим заголовки и названия */
	$('.jq-nav__content').append(JqNavigationClone);
	$('.jq-nav__top').append(JqNavTop);
	$('.jq-nav__bot').append(JqNavBot);
	$('.jq-nav__content').each(function(){
		$(this).find('.jq-navigation--list').wrap('<div class="jq-navigation--list--wrapp"></div>');
		$(this).find('.jq-navigation--list--wrapp').prepend('<div class="jq-navigation--list--title"></div>');
	})

	$('.jq-navigation--list').each(function(){
		var JqTitleText  = $(this).data('jq--title');
		$(this).prev().text(JqTitleText);
	})
	/* Строим заголовки и названия */

	/* Открытие меню */
	$('.jq-navigation--list--title').on('click', function(event){
		event.stopPropagation();
		$(this).next().slideToggle();
	})
	/* Открытие меню */
})