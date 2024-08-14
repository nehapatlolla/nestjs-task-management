# DynamoDB
DynamoDB is a fully managed NoSQL database service provided by Amazon Web Services (AWS). 

It is designed to handle large amounts of data and provide fast, predictable performance with seamless scalability. 

It requires only a primary key and doesn’t require a schema to create a table.

### Key Features of DynamoDB

NoSQL Database:

DynamoDB is a NoSQL database, meaning it does not use the traditional relational database model with tables, rows, and columns. Instead, it stores data in flexible, JSON-like documents with attributes that can vary between items.

Key-Value and Document Store:

It primarily operates as a key-value store where each item (or record) is identified by a unique key. It also supports document data models, allowing for complex data structures like JSON to be stored and queried.

Fully Managed:

DynamoDB is fully managed by AWS, meaning that AWS handles tasks like hardware provisioning, software patching, setup, configuration, and backups, so you don't have to.

Scalability:

DynamoDB automatically scales to handle the capacity you need, from small workloads to massive applications. It can scale horizontally by distributing data across multiple servers to handle large amounts of traffic and data.

DynamoDB comprises of **three fundamental units** known as table, attribute, and items.

Table, Items, and Attributes

A **table** can be visualized as a group of items. Taking an example of Employee records, you will have Employee Name, Employee ID, Address and Phone Number all such items will be stored in a table.

An **item** is a set of attributes in a table. You can also understand an item as a set of attributes that can uniquely define your entry in a table. For example, an item in Employee records will identify a single employee.

An **attribute** is a single field that is attached to an item. E.g. Employee Name.

### Example of How DynamoDB Works

Imagine you are building an e-commerce website. You might use DynamoDB to store information about products, where each product is an item in the database. Each item might have attributes like ProductID (the key), Name, Price, and Category. DynamoDB allows you to quickly retrieve any product by its ProductID, and it scales easily as your catalog grows.