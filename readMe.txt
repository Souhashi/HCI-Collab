Instructions on download
------------------------
1. Ignore the top 3 files
2. Download Visual Studio Code
3. Right click the files and open with Visual Studio Code
4. Click on the extension Tab (located on the left, last button)
5. Type in "Chrome" in the textbox
6. Download the "Debugger for Chrome"
7. Then click the "debug" tab, and select start debugging 
8. Should be some error about launch.json
9. Go to Explorer Tab (located on the left, first button)
10.  Adjust so that it looks like this if it doesn't (should only need to change the url to wherever you saved the files)
    "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "file:///Users/rehankhan/Desktop/HCI/index.html",
            "webRoot": "${workspaceFolder}"

11. Then click the "debug" tab, and select start debugging
12. You're up and running