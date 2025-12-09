# GSB Doctors Module

An Angular application designed to manage and display a list of doctors. This project demonstrates modern Angular practices, including the use of Signals for reactive state management and standalone components.

## Features

- **Doctor Listing**: Displays a comprehensive grid of doctors with their profiles.
- **Data Simulation**: Utilizes a local JSON file (`src/assets/doctors.json`) to simulate API data fetching.
- **Reactive State**: Implements Angular Signals for efficient and readable state management.
- **Responsive Design**: Ensuring a seamless experience across desktop and mobile devices.
- **Architecture**:
  - **Standalone Components**: Modular and lightweight component structure.
  - **Services**: `DoctorsService` for data retrieval and transformation.
  - **Typed Interfaces**: Strong typing with `Doctor` interfaces for reliability.

## Tech Stack

- **Framework**: Angular (v19+)
- **Language**: TypeScript
- **Styling**: SCSS
- **State Management**: Angular Signals & RxJS
- **Routing**: Angular Router

## Getting Started

### Prerequisites

- **Node.js**: Recommended (Latest LTS)
- **Angular CLI**: Ensure you have the Angular CLI installed globally:
  ```bash
  npm install -g @angular/cli
  ```

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Angular-Module_Medecins
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the development server**:
   ```bash
   ng serve
   ```

2. **Access the application**:
   Open your browser and navigate to `http://localhost:4200/`. The application will automatically redirect to the `/medecins` route.

## Project Structure

```
src/
├── app/
│   ├── components/      # Reusable UI components (e.g., DoctorCard)
│   ├── pages/           # Page/Route components (e.g., DoctorsPage)
│   ├── services/        # Business logic and data fetching (e.g., DoctorsService)
│   ├── types/           # TypeScript interfaces and types
│   ├── app.routes.ts    # Application routing configuration
│   └── app.config.ts    # Application configuration
├── assets/
│   └── doctors.json     # Mock data for doctors
└── styles.scss          # Global styles
```

## key Components

- **DoctorsPage** (`src/app/pages/doctors-page`): The main view that orchestrates the fetching and display of doctor data using Signals.
- **DoctorCard** (`src/app/components/doctor-card`): A presentation component responsible for rendering individual doctor details.
- **DoctorsService** (`src/app/services/doctors.service.ts`): Handles the retrieval of doctor data from the local JSON asset.
