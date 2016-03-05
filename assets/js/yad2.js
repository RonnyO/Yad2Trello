// abuse the note cells to inject Open In New Tab buttons
$('[id^=ad_note_]').each(function() {
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