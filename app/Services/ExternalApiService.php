<?php

namespace App\Services;

use App\Models\ExternalApiConfig;

class ExternalApiService
{
    private const FK_DEALER_MAP = [
        '06750' => 'MA IB',
        '06732' => 'MA Veteran',
        '08199' => 'MA SPH',
        '00399' => 'MA Padang Panjang',
        '09164' => 'MA PYK',
    ];

    public function authenticate(string $email, string $password): array
    {
        $config  = ExternalApiConfig::firstOrFail();
        $baseUrl = rtrim($config->url, '/');

        $ch = curl_init($baseUrl . '/api/external/auth');

        curl_setopt_array($ch, [
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => json_encode(['email' => $email, 'password' => $password]),
            CURLOPT_HTTPHEADER     => [
                'X-Secret-Key: ' . $config->secret,
                'Content-Type: application/json',
                'Accept: application/json',
            ],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT        => 15,
            CURLOPT_CONNECTTIMEOUT => 5,
            CURLOPT_SSL_VERIFYPEER => true,
        ]);

        $body   = curl_exec($ch);
        $errno  = curl_errno($ch);
        $error  = curl_error($ch);
        $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        curl_close($ch);

        if ($errno !== 0) {
            throw new \RuntimeException('API eksternal tidak dapat dihubungi: ' . $error);
        }

        $decoded = json_decode($body, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \RuntimeException('Respons API tidak valid.');
        }

        if ($status >= 400 || !($decoded['success'] ?? false)) {
            throw new \RuntimeException($decoded['message'] ?? 'Autentikasi gagal.');
        }

        return $decoded['data'];
    }

    public function resolveCabang(string $fkDealer): ?string
    {
        return self::FK_DEALER_MAP[$fkDealer] ?? null;
    }
}
