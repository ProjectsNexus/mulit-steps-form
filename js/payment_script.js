$(function() {

    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var cardNumberField = $('#card-number-field');
    var CVV = $("#cvv");
    var mastercard = $("#mastercard");
    var visa = $("#visa");
    var amex = $("#amex");
    var month = $("#month");
    var year = $("#year");

    // Use the payform library to format and validate
    // the payment fields.

    cardNumber.payform('formatCardNumber');
    CVV.payform('formatCardCVC');


    cardNumber.keyup(function() {

        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
            cardNumberField.addClass('has-error');
        } else {
            cardNumberField.removeClass('has-error');
            cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
            mastercard.addClass('transparent');
            amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
            mastercard.addClass('transparent');
            visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
            amex.addClass('transparent');
            visa.addClass('transparent');
        }
    });
});
