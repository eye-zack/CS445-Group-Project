#!/bin/bash
# Filename: setup.sh
# Usage: To set up the development environment for the project on Linux systems.

#!/bin/bash

# Check for Git and install if not present
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Installing..."
    sudo apt-get update && sudo apt-get install -y git
fi

# Install nvm (Node Version Manager)
if ! command -v nvm &> /dev/null; then
    echo "Installing nvm..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Install the correct Node.js version
nvm install

# Use the correct Node.js version
nvm use

# Install npm dependencies
npm install

# Additional setup tasks...

echo "Setup complete! Please restart your terminal."

chmod +x setup.sh

