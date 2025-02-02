# **ctm-htmllinter**
A customizable HTML linter that runs via a terminal command. Define your own rules and ensure code consistency across your projects.

## **Features**
- Run manually with a terminal command for specific files or folders.
- Lightweight and fast.

## **Installation**
Install globally to use the `ctm-htmllinter` command:
```bash
npm install -g ctm-htmllinter
```

## **Usage**
### **Manual Mode**
Use the `ctm-htmllinter` command to lint specific files or directories.

### **1. Check All Files**
```bash
ctm-htmllinter -a, -all
```

### **2. Check Specific File or Folder**
```bash
ctm-htmllinter ./index.html
```

```bash
ctm-htmllinter ./html/
```

### **3. Default Rules**
ctm-htmllinter comes with a set of preconfigured rules:

- Avoid empty alt attributes.
- Enforce consistent spacing and indentation.
- Enforce consistent naming convention.

## **Configuration**
You can customize which rules and folders will be ignored by the module by executing the following command to create a config file:
```bash
ctm-htmllinter -i, -init
```

### **Example Configuration**
```json
{
    "rules": {
        "avoidEmptyAlt": true,
        "noNestedCss": true,
        "missingDoctype": true,
        "consistentIndentation": 4,
        "noTrailingWhitespace": true,
        "fileNamingConvention": true
    },
    "ignore": ["folder"]
}
```

- **`rules`**: List of enabled rules.
- **`ignore`**: Array of folders or files to exclude from linting.

## Contributing
If you'd like to contribute to this module, feel free to submit a pull request or open an issue to discuss improvements.