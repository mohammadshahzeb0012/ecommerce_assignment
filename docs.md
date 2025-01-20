/**
 * API Documentation:
 * 
 * 1. **Authentication Endpoints:**
 *    - **POST /auth/register**
 *      - **Request Body:**
 *        ```json
 *        {
 *          "name": "User's name",
 *          "email": "User's email",
 *          "password": "User's password"
 *        }
 *        ```
 *      - **Response (Success):**
 *        ```json
 *        {
 *          "success": true,
 *          "message": "User created"
 *        }
 *        ```
 *      - **Response (Error):**
 *        ```json
 *        {
 *          "success": false,
 *          "message": "Error message"
 *        }
 *        ```
 *      
 *    - **POST /auth/login**
 *      - **Request Body:**
 *        ```json
 *        {
 *          "email": "User's email",
 *          "password": "User's password"
 *        }
 *        ```
 *      - **Response (Success):**
 *        ```json
 *        {
 *          "success": true,
 *          "message": "Login successful",
 *          "token": "JWT Token"
 *        }
 *        ```
 *      - **Response (Error):**
 *        ```json
 *        {
 *          "success": false,
 *          "message": "Invalid credentials"
 *        }
 *        ```
 * 
 * 2. **Product Endpoints:**
 *    - **POST /product/add**
 *      - **Request Body:**
 *        ```json
 *        {
 *          "name": "Product Name",
 *          "price": 100,
 *          "description": "Product description",
 *          "stock": 50
 *        }
 *        ```
 *      - **Response (Success):**
 *        ```json
 *        {
 *          "success": true,
 *          "message": "Product added",
 *          "data": {
 *            "name": "Product Name",
 *            "price": 100,
 *            "description": "Product description",
 *            "stock": 50,
 *            "_id": "Product ID"
 *          }
 *        }
 *        ```
 *      - **Response (Error):**
 *        ```json
 *        {
 *          "success": false,
 *          "message": "Error message"
 *        }
 *        ```
 * 
 *    - **GET /product/getall**
 *      - **Response (Success):**
 *        ```json
 *        {
 *          "success": true,
 *          "message": "Fetch successful",
 *          "data": [
 *            {
 *              "name": "Product Name",
 *              "price": 100,
 *              "description": "Product description",
 *              "stock": 50,
 *              "_id": "Product ID"
 *            },
 *            // More products...
 *          ]
 *        }
 *        ```
 * 
 * 3. **Order Endpoints:**
 *    - **POST /order/place**
 *      - **Request Body:**
 *        ```json
 *        {
 *          "products": [
 *            { "productId": "Product ID", "quantity": 2 },
 *            { "productId": "Product ID", "quantity": 1 }
 *          ],
 *          "total": 300
 *        }
 *        ```
 *      - **Response (Success):**
 *        ```json
 *        {
 *          "success": true,
 *          "message": "Order placed"
 *        }
 *        ```
 *      - **Response (Error):**
 *        ```json
 *        {
 *          "success": false,
 *          "message": "Error message"
 *        }
 *        ```
 *    
 *    - **GET /order/getall**
 *      - **Response (Success):**
 *        ```json
 *        {
 *          "success": true,
 *          "message": "Fetch successful",
 *          "data": [
 *            {
 *              "_id": "Order ID",
 *              "products": [
 *                { "productId": "Product ID", "quantity": 2 },
 *                { "productId": "Product ID", "quantity": 1 }
 *              ],
 *              "total": 300,
 *              "status": "pending"
 *            },
 *            // More orders...
 *          ]
 *        }
 *        ```
 *    
 *    - **POST /order/cancel/:orderId**
 *      - **Response (Success):**
 *        ```json
 *        {
 *          "success": true,
 *          "message": "Order canceled successfully"
 *        }
 *        ```
 *      - **Response (Error):**
 *        ```json
 *        {
 *          "success": false,
 *          "message": "Order not found or cannot be canceled"
 *        }
 *        ```
 * 
 * 4. **Socket.IO:**
 *    - When a user places an order, a real-time event is triggered to notify them about the order status.
 *    - **Event: "orderPlaced"**
 *      - Emitted when a user places an order successfully.
 *      - **Data:**
 *        ```json
 *        {
 *          "success": true,
 *          "message": "Your order has been placed"
 *        }
 *        ```
 *    - **Event: "orderCanceled"**
 *      - Emitted when a user cancels an order.
 *      - **Data:**
 *        ```json
 *        {
 *          "success": true,
 *          "message": "Your order has been canceled"
 *        }
 *        ```
 *    - **Socket.IO Connection:**
 *      - When a user connects to the server via Socket.IO, the server logs "A user connected".
 *      - When the user disconnects, it logs "User disconnected".
 *      - Example:
 *        ```js
 *        io.on('connection', (socket) => {
 *          console.log("A user connected");
 *          
 *          socket.on("disconnect", () => {
 *            console.log("User disconnected");
 *          });
 *        });
 *        ```
 */
