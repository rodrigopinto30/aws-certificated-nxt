import { LoginData, SignupData } from "@/schemas/auth";

const API_BASE_URL = ''; 

export async function loginUser(data: LoginData): Promise<string> {
console.log(data)
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok || !result.token) {
    throw new Error(result.message || "Login failed due to an unknown error.");
  }

  return result.token;
}

export async function signupUser(data: SignupData): Promise<{ message: string }> {
  // const { confirmPassword, ...signupData } = data; 
  const {...signupData } = data; 
  console.log(data)
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Signup failed due to an unknown error.");
  }

  return { message: result.message || "Registration successful." };
}