# Branch Updates

<details>
<summary>📅 December 21, 2024</summary>

## Managing Routes in the `/routes` Folder

In our project structure, we have a dedicated `/routes` folder that organizes all the routes used within the application. This modular approach keeps the routing logic clean, scalable, and easy to maintain.

### Folder Structure

The `/routes` folder contains individual route files for different parts of the application. 

#### Purpose of Each File

1. **`authRoutes.js`:**  
   Contains all the routes related to authentication, such as login, register, password reset, etc.

2. **`index.js`:**  
   Acts as a single entry point to export all route modules. This allows us to import routes easily elsewhere in the project without referencing individual files.

---

### The `index.js` File

The `index.js` file in the `/routes` folder is used to export all route modules together. Here's how it looks:

```javascript
module.exports = {
    authRoutes: require('./authRoutes'),
};
