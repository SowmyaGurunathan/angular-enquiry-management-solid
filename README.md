# Angular Enquiry Management App (SOLID Architecture)

This project is a **sample Angular 20 application** created to demonstrate **SOLID design principles** using a **clean, scalable, and feature-based architecture**.

The main focus of this project is **architecture and design quality**, not UI styling.

---

##  Tech Stack

- Angular 20 (Standalone Components)
- TypeScript
- Angular Router
- Dependency Injection
- Git & GitHub

---

## Project Structure

src/app/
├── core/ # App-wide abstractions & providers
│ ├── notification/
│ │ ├── notification.ts
│ │ ├── notification.token.ts
│ │ ├── email-notification.service.ts
│ │ └── sms-notification.service.ts
│ └── core.providers.ts
│
├── shared/ # Reusable shared utilities (future scope)
│
├── features/
│ └── enquiry/
│ ├── pages/ # Route-level UI components
│ ├── services/ # API / backend interaction
│ ├── facades/ # Business workflows
│ └── interfaces/ # Data contracts
│
├── app.routes.ts # Application routes
├── app.ts # Root component
└── main.ts # Application bootstrap


---

##  SOLID Principles Implemented

###  S — Single Responsibility Principle (SRP)

Each layer has **one responsibility**:

- **UI Components (`pages/`)**
  - Display UI and handle user interactions
- **Facades (`facades/`)**
  - Coordinate business workflows
- **Services (`services/`)**
  - Handle backend / API communication
- **Interfaces (`interfaces/`)**
  - Define data models

**Flow:**
Component → Facade → Service

---

###  O — Open / Closed Principle (OCP)

The application is designed to be **open for extension** and **closed for modification**.

The notification system supports multiple implementations without changing existing logic.

Examples:
- Email Notification
- SMS Notification

New notification types can be added **without modifying components or facades**.

---

###  D — Dependency Inversion Principle (DIP)

High-level modules (facades) depend on **abstractions**, not concrete implementations.

Angular `InjectionToken` is used to resolve dependencies at runtime.

Example:
```ts
@Inject(NOTIFICATION_TOKEN) private notification: AppNotification

This enables:

Loose coupling

Easy implementation swapping

Better maintainability

Notification Flow (OCP + DIP)

SubmitEnquiryComponent
        ↓
    EnquiryFacade
        ↓
NOTIFICATION_TOKEN
        ↓
EmailNotificationService / SmsNotificationService

SubmitEnquiryComponent
        ↓
    EnquiryFacade
        ↓
NOTIFICATION_TOKEN
        ↓
EmailNotificationService / SmsNotificationService

Purpose of This Project

This project is intended as a learning and portfolio project to:

Demonstrate SOLID principles in Angular

Showcase clean architectural patterns

Apply real-world Angular best practices

Serve as a reference for scalable Angular applications
Author

Sowmya Gurunathan
Angular Developer | SOLID Architecture Enthusiast

 Future Enhancements

Interface Segregation Principle (ISP)

Liskov Substitution Principle (LSP)

Unit testing with mocks

UI enhancements

Backend API integration


---

##  What to do now

1. Open `README.md`
2. Replace all existing content with the above
3. Save the file
4. Run:

```bash
git add README.md
git commit -m "docs: add SOLID architecture README"
git push
