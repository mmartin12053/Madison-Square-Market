$(document).ready(function () {
    $('#cart').on('click', () => {
        $('#cartMenu').show();
    })

    $('.dropdown-menu').on('mouseleave', () => {
        $('.dropdown-menu').hide();
      })

    $('#account').on('click', () => {
        $('#accountMenu').show();
    })

    $('.dropdown-menu').on('mouseleave', () => {
        $('.dropdown-menu').hide();
      })

    $('#help').on('click', () => {
        $('#helpMenu').show();
    })

    $('.dropdown-menu').on('mouseleave', () => {
        $('.dropdown-menu').hide();
      })
});