# Project Folder Structure for the Project Website

## App folders

### public Directory

The `public/` folder is used to host assets that the website can access.
> **Note:** All files and folders in the public directory are viewable to the public.

Assets can be loaded in the website code via the `/public` folder.

```html
<img src="/public/img/my-image.png" alt="My public image">
```

Common files are CSS and JS, but any kind of files can be added.
If you make a new folder, it will be added to the path.
For example, `/public/my-folder/my-file.csv` would have the url `localhost/public/my-folder/my-file.csv`

### styles Directory

Edit .scss files in the `/styles` folder, and they will be generated as .css files in the `public/css` folder.

### content Directory

The `content` folder serves as a router for the application.
Any file or folder placed in this folder will create a page on the website at the URL.

## Eleventy folders

### _data Directory

The _data folder includes files data files.

#### Supported file formats

- JSON
- YAML

#### Helpful links

- https://www.11ty.dev/docs/data/
- https://www.11ty.dev/docs/data-global/
- https://www.11ty.dev/docs/data-template-dir/

### _includes Directory

The _includes folder contains templates and layouts.

#### Supported file formats

- Liquid
- HTML (defaults to Liquid)

#### Helpful links

- https://www.11ty.dev/docs/layouts/
