cd front
npm run build && docker build -t shimamon-intern-front .

cd ../api
docker build -t shimamon-intern-api .