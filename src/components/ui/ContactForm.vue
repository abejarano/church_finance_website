<template>
  <div class="contact-form-container">
    <div class="form-header">
      <h3>{{ formLabels.title }}</h3>
      <p>{{ formLabels.subtitle }}</p>
    </div>
    
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">{{ formLabels.name }}</label>
          <div class="input-wrapper">
            <font-awesome-icon :icon="['fas', 'user']" class="input-icon" />
            <input 
              type="text" 
              id="name" 
              class="form-control" 
              v-model="formData.name" 
              required
              :placeholder="formLabels.namePlaceholder"
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="email">{{ formLabels.email }}</label>
          <div class="input-wrapper">
            <font-awesome-icon :icon="['fas', 'envelope']" class="input-icon" />
            <input 
              type="email" 
              id="email" 
              class="form-control" 
              v-model="formData.email" 
              required
              :placeholder="formLabels.emailPlaceholder"
            />
          </div>
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="phone">{{ formLabels.phone }}</label>
          <div class="input-wrapper">
            <font-awesome-icon :icon="['fas', 'phone']" class="input-icon" />
            <input 
              type="tel" 
              id="phone" 
              class="form-control" 
              v-model="formData.phone"
              :placeholder="formLabels.phonePlaceholder"
            />
          </div>
        </div>
        
        <div class="form-group">
          <label for="church">{{ formLabels.church }}</label>
          <div class="input-wrapper">
            <font-awesome-icon :icon="['fas', 'church']" class="input-icon" />
            <input 
              type="text" 
              id="church" 
              class="form-control" 
              v-model="formData.church"
              :placeholder="formLabels.churchPlaceholder"
            />
          </div>
        </div>
      </div>
      
      <div class="form-group">
        <label for="message">{{ formLabels.message }}</label>
        <div class="input-wrapper textarea-wrapper">
          <font-awesome-icon :icon="['fas', 'comment']" class="input-icon textarea-icon" />
          <textarea 
            id="message" 
            class="form-control" 
            v-model="formData.message" 
            required
            :placeholder="formLabels.messagePlaceholder"
          ></textarea>
        </div>
      </div>
      
      <div class="form-footer">
        <div class="form-note">
          <font-awesome-icon :icon="['fas', 'shield-alt']" class="note-icon" />
          <span>{{ formLabels.privacy }}</span>
        </div>
        
        <CtaButton 
          :text="formLabels.button" 
          variant="primary" 
          withIcon
          buttonType="submit"
          :icon="isSubmitting ? 'spinner' : ''"
          :disabled="isSubmitting"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import CtaButton from '@/components/common/CtaButton.vue';
import type { ContactFormData } from '@/types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faUser, 
  faEnvelope, 
  faPhone, 
  faChurch, 
  faComment, 
  faShieldAlt,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add icons to library
library.add(faUser, faEnvelope, faPhone, faChurch, faComment, faShieldAlt, faSpinner);

export default defineComponent({
  name: 'ContactForm',
  components: {
    CtaButton,
    FontAwesomeIcon
  },
  emits: ['form-submitted'],
  setup(_, { emit }) {
    const { t, locale } = useI18n();
    const isSubmitting = ref(false);
    
    // Usar computed para que las etiquetas del formulario se actualicen cuando cambie el idioma
    const formLabels = computed(() => ({
      title: t('contact.form.title'),
      subtitle: t('contact.form.subtitle'),
      name: t('contact.form.name'),
      email: t('contact.form.email'),
      phone: t('contact.form.phone'),
      church: t('contact.form.church'),
      message: t('contact.form.message'),
      button: t('contact.form.button'),
      privacy: t('contact.form.privacy'),
      namePlaceholder: t('contact.form.namePlaceholder'),
      emailPlaceholder: t('contact.form.emailPlaceholder'),
      phonePlaceholder: t('contact.form.phonePlaceholder'),
      churchPlaceholder: t('contact.form.churchPlaceholder'),
      messagePlaceholder: t('contact.form.messagePlaceholder')
    }));
    
    const formData = reactive<ContactFormData>({
      name: '',
      email: '',
      phone: '',
      church: '',
      message: ''
    });
    
    const submitForm = async () => {
      isSubmitting.value = true;
      
      try {
        // Simular una petición a un servidor
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        emit('form-submitted', { ...formData });
        
        // Reset form
        formData.name = '';
        formData.email = '';
        formData.phone = '';
        formData.church = '';
        formData.message = '';
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        isSubmitting.value = false;
      }
    };
    
    return {
      formData,
      formLabels,
      submitForm,
      isSubmitting
    };
  }
});
</script>

<style lang="scss" scoped>
@use "sass:color";

.contact-form-container {
  background-color: $light;
  border-radius: $border-radius-lg;
  overflow: hidden;
  box-shadow: $shadow-md;
  
  .form-header {
    background: linear-gradient(135deg, $primary 0%, darken($primary, 15%) 100%);
    color: white;
    padding: $spacing-xl;
    
    h3 {
      font-size: $font-size-xl;
      margin-bottom: $spacing-sm;
    }
    
    p {
      opacity: 0.8;
      font-size: $font-size-base;
    }
  }
  
  .contact-form {
    padding: $spacing-xl;
    
    .form-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: $spacing-md;
      margin-bottom: $spacing-md;
    }
    
    .form-group {
      margin-bottom: $spacing-lg;
      
      label {
        display: block;
        margin-bottom: $spacing-xs;
        font-weight: 500;
        color: $text;
      }
      
      .input-wrapper {
        position: relative;
        
        .input-icon {
          position: absolute;
          left: $spacing-md;
          top: 50%;
          transform: translateY(-50%);
          color: $dark-gray;
          font-size: 16px;
          
          &.textarea-icon {
            top: $spacing-md;
            transform: none;
          }
        }
        
        .form-control {
          width: 100%;
          padding: $spacing-md;
          padding-left: calc(16px + #{$spacing-md} * 2);
          border: 1px solid $gray;
          border-radius: $border-radius-md;
          font-family: inherit;
          font-size: $font-size-base;
          transition: all $transition-normal;
          background-color: $light;
          
          &:focus {
            outline: none;
            border-color: $primary;
            box-shadow: 0 0 0 3px rgba($primary, 0.1);
          }
          
          &::placeholder {
            color: color.adjust($dark-gray, $lightness: 15%);
          }
        }
        
        &.textarea-wrapper {
          .form-control {
            min-height: 150px;
            resize: vertical;
          }
        }
      }
    }
    
    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .form-note {
        display: flex;
        align-items: center;
        gap: $spacing-xs;
        color: $dark-gray;
        font-size: $font-size-xs;
        
        .note-icon {
          color: $primary;
        }
      }
      
      @media (max-width: $breakpoint-md) {
        flex-direction: column;
        gap: $spacing-md;
        
        .form-note {
          order: 2;
          text-align: center;
        }
      }
    }
  }
}
</style>