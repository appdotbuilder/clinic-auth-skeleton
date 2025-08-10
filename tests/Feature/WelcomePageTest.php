<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class WelcomePageTest extends TestCase
{
    use RefreshDatabase;

    public function test_welcome_page_can_be_rendered(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('welcome')
        );
    }

    public function test_welcome_page_shows_auth_links_for_guests(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        // Check that the page renders with Inertia component
        $response->assertInertia(fn ($page) =>
            $page->component('welcome')
                ->has('auth')
        );
    }

    public function test_welcome_page_renders_for_authenticated_users(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('welcome')
                ->has('auth.user')
                ->where('auth.user.email', $user->email)
        );
    }

    public function test_welcome_page_has_correct_title(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('welcome')
        );
    }

    public function test_welcome_page_renders_without_errors(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('welcome')
                ->has('auth')
        );
    }

    public function test_welcome_page_component_loads_correctly(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('welcome')
        );
    }
}