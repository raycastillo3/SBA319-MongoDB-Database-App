## ROUTES: 
http://localhost:5050/users/
http://localhost:5050/comments/
http://localhost:5050/posts/


### Requirements:
Use at least three different data collections within the database (such as users, posts, or comments).

Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.

Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.

Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.

Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.

Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.

Include sensible MongoDB data validation rules for at least one data collection.

Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.

#### Side note: 
This backend is pulling data from an real application I am working