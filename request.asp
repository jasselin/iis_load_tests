<%@ LANGUAGE=VBSCRIPT %>
<%Option Explicit%>
<%

function Sleep(seconds)
		DIM oShell, cmd
    set oShell = CreateObject("Wscript.Shell")
    cmd = "%COMSPEC% /c timeout " & seconds & " /nobreak"
    oShell.Run cmd,0,1
    SET oShell = Nothing
End function

function Run(seconds)
  DIM start
  start = NOW
  DO WHILE ABS(CDBL(DATEDIFF("s", start, NOW))) < seconds
  LOOP
end function

Run(CDBL(REQUEST("i")))

response.write("End") 

%>