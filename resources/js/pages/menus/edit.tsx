import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

interface ParentMenu {
    id: number;
    nama_menu: string;
}

interface UserLevel {
    id: number;
    nama_level: string;
}

interface Menu {
    id: number;
    nama_menu: string;
    ikon: string;
    route: string;
    url: string;
    parent_id: number | null;
    urutan: number;
    status_aktif: boolean;
    user_levels: UserLevel[];
}

interface Props {
    menu: Menu;
    parentMenus: ParentMenu[];
    userLevels: UserLevel[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Menu', href: '/menus' },
    { title: 'Edit Menu', href: '#' },
];

export default function MenusEdit({ menu, parentMenus, userLevels }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        nama_menu: menu.nama_menu,
        ikon: menu.ikon || '',
        route: menu.route || '',
        url: menu.url || '',
        parent_id: menu.parent_id?.toString() || '',
        urutan: menu.urutan,
        status_aktif: menu.status_aktif,
        user_levels: menu.user_levels.map(l => l.id),
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: 'Konfirmasi Update',
            text: 'Apakah Anda yakin ingin memperbarui menu ini?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3b82f6',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'Ya, Update!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            put(`/menus/${menu.id}`, {
                onSuccess: () => {
                    toast.success('Menu berhasil diperbarui');
                },
                onError: () => {
                    toast.error('Gagal memperbarui menu');
                },
            });
        }
    };

    const toggleUserLevel = (levelId: number) => {
        setData('user_levels', 
            data.user_levels.includes(levelId)
                ? data.user_levels.filter(id => id !== levelId)
                : [...data.user_levels, levelId]
        );
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Menu" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Edit Menu</h1>

                <div className="max-w-2xl rounded-lg border p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="nama_menu">Nama Menu</Label>
                            <Input
                                id="nama_menu"
                                value={data.nama_menu}
                                onChange={(e) => setData('nama_menu', e.target.value)}
                                required
                            />
                            {errors.nama_menu && (
                                <p className="text-sm text-red-500">{errors.nama_menu}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="ikon">Icon (Lucide React)</Label>
                            <Input
                                id="ikon"
                                value={data.ikon}
                                onChange={(e) => setData('ikon', e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">
                                Lihat icon di: https://lucide.dev/icons/
                            </p>
                            {errors.ikon && (
                                <p className="text-sm text-red-500">{errors.ikon}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="url">URL</Label>
                            <Input
                                id="url"
                                value={data.url}
                                onChange={(e) => setData('url', e.target.value)}
                            />
                            {errors.url && (
                                <p className="text-sm text-red-500">{errors.url}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="route">Route Name (Optional)</Label>
                            <Input
                                id="route"
                                value={data.route}
                                onChange={(e) => setData('route', e.target.value)}
                            />
                            {errors.route && (
                                <p className="text-sm text-red-500">{errors.route}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="parent_id">Parent Menu (Optional)</Label>
                            <Select
                                value={data.parent_id || 'none'}
                                onValueChange={(value) => setData('parent_id', value === 'none' ? '' : value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih Parent Menu" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">Tidak Ada (Menu Utama)</SelectItem>
                                    {parentMenus.map((parentMenu) => (
                                        <SelectItem key={parentMenu.id} value={parentMenu.id.toString()}>
                                            {parentMenu.nama_menu}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.parent_id && (
                                <p className="text-sm text-red-500">{errors.parent_id}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="urutan">Urutan</Label>
                            <Input
                                id="urutan"
                                type="number"
                                value={data.urutan}
                                onChange={(e) => setData('urutan', parseInt(e.target.value))}
                                min="1"
                                required
                            />
                            {errors.urutan && (
                                <p className="text-sm text-red-500">{errors.urutan}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label>Akses Level User</Label>
                            <div className="space-y-2 rounded-lg border p-4">
                                {userLevels.map((level) => (
                                    <div key={level.id} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`level-${level.id}`}
                                            checked={data.user_levels.includes(level.id)}
                                            onCheckedChange={() => toggleUserLevel(level.id)}
                                        />
                                        <Label htmlFor={`level-${level.id}`} className="cursor-pointer">
                                            {level.nama_level}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                            {errors.user_levels && (
                                <p className="text-sm text-red-500">{errors.user_levels}</p>
                            )}
                        </div>

                        <div className="flex items-center space-x-2">
                            <Switch
                                id="status_aktif"
                                checked={data.status_aktif}
                                onCheckedChange={(checked) => setData('status_aktif', checked)}
                            />
                            <Label htmlFor="status_aktif">Status Aktif</Label>
                        </div>

                        <div className="flex gap-2">
                            <Button type="submit" disabled={processing}>
                                Update
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => window.history.back()}
                            >
                                Batal
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
