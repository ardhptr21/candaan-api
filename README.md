<div align="center">

# Candaan API 🤣

**Candaan API** merupakan Rest API yang dibuat untuk mendapatkan beberapa jokes jokes receh dari Indonesia, semua data data yang ada di **Candaan API** diambil dari internet yang kemudian dikumpulkan menjadi satu, untuk dibuat Rest API

[![MIT License](https://img.shields.io/github/license/ardhptr21/candaan-api)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![MIT License](https://img.shields.io/badge/author-ardhptr21-blue)](https://github.com/ardhptr21/)

</div>

# Endpoint 🔗

**BASE URL: [https://candaan-api.vercel.app](https://candaan-api.vercel.app)**

| Endpoint                   | Description                                                                                                                                                                                                                                    | Parameter | Method |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------ |
| `/`                        | Menampilkan informasi **Candaan API**                                                                                                                                                                                                          | NO        | GET    |
| `/api/text`                | Mendapatkan semua data candaan berupa `array of string` sebanyak data yang ada                                                                                                                                                                 | NO        | GET    |
| `/api/text/random?count=`  | Mendapatkan satu data candaan secara random berupa `string` jika tidak menyertakan query `count`, dan jika menyertakan query `count` berupa `number` akan mengembalikan data random berupa `array of string` sebanyak value dari query `count` | `count`   | GET    |
| `/api/image`               | Mendapatkan semua data candaan berupa `array of object` sebanyak data yang ada                                                                                                                                                                 | NO        | GET    |
| `/api/image/random?count=` | Mendapatkan satu data candaan secara random berupa `object` jika tidak menyertakan query `count`, dan jika menyertakan query `count` berupa `number` akan mengembalikan data random berupa `array of object` sebanyak value dari query `count` | `count`   | GET    |

# Contoh 💻

### **Mendapatkan Semua Data `Text`**

**Request**

```javascript
// Melakukan request data text menggunakan Fetch API Javascript
fetch("https://candaan-api.vecel.app/api/text")
  .then((response) => response.json())
  .then((result) => console.log(result));
```

**Response**

```json
// Hasil response data text setelah melakukan request
{
  "status": 200,
  "total": 100,
  "end_point": "/api/text",
  "method": "GET",
  "data": [
    "Gula gula apa yang bukan gula? Gula aren't xixixi, belum paham? coba google translate dulu aokwoakwoak",
    "Barusan saya mau masak, tapi tiba tiba pancinya jalan sendiri nggak tau ke mana, ehh ternyata itu Panci Petualang..... Panji Petualang maksudnya hehehe",
    "Motivasi hari ini: kalo kamu masih diselimuti masalah berarti kamu manusia, karena kalo kamu diselimuti wijen berarti onde-onde",
    "Apa bener kalo kita ngisi bensin premium, motor kita nggak ada iklannya? wkwkwkkw",
    "Kalo mau manasin motor enaknya direbus apa digoreng?!!",
    "Pohon pisang kalau dikagetin copot gak yahh jantungnya?",
    "Mau nanya nih, kalau baju tidur bangunnya jam berapa, ya?",
    "Kemarin anak saya demam, terus saya kompres ehh malah jadi rar",
    "Kalo cinta masih mandang fisik, suruh aja pacaran sama ikan karena ikan banyak fisiknya huhuhuhu",
    "Kenapa kalau naik motor maunya ketawa terus???? karena duduknya diatas jokes",
    "Pisang kalo masih panas namanya apa? Hihang Hoheng xixixii",
    "Benda yang kalau dibalik selalu rusak?? Kasur",
    ....
  ]
}
```

---

### Mendapatkan Data `Image` Secara Random

**Request**

```javascript
// Melakukan request data image menggunakan Fetch API Javascript, tanpa parameter query count
fetch("https://candaan-api.vecel.app/api/image/random")
  .then((response) => response.json())
  .then((result) => console.log(result));

// Melakukan request data image menggunakan Fetch API Javascript, dengan parameter query count
fetch("https://candaan-api.vecel.app/api/image/random?count=3")
  .then((response) => response.json())
  .then((result) => console.log(result));
```

**Response**

```json
// Hasil response data image setelah melakukan request, tanpa query count
{
  "status": 200,
  "end_point": "/api/image/random/",
  "method": "GET",
  "data": {
    "url": "https://cdns.klimg.com/dream.co.id/resized/664xauto//real/2020/06/17/554361/meme-lucu.jpg",
    "source": "https://dream.co.id"
  }
}

// Hasil response data image setelah melakukan request, dengan query count
{
    "status": 200,
    "end_point": "/api/image/random?count=3",
    "method": "GET",
    "data": [
        {
            "url": "https://cdn-brilio-net.akamaized.net/news/2018/06/02/143598/783255-jokes-anak-sd-ngeselin.jpg",
            "source": "https://brilio.net"
        },
        {
            "url": "https://cdn-brilio-net.akamaized.net/news/2020/09/29/192813/1320634-jokes-bapak-di-whatsapp.jpg",
            "source": "https://brilio.net"
        },
        {
            "url": "https://awsimages.detik.net.id/community/media/visual/2020/01/23/c83d8b90-916a-42f1-947d-42bf59a969af.jpeg?a=1",
            "source": "https://detik.com"
        }
    ]
}
```

# Thanks 😁
