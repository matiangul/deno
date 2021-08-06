# deno
Deno mini projects build for the sake of testing Deno Deploy platform

### VSCode and deno lsp
To make VSCode and deno lsp happy abut the types please follow instructions from this issue:
https://github.com/denoland/deployctl/issues/24#issuecomment-819272065

### Serving static assets
Code copied from deno tutorial: https://deno.com/deploy/docs/serve-static-assets

To use it in deno deploy just copy this [link to static/mod.ts](static/mod.ts)

To run it locally execute:
```sh
deployctl run --libs="" --watch ./static/mod.ts
```
_(because of that types reference for vscode and deno lsp we need to pass empty libs)_

### Hosting Discord command
Code copied from deno tutorial: https://deno.com/deploy/docs/tutorial-discord-slash

To use it in deno deploy just copy this [link to discord/mod.ts](discord/mod.ts)
And follow instructions from here: https://deno.com/deploy/docs/tutorial-discord-slash

To run it locally execute:
```sh
deployctl run --libs="ns" --watch ./discord/mod.ts
```
_(because some but not all types are referenced in imports)_
