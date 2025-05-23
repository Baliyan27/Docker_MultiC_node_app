# Docker Hands-On Guide 🐳

## ✅ Hands-On Tasks

### 🌐 Docker Networking
- Create a bridge network:
  ```bash
  docker network create mynetwork
  ```
- Connect multiple containers:
  ```bash
  docker network connect mynetwork container1
  ```

### 💾 Docker Volumes (Persistent Storage)
- Create a volume:
  ```bash
  docker volume create myvolume
  ```
- Mount volume to a container:
  ```bash
  docker run -v myvolume:/data myapp
  ```

### 🛠 Docker Compose (Multi-Container Apps)
- Write a `docker-compose.yml` for a Node.js app
- Start services:
  ```bash
  docker-compose up -d
  ```
- Stop services:
  ```bash
  docker-compose down
  ```

### 📜 Managing Logs & Exec Commands
- View logs:
  ```bash
  docker logs <container_id>
  ```
- Execute commands in a running container:
  ```bash
  docker exec -it <container_id> bash
  ```

## 🧩 Multi-Service App with Docker Compose
- 🌐 Node.js + MongoDB + Nginx setup
- ⚙️ Microservices architecture with API Gateway, Auth Service, and DB
- 📦 Managed using `docker-compose.yml`

---


