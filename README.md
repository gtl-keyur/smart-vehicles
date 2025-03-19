Getting Started
1️⃣ Clone the Repository

git clone https://github.com/your-repo/iot-microservices.git
cd iot-microservices

2️⃣ Install Dependencies
Backend (NestJS)

cd backend
npm install

Web (React.js)

cd ../web
npm install

Mobile (Flutter)

cd ../mobile
flutter pub get

API Gateway
cd api_gateway
npm install


🐳 Running with Docker

Ensure you have Docker & Docker Compose installed.

docker-compose up --build

This will spin up: ✅ PostgreSQL
✅ MongoDB
✅ Redis
✅ MQTT Broker
✅ Backend API
✅ Web Frontend
🛠 Running Services Manually
Backend

cd backend
npm run start

Web Frontend

cd web
npm run start

Mobile App

cd mobile
flutter run

API Gateway
cd api_gateway
npm install

☸️ Deploying with Kubernetes

kubectl apply -f k8s/

🔗 API Endpoints

    Backend: http://localhost:3000/api/iot
    Web: http://localhost:8080
    Mobile: Connects to http://localhost:3000
    API_Gateway: http://localhost:4000

📜 Document - Architecture

document/SmartVehicleArchtecture.docx


