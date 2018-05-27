Programming Exercise:

1. You will have to create layout that contains group of images:
  1. Each row will contain 3 images
  2. Each column will contain 2 images


1. Each image have to be retrieved from the web server and displayed on the screen.



1. Each image represented as drawing board:
  1. You will have to be able to draw lines on each board
  2. Each board will have clear button that erase the drawn lines
  3. You need to provide drawer name in a text field, you will not able to start drawing without drawer name supplied.

1.
  1. Each line will have to be drawn by clicking on start point and end point
  2. The drawing will be available only within drawing boards



1. Restore drawing:
  1. The drawings should be restored each time you will reopen/refresh the client.
2. Real time drawing:
  1. The solution should support real time drawings for each client, you should be able to open multiple clients and see the drawn lines by other clients in real time.
  2. Each client that draws the lines within the board should share the drawings  with all connected clients, for example, Client1 and Client2 connected to the web server, Client1 draws a line on board 1, Client2 should have the same line be appeared on the same board with the same exact coordinates
3. Board Ownership:
  1. You can&#39;t draw any lines on a board while other user draws on it (you can assume that the drawing lock expires after 5 seconds from the last drawing).
  2. Board should change its border color to red when it in use
  3. When the board in use,  drawer name mentioned above should appear next to the board

- You can use any external libraries
- Framework: AngularJS / React
- Web server: Node.js + Express
