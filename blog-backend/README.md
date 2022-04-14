# Mr Pacman BLog - Backend
Web Application/Backend using NodeJS, ExpressJS and MongoDB.

# API Endpoint Contract
## Standard API:
```
{root.api}/{v1}/{grouping}/{endpoint}
```
## Sample V1:
```
http://blog-backend.pacman-blog.org/v1/auth/login
```
## Standard Status Response
```
[200 - OK] for Call API Success.
[201 - CREATED] for Post Success.
[400 - BAD REQUEST] for Error on Client Side.
[401 - UNAUTHORIZED] for User NOT Authorized to the request.
[403 - FORBIDDEN] for User NOT Allowed to access.
[404 - NOT FOUND] for Request Endpoint NOT FOUND.
[500 - INTERNAL SERVER ERROR] for Error on Server Side.
[502 - BAD GATEWAY] for Invalid Response from another Request.
```

## Group:
### Authentication
- Registration
```
{root.api}/{version}/auth/register
```
Request - GET :
```json
{
    "name": "A HUMAN",
    "email": "HUMAN'S EMAIL",
    "password": "SECRET PASSWORD"
}
```
Response :
```json
{
    "message": "Registration Success",
    "status": 200,
    "data": {
        "uid": 1,
        "name": "A HUMAN",
        "email": "HUMAN'S EMAIL",
        "password": "SECRET PASSWORD"
    }
}
    
```
   
- Login
```
{root.api}/{version}/auth/login
```
Request - GET :
```json
{
    "email": "HUMAN'S EMAIL",
    "password": "SECRET PASSWORD"
}
```
Response :
```json
{
    "message": "Login Success",
    "status": 200,
    "data": {
        "id": 1,
        "name": "A HUMAN",
        "email": "HUMAN'S EMAIL",
        "password": "SECRET PASSWORD"
    }
}
```
   
### Blog
- Create post
```
{root.api}/{version}/create-blog
```
Request - POST:
```json
{
    "title": "BLOG TITLE",
    "image": "BLOG IMAGE",
    "content": "BLOG CONTENT"
}
```
Response :
```json
{
    "message": "Creating Success",
    "status": 200,
    "data": {
        "post_id": 1,
        "title": "BLOG TITLE",
        "image": "BLOG IMAGE",
        "body": "BLOG CONTENT",
        "created_at": "14/04/2022",
        "author" : {
            "uid": 1,
            "name": "USER NAME"
        }
    }
}
```

- Show post
```
{root.api}/{version}/post
```
Request - GET :
```
{root.api}/{version}/post
```

Response :
```json
{
    "message": "Showing Success",
    "status": 200,
    "data": [
        {
            "id": 1,
            "title": "BLOG TITLE",
            "image": "BLOG IMAGE",
            "content": "BLOG CONTENT"
        },
        {
            "id": 1,
            "title": "BLOG TITLE",
            "image": "BLOG IMAGE",
            "content": "BLOG CONTENT"
        }
    ]
}
   
```

- Edit post
```
{root.api}/{version}/post/1
```
Request - PUT :
```json
{
    "id": 1,
    "title": "BLOG TITLE CHANGED",
    "image": "BLOG IMAGE CHANGED",
    "content": "BLOG CONTENT CHEANGED"
}
```
Response :
```json
{
    "message": "Editing Success",
    "status": 200,
    "data": {
            "id": 1,
            "title": "BLOG TITLE CHANGED",
            "image": "BLOG IMAGE CHANGED",
            "content": "BLOG CONTENT CHEANGED"
    }
}
    
```

- DELETE blog post
```
{root.api}/{version}/post/1
```
Request - DELETE :
```
{root.api}/{version}/post/1
```

Response :
```json
{
    "message": "Deleteing Success",
    "status": 200,
    "data": {
            "id": 1,
            "title": "BLOG TITLE CHANGED",
            "image": "BLOG IMAGE CHANGED",
            "content": "BLOG CONTENT CHEANGED"
    }
}
    
```
