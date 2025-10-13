<?php
// Список файлов
$files = [
    'img/rekvizit.png',
    'img/openvk-avatar.png',
    'img/noelle.jpg',
    'img/last.fm-avatar.gif',
    'img/infinite_by_prekoler.png',
    'img/among-us-avatar.png',
    'img/CY-ZPKxcFU0.jpg',
    'img/GB4RDgfagAAOjt0.jpg'
];

// Выбираем случайный файл
$randomFile = $files[array_rand($files)];

// Проверяем существование файла
if (!file_exists($randomFile)) {
    http_response_code(404);
    die('File not found');
}

// Определяем MIME-тип на основе расширения файла
$extension = strtolower(pathinfo($randomFile, PATHINFO_EXTENSION));
$mimeTypes = [
    'png' => 'image/png',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'gif' => 'image/gif',
    'webp' => 'image/webp'
];

$mimeType = $mimeTypes[$extension] ?? 'application/octet-stream';

// Устанавливаем заголовки
header('Content-Type: ' . $mimeType);
header('Content-Length: ' . filesize($randomFile));
header('Cache-Control: no-cache, must-revalidate');
header('Content-Disposition: inline; filename="' . basename($randomFile) . '"');

// Отправляем файл
readfile($randomFile);
?>