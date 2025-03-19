# Smart Vehicles

## Getting Started

### Clone the Repository
```sh
git clone https://github.com/gtl-keyur/smart-vehicles.git smart-vehicles
cd smart-vehicles
```

### Install Dependencies

#### Backend (NestJS)
```sh
cd backend
npm install
```

#### Web (React.js)
```sh
cd ../web
npm install
```

#### Mobile (Flutter)
```sh
cd ../mobile
flutter pub get
```

#### API Gateway (Node/NestJS)
```sh
cd api_gateway
npm install
```

---

## 🐳 Running with Docker

Ensure you have Docker & Docker Compose installed.

```sh
docker-compose up --build
```

This will spin up:
- ✅ PostgreSQL
- ✅ MongoDB
- ✅ Redis
- ✅ MQTT Broker
- ✅ Backend API
- ✅ Web Frontend

---

## 🛠 Running Services Manually

#### Backend
```sh
cd backend
npm run start
```

#### Web Frontend
```sh
cd web
npm run start
```

#### Mobile App
```sh
cd mobile
flutter run
```

#### API Gateway
```sh
cd api_gateway
npm install
```

---

## ☸️ Deploying with Kubernetes
```sh
kubectl apply -f k8s/
```

---

## 🔗 API Endpoints

- **Backend:** [http://localhost:3000/api/iot](http://localhost:3000/api/iot)
- **Web:** [http://localhost:8080](http://localhost:8080)
- **Mobile:** Connects to `http://localhost:3000`
- **API Gateway:** [http://localhost:4000](http://localhost:4000)

---

## 📜 Documentation

Architecture details can be found in:
```
document/SmartVehicleArchitecture.docx
```

