# Используем официальный PHP-образ
FROM php:8.3-fpm

# Устанавливаем необходимые зависимости
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql pgsql \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Настроим директорию для сессий
RUN mkdir -p /var/lib/php/sessions && chmod 777 /var/lib/php/sessions

# Настроим права для временной директории
RUN chmod 1777 /tmp

# Копируем файлы приложения (если нужно)
# WORKDIR /var/www/html
# COPY . . 

# Настроим права (если нужно)
# RUN chown -R www-data:www-data /var/www/html

# Expose порта не требуется для PHP-FPM
