// src/error.ts
var ResponseError = class extends Error {
  status;
  constructor(message, status) {
    super(message);
    this.name = "ResponseError";
    this.status = status;
  }
};

// src/index.ts
var handleRequest = async (request) => {
  const { searchParams } = new URL(request.url);
  const params = {};
  for (const [key, value] of searchParams) {
    params[key] = value;
  }
  const url = params.url;
  if (!url)
    throw new ResponseError("Missing url parameter", 400);
  delete params.url;
  let response;
  try {
    response = await fetch(url, {
      method: "GET"
    });
  } catch {
    throw new ResponseError("Failed to fetch url", 500);
  }
  if (response.headers.get("content-type") !== "image/svg+xml") {
    throw new ResponseError("Invalid content-type, must be image/svg+xml", 400);
  }
  const newResponse = new Response(response.body, response);
  newResponse.headers.set("cache-control", "max-age=604800");
  return new HTMLRewriter().on("svg", {
    element(element) {
      for (const [name, value] of Object.entries(params)) {
        element.setAttribute(name, value);
      }
    }
  }).transform(newResponse);
};
var handleRequestWrapper = async (request) => {
  try {
    return await handleRequest(request);
  } catch (err) {
    if (err instanceof ResponseError) {
      return new Response(err.message);
    } else
      throw err;
  }
};
var src_default = {
  fetch: handleRequestWrapper
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
