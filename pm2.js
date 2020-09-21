const { exec } = require('child_process');

// windowsHide: Hide the subprocess console window that would normally be created on Windows systems
exec('npm start', { windowsHide: true });
