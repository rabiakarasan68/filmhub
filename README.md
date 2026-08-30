# 🎬 FilmHub

FilmHub, React ve JavaScript kullanılarak geliştirilmiş bir film ve dizi keşfetme web uygulamasıdır.

Uygulama üzerinden filmler ve diziler incelenebilir, detayları görüntülenebilir, diziler aranabilir ve beğenilen yapımlar favorilere eklenebilir.

## 🚀 Özellikler
🏠 Ana sayfa
🎬 Film listesi
📺 Dizi listesi
🔎 Dizi arama
📖 Film detay sayfası
📖 Dizi detay sayfası
⭐ Film ve dizi puanlarını görüntüleme
❤️ Favorilere film ve dizi ekleme
💔 Favorilerden çıkarma
📌 Favori yapımları ayrı bir sayfada görüntüleme
📺 Dizilerin sezonlarını görüntüleme
🎞️ Sezonlara göre bölümleri listeleme
📅 Bölümlerin yayın tarihlerini görüntüleme
📱 Responsive tasarım
🎨 Modern ve responsive kullanıcı arayüzü

## 🛠️ Kullanılan Teknolojiler
React
JavaScript
React Router
CSS
Vite
TVMaze API
React Context API

## 📡 API

Dizi bilgileri için TVMaze API kullanılmıştır.

API üzerinden:

Dizi listeleri
Dizi arama sonuçları
Dizi detayları
Sezon bilgileri
Bölüm bilgileri
Bölüm yayın tarihleri
Puan bilgileri

alınmaktadır.

## 🧠 Kullanılan React Konuları

Bu projede React'in temel ve orta seviye özellikleri kullanılmıştır.

useState

Dizi, arama, yüklenme, hata, favoriler ve seçili sezon gibi verilerin yönetiminde kullanılmıştır.

useEffect

API isteklerinin yapılması ve sayfa içerisindeki verilerin güncellenmesi için kullanılmıştır.

React Router

Uygulamadaki sayfalar ve dinamik detay sayfaları için kullanılmıştır.

Örneğin:

/movies
/series
/favorites
/movies/:id
/series/:id
Context API

Favori filmler ve dizilerin uygulamanın farklı sayfalarında ortak olarak kullanılabilmesi için FavoritesContext oluşturulmuştur.

## 📂 Proje Yapısı
FilmHub/
│
├── public/
│   └── images/
│       └── home-bg.jpg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   └── FavoriteCard.jsx
│   │
│   ├── context/
│   │   └── FavoritesContext.jsx
│   │
│   ├── data/
│   │   └── movies.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Movies.jsx
│   │   ├── MovieDetail.jsx
│   │   ├── Series.jsx
│   │   ├── SeriesDetail.jsx
│   │   └── Favorites.jsx
│   │
│   ├── services/
│   │   └── tvmaze.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

## 🔄 Uygulamanın Çalışma Mantığı
Ana Sayfa
   │
   ├── Filmleri Keşfet
   │       ↓
   │    Filmler
   │       ↓
   │    Film Detayı
   │       ↓
   │    Favorilere Ekle
   │
   └── Dizileri Keşfet
           ↓
        Diziler
           ↓
      Dizi Arama
           ↓
       Dizi Detayı
           ↓
     Sezonları Görüntüle
           ↓
       Bölümleri Gör
           ↓
      Favorilere Ekle

              ↓
          Favoriler
          
## 💻 Kurulum

Projeyi klonlayın:

git clone https://github.com/kullanici-adiniz/filmhub.git

Proje klasörüne girin:

cd filmhub

Gerekli paketleri yükleyin:

npm install

Uygulamayı çalıştırın:

npm run dev

Terminalde verilen localhost adresini tarayıcıda açarak uygulamayı kullanabilirsiniz.

## 📱 Responsive Tasarım

FilmHub farklı ekran boyutlarında kullanılabilecek şekilde responsive olarak tasarlanmıştır.

💻 Masaüstü
💻 Tablet
📱 Mobil

ekranlarda uyumlu bir kullanıcı arayüzü sunar.

## 📚 Öğrenilen Konular

Bu proje geliştirilirken aşağıdaki konularda pratik yapılmıştır:

React component yapısı
Props kullanımı
useState
useEffect
Context API
React Router
Dinamik route parametreleri
API'den veri çekme
fetch() kullanımı
async işlemler
JSON verileriyle çalışma
Conditional Rendering
Event Handling
Arama işlemleri
Favori yönetimi
Sezon ve bölüm filtreleme
Responsive CSS
CSS Grid ve Flexbox

## 🎯 Projenin Amacı

Bu proje, React kullanarak çok sayfalı bir web uygulaması geliştirmek, harici bir API'den veri almak, alınan verileri kullanıcı arayüzünde göstermek ve React Router ile sayfalar arasında yönlendirme yapmak amacıyla geliştirilmiştir.

## 📄 Lisans

Bu proje eğitim ve portföy amacıyla geliştirilmiştir.
