@echo off
REM Filename: setup.bat
REM Usage: To set up the development environment for the project on Windows systems.

# Check if Git is installed
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git is not installed. Installing..."

    # Define Git installer and install path
    $installer = "https://github.com/git-for-windows/git/releases/download/v2.31.1.windows.1/Git-2.31.1-64-bit.exe"
    $installPath = "$env:USERPROFILE\Downloads\Git-Installer.exe"

    # Download Git installer
    Invoke-WebRequest -Uri $installer -OutFile $installPath

    # Run Git installer silently
    Start-Process -FilePath $installPath -Args "/VERYSILENT" -Wait

    # Remove the installer
    Remove-Item $installPath
}

@echo off
REM Filename: setup.bat
REM Usage: To set up the development environment for the project on Windows systems.

# Filename: setup.ps1
# Usage: To set up the development environment for the project on Windows systems.

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser





