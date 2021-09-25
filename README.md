<div align="center">

# Candaan API 😁

**Candaan API** merupakan Rest API yang dibuat untuk mendapatkan beberapa jokes jokes receh dari Indonesia, semua data data yang ada di **Candaan API** diambil dari internet yang kemudian dikumpulkan menjadi satu, untuk dibuat Rest API

[![MIT License](https://img.shields.io/github/license/ardhptr21/candaan-api)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![MIT License](https://img.shields.io/badge/author-ardhptr21-blue)](https://github.com/ardhptr21/)

</div>

## Penggunaan

**BASE URL: [https://candaan-api.vercel.app](https://candaan-api.vercel.app)**

| Endpoint            | Description                                                | Parameter | Method |
| ------------------- | ---------------------------------------------------------- | --------- | ------ |
| `/`                 | Menampilkan informasi **Candaan API**                      | NO        | GET    |
| `/api/text`         | Mendapatkan semua data candaan berupa teks                 | NO        | GET    |
| `/api/text/random`  | Mendapatkan satu data candaan berupa teks secara random    | NO        | GET    |
| `/api/image`        | Mendapatkan semua data candaan berupa gambar secara random | NO        | GET    |
| `/api/image/random` | Mendapatkan satu data candaan berupa gambar secara random  | NO        | GET    |

## Contoh

**Request**

```javascript
fetch("https://candaan-api.vecel.app/api/text")
  .then((response) => response.json())
  .then((result) => console.log(result));
```

**Response**

```json
{
  "status": 200,
  "total": 60,
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
