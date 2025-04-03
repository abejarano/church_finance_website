<template>
    <div class="contact-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">{{ formLabels.name }}</label>
          <input 
            type="text" 
            id="name" 
            class="form-control" 
            v-model="formData.name" 
            required
          />
        </div>
        <div class="form-group">
          <label for="email">{{ formLabels.email }}</label>
          <input 
            type="email" 
            id="email" 
            class="form-control" 
            v-model="formData.email" 
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">{{ formLabels.phone }}</label>
          <input 
            type="tel" 
            id="phone" 
            class="form-control" 
            v-model="formData.phone"
          />
        </div>
        <div class="form-group">
          <label for="church">{{ formLabels.church }}</label>
          <input 
            type="text" 
            id="church" 
            class="form-control" 
            v-model="formData.church"
          />
        </div>
        <div class="form-group">
          <label for="message">{{ formLabels.message }}</label>
          <textarea 
            id="message" 
            class="form-control" 
            v-model="formData.message" 
            required
          ></textarea>
        </div>
        <CtaButton 
          :text="formLabels.button" 
          variant="primary" 
          type="submit"
        />
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import CtaButton from '@/components/common/CtaButton.vue';
  import { ContactFormData } from '@/types';
  
  export default defineComponent({
    name: 'ContactForm',
    components: {
      CtaButton
    },
    emits: ['form-submitted'],
    setup(_, { emit }) {
      const { t, locale } = useI18n();
      
      // Usar computed para que las etiquetas del formulario se actualicen cuando cambie el idioma
      const formLabels = computed(() => ({
        name: t('contact.form.name'),
        email: t('contact.form.email'),
        phone: t('contact.form.phone'),
        church: t('contact.form.church'),
        message: t('contact.form.message'),
        button: t('contact.form.button')
      }));
      
      const formData = reactive<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        church: '',
        message: ''
      });
      
      const submitForm = () => {
        emit('form-submitted', { ...formData });
        
        // Reset form
        formData.name = '';
        formData.email = '';
        formData.phone = '';
        formData.church = '';
        formData.message = '';
      };
      
      return {
        formData,
        formLabels,
        submitForm
      };
    }
  });
  </script>
  
  <style lang="scss" scoped>
  .contact-form {
    background-color: $light;
    padding: $spacing-xl;
    border-radius: $border-radius-lg;
    box-shadow: $shadow-md;
    
    .form-group {
      margin-bottom: $spacing-lg;
      
      label {
        display: block;
        margin-bottom: $spacing-xs;
        font-weight: 500;
      }
      
      .form-control {
        width: 100%;
        padding: $spacing-md;
        border: 1px solid #ddd;
        border-radius: $border-radius-md;
        font-family: inherit;
        font-size: $font-size-base;
        transition: border-color $transition-normal;
        
        &:focus {
          outline: none;
          border-color: $primary;
        }
      }
      
      textarea.form-control {
        min-height: 150px;
        resize: vertical;
      }
    }
  }
  </style>