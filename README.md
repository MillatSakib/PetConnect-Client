# PetConnect

## About PetConnect

PetConnect is an online pet adoption platform designed to connect loving families with pets in need of a home. Our mission is to simplify the adoption process, making it easier for people to find and adopt their perfect furry friend while also providing a centralized platform for shelters and rescue organizations to list pets available for adoption.

**Live Link: [https://petconnect0.netlify.app/](https://petconnect0.netlify.app/)**

**Server GitHub Link: [https://github.com/MillatSakib/PetConnect-Server](https://github.com/MillatSakib/PetConnect-Server)**

## How Does PetConnect Work?

### 1. User Registration and Login:

- Users can register on the platform and create an account.
- Both prospective adopters and shelters can log in to access their respective dashboards.

### 2. Listing Pets:

- Shelters and rescue organizations can list pets available for adoption, providing details such as pet name, age, breed, location, and a photo.

### 3. Browsing and Searching:

- Prospective adopters can browse listed pets using various filters (e.g., age, breed, location) to find the perfect match.

### 4. Adoption Requests:

- Adopters can submit adoption requests for pets they are interested in.
- Shelters review these requests, conduct necessary checks, and approve or deny the adoption.

### 5. Adoption Process:

- Once approved, adopters are guided through the adoption process, including any necessary interviews or home visits.

### 6. Donation Campaigns:

- Users can also create and support donation campaigns for pets in need of medical care or other assistance.

## Technology Stack

**Frontend:** React, React Router, Tailwind CSS, Shadcn/UI, Formik, Yup, Date-fns, Axios, React Query.

**Build Tools**: Vite, ESLint, PostCSS, LocalForage

## Features

**User & Admin Authentication & Authorization:** Secure login and registration system for users and administrators and handled unauthorize access.

**Pet Profiles:** Detailed profiles for each pet, including photos, age, breed, and location.

**Donation Campaigns:** Create and manage donation campaigns to support pets in need.

**Payment Integration:** Secure payment processing with SSL Commerz for donations.

**Pause Donation Campain:** If Donaiton Campainer no need more donaion then he or she can pausethe Donation Campain.

**Search and Filter:** Advanced search and filtering options to find pets based on various criteria.

**Infinite Scrolling:** Smooth browsing experience with infinite scrolling to load more pets dynamically.

**Admin Dashboard:** Comprehensive dashboard for admins to manage users, pets, and adoption requests.

**Server Logger:** Monitor and log server activities to ensure smooth operation and quick troubleshooting.

### Admin Control Panel

- **User Management:** Make admin or banned user profile.
- **Pet Management:** Add, update, or remove pet profiles from the system.
- **Adoption Request Management:** Approve or reject adoption requests and oversee the adoption process.
- **Donation Campaign Management:** Create, edit, or delete donation campaigns.
- **View and Analyze Data:** Access detailed analytics and reports on user activity, donations, and adoptions.
- **System Monitoring:** Use the server logger to monitor system performance and troubleshoot issues.
- **Content Moderation:** Review and moderate user added pet to maintain a safe community.

## Setup

To setup the project you have to execute the command below:

1. At first you have to install all package. For this you Have to execute the command:

```sh
npm i
```

2. After install all package you need to run your project. But you can't run your project directly. Because I use environment variabel for security purpose. You have to add a `.env` file in your root directory and the a sample code of `.env` file are given below:

```.env
VITE_apiKey=*******************
VITE_authDomain=***************
VITE_projectId=***************
VITE_storageBucket=***************
VITE_messagingSenderId=***************
VITE_appId=***************
VITE_IMAGE_HOSTING_KEY=***************
```

The first six api key you will get form firebase & and the last api key you will get from ImgBB.

3. After setting environment variable you can run or build your project.

For run your preject you have to execute the commad below:

```sh
npm run dev
```

4. For build your project you can execute the command below:

```sh
npm run build
```

#### Note: Must have installed Git and Nodejs in your system to do it!
