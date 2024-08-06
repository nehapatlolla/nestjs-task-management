

**AppModule** is the root module of the application, crucial role in organizing and initializing the application.

**NestJS CLI (Command Line Interface)** provides commands to automate common tasks like creating modules, controllers, services, and more

### Key Features of the NestJS CLI


1. **Project Creation**: Quickly scaffold a new NestJS project with a standard structure.
2. **Code Generation**: Automatically generate modules, controllers, services, and other components.
3. **Development Server**: Run a local development server with live reloading.
4. **Build and Testing**: Facilitate building and testing of the application.
5. **Configuration**: Manage configuration for different environments and setups.

## Files which may be deleted if not in use are

src/app.controller.ts: Remove if not using default controller.

src/app.service.ts: Remove if not using default service.

src/app.controller.spec.ts: Remove if not writing tests.

src/app.service.spec.ts: Remove if not writing tests.

test/app.e2e-spec.ts: Remove if not using end-to-end tests.

test/jest-e2e.json: Remove if not using Jest for end-to-end testing.

nest-cli.json: Remove if not using CLI configuration.

## NestJS modules

1. Each application must contain atleast one module, maybe root or anyother

2. The modules are singletons. i.e these modules can be imported by other modules.


@Module Decorator props

1. Providers 
2. Decorators
3. Imports
4. Exports

## Dependency Injection

Instead of a class (like a car) creating its own dependencies (like the key), you provide those dependencies from outside. This makes the code cleaner and easier to manage.

## Decorators
DEcorators are the special kind of function and it can be attached to any methods, classes objects, The decorator can modify their behaviour and even it can add the meta data

## controller

It is a class which is annotated with the @controller decorator.

Actions have methods. 

Job of the controller is to creeate the endpoints. 

It controls the process of handling the requests.

responsible for recieving incoming requests and returning a response

## Providers.

Most of the code is written in the providers.

A provider is a class that can be injected into other classes. Providers can include services, repositories, factories, and more.

1. Defining a Provider

To define a provider, you create a class and use the @Injectable() decorator to mark it as injectable.

2. Registering a Provider

Providers must be registered in a module so that they can be injected where needed. This is done in the providers array of a module.
3. Injecting Providers

To use a provider in another component (like a controller or another service), you inject it through the constructor of that class.

## Handlers

Handlers are the emthods within the controller class

@post, @get @delete etc

![alt text](image.png)

![alt text](image-1.png)

## What is a service?

Services are implemented using the providers.

We will be importing the services in the providers.

Services can be imported into the controllers to call the methods also.

### In the app module.ts we need to  import the service class in the providers, not the controllers


### Service class will own the business logic and interact with databases or external APIs, controller will be the entrypoint, it communicate with the service and return the result.


A method is just a function in class

The names of the method can be same or different in the controller and the service classes.

We cannnot do everything in the controller, because the if the business logics are more , going on using the service for the business logic will be easier. 

![alt text](image-2.png)

here we canot assign it as value, so we have to give the defaiult types in the method as parameters. like

```ts
  CreateTask(title: string, description: string): Task {
    const task: Task = {
      id: '',
      title,
      description,
      status: TaskStatus.OPEN,
    };
  }
```
Here we gave it as default type so that we can use the title and description as the values.

Using the postman to  get  the task dat.

Post method is reated and used the  post method which was in service in the controller using the **@post** handler.

## DTO(Data transfer Object)

The Http request is been generated, the request then goes to the controller body prameters are extracted, then we call crateTask method, then this method andles those arguments

![alt text](image-3.png)

A DtO is the object which carries data between the processes. 

It is an object that defines how the data will be sent over the network.

**Serialization** is the process of converting an object or data structure into a format that can be easily stored, transmitted.JSON, XML, and binary etc 

```ts
JSON.stringify()
``` 
converts the task object into a JSON string

**Deserialization** is the reverse process of serialization. It involves converting serialized data (e.g., a JSON string) back into its original object or data structure.

```ts
JSON.parse()
``` 
converts the JSON string back into a JavaScript object.

![alt text](image-4.png)

![alt text](image-5.png)

- Use only classes for the DTO because interfaces are the  part of the ts and they are not prserved after the compilation.


- We cannot use a Dto when we are fetching the data. We need the seperate dtos for every parameter we are fetching, it becomes the complex

## NestJs Pipes

used for transforming and validating data in request handlers. They can be used to perform operations such as data validation.

![alt text](image-7.png)

The ValidationPipe is commonly used with DTOs (Data Transfer Objects) and class-validator decorators to validate incoming request data.

Applying Pipes: Pipes can be applied at the route handler level, controller level, or globally.


Built-in Pipes: NestJS includes several built-in pipes like ValidationPipe, ParseIntPipe, and ParseUUIDPipe.

## What is ORM?

**Object-Relational Mapping (ORM)** is a technique that allows you to **interact with a database using objects** instead of writing raw SQL queries. It makes working with databases more intuitive by mapping database tables to classes in your code.

### Entities

Entities are used in conjunction with an ORM (Object-Relational Mapping) tool to represent and interact with database tables.

- An entity is a class that maps to a database table. Each instance of the entity class corresponds to a row in the table.

- The properties of the entity class represent the columns of the database table.

- Entities use decorators to define metadata about the database schema, such as primary keys, column types, and relationships.

## Active Record and Data Mapper

Two design patterns used in object-relational mapping (ORM)

- Both patterns help in mapping database tables to objects, but they handle this mapping in different ways.

Active Record:

Combines data and behavior (CRUD operations) in one class.

Simpler for small applications but can become cumbersome in larger applications.

Data Mapper:

Separates data and behavior into different classes.

More flexible and scalable, especially for complex applications.


## Active Record vs. Data Mapper

| Feature              | Active Record                                      | Data Mapper                                      |
|----------------------|-----------------------------------------------------|--------------------------------------------------|
| **What It Is**       | Combines data and database operations in one class | Keeps data and database operations separate      |
| **Class Role**       | The class does its own database work               | The class only holds data; a separate class does the database work |
| **How It Works**     | The object knows how to save, update, or delete itself | The object doesn’t handle database work; a mapper class does  |
| **Code Structure**   | Simple and straightforward, all in one class       | More organized, with separate classes for data and database handling |
| **When to Use**      | Good for simpler apps                              | Better for complex apps with more sophisticated data needs |



When we used the typeORM in the app.module we used **forroot**

And when we are using the TypeORM in the tasks.module we are using the **forfeature**

Its like for the root module and the sub modules