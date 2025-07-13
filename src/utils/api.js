const API_URL = "http://localhost:3001/api/onboarding";

export async function createOnboarding(data) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API error:', errorText);
      throw new Error(errorText);
    }
    return response.json();
  } catch (err) {
    console.error('Network/API error:', err);
    throw err;
  }
}

export async function getOnboarding(userId) {
  const response = await fetch(`${API_URL}/${userId}`);
  return response.json();
} 