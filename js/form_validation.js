const   nextclick = document.querySelector('.next'),
        form = document.getElementById('msform'),
        errormessage = document.querySelector('.error'),
        ClientFristName = document.getElementById('f_name'),
        ClientSecondName = document.getElementById('l_name'),
        ClientEmail = document.getElementById('Email'),
        ClientPhone = document.getElementById('phone'),
        Clientaddress1 = document.getElementById('ardd1'),
        Clientaddress2 = document.getElementById('ardd2'),
        ClientCountry = document.getElementById('country'),
        ClientState = document.getElementById('state'),
        ClientServiceDept = document.getElementById('department'),
        ClientService = document.getElementById('service'),
        ClientPerItemPrice = document.getElementById('per_item_price'),
        CreditCardOwner = document.getElementById('cardOwner'),
        Clientcvv = document.getElementById('cvv'),
        CreditCardNumber = document.getElementById('cardNumber'),
        printsummary = document.getElementById('summary')

   /*     function form_validation(e) {
            e.preventDefault();
            alert("yes");
            return false;
        }

*/
        nextclick.addEventListener('submit', (event) => {
            event.preventDefault();
            if (ClientFristName.value == "") {
                ClientFristName.style.border = "red";
            }
        });

// file validation
    function fileValidation() {
             
            var filePath = selectRoughIdea.value;
         
            // Allowing file type
            var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.mp4|\.pdf)$/i;

            if (!allowedExtensions.exec(filePath)) {
                var error = document.getElementById('error')
                error.innerHTML = 'Only .jpg, .png, .gif, .mp4, .pdf allowed';
                fileInput.value = '';
                return false;
            }
            else
            {
             
                // Image preview
                if (fileInput.files && fileInput.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        document.getElementById(
                            'imagePreview').innerHTML =
                            '<img src="' + e.target.result
                            + '"/>';
                    };
                     
                    reader.readAsDataURL(fileInput.files[0]);
                }
            }
        }

//Expected Price
    function Expected_Price() {
           var peritemPrice = selectPerItemPrice.value;

           
            selectExpectedPrice.value = '$ ' + ExpectedPrice;

           /* var peritemprice = selectPerItemPrice.value;
            var QuanitiyDuration = selectQuanitiyDuration.value
            var price = peritemprice.match(/\d+\.?\d+/g);
        
        
            for (var i = price; i <= 100; i++) {
            
            var ExpectedPrice =+ price * QuanitiyDuration;

            selectExpectedPrice.value = '$ ' + ExpectedPrice;
            }  
*/
}

//summary
function summary() {
    
}
