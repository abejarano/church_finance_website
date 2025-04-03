export interface Feature {
    id: number;
    icon: string;
    title: string;
    description: string;
  }
  
  export interface Benefit {
    id: number;
    icon: string;
    title: string;
    description: string;
  }
  
  export interface Testimonial {
    id: number;
    text: string;
    author: {
      name: string;
      position: string;
      church: string;
      image: string;
    };
  }
  
  export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    church: string;
    message: string;
  }
  
  export interface PricingPlan {
    id: number;
    title: string;
    price: number;
    currency?: string;
    period?: string;
    description: string;
    features: string[];
    buttonText?: string;
    popular: boolean;
  }