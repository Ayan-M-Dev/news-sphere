export interface User {
  _id: string;
  email: string;
  name: string;
  organization?: string;
  organizationId?: string;
  token?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
