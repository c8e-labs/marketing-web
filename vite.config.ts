import { defineConfig } from "vite";
import nunjucks from 'vite-plugin-nunjucks';
import { resolve } from 'path';
import * as fs from 'fs';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const data = JSON.parse(fs.readFileSync('./src/data.json'));

export default defineConfig({
  base: '/',
  // base: '/',
  // project related config
  plugins: [
    // ViteImageOptimizer(),
    nunjucks({
      templatesDir: resolve(__dirname, '.'),
      variables: {
        'index.html': {
          page_lang: 'es',
          to_json: (obj) => {
            obj = JSON.stringify(obj)
            return obj
          },
          i18n: (lang, str)=> str,
          format_duration: (dur, lan) => `${dur}min`,
          format_money: (price, currency, lang) => {
            if (price > 0) {
              price = price/100;
            }
            return `$${price}.00`
          },
          conditional_str: (val, yes, no) => val ? yes : no,
          str_time: (title, fmt, lang) => {
            if (fmt == 'Mon') return 'Mon';
            else if (fmt === '02') return title.split('-')[2];
            return title.split('T')[1].replace(':00-', '-').split('-')[0];
          },
          either: (val, def) => {
            if (!val) return def;
            return val
          },
          data: data
        }
      },
      nunjucksEnvironment: {
        filters: {
          integer: (v) => v,
        }
      }
    }),
  ],
  server: {
    host: true,
    port: 3000, // change port number if you prefer
  },
});
