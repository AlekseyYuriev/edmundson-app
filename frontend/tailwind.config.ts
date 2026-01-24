import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./**/*.vue", "./app/**/*.vue"],
  theme: {
    extend: {
      fontSize: {
        sm: '12px',
        ms: '14px',
        lg: '16px',
        xl: '20px',
        xxl: '24px',
      },
      spacing: {
        xl: '32px',
        lg: '24px',
        md: '20px',
        ms: '16px',
        sm: '12px',
        xs: '8px',
        icon: '6px',
        xxs: '4px',
      },
    },
  },
  plugins: [],
};

export default config;
