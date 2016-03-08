// abuse the note cells (or start for yad1 listings) to inject Open In New Tab buttons
$('[id^=ad_note_], .piroject-info-strip td:first-child').each(function() {
    var $el = $(this).empty();

    var link = $('<a>').attr({
        href: $el.siblings().last().find('a').attr('href'),
        target: '_blank',
        class: 'yad2trello-newtab',
        title: 'פתיחת מודעה בלשונית חדשה'
    });
    var img = $('<img>').attr({
        src: chrome.extension.getURL('assets/images/newtab.png')
    });

    link.append(img).appendTo($el);
});


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == 'nadlan') {
        var price = $('.price table td').clone().children().remove().end().text().trim().replace(' ', '');
        var rooms = $('.innerDetailsDataGrid td:contains("חדרים")').next().text().trim();
        var size = $('.innerDetailsDataGrid td:contains("גודל")').next().text().trim();
        var neighborhood = $('.innerDetailsDataGrid td:contains("שכונה")').first().next().text().trim();
        var address = $('.innerDetailsDataGrid td:contains("כתובת")').first().next().text().trim();

        var phone1 = $('.innerDetailsDataGrid td:contains("טלפון 1")').next().text().trim();
        var phone2 = $('.innerDetailsDataGrid td:contains("טלפון 2")').next().text().trim();
        var contact = $('.innerDetailsDataGrid td:contains("איש קשר")').next().text().trim();

        var entranceDate = $('.details_block_info div[style*=\"color:\"]:contains("תאריך כניסה:")').text().trim().replace(/[^\d\/]/g, '');
        var pricePerMr = Math.round(price.replace(/\D/g, '') / size);

        sendResponse({
            price: price,
            rooms: rooms,
            size: size,
            neighborhood: neighborhood,
            address: address,
            phone1: phone1,
            phone2: phone2,
            contact: contact,
            entranceDate: entranceDate,
            pricePerMr: pricePerMr
        });
    }
});
