$(document).ready(function () {
	showBoxes();
	$('.caja8').hide();
	$('.caja9').show();

	// modal 1
	$('.openModal').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		setTimeout(() => {
			handleCheckResults()
		}, 2000)
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
		handleShowCurrentBox(8)
		handleOptionCorrectShow('.correcta');
		boxSound();
		handleSaveCorrectQuestion(10)

		setTimeout(() => {
			handleCheckResults()
		}, 2000)
	})
})
