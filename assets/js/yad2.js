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
    console.log(request, sender.tab ?
    "from a content script:" + sender.tab.url :
        "from the extension");
    if (request == "nadlan") {
        var price = $('.price table td').clone().children().remove().end().text().trim().replace(' ', '');

        sendResponse({
            price: price
        });
    }
});
