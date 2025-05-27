const API_URL = 'http://localhost:5000/api/projects';

export async function saveProject(token: string, id: number, content: any) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ content })
  });
  return res.json();
}

export async function createProject(token: string, name: string, content: any) {
  const res = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ name, content })
  });
  return res.json();
}

export async function getProjects(token: string) {
  const res = await fetch(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
}