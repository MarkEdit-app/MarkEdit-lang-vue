import { LanguageDescription } from '@codemirror/language';
import { vue } from '@codemirror/lang-vue';
import { MarkEdit } from 'markedit-api';

const language = LanguageDescription.of({
  name: 'Vue',
  extensions: ['vue'],
  load: async() => vue(),
});

MarkEdit.addCodeLanguage(language);
