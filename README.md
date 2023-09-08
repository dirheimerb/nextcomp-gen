# NextComp-Gen

NextComp-Gen is a CLI tool designed to streamline the process of generating Next.js components. Whether you're working on the client-side or the server-side, NextComp-Gen has got you covered.

## Installation

To install the NextComp-Gen CLI globally, use:

```bash
npm install -g nextcomp-gen
```

## Usage

To run the CLI tool, simply use:

```bash
nextcomp-gen
```

### Commands

Generate a server component:

```bash
nextcomp-gen -s -n [COMPONENT_NAME]
```

Generate a client component:

```bash
nextcomp-gen -c -n [COMPONENT_NAME]
```

Replace `[COMPONENT_NAME]` with the desired name for your component. Ensure the name is a single word.

## Features

- Easily generate Next.js components with pre-configured templates.
- Support for both client and server components.
- Intelligent error handling and validations.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
