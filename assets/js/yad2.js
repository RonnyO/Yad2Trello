// abuse the note cells to inject Open In New Tab buttons
$('[id^=ad_note_2]');.each(function() {
    var $el = $(this).empty();

    var link = $('<a>').attr({
        href: $el.parent().children().last().find('a').attr('href'),
        target: '_blank',
        class: 'yad2trello-newtab'
    });
    var img = $('<img>').attr({
        src: chrome.extension.getURL('assets/images/newtab.png'),
        title:"פתיחת מודעה בלשונית חדשה"
    });

    link.append(img).appendTo($el);
});