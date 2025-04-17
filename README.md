                                                              Product App
Overview :
- Product App is a simple Angular application that displays a list of products and allows users to view detailed information about each product. The app includes basic navigation between pages and is built following Angular best practices, including component-based architecture, services, and routing.
  
Features :
- View a list of products with details such as name, category, price, description, and rating.
- Navigate to a detailed view of a product by clicking "View Details".
- Return to the product list using the "Back to Products" button.

Prerequisites :
-To run the application locally, ensure you have the following installed:

1) Node.js (v14.x or later) and npm (v6.x or later). Download from nodejs.org.
2) Angular CLI (v17.x or later). Install globally using:npm install -g @angular/cli


3) Git (to clone the repository). Download from git-scm.com.

Running the Application Locally :
Follow these steps to run the Product App on your local machine:

- Clone the RepositoryClone the project from GitHub to your local machine:
- git clone https://github.com/VaishaliKondoju/product-app
- cd product-app


Install DependenciesInstall the required npm packages:
- npm install


Run the ApplicationStart the Angular development server:
- ng serve

This will compile the application and start a local server.

Access the ApplicationOpen your browser and navigate to:
http://localhost:4200/

The app will automatically redirect to /products, where you can view the product list. Click "View Details" on any product to see more information, and use the "Back to Products" button to return to the list.


Notes :

- The product data is currently hardcoded in src/app/services/product.service.ts. In a real-world scenario, this could be replaced with an API call.
- The application is built using Angular 17 with standalone components and modern routing practices.
- For production deployment, you can build the app using:ng build --prod



Troubleshooting

If ng serve fails, ensure all dependencies are installed (npm install) and Angular CLI is up to date.
Check the console for errors and verify Node.js and npm versions match the prerequisites.
If the app doesn’t load at http://localhost:4200/, ensure no other process is using port 4200, or run the server on a different port:ng serve --port 4201



For any issues or questions, feel free to open an issue on the GitHub repository.
