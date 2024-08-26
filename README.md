# Autocomplete Component with API CALLS

## Table of Contents

- [Stack](#stack)
- [Feature](#feature)
- [Prerequisites](#prerequisites)
- [Installation](#Installation)
- [Run](#run)
- [Usage](#usage)
- [Deployment](#deployment)

## STACK

- React.
- CSS Native & CSS Module.
- No third-party libraries.

## Feature

The Autocomplete component is a robust and flexible solution, fully encapsulated for reusability and easily adaptable for integration into a component library like Storybook. It supports custom children as a prop, rendering a default dropdown if none are provided.

The component is designed to work with any API call, with asynchronous data filtering to enhance performance and user experience.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)

## Installation

1. Clone the repository:

```bash
 git clone https://github.com/gdariodh/autocomplete-component-with-api-call
```

2. Install dependencies:

##### yarn

```bash
 yarn install
```

##### npm

```bash
 npm install
```

## Run

##### http://localhost:3000/

##### yarn

```bash
 yarn dev
```

#### npm

```bash
npm run dev
```

#### Usage

```TSX
export interface OptionSourceAutoComplete {
  label: string;
  value: any;
  image?: Image;
}

import { useCallback } from 'react';
import { AutoCompleteInput } from '@/components';

export function Example() {


    const source = async () => {
        // Fetches data from an API. The autocomplete component receives an array of objects as OptionSourceAutoComplete.
    }


    const handleSelection = useCallback(async (value: string) => {
        console.log({value})
        // DO SOMETHING...
    }, []);

    return (
    <AutoCompleteInput
            // placeholder optional
            placeholder="Looking for an ...?"
            // delay optional
            delay={500}
            // source required
            source={source}
            // handleSelection required
            handleSelection={handleSelection}
            // className optional
            className="classExample"
            >
            {/* Children prop is optional. If not provided, the autocomplete renders a dropdown by default. */}
            {(props) => <ChildrenComponent {...props} />}
        </AutoCompleteInput>
    )
}
```

## Deployment

#### yarn

```bash
yarn build
```

#### npm

```bash
npm run build
```

### Click here to view the app

```link
https://autocomplete-component-with-api-call.vercel.app/
```
