export const fileStructure = {
  "name": "root",
  "type": "folder",
  "children": [
    {
      "name": "src",
      "type": "folder",
      "children": [
        {
          "name": "components",
          "type": "folder",
          "children": [
            {
              "name": "common",
              "type": "folder",
              "children": [
                { "name": "Header.jsx", "type": "file" },
                { "name": "Footer.jsx", "type": "file" },
                { "name": "Navbar.jsx", "type": "file" },
                { "name": "Sidebar.jsx", "type": "file" }
              ]
            },
            {
              "name": "pages",
              "type": "folder",
              "children": [
                { "name": "HomePage.jsx", "type": "file" },
                { "name": "AboutPage.jsx", "type": "file" },
                { "name": "ContactPage.jsx", "type": "file" },
                { "name": "NotFoundPage.jsx", "type": "file" }
              ]
            },
            {
              "name": "ui",
              "type": "folder",
              "children": [
                { "name": "Button.jsx", "type": "file" },
                { "name": "Modal.jsx", "type": "file" },
                { "name": "Card.jsx", "type": "file" },
                { "name": "Input.jsx", "type": "file" },
                { "name": "Dropdown.jsx", "type": "file" }
              ]
            }
          ]
        },
        {
          "name": "hooks",
          "type": "folder",
          "children": [
            { "name": "useAuth.js", "type": "file" },
            { "name": "useFetch.js", "type": "file" },
            { "name": "useLocalStorage.js", "type": "file" }
          ]
        },
        {
          "name": "services",
          "type": "folder",
          "children": [
            { "name": "api.js", "type": "file" },
            { "name": "auth.js", "type": "file" },
            { "name": "storage.js", "type": "file" }
          ]
        },
        {
          "name": "context",
          "type": "folder",
          "children": [
            { "name": "AuthContext.jsx", "type": "file" },
            { "name": "ThemeContext.jsx", "type": "file" },
            { "name": "AppContext.jsx", "type": "file" }
          ]
        },
        {
          "name": "styles",
          "type": "folder",
          "children": [
            { "name": "global.css", "type": "file" },
            { "name": "variables.css", "type": "file" },
            { "name": "components.css", "type": "file" }
          ]
        },
        {
          "name": "utils",
          "type": "folder",
          "children": [
            { "name": "helpers.js", "type": "file" },
            { "name": "constants.js", "type": "file" },
            { "name": "validators.js", "type": "file" }
          ]
        },
        {
          "name": "assets",
          "type": "folder",
          "children": [
            {
              "name": "images",
              "type": "folder",
              "children": [
                { "name": "logo.png", "type": "file" },
                { "name": "hero.jpg", "type": "file" }
              ]
            },
            {
              "name": "icons",
              "type": "folder",
              "children": [
                { "name": "home.svg", "type": "file" },
                { "name": "menu.svg", "type": "file" }
              ]
            }
          ]
        },
        { "name": "App.jsx", "type": "file" },
        { "name": "index.jsx", "type": "file" }
      ]
    },
    {
      "name": "public",
      "type": "folder",
      "children": [
        { "name": "index.html", "type": "file" },
        { "name": "favicon.ico", "type": "file" }
      ]
    },
    {
      "name": "tests",
      "type": "folder",
      "children": [
        { "name": "unit", "type": "folder", "children": [] },
        { "name": "integration", "type": "folder", "children": [] },
        { "name": "e2e", "type": "folder", "children": [] }
      ]
    },
    { "name": ".env.example", "type": "file" },
    { "name": ".gitignore", "type": "file" },
    { "name": "package.json", "type": "file" },
    { "name": "README.md", "type": "file" },
    { "name": "vite.config.js", "type": "file" }
  ]
}