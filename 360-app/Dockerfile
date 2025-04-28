# Этап сборки
FROM node:18-alpine as build

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем файлы окружения
COPY environments/ ./environments/

# Копируем исходный код
COPY . .

# Собираем приложение
RUN npm run build --prod

# Этап запуска
FROM nginx:alpine

# Копируем собранное приложение
COPY --from=build /app/dist/360-web /usr/share/nginx/html

# Копируем конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"] 