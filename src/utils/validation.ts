export const validateEmail = (email: string): string => {
    if (!email.trim()) return 'Email is required';
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return 'Enter a valid email address';
    return '';
  };
  
  export const validatePassword = (password: string): string => {
    if (!password) return 'Password is required';
    if (password.length < 8)
      return 'Password must be at least 8 characters';
  
    if (!/[0-9]/.test(password))
      return 'Password must contain at least one number';
  
    if (!/[!@#$%^&*]/.test(password))
      return 'Password must contain one special character';
  
    return '';
  };
  
  export const validateName = (name: string): string => {
    if (!name.trim()) return 'Full name is required';
    if (name.length < 3) return 'Name must be at least 3 characters';
    return '';
  };
  