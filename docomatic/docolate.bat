@ECHO OFF

for /d %%D in (..\*) do call :SUB_A %%~nD
GOTO:EOF

:SUB_A
  echo [%1]
  set name=%1
  call grunt -doc=%name%
  ren  docs\classes\%name%.html doc.html
  copy docs\classes\doc.html ..\%name%\doc.html
GOTO:EOF