const inquiryForm = document.getElementById('inquiry-form');

if (inquiryForm) {
    inquiryForm.addEventListener('submit', function (event) {
        event.preventDefault();
        inquiryForm.reset();
    });
}

