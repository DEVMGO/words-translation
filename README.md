# React + TypeScript + Vite

Translation Management App
This is a React-based web application built with TypeScript for managing translations of words across multiple languages. It allows users to view a list of words in a selected language, reorder them using drag-and-drop with a handle, and edit translations in their default language. The application uses @dnd-kit for drag-and-drop functionality, Joy UI for UI components, and React Router for navigation.
Features

View Words: Display words in a chosen language (e.g., English, Persian, Russian) from a translations.json file.
Drag-and-Drop Reordering: Reorder word cards using a drag handle with smooth vertical animations powered by @dnd-kit/sortable.
Edit Translations: Edit translations for words in the user's default language, with changes saved to localStorage.
Multilingual Support: Supports multiple languages (en, fa, ru) with the ability to add more.
Responsive Design: Built with Tailwind CSS and Joy UI for a modern, responsive UI.
Error Handling: Displays toast notifications for invalid inputs or errors using react-toastify.

Project Structure
src/
├── components/
│   ├── Navbar.tsx          # Navigation bar component
│   ├── WordList.tsx        # Displays the list of words with drag-and-drop
│   ├── SortableWordCard.tsx # Individual sortable word card with drag handle
│   ├── EditKeyWordPage.tsx # Page for editing translations
│   ├── BackIcon.tsx        # Icon for back navigation
├── context/
│   ├── LanguageContext.tsx # Context for managing language settings
├── index.css              # Global styles with Tailwind CSS
├── App.tsx                # Main app component with routing
├── translations.json       # Sample translation data

Prerequisites

Node.js (v16 or higher)
npm (v8 or higher)

Installation

Clone the repository:
git clone <repository-url>
cd translation-management-app


Install dependencies:
npm install


Ensure translations.json exists:Place the translations.json file in the public/translations/ directory with the following structure:
{
  "words": [
    { "id": 1, "en": "Hello", "fa": "سلام", "ru": "Привет" },
    { "id": 2, "en": "World", "fa": "جهان", "ru": "Мир" }
  ]
}



Usage

Run the development server:
npm run dev

Open http://localhost:5173 in your browser.

Features:

View Words: Navigate to / or /management to see the list of words in the selected language (default: English).
Reorder Words: Use the drag handle (indicated by a DragIndicator icon) to reorder word cards. The new order is saved to localStorage.
Edit Translations: Click the "ویرایش" (Edit) button on a word card to go to /edit/:id?source=<language>, where you can edit the translation in the default language (e.g., Persian). The original word is displayed but disabled.
Language Selection: Use the language context to switch the display language (currently hardcoded to en with defaultLanguage as fa).



Dependencies

React: ^18.2.0
TypeScript: ^5.0.0
React Router: ^6.14.0
Joy UI: @mui/joy for UI components
@dnd-kit: @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities for drag-and-drop functionality
React Toastify: For toast notifications
Tailwind CSS: For styling
@mui/icons-material: For drag handle icon

Install dependencies:
npm install react@18 react-dom@18 typescript @mui/joy @emotion/react @emotion/styled @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities react-toastify react-router-dom @mui/icons-material

Configuration

TypeScript: The project uses verbatimModuleSyntax: true in tsconfig.json to enforce type-only imports for interfaces like DragEndEvent.
Tailwind CSS: Configured in index.css with custom styles for responsive design.
Local Storage: Translations are stored in localStorage under the key translations. If translations.json is updated, clear localStorage to reload the data.

Troubleshooting

Drag-and-Drop Not Working:
Ensure @dnd-kit dependencies are installed.
Check that word IDs are unique:console.log(words.map((word) => word.id));


Verify listeners and attributes in SortableWordCard.tsx:console.log('listeners:', listeners, 'attributes:', attributes);




Animation Issues:
Ensure transition: 'transform 300ms ease-in-out' is applied in SortableWordCard.tsx.
Check for conflicting CSS styles in index.css.


Translation Not Loading:
Verify that translations.json exists in public/translations/.
Check localStorage:console.log(localStorage.getItem('translations'));




Clear Cache:rm -rf node_modules package-lock.json
npm install
npm run dev



Adding New Languages
To support a new language (e.g., Spanish es):

Update the Language type in LanguageContext.tsx:type Language = 'en' | 'fa' | 'ru' | 'es';


Update availableLanguages in EditKeyWordPage.tsx:const availableLanguages: Language[] = ['en', 'fa', 'ru', 'es'];


Update the Word interface:interface Word {
  id: number;
  en: string;
  fa: string;
  ru: string;
  es: string;
}


Add translations to translations.json:{ "id": 1, "en": "Hello", "fa": "سلام", "ru": "Привет", "es": "Hola" }



Contributing
Contributions are welcome! Please submit a pull request or open an issue for suggestions or bug reports.
License
This project is licensed under the MIT License.
