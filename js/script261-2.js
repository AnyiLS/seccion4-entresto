$(document).ready(function () {
	showBoxes();

	// modal 1
	$('.openModal').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '1000')
		}, 1000)
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		handleChangeView(262);
	})

	// modal 1
	$('.openModal1').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '1000')
		}, 1000)
	})

	// modal 2
	$('.openModal2').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '1000')
		}, 1000)
	})

	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleShowCurrentBox(1);
		handleOptionCorrectShow('.correcta');
		boxSound();
		handleSaveCorrectQuestion(2)

		setTimeout(() => {
			handleChangeView(262);
		}, 2000)
	})
})
