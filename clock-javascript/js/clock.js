function showTime() {
    let date = new Date();

    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    switch (day) {
        case 1: day = "Pazartesi";  break;
        case 2: day = "Salı";       break;
        case 3: day = "Çarşamba";   break;
        case 4: day = "Perşembe";   break;
        case 5: day = "Cuma";       break;
        case 6: day = "Cumartesi";  break;
        case 7: day = "Pazar";      break;
        default:                    break;
    }

    let time = hours + ":" + minutes + ":" + seconds + " " + day;
    document.getElementById("myClock").textContent = time;
  
    setTimeout(showTime, 1000);
  }
  /* Basitçe sizden girişte isminizi isteyip sonra bu ismi karşılama ekranına yerleştirerek o anki saati ve günü gösteren bir ekran. Yapması oldukça kolay ve zevkli!

    Yazacağınız Javascript dosyasında Date methodunu kullanacaksınız. Detaylı bilgi için tıklayınız.

    Gün olarak aldığınız değeri string olarak göstermeniz gerekmektedir. (İpucu: 1 = Pazartesi)

    Eğer saat, dakika ya da saniye 10'dan küçükse başına 0'ı koymalısınız.

    Her 1 saniyede bir yenilenmelidir.

    Kullanıcıdan alınan ad direkt olarak ekrana yazılmalıdır.

Burada bizim verdiğimiz ile sınırlı kalmak zorunda değilsiniz, hatta hayalgücünüzü çalıştırarak yeni şeyler üretirseniz daha mutlu oluruz!

Hepinize başarılar ve kolay gelsin.*/