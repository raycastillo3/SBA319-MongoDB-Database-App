## ROUTES: 
http://localhost:5050/users/ <b/>

http://localhost:5050/comments/ <b/>

http://localhost:5050/posts/


### Requirements:
Use at least three different data collections within the database (such as users, posts, or comments). 

* [comments](schemas/CommentSchema.mjs)
* [users](schemas/UserSchema.mjs)
* [posts](schemas/PostSchema.mjs)

[Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.](https://github.com/raycastillo3/SBA319-MongoDB-Database-App/blob/761bfaabe844471217234ea40969139673bd0b37/routes/comments.mjs#L16)

[Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.](https://github.com/raycastillo3/SBA319-MongoDB-Database-App/blob/761bfaabe844471217234ea40969139673bd0b37/routes/comments.mjs#L6)

[Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.](https://github.com/raycastillo3/SBA319-MongoDB-Database-App/blob/761bfaabe844471217234ea40969139673bd0b37/routes/comments.mjs#L37)

[Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.](https://github.com/raycastillo3/SBA319-MongoDB-Database-App/blob/761bfaabe844471217234ea40969139673bd0b37/routes/comments.mjs#L56)

[Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.](https://github.com/raycastillo3/SBA319-MongoDB-Database-App/blob/761bfaabe844471217234ea40969139673bd0b37/schemas/UserSchema.mjs#L18)

[Include sensible MongoDB data validation rules for at least one data collection.](https://github.com/raycastillo3/SBA319-MongoDB-Database-App/blob/761bfaabe844471217234ea40969139673bd0b37/schemas/CommentSchema.mjs#L6)


#### Side note: 
This backend is pulling data from an real application I am working on. Thats why I only added the POST route to the comments and not the users or posts as that would mess with my application.
