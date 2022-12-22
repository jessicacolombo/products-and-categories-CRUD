<h1 align="center">
   products-and-categories-CRUD
</h1> 

Project develop using NodeJS, Express and SQL to create an API where products and categories can be created, read, updated and deleted. The project was made usign JavaScript, PostgreSQL, bcryptjs, express-async-erros, nodemon and sucrase, yup, jsonwebtoken, dotenv and pg.

base URL: <a> http://localhost:3000 </a>

![image](https://user-images.githubusercontent.com/99851815/209148130-a2be40c5-694e-48b7-986d-7726112002dc.png)

## Products Routes: 
**POST** /products <br>
Route to create a new product. The field category can be null. Price can be a float.

Request format: 
```json
{
  "name": "product",
  "price": 20,
  "category_id": null
}
```
Response:
```json
201 
{
  "category_id": null
  "price": 20,
  "name": "product",
  "id": "21ae7694-7d60-4397-bbc2-88feb19b472c"
}
```

<br>


***GET*** /products <br>
Route to list all projects.

Response:
```json
200
[
  {
    "category_id": null
    "price": 20,
    "name": "product",
    "id": "21ae7694-7d60-4397-bbc2-88feb19b472c"
  }, 
  {
    "category_id": 2
    "price": 40,
    "name": "product2",
    "id": "21ae7694-7d60-4397-bbc2-88feb19b472c"
  }
]
```
<br>

***GET*** /products/<product_id> <br>
Route to list a especific project by its id.

Response:
```json
200
 {
   "category_id": null 
   "price": 20,
   "name": "product",
   "id": "21ae7694-7d60-4397-bbc2-88feb19b472c"
 }
```
<br>



***GET*** /products/category/<category_id> <br>
Route to list all projects that has a category; list by id of the category.

Response:
```json
[
  {
    "category_id": 2
    "price": 20,
    "name": "product",
    "id": "21ae7694-7d60-4397-bbc2-88feb19b472c"
  }, 
  {
    "category_id": 2
    "price": 40,
    "name": "product2",
    "id": "21ae7694-7d60-4397-bbc2-88feb19b472c"
  }
]
```
<br>

***PATCH*** /products/<product_id> <br>
Route to edit product information.

Request format: 
```json
{
  "name": "new product name",
}
```

Response:
```json
200
{
   "category_id": 2
    "price": 20,
    "name": "new product name",
    "id": "21ae7694-7d60-4397-bbc2-88feb19b472c"
}
```

<br>

***DELETE*** /products/<product_id> <br>
Route to delete a product from the database.

Response: 
```json
204
```
<br>

## Categories Routes: 
**POST** /categories <br>
Route to create a new category. 

Request format: 
```json
{
  "name": "category",
}
```
Response:
```json
201 
{
  "name": "category",
  "id": 1
}
```

<br>


***GET*** /categories <br>
Route to list all categories.

Response:
```json
200
[
  {
    "name": "category",
    "id": 1
  }, 
   {
    "name": "other category",
    "id": 2
  },
]
```
<br>

***GET*** /categories/<category_id> <br>
Route to list a especific category by its id.

Response:
```json
200
{    
  "name": "category",
  "id": 1
}
```
<br>

***PATCH*** /categories/<category_id> <br>
Route to edit category information.

Request format: 
```json
{
  "name": "new category name",
}
```

Response:
```json
200
{    
  "name": "new category name",
  "id": 1
}
```

<br>

***DELETE*** /categories/<category_id> <br>
Route to delete a category from the database. On delete, products that had this category will have the field category set to null. 

Response: 
```json
204
```
<br>


