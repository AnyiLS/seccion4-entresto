$(document).ready(function () {
	// modal 1
	$('.openModal').on('mouseover', () => {
		$('#image-1').css('display', 'block')
		$('#image').css('display', 'none')
	})
	// cerra modal
	$('#image-1').on('mouseleave', () => {
		$('#image-1').css('display', 'none')
	})

	$('.openModal').on('mouseleave', () => {
		$('#image-1').css('display', 'none')
	})

	// modal 1
	$('.openModal1').on('mouseover', () => {
		$('#image').css('display', 'block')
		$('#image-1').css('display', 'none')
	})
	// cerra modal
	$('#image').on('mouseleave', () => {
		$('#image').css('display', 'none')
	})

	$('.openModal1').on('mouseleave', () => {
		$('#image').css('display', 'none')
	})
})
