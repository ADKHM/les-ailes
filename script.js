function orderSet(button) {
    const card = button.parentElement;
    const setName = card.querySelector('h1').textContent.trim();
    let priceText = card.querySelector('span').textContent.trim(); 
    const clean = priceText.replaceAll(' ', '').replace('сум', '');
    const price = Number(clean);

    switch (setName) {
        case "Qiyqiriq сет":
        case "Снек сет":
        case "Классик сет":
        case "Лонгер рингс сет":
        case "Биг сет":
        case "Лестер сет":
        case "Скул сет":
        case "Комбо сет Большой":
        case "Do'stlar 1x":
        case "Do'stlar 2x":
        case "Do'stlar 4x":
        case "Острый Do'stlar 1x":
            let qiymat = prompt(setName + ' dan nechta zakaz qilmoqchisiz?');

            qiymat = Number(qiymat);

            if (qiymat === '', qiymat <= 0) {
                alert("Iltimos to‘g‘ri son kiriting.");
                return;
            }

            const totalPrice = price * qiymat;
            const qabulqilish = confirm( qiymat + ' ta ' + setName + ' jami narxi ' + totalPrice + ' so‘m\nMahsulotni zakaz qilasizmi?');

            if (qabulqilish) {
                alert('Zakaz qabul qilindi')
            } else {
                alert('Zakaz bekor qilindi')
            }
            break;

        default:
            alert("Noma'lum set.");
    }
}
