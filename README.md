
# Bytefront Todo Application API Documentation

This API documentation provides a detailed description of the API endpoints and the parameters required for the Bytefront Todo Application.

## Base URL

[API Documentation](https://todo-list-alx.onrender.com/api-docs/)


## Authentication

All API requests require authentication using a bearer token in the `Authorization` header. The token is issued upon successful user registration and login.

`Authorization: Bearer {token}` 

## User Endpoints

### Create a new user

This endpoint creates a new user in the application.

`POST /user/register` 

**Request Body Parameters**

| Parameter  | Type   | Required | Description              |
|------------|--------|----------|--------------------------|
| `name`     | string | Yes      | The name of the user     |
| `username` | string | Yes      | The username of the user |
| `email`    | string | Yes      | The email of the user    |
| `password` | string | Yes      | The password of the user |

**Response**

If successful, this endpoint returns a `201 OK` response.

### Login a user

This endpoint authenticates a user and returns a bearer token for subsequent API requests.

`POST /user/login` 

**Request Body Parameters**


| Parameter  | Type   | Required | Description              |
|------------|--------|----------|--------------------------|
| `username` | string | Yes      | The username of the user |
| `password` | string | Yes      | The password of the user |

**Response**

If successful, this endpoint returns a `200 OK` response with a bearer token in the response body.

### Retrieve all users

This endpoint retrieves all users in the application.

`GET /user` 

**Response**

If successful, this endpoint returns a `200 OK` response with a list of all users in the response body.

### Retrieve a single user

This endpoint retrieves a single user by `userId`.

`GET /user/{userId}` 

**Path Parameters**


| Parameter  | Type   | Required | Description              |
|------------|--------|----------|--------------------------|
| `userId`     | String | Yes      | The ID of the user     |


**Response**

If successful, this endpoint returns a `200 OK` response with the user information in the response body.

## Todo Endpoints

### Create a new todo

This endpoint creates a new todo in the application.

bashCopy code

`POST /todo` 

**Request Body Parameters**
| Parameter  | Type   | Required | Description              |
|------------|--------|----------|--------------------------|
| `name`     | String | Yes      | The name of the user     |
| `completed` | Boolean | No      | The completion status of the todo (default: `false`) |


**Response**

If successful, this endpoint returns a `201 OK` response.

### Retrieve all todo

This endpoint retrieves all todo in the application.

`GET /todo` 

**Response**

If successful, this endpoint returns a `200 OK` response with a list of all todos in the response body.

### Retrieve a single todo

This endpoint retrieves a single todo by `todoId`.

`GET /todo/{todoId}` 

**Path Parameters**

| Parameter  | Type   | Required | Description              |
|------------|--------|----------|--------------------------|
| `todoId`     | string | Yes      | The ID of the todo     |


**Response**

If successful, this endpoint returns a `200 OK` response with the todo information in the response body.

### Update a todo

This endpoint updates a todo by `todoId`.

`PATCH /todo/{todoId}` 

**Path Parameters**

| Parameter  | Type   | Required | Description              |
|------------|--------|----------|--------------------------|
| `todoId`     | string | Yes      | The ID of the todo     |

**Response**

If successful, this endpoint returns a `201 OK` response with the todo information in the response body.


### Delete a todo

This endpoint deletes a todo by `todoId`.

`DELETE /todo/{todoId}` 

**Path Parameters**

| Parameter  | Type   | Required | Description              |
|------------|--------|----------|--------------------------|
| `todoId`     | string | Yes      | The ID of the todo     |

**Response**

If successful, this endpoint returns a `204 OK` response with an empty response body.