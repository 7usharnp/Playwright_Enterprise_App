# Playwright Enterprise level test automation framework

installation:
```bash
npm install playwright
```

once intallation done created below folder structure open terminal and run the below command to create the folder structure.
![alt text](image.png)
as you have created special folder for testcases you need to add that path in the config file under testDir property.
```js
export default defineConfig({
  testDir: '.src/tests',
})
```
