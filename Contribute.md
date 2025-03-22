## Manual installation
    - Install nodejs locally ()
    - clone the repo
    - Install dependencies ( npm install )
    - Start the DB locally
        - docker run -e POSTGRES_PASSWORD=youpassword -d -p 5432:5432 postgres
            OR
        - Go to neon.tech and get yourself a new DB
    - Change the .env file and update you DB credentials
    - npx prisma migrate
    - npx prisma generate
    - npm run build
    - npm run start

## Docker installation
    - Install docker
    - Create a network - `docker network create user_project`
    - Start postgres ( `docker run --network user_project --name postgres -e POSTGRES_PASSWORD=yourpassword -d -p 5432:5432 postgres` )
    - Build the image - `docker build --network=host -t user-project .`
    - Start the image - `docker run -e DATABASE_URL=postgresql://postgres:yourpassword@postgres:5432/postgres --network user_project -p 3000:3000 user-project`

## Docker Compose installation
    - Install docker, docker-compose
    - Run `docker-compose up`