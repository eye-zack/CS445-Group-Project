#!/bin/bash
# Usage: To set up the development environment for the Weather App on Linux systems.

# Ensure the script is run from the project's root directory
cd "$(dirname "$0")"

# Check for Git and install if not present
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Installing..."
    sudo apt-get update && sudo apt-get install -y git
fi

# Install nvm (Node Version Manager) if not present and load it
if [ ! -d "$HOME/.nvm" ]; then
    echo "Installing nvm..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
fi

# Load nvm and install the required Node.js version, read from .nvmrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Go to the server directory and install server dependencies
cd server
nvm install
npm install

# Install CORS
npm install cors

cd ..

# Go to the client directory and install client dependencies
cd client
nvm use
npm install
cd ..

echo "Setup complete! Please restart your terminal."
