# Usage: To set up the development environment for the Weather App on Windows systems.

# Ensure the script is run from the project's root directory
cd $PSScriptRoot

# Check if Git is installed
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git is not installed. Installing..."
    # Define Git installer and install path
    $gitInstaller = "https://github.com/git-for-windows/git/releases/download/v2.31.1.windows.1/Git-2.31.1-64-bit.exe"
    $gitInstallPath = Join-Path -Path $env:USERPROFILE -ChildPath "Downloads\Git-Installer.exe"
    # Download Git installer
    Invoke-WebRequest -Uri $gitInstaller -OutFile $gitInstallPath
    # Run Git installer silently
    Start-Process -FilePath $gitInstallPath -Args "/VERYSILENT" -Wait
    # Remove the installer
    Remove-Item $gitInstallPath
}

# Assume that nvm-windows or Node.js is already installed, otherwise provide instructions to install it

# Install server dependencies
cd server
npm install

# Install CORS
npm install cors

cd ..

# Install client dependencies
cd client
npm install
cd ..

Write-Host "Setup complete! Please restart your PowerShell to ensure all changes take effect."
