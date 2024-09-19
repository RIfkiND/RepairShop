"use server"

export const CreateParts=async (formData: FormData) => {
  try {
    const response = await fetch('/api/admin/upload', {
      method: 'POST',
      body: formData, 
    });

    if (!response.ok) {
      throw new Error('Error Creatating Parts');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error; 
  }
}
  