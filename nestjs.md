

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