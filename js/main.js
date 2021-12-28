$( window ).on( 'load', ( ) => {

// ===========================
// === START - js for form ===
// ===========================
	
	// mask for phone and email
	$( 'input[name="phone"]' ).inputmask( '+7 (999) 999-99-99' );
	
	$( 'input[name="email"]' ).inputmask({
		mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
		greedy: false,
		onBeforePaste: function (pastedValue, opts) {
			pastedValue = pastedValue.toLowerCase();
			return pastedValue.replace("mailto:", "");
		},
		definitions: {
			'*': {
				validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
				casing: "lower"
			}
		}
  });

	

	// form
	$('form').each(function(index, el) {
		$(el).validate({
			rules:{
                "email":{ required:true, email: true },
                "phone":{ required:true }
            },
			// don't show error text
			errorPlacement: function(error, element) {
				return true;
			},
			submitHandler: function(form){
				$(form).ajaxSubmit({
					type: 'POST',
					url: 'mail.php',
					success: function() {
						$(form).trigger('reset'); // clean form
						$.fancybox.close( true ); // close modal if form in it
						$.fancybox.open($('#modal-thank')); // show Thank modal
					}
				});
			}
		});
	});
// ===========================
// ==== END - js for form ====
// ===========================



// =========================
// === START - faq block ===
// =========================
	$('.js-faq-btn').on('click', event => {
		const $target = $(event.target);
		const $item = $target.closest('.js-faq-item');
		const $text = $item.find('.js-faq-open');

		const activeClass = 'active';

		const $prevItem = $(`.${activeClass}`);
		const $prevItemText = $prevItem.find('.js-faq-open');

		$prevItem.removeClass(activeClass);
		$prevItemText.slideUp(300);

		if ( $item[0] != $prevItem[0] ) {
		   $item.addClass(activeClass);
		   $text.slideDown(300);
		}
	});	
// =========================
// ==== END - faq block ====
// =========================
	


// ======================
//  === START - timer ===
// ======================

	// Set the date we're counting down to
	var countDownDate = new Date("Jan 11, 2022 00:00:00").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

		// Display the result in the element with id="demo"

		days = (days < 10) ? '0' + days : days;
		hours = (hours < 10) ? '0' + hours : hours;
		minutes = (minutes < 10) ? '0' + minutes : minutes;

		let timer = 
		`
			<div class="time-block_cell d-flex flex-column align-items-center col-md-4">
				<p class="time-block_num font-weight-900">` + days + `</p>
				<p class="time-block_txt color-white">дней</p>
			</div>
			<div class="time-block_cell d-flex flex-column align-items-center col-md-4">
				<p class="time-block_num font-weight-900">` + hours + `</p>
				<p class="time-block_txt color-white">часов</p>
			</div>
			<div class="time-block_cell d-flex flex-column align-items-center col-md-4">
				<p class="time-block_num font-weight-900">` + minutes + `</p>
				<p class="time-block_txt color-white">минут</p>
			</div>
		`

		$('.js-time').html(timer);

		// If the count down is finished, write some text
		if (distance < 0) {
			let message = `<p class="w-100 text-center color-white">Завершено</p>`;

			clearInterval(x);
			$('.js-time').html(message);
		}
	}, 1000);
// ======================
//  ==== END - timer ====
// ======================



// =================================
// === START - show all speakers ===
// ================================= 
$('.js-speakers-open').on('click', function (event) {
	event.preventDefault();
	$('.js-speakers-mini').show();
});
// =================================
// ==== END - show all speakers ====
// =================================



// ===================================
// === START - five reasons slider ===
// =================================== 
$('.js-five-reasons-slider').slick({
    dots: true,
    arrows: false,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
  });
// ===================================
// ==== END - five reasons slider ====
// ===================================







});