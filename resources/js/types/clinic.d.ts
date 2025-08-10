/**
 * Type definitions for Clinic Pharmacy Management System
 * 
 * This file contains type definitions for the clinic management features
 * including user roles, patient data, and pharmacy inventory types.
 */

export interface UserRole {
    doctor: 'doctor';
    admin: 'admin';
    cashier: 'cashier';
}

export interface ClinicUser {
    id: number;
    name: string;
    email: string;
    role: 'doctor' | 'admin' | 'cashier';
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface DashboardStats {
    todayActivity: number;
    activeUsers: number;
    systemStatus: 'online' | 'offline';
}