@echo off
echo Starting The Epoch Elegance E-commerce Application...
echo.

echo Step 1: Installing Backend Dependencies...
cd backend
call npm install
echo.

echo Step 2: Installing Frontend Dependencies...
cd ..
call npm install
echo.

echo Step 3: Starting Backend Server...
cd backend
start "Backend Server" cmd /k "npm run dev"
echo Backend server starting on http://localhost:5000
echo.

echo Step 4: Starting Frontend Server...
cd ..
timeout /t 3 /nobreak > nul
start "Frontend Server" cmd /k "npm run dev"
echo Frontend server starting on http://localhost:5173
echo.

echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Note: Make sure MongoDB is running before using the application!
echo.
pause