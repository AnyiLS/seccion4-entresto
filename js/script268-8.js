$(document).ready(function () {
	showBoxes();
	// modal 1
	$('.openModal').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		handleChangeView(269);
	})

	// modal 1
	$('.openModal1').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})

	// modal 2
	$('.openModal2').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	
	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleShowCurrentBox(8);
		handleOptionCorrectShow('.correcta');
		boxSound();
		handleSaveCorrectQuestion(9)

		setTimeout(() => {
			handleChangeView(269);
		}, 2000)
	})
})
