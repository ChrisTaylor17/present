export async function generateAIResponse(message: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    
    const data = await response.json();
    return data.response || 'Sorry, I could not process that request.';
  } catch (error) {
    return 'AI service temporarily unavailable.';
  }
}

export async function generateMatchingScore(userProfile: any, targetProfile: any): Promise<number> {
  try {
    const response = await fetch('/api/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userProfile, targetProfile })
    });
    
    const data = await response.json();
    return data.score || Math.floor(Math.random() * 40) + 60;
  } catch (error) {
    return Math.floor(Math.random() * 40) + 60;
  }
}