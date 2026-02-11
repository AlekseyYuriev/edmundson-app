<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { contactSchema } from '~/schemas/contact.schema';
import EEClear from './icon/EEClear.vue';

const emit = defineEmits<{
  close: [];
}>();

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(contactSchema),
  // Without this, `useField()` starts as `undefined`, so Zod fails with
  // "expected string, received undefined" before it ever hits `.min()`.
  initialValues: {
    name: '',
    email: '',
    phoneNumber: '',
    postCode: '',
    message: '',
  },
});

const { value: name } = useField<string>('name');
const { value: email } = useField<string>('email');
const { value: phoneNumber } = useField<string>('phoneNumber');
const { value: postCode } = useField<string>('postCode');
const { value: message } = useField<string>('message');

const close = () => emit('close');

const onSubmit = handleSubmit(
  (values) => {
    console.log('[ContactForm] valid submit', values);
  },
  (ctx) => {
    // `handleSubmit` only calls the valid callback when schema passes.
    // This gives you something in the console even when invalid.
    console.log('[ContactForm] invalid submit', {
      values: ctx.values,
      errors: ctx.errors,
    });
  }
);
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get in touch"
      @click="close"
    >
      <div
        class="w-full max-w-[560px] overflow-hidden rounded-lg bg-white shadow-2xl"
        @click.stop
      >
        <div
          class="flex items-center justify-between bg-[var(--ee_primary)] px-6 py-5"
        >
          <h3
            class="text-[28px] font-medium tracking-wide text-white uppercase"
          >
            GET IN TOUCH
          </h3>
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close contact form"
            @click="close"
          >
            <EEClear class="h-5 w-5 text-white" />
          </button>
        </div>

        <form class="px-6 py-6" @submit.prevent="onSubmit">
          <div class="flex flex-col gap-4">
            <div>
              <input
                v-model="name"
                type="text"
                class="h-[52px] w-full rounded-lg border border-[var(--ee_card_border)] px-4 text-[16px] font-light transition-colors outline-none placeholder:opacity-60 focus:border-[var(--ee_primary)]"
                placeholder="Name *"
              />
              <p
                v-if="errors.name"
                class="mt-xxs ml-xxs text-[12px] text-red-500"
              >
                {{ errors.name }}
              </p>
            </div>

            <div>
              <input
                v-model="email"
                inputmode="email"
                class="h-[52px] w-full rounded-lg border border-[var(--ee_card_border)] px-4 text-[16px] font-light transition-colors outline-none placeholder:opacity-60 focus:border-[var(--ee_primary)]"
                placeholder="Email *"
              />
              <p
                v-if="errors.email"
                class="mt-xxs ml-xxs text-[12px] text-red-500"
              >
                {{ errors.email }}
              </p>
            </div>

            <div>
              <input
                v-model="phoneNumber"
                inputmode="tel"
                class="h-[52px] w-full rounded-lg border border-[var(--ee_card_border)] px-4 text-[16px] font-light transition-colors outline-none placeholder:opacity-60 focus:border-[var(--ee_primary)]"
                placeholder="Phone Number *"
              />
              <p
                v-if="errors.phoneNumber"
                class="mt-xxs ml-xxs text-[12px] text-red-500"
              >
                {{ errors.phoneNumber }}
              </p>
            </div>

            <div>
              <input
                v-model="postCode"
                class="h-[52px] w-full rounded-lg border border-[var(--ee_card_border)] px-4 text-[16px] font-light transition-colors outline-none placeholder:opacity-60 focus:border-[var(--ee_primary)]"
                placeholder="Post Code *"
              />
              <p
                v-if="errors.postCode"
                class="mt-xxs ml-xxs text-[12px] text-red-500"
              >
                {{ errors.postCode }}
              </p>
            </div>

            <div>
              <textarea
                v-model="message"
                rows="4"
                class="min-h-[120px] w-full resize-none rounded-lg border border-[var(--ee_card_border)] px-4 py-3 text-[16px] font-light transition-colors outline-none placeholder:opacity-60 focus:border-[var(--ee_primary)]"
                placeholder="How can we help?"
              />
              <p
                v-if="errors.message"
                class="mt-xxs ml-xxs text-[12px] text-red-500"
              >
                {{ errors.message }}
              </p>
            </div>

            <button
              type="submit"
              class="mt-2 h-[56px] w-full cursor-pointer rounded-lg bg-[var(--ee_primary)] text-[16px] font-semibold tracking-wide text-white uppercase transition-colors hover:opacity-95"
            >
              GET IN TOUCH
            </button>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>
