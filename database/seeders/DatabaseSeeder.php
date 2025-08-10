<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create demo users with different roles
        User::factory()->admin()->create([
            'name' => 'Admin User',
            'email' => 'admin@clinic.com',
        ]);

        User::factory()->doctor()->create([
            'name' => 'Dr. John Smith',
            'email' => 'doctor@clinic.com',
        ]);

        User::factory()->cashier()->create([
            'name' => 'Jane Doe',
            'email' => 'cashier@clinic.com',
        ]);

        // Create additional random users
        User::factory(10)->create();
    }
}
