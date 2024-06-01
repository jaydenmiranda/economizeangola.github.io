document.addEventListener('DOMContentLoaded', function() {
    console.log('Economize Angola - Plataforma de comparação de preços.');
});

function searchFunction() {
    var input, filter, main, sections, items, i, j, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toLowerCase();
    main = document.querySelector('main');
    sections = main.getElementsByTagName('section');

    for (i = 0; i < sections.length; i++) {
        items = sections[i].getElementsByTagName('li');
        for (i = 0; i < cards.length; i++) {
        cardContent = cards[i].getElementsByTagName('ul')[0];
        if (cardContent) {
            cardContent = cardContent.getElementsByTagName('li');
            cards[i].style.display = 'none';
            for (j = 0; j < cardContent.length; j++) {
                txtValue = cardContent[j].textContent || cardContent[j].innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    cards[i].style.display = '';
                    break;
                }
            }
        }
    }
}