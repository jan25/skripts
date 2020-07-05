## Features

- Editor to write JS code
- Execute button to run code
- Save button to save new changes in code
- Output panel to display output or errors
- Generate Unique URL for a script using backend store
  - File based datastore
  - Persistant/distributed database (nice to have)
- Add dependencies(npm/node) (nice to have)

## Design

- Vue.js frontend with a single page
  - Logo
  - Center aligned editor
  - Execute and Save button below editor
  - Output panel below editor, editor buttons
- Node backend to serve frontend static files, save and execute endpoints
  - `GET /[<UID>]` endpoint to serve home page
  - `POST /exec` endpoint to send code, execute on server and return results(or errors)
  - `POST /save` endpoint to save code
- File based backend store to create unique URL per script
  -
  - Redirect to `/<UID>` on `/exec` and `/save` for a new script
  - 6 char randomly generated alpha-numeric IDs
  - Caveat: Coupled to a single server instance

### ABANDONED

- Node runtime on server - will use node backend calls
  - Single/shared runtime per server instance
  - `/node-runtime` has the node project including `package.json` and `node_modules`
  - `/scripts` folder inside node project to keep track of saved scripts
    - E.g. `/node-runtime/scripts/xdh452.js`
