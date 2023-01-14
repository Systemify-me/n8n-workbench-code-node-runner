# n8n-workbench-code-node-runner
This project helps editing the Code Node of n8n. In particular, it allows to easily run and debug the code via the node.js.

### Installation

1. Install node.js ( https://nodejs.org/en/download/ ), n8n and git
2. Run `npm i` - that will install all necessary modules

### Workflow - Development and Debugging
1. Run the n8n, setup initial nodes. Run the workflow and get the output you want to process with Code node.
2. [optional] There's `input.json` for your convinience. You can copy-paste the whole output there, if needed.
3. Copy the output you want to work with to the `inputShort.json`. It might be a shorter or modified version of `input.json`.
4. Use `index.js` for writing the code. The best thing is you can smash F5 and debug your input right away. I found it useful for working with `jmespath` lib.

### Workflow - Exporting to n8n
1. There's some manual job needed for now - probbaly i'll use webpack or something later on.
Just follow the TODOs to convert the node-runnable-and-debuggable code to the n8n-runnable one.
