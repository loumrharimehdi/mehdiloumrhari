import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  size: 'small' | 'medium' | 'large';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface PricingItem {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}