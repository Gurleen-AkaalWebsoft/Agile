function normalizeText(text) {
    return text
    .replace(/\s+/g, '') 
    .replace(/-/g, '')  
    .toUpperCase();       
}

$(document).ready(function () {
    $('#myInput').on('keyup', function () {
        var filter = normalizeText($(this).val());
        var found = false;

        $('.page-sidebar__service-item').each(function () {
            var text = $(this).find('a').text();
            var normalized = normalizeText(text);

            if (normalized.includes(filter)) {
                $(this).show();
                found = true;
            } else {
                $(this).hide();
            }
        });

        if (!found && filter !== '') {
            $('#noResultsMessage').show();
        } else {
            $('#noResultsMessage').hide();
        }
    });
});