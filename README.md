# ft_transcendence

## Overview  
**Transcendence** is an interactive and engaging web application built to bring the classic **Pong** game to the web.

This project allows users to play Pong against others or challenge the computer in real-time.

## Technologies Used  

- **Backend**:  
  Developed using **Django**, a powerful Python web framework that simplifies development while offering flexibility, security, and scalability.  

- **Database**:  
  Utilizes **PostgreSQL**, an advanced, open-source relational database system designed for high-performance, reliability, and complex data queries.  

- **Containerization**:  
  Employs **Docker** to ensure consistent, portable development environments and seamless deployment processes.

## Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/t-pereira06/42_transcendence.git
cd 42_transcendence
```

### 2. Environment Configuration
Create a `.env` file in the project root, using the `create_env_file.sh` script, like the example below:
```
DJANGO_PORT=8000
DJANGO_SUPERUSER_USERNAME=root
DJANGO_SUPERUSER_EMAIL=root@root.root
DJANGO_SUPERUSER_PASSWORD=Password!123
CLIENT_ID=123
CLIENT_SECRET=123
POSTGRES_DB=postgres
POSTGRES_PASSWORD=Password!123
```

### 3. Build and Run with Docker
To compile the and run the program:
```bash
make
```
After that, open a browser of your choice and go to:
```bash
https://localhost:8000
```

## Project screenshots

![Screenshot from 2025-01-26 16-33-38](https://github.com/user-attachments/assets/d8f327e9-8134-4d13-9c47-df1bd28d2776)

![Screenshot from 2025-01-26 16-30-33](https://github.com/user-attachments/assets/f15b77c8-6713-4a26-9a73-3231ad58659b)

## Grade:
![Screenshot from 2023-10-02 15-22-43](https://github.com/andremvsramos/42-Cub3d/assets/115324164/11e7b98c-71af-477e-bc50-5d9c422f5775)
