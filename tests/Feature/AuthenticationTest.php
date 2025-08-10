<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_login_screen_can_be_rendered(): void
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }

    public function test_users_can_authenticate_using_the_login_screen(): void
    {
        $user = User::factory()->create();

        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(route('dashboard'));
    }

    public function test_users_can_not_authenticate_with_invalid_password(): void
    {
        $user = User::factory()->create();

        $this->post('/login', [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);

        $this->assertGuest();
    }

    public function test_users_can_logout(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/logout');

        $this->assertGuest();
        $response->assertRedirect('/');
    }

    public function test_doctor_role_is_assigned_correctly(): void
    {
        $doctor = User::factory()->doctor()->create();

        $this->assertTrue($doctor->isDoctor());
        $this->assertFalse($doctor->isAdmin());
        $this->assertFalse($doctor->isCashier());
        $this->assertEquals('doctor', $doctor->role);
    }

    public function test_admin_role_is_assigned_correctly(): void
    {
        $admin = User::factory()->admin()->create();

        $this->assertTrue($admin->isAdmin());
        $this->assertFalse($admin->isDoctor());
        $this->assertFalse($admin->isCashier());
        $this->assertEquals('admin', $admin->role);
    }

    public function test_cashier_role_is_assigned_correctly(): void
    {
        $cashier = User::factory()->cashier()->create();

        $this->assertTrue($cashier->isCashier());
        $this->assertFalse($cashier->isDoctor());
        $this->assertFalse($cashier->isAdmin());
        $this->assertEquals('cashier', $cashier->role);
    }

    public function test_dashboard_requires_authentication(): void
    {
        $response = $this->get('/dashboard');

        $response->assertRedirect('/login');
    }

    public function test_authenticated_users_can_access_dashboard(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/dashboard');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('dashboard')
                ->has('auth.user')
        );
    }
}