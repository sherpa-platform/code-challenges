# PHONE CATALOG

## The challenge

The challenge is to create a **NextJS App** phone catalog app from scratch.

### Minimum Requirements

In broad terms, the outcome should meet at least the following criteria:

1. **Web App for browsing the phones catalog**

   - The design should be sophisticated and responsive to provide a good user experience on every device.
   - The **Home page** should display a list of phones with images.
   - It should be possible to select a given phone and view additional details about that phone.
   - The phone information should be retrieved from the REST API described below.
   - A **spinner** or placeholder component should be displayed while the REST API request is ongoing and the app is waiting for data.

2. **REST API providing phones' information**

   - It should have at least one endpoint:

     **Endpoint:**

     - **Method:** GET
     - **Path:** `/phones`

     **Response body example:**

     ```json
     [
       {
         "id": 0,
         "name": "iPhone 7",
         "manufacturer": "Apple",
         "description": "lorem ipsum dolor sit amet consectetur.",
         "color": "black",
         "price": 769,
         "imageFileName": "IPhone_7.png",
         "screen": "4,7 inch IPS",
         "processor": "A10 Fusion",
         "ram": 2
       },
       ...
     ]
     ```

3. **GitHub public repository**
   - The repository should store the code for the app.
   - It should include a `README.md` file describing the product and explaining how to run the app.

### Nice to Have

The above bullets are the basic requirements, but **Sherpa** encourages you to extend the functionality and complexity as much as you see fit. Here are some additional ideas:

- **Authentication and Authorization:**

  - You can implement authentication and authorization mechanisms using the approach and libraries you prefer.

- **Libraries and third-party tools:**

  - You can use as many libraries as you want, in order to not reinvent the wheel or even to implement features faster or better (e.g. AI).

- **CRUD capabilities:**

  - You can implement full CRUD-compliant and documented endpoints on the REST API and use them in the React app to implement features like:
    - Phone edition
    - Phone deletion
    - Phone creation

- **Testing:**

  - You can implement:
    - Unit / Integration / End-to-End / all of them.

- **Persistence layer:**

  - Options for data persistence include:
    - Simple `.json` / `.txt` / ... file.
    - Relational / Non-Relational DB.
    - Any other interesting approach.

- **Shipping:**

  - You can dockerize both the React app and REST API, and even orchestrate them with Docker-Compose.
  - You can deploy them somewhere (Vercel / Heroku / Kubernetes cluster / any other hosting platform).

- **Monitoring and alerts:**
  - You can implement monitoring and alerting mechanisms to keep track of the app's performance and availability using any tools you prefer.
