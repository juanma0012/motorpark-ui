
  

# Motor Park UI

  

  

This APP provides different features to manage a motor park, includes CRUD and filter the elements depends on conditions.

  

# Interactions

  

### Get Vehicles

- Returns a list of vehicles 
- Each item has: make, model, type and year.


### Add Vehicle

When you click in the Add button, you're able to enter data for a vehicle using a Card where there are Selects with data for Makes, Types, Models and an input for the Year.

  

### Edit Vehicle

When you click on an item of the list, there is a collapse object where you're able to change the data that the vehicle contains.

  

### Remove Vehicle

When you click on the Trash icon in the element, a modal window will be opened to validate that you can delete the vehicle selected.

  
### Get Makes

On the left drawer, there is a multi select option to define which makes you want to filter the vehicles.

### Get Types

On the left drawer, there is a checkbox list to define which types you want to filter the vehicles.
  

### Get Models


On the left drawer, there is a checkbox list to define which models you want to filter the vehicles. Note: this option depends which data you have marked in make and type options. 
  
  
# How to use it

## Install


- Install the dependencies

> npm i

- Create the file **.env** in the main directory of the app. This file contains the environment variables where the app will get the data to connect the API and other settings:

  

```
REACT_APP_API_ENDPOINT = "http://localhost:3333"
```

  

>  **Note:** The data that you put there has to match with either the development or production environments that you have.
  
## Development

Create the file **.env.development** and enter the variables that you need to run locally
```
REACT_APP_API_ENDPOINT = "http://localhost:3333"
```
In the command line, go to the repository folder and execute:

> npm run start

The app will be available in http://localhost:3000/ (depends on you configuration)

  

## Production

Create the file **.env.production** and enter the variables that you need to run in a real production environment
```
REACT_APP_API_ENDPOINT = "http://ec2-3-83-93-116.compute-1.amazonaws.com:3333"
```
  To generate the bundle that it's going to be in the production bucket, execute:
  

> npm run build

  Deploy the build folder to the S3 bucket or the server where the app is going to be released  

  

# General Information

  

  This project is running here [http://motorpark.s3-website-us-east-1.amazonaws.com/](http://motorpark.s3-website-us-east-1.amazonaws.com/).

## Screenshots
You can find some ScreenShots of the app in the folder 'screenshots'. It includes SS for desktop and mobile designs.

Screenshot 1
![ScreenShot 1](https://raw.githubusercontent.com/juanma0012/motorpark-ui/master/screenshots/SS1.png)

Screenshot 2
![ScreenShot 2](https://raw.githubusercontent.com/juanma0012/motorpark-ui/master/screenshots/SS2.png)

Screenshot 3
![ScreenShot 3](https://raw.githubusercontent.com/juanma0012/motorpark-ui/master/screenshots/SS3.png)

Screenshot 4
![ScreenShot 4](https://raw.githubusercontent.com/juanma0012/motorpark-ui/master/screenshots/SS4.png)

Screenshot 5
![ScreenShot 5](https://raw.githubusercontent.com/juanma0012/motorpark-ui/master/screenshots/SS5.png)

Screenshot 6
![ScreenShot 6](https://raw.githubusercontent.com/juanma0012/motorpark-ui/master/screenshots/SS6.png)

## Tree folder
These is the general tree of the repository

````

 .
├── LICENSE
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── screenshots
│   ├── SS1.png
│   ├── SS2.png
│   ├── SS3.png
│   ├── SS4.png
│   ├── SS5.png
│   └── SS6.png
└── src
    ├── App.js
    ├── App.scss
    ├── App.test.js
    ├── components
    │   ├── AppContainer.js
    │   ├── Filters
    │   │   ├── FilterMakes.js
    │   │   ├── FilterModels.js
    │   │   ├── FilterTypes.js
    │   │   ├── Filters.js
    │   │   ├── actionTypes.js
    │   │   ├── actions.js
    │   │   ├── filters.scss
    │   │   └── reducer.js
    │   └── Vehicles
    │       ├── DeleteDialog.js
    │       ├── Vehicle.js
    │       ├── VehicleCard.js
    │       ├── Vehicles.js
    │       ├── actionTypes.js
    │       ├── actions.js
    │       ├── reducer.js
    │       └── vehicles.scss
    ├── config
    │   └── variables.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reducer.js
    ├── serviceWorker.js
    └── services
        ├── motorparkService.js
        └── utility.js

````

  

I hope you enjoy working with this APP.
