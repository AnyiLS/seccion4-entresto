$(document).ready(function () {
	// modal 1
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})
})
