export enum UserRole {
  ADMIN = 'admin',
  VENDOR = 'vendor',
  CUSTOMER = 'customer'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
}

export interface RestaurantImage {
  id?: string;
  imageUrl: string;
  isPrimary?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: string;
  city?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  cuisineType: string;
  priceRange?: string;
  openingTime: string;
  closingTime: string;
  images?: RestaurantImage[];
  rating: number;
  reviewCount?: number;
  totalReviews?: number;
  ownerId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export enum ReservationStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
  REJECTED = 'rejected'
}

export interface Reservation {
  id: string;
  restaurantId: string;
  customerId: string;
  reservationDate: string;
  reservationTime: string;
  guestCount: number;
  status: ReservationStatus;
  specialNotes?: string;
  restaurantName?: string;
  restaurantAddress?: string;
  table?: { tableNumber: string };
  restaurant?: Restaurant;
  customer?: User;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateReservationDTO {
  restaurantId: string;
  reservationDate: string;
  reservationTime: string;
  guestCount: number;
  specialNotes?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  tablesAvailable?: number;
}

export interface RestaurantFilters {
  cuisine?: string;
  search?: string;
  priceRange?: string;
  rating?: number;
  city?: string;
  openNow?: boolean;
}
