import { API_BASE_URL } from '../config/api';

export const createSubmission = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/submissions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return await res.json();
};

export const createRegistration = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/registrations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return await res.json();
};

export const loginUser = async (email, password) => {
  const res = await fetch(`${API_BASE_URL}/auth/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return await res.json();
};

export const fetchUserProfile = async () => {
  const token = sessionStorage.getItem('user_token');
  if (!token) return null;
  const res = await fetch(`${API_BASE_URL}/auth/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Token expired or invalid');
  return await res.json();
};

export const fetchUserSubmissions = async () => {
  const token = sessionStorage.getItem('user_token');
  const res = await fetch(`${API_BASE_URL}/submissions`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return await res.json();
};
