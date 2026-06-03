<?php

namespace App\Exports;

use App\Models\PengajuanBan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class PengajuanBanExport implements FromCollection, WithHeadings, WithMapping, WithStyles, ShouldAutoSize
{
    protected array $filters;

    public function __construct(array $filters = [])
    {
        $this->filters = $filters;
    }

    public function collection()
    {
        return PengajuanBan::with('user')
            ->when(!empty($this->filters['cabang']), fn($q) => $q->where('cabang', $this->filters['cabang']))
            ->when(!empty($this->filters['status']), fn($q) => $q->where('status', $this->filters['status']))
            ->when(!empty($this->filters['bulan']) && !empty($this->filters['tahun']), fn($q) =>
                $q->whereMonth('tanggal_pengajuan', $this->filters['bulan'])
                  ->whereYear('tanggal_pengajuan', $this->filters['tahun'])
            )
            ->when(!empty($this->filters['tahun']) && empty($this->filters['bulan']), fn($q) =>
                $q->whereYear('tanggal_pengajuan', $this->filters['tahun'])
            )
            ->latest()
            ->get();
    }

    public function headings(): array
    {
        return [
            'No',
            'Tanggal Pengajuan',
            'Nama Driver',
            'Cabang',
            'No. Polisi',
            'Jenis/Tipe Kendaraan',
            'KM Kendaraan',
            'Jenis Pengajuan',
            'Tgl. Penggantian Terakhir',
            'Posisi Ban Sebelumnya',
            'Posisi Ban Diajukan',
            'Jumlah Ban',
            'Ukuran Ban',
            'Alasan Penggantian',
            'Status',
            'Alasan Penolakan',
            'Diajukan Oleh',
        ];
    }

    public function map($row): array
    {
        static $no = 0;
        $no++;

        $statusMap = [
            'pending'   => 'Menunggu Review',
            'setuju'    => 'Disetujui',
            'ditolak'   => 'Ditolak',
            'diperiksa' => 'Sedang Diperiksa',
            'finish'    => 'Selesai',
        ];

        return [
            $no,
            $row->tanggal_pengajuan?->format('d/m/Y'),
            $row->nama_driver,
            $row->cabang,
            $row->no_polisi,
            $row->jenis_kendaraan,
            number_format($row->km_kendaraan, 0, ',', '.') . ' KM',
            $row->jenis_pengajuan === 'ban' ? 'Penggantian Ban' : 'Fulkanisir',
            $row->tgl_penggantian_terakhir?->format('d/m/Y') ?? '-',
            implode(', ', $row->posisi_ban_sebelumnya ?? []),
            implode(', ', $row->posisi_ban_diajukan ?? []),
            $row->jumlah_ban,
            $row->ukuran_ban,
            $row->alasan_penggantian ?? '-',
            $statusMap[$row->status] ?? $row->status,
            $row->alasan_penolakan ?? '-',
            $row->user?->name ?? '-',
        ];
    }

    public function styles(Worksheet $sheet): array
    {
        return [
            1 => [
                'font' => ['bold' => true],
                'fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'startColor' => ['rgb' => '1E40AF'],
                ],
                'font' => ['bold' => true, 'color' => ['rgb' => 'FFFFFF']],
            ],
        ];
    }
}
