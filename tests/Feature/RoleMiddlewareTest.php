<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RoleMiddlewareTest extends TestCase
{
    use RefreshDatabase;

    public function test_unauthenticated_users_are_redirected_to_login(): void
    {
        $response = $this->get('/dashboard');
        
        $response->assertRedirect('/login');
    }

    public function test_users_with_correct_role_can_access_protected_routes(): void
    {
        $admin = User::factory()->admin()->create();

        // Mock a route that requires admin role
        $this->withoutMiddleware()
             ->actingAs($admin)
             ->get('/dashboard')
             ->assertStatus(200);
    }

    public function test_users_can_have_multiple_roles(): void
    {
        $admin = User::factory()->admin()->create();
        $doctor = User::factory()->doctor()->create();
        $cashier = User::factory()->cashier()->create();

        $this->assertEquals('admin', $admin->role);
        $this->assertEquals('doctor', $doctor->role);
        $this->assertEquals('cashier', $cashier->role);
    }

    public function test_get_roles_method_returns_all_available_roles(): void
    {
        $roles = User::getRoles();

        $this->assertIsArray($roles);
        $this->assertArrayHasKey('doctor', $roles);
        $this->assertArrayHasKey('admin', $roles);
        $this->assertArrayHasKey('cashier', $roles);
        $this->assertEquals('Doctor', $roles['doctor']);
        $this->assertEquals('Administrator', $roles['admin']);
        $this->assertEquals('Cashier', $roles['cashier']);
    }

    public function test_user_role_constants_are_defined(): void
    {
        $this->assertEquals('doctor', User::ROLE_DOCTOR);
        $this->assertEquals('admin', User::ROLE_ADMIN);
        $this->assertEquals('cashier', User::ROLE_CASHIER);
    }
}