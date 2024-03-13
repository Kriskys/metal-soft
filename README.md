# Technical Test Project for Metal Soft

This repository contains the NestJS project developed by Kristiyan Yanakiev as part of the technical test for Metal Soft. The project implements a FILO (First In, Last Out) stack, allowing for dynamic data storage and retrieval in a stack structure.

## Project Overview

 It showcases the creation of a simple API for managing a stack, including retrieving all elements, adding a single element, and deleting elements from the stack.

## Getting Started

To get started with this project, clone the repository and install the necessary dependencies.

```bash
git clone <repository-url>
cd <project-directory>
npm install
```

`Note!`: I am using REST Client for VS Code by Huachao Mao to test the endpoints, all described in `src/filo-stack/requests.http`

# API Endpoints

The service provides the following endpoints for interacting with the FILO stack:

## Add Element to Stack

Adds a new element to the stack.

- URL: POST /filo-stack
- Content-Type: application/json
- Body:

```json
{
    "elementToAdd": 3
}
```

## Get All Elements in Stack

Retrieves all elements currently in the stack, maintaining the FILO order.

- URL: GET /filo-stack

## Delete Top Element from Stack

Removes the top element from the stack.

- URL: DELETE /filo-stack/top

## Delete All Elements from Stack

Removes all elements from the stack.

- URL: DELETE /filo-stack/all
