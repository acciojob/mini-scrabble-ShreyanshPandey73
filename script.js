//your code here
 $('#evaluatedText').on('input', function() {
            // Get the value of the input text
            const text = $(this).val();
            // Get the length of the text
            const count = text.length;
            // Update the letter count in the h3 element
            $('#letterCount').text(count);
        });