# Используем официальный PHP-образ
FROM php:8.3-fpm
RUN chmod 1777 /tmp
# Устанавливаем необходимые зависимости
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
# Копируем файлы приложения
WORKDIR /var/www/html
COPY . .

# Настраиваем права
# RUN chown -R www-data:www-data /var/www/html

# Expose порта не требуется для PHP-FPM
