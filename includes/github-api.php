<?php
header('Content-Type: application/json');

// Configuration
// TODO: Confirm the exact GitHub username. Using 'alexmerle' as a placeholder based on domain.
$username = 'slider66';
$cacheFile = __DIR__ . '/../repo-cache.json'; // Store cache in root or appropriate folder
$cacheTime = 3600; // 1 hour

// Check if cache exists and is fresh
if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
    echo file_get_contents($cacheFile);
    exit;
}

// GitHub API URL
// Fetching 6 most recently updated repositories
$url = "https://api.github.com/users/$username/repos?sort=updated&per_page=6";

// Initialize cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERAGENT, 'AlexMerle-Portfolio-App'); // User-Agent is required by GitHub API

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Validate response
if ($httpCode === 200) {
    // Save to cache
    file_put_contents($cacheFile, $response);
    echo $response;
} else {
    // If request failed, try to serve stale cache if it exists
    if (file_exists($cacheFile)) {
        echo file_get_contents($cacheFile);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Unable to fetch repositories directly or from cache.', 'http_code' => $httpCode]);
    }
}
?>