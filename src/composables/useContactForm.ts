import { reactive } from 'vue';
import { ContactFormData } from '@/types';

export function useContactForm() {
  const formData = reactive<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    church: '',
    message: ''
  });
  
  const resetForm = () => {
    formData.name = '';
    formData.email = '';
    formData.phone = '';
    formData.church = '';
    formData.message = '';
  };
  
  const validateForm = (): boolean => {
    return !!(formData.name && formData.email && formData.message);
  };
  
  // Esta función en un caso real se comunicaría con un backend
  const submitForm = async (): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }
    
    try {
      // Simular una petición a un servidor
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // En un caso real, aquí iría la petición al backend
      console.log('Form submitted:', formData);
      
      resetForm();
      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };
  
  return {
    formData,
    resetForm,
    validateForm,
    submitForm
  };
}