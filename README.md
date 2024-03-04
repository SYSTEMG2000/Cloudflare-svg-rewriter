# Cloudflare-rewriter
A Cloudflare worker script to add attributes of a .svg file from a URL
It's useful when customizing themes of self-hosted homepages such as Dashy if you want to add some icons which are not from the supported icon library
## How to Use
There are 2 options
### Option 1: Use deployed Cloudflare workers
A ready-to-use Cloudflare worker has already been deployed at https://svg-rewriter.oasistem.com
> Limitation: The maximum number of requests for this service is limited to 10000/day
#### Example
To change the color of [Tsubame emblem of Tokyo Institute of Technology](https://raw.githubusercontent.com/SYSTEMG2000/User_Repo/main/Icon/TiTech_Icon.svg) to TiTech theme color #052D5D, just

```
https://svg-rewriter.oasistem.com/?url=https%3A%2F%2Fraw.githubusercontent.com%2FSYSTEMG2000%2FUser_Repo%2Fmain%2FIcon%2FTiTech_Icon.svg&fill=%23052d5d
```

> Note: You can use [an encoding tool](https://meyerweb.com/eric/tools/dencoder/) to encode the url in your request.
### Option 2: Deploy your own Cloudflare workers/pages
1. Download "index.js" from this repository.
2. Register a free Cloudflare account.
3. Go to "Workers & Pages" from the dashboard, then "Create application". 
4. Choose "Pages" - "Upload assets", then upload the .js file.
5. (Optional) A custom domain could be given to the page if you own one.
