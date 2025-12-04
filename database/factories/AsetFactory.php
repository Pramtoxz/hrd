<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Aset>
 */
class AsetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $kritikalitas = ['Rendah', 'Sedang', 'Tinggi', 'Kritis'];
        $status = ['Aktif', 'Maintenance', 'Rusak', 'Dihapus'];
        $jenisAset = ['Laptop', 'Desktop', 'Monitor', 'Printer', 'Server', 'Router', 'Switch', 'Meja', 'Kursi', 'AC', 'Proyektor'];
        $lokasi = ['Ruang IT', 'Ruang HRD', 'Ruang Finance', 'Ruang Marketing', 'Gudang', 'Lobby', 'Meeting Room'];
        
        $jenis = fake()->randomElement($jenisAset);
        $brand = fake()->randomElement(['Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Canon', 'Epson']);
        
        return [
            'kode_aset' => 'AST-' . fake()->unique()->numberBetween(1000, 9999),
            'nama_aset' => $jenis . ' ' . $brand,
            'spesifikasi' => fake()->sentence(10),
            'pemilik_aset' => fake()->name(),
            'kritikalitas' => fake()->randomElement($kritikalitas),
            'lokasi' => fake()->randomElement($lokasi),
            'label' => 'Label-' . fake()->numberBetween(100, 999),
            'tanggal_perolehan' => fake()->dateTimeBetween('-5 years', 'now'),
            'usia_aset' => fake()->numberBetween(0, 10),
            'status' => fake()->randomElement($status),
            'metode_pemusnahan' => fake()->randomElement(['Dilelang', 'Dibuang', 'Disumbangkan', null]),
            'keterangan' => fake()->optional()->sentence(),
            'foto_aset' => null,
        ];
    }
}
