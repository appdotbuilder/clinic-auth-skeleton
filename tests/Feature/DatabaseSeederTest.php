<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DatabaseSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_database_seeder_creates_users_with_different_roles(): void
    {
        $this->artisan('db:seed');

        // Check that users with all roles were created
        $this->assertDatabaseHas('users', ['role' => 'admin', 'email' => 'admin@clinic.com']);
        $this->assertDatabaseHas('users', ['role' => 'doctor', 'email' => 'doctor@clinic.com']);
        $this->assertDatabaseHas('users', ['role' => 'cashier', 'email' => 'cashier@clinic.com']);

        // Check that additional users were created
        $totalUsers = User::count();
        $this->assertGreaterThanOrEqual(13, $totalUsers); // 3 specific + 10 random
    }

    public function test_seeded_users_have_correct_roles_and_names(): void
    {
        $this->artisan('db:seed');

        $admin = User::where('email', 'admin@clinic.com')->first();
        $doctor = User::where('email', 'doctor@clinic.com')->first();
        $cashier = User::where('email', 'cashier@clinic.com')->first();

        $this->assertEquals('admin', $admin->role);
        $this->assertEquals('Admin User', $admin->name);
        $this->assertTrue($admin->isAdmin());

        $this->assertEquals('doctor', $doctor->role);
        $this->assertEquals('Dr. John Smith', $doctor->name);
        $this->assertTrue($doctor->isDoctor());

        $this->assertEquals('cashier', $cashier->role);
        $this->assertEquals('Jane Doe', $cashier->name);
        $this->assertTrue($cashier->isCashier());
    }

    public function test_all_seeded_users_can_login(): void
    {
        $this->artisan('db:seed');

        $testUsers = [
            'admin@clinic.com',
            'doctor@clinic.com',
            'cashier@clinic.com'
        ];

        foreach ($testUsers as $email) {
            $response = $this->post('/login', [
                'email' => $email,
                'password' => 'password',
            ]);

            $response->assertRedirect(route('dashboard'));
            $this->assertAuthenticated();
            
            // Logout for next test
            $this->post('/logout');
        }
    }
}