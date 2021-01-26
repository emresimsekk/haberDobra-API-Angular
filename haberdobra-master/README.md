# haberdobra



| Route | HTTP | Method | Description | Token |
| --- | --- | --- | --- | --- |
| /api/signin | POST | {'username': emresmsk, 'password': *******} | Kullanıcı giriş yönetimi. | false |
| /api/signup | POST | {'username': emresmsk, 'password': ******* , 'name': Emre, 'surname': Şimşek,} | Kullanıcının üye olma yönetimi. | false |
| /api/categories/ | POST |{'name': Son Dakika} | Kategori ekler. | true |
| /api/categories/:id | PUT |{'name': Spor} | Kategoriyi günceller. | true |
| /api/categories/:id | DELETE|----- | Kategoriyi siler. | true |
| /api/categories/ | GET | ----- | Tüm kategorleri listeler. | false |
| /api/categories/:id | GET | ----- | ID'ye göre kategori listeler. | false |
| /api/news/ | POST |{'categoryID': 1, 'title': Haber Başlığı, 'content': lorem ipsum , 'thumbnail': url,} | Haber ekler. | true |
| /api/news/:id | PUT|{'categoryID': 1, 'title': Haber Başlığı, 'content': lorem ipsum , 'thumbnail': url,} |  Haber günceller. | true |
| /api/news/:id | DELETE |----- | Haberi siler. | true |
| /api/news/ | GET | ----- | Tüm haberleri listeler. | false |
| /api/news/:id | GET | ----- | ID'ye göre haberi listeler. | false |


#Kurulum (Gerekirse)

npm install<br/>
npm install bcrypt<br/>
npm install dotenv<br/>
npm install express --save<br/>
npm install jsonwebtoken<br/>
npm install --save mysql2<br/>
npm install --save sequelize<br/>
npm install nodemon<br/>
npm install --save-dev sequelize-cli<br/>

start: npm run dev<br/>
